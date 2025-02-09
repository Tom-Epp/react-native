import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  ActivityIndicator,
  Pressable,
  Image,
  SafeAreaView,
  Button,
} from 'react-native';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import {
  useCameraPermissions,
  CameraView,
  CameraType,
  CameraCapturedPicture,
} from 'expo-camera';
import path from 'path';
import * as FileSystem from 'expo-file-system';
import { twMerge } from 'tailwind-merge';
import { Video } from 'expo-av';

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<CameraType>('back');
  const [picture, setPicture] = useState<CameraCapturedPicture>();
  const [isRecording, setIsRecording] = useState(false);
  const [video, setVideo] = useState<string>();

  const camera = useRef<CameraView>(null);

  useEffect(() => {
    if (permission && !permission?.granted && permission.canAskAgain) {
      void requestPermission();
    }
  }, [permission]);

  if (!permission?.granted) {
    return <ActivityIndicator />;
  }

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const onPress = async () => {
    if (isRecording) {
      camera?.current?.stopRecording();
    } else {
      await takePicture();
    }
  };

  const takePicture = async () => {
    const response = await camera?.current?.takePictureAsync();
    setPicture(response);
  };

  const startRecording = async () => {
    setIsRecording(true);
    const res = await camera?.current?.recordAsync({ maxDuration: 60 });
    setVideo(res?.uri);
    setIsRecording(false);
  };

  const saveFile = async (uri: string | undefined) => {
    if (!uri) {
      return;
    }
    const fileName = path.parse(uri).base;
    await FileSystem.copyAsync({
      from: uri,
      to: FileSystem.documentDirectory + fileName,
    });

    setPicture(undefined);
    setVideo(undefined);
    router.back();
  };

  if (picture || video) {
    return (
      <View className="flex-1">
        {picture && (
          <Image source={{ uri: picture?.uri }} className="w-full flex-1" />
        )}
        {video && (
          <Video
            style={{ flex: 1, width: '100%' }}
            source={{ uri: video }}
            shouldPlay
            isLooping
          />
        )}
        <View className="p-2.5">
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-expect-error */}
          <SafeAreaView edges={['bottom']}>
            <Button
              title="Save"
              onPress={() => {
                void saveFile(picture?.uri || video);
              }}
            />
          </SafeAreaView>
        </View>
        <MaterialIcons
          onPress={() => {
            setPicture(undefined);
            setVideo(undefined);
          }}
          name="close"
          size={30}
          color="white"
          className="absolute top-12 left-5"
        />
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center">
      <CameraView
        mode="video"
        ref={camera}
        style={{ width: '100%', height: '100%' }}
        facing={facing}
      >
        <View className="mt-auto p-5 pb-12 flex flex-row justify-between items-center bg-[#00000099]">
          <View />
          <Pressable
            className={twMerge(
              'w-14 h-14 rounded-full',
              isRecording ? 'bg-red-800' : 'bg-white'
            )}
            onPress={onPress}
            onLongPress={startRecording}
          ></Pressable>
          <MaterialIcons
            onPress={toggleCameraFacing}
            color="white"
            name="flip-camera-ios"
            size={25}
          />
        </View>
      </CameraView>
      <MaterialIcons
        onPress={() => router.back()}
        name="close"
        size={30}
        color="white"
        className="absolute top-12 left-5"
      />
    </View>
  );
}
