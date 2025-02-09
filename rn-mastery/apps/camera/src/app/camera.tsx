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

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<CameraType>('back');
  const [picture, setPicture] = useState<CameraCapturedPicture>();

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

  const takePicture = async () => {
    const response = await camera?.current?.takePictureAsync();
    setPicture(response);
    console.log('takePicture', response);
  };

  const saveFile = async (uri: string) => {
    const fileName = path.parse(uri).base;
    await FileSystem.copyAsync({
      from: uri,
      to: FileSystem.documentDirectory + fileName,
    });

    setPicture(undefined);
    router.back();
  };

  if (picture) {
    return (
      <View className="flex-1">
        <Image source={{ uri: picture?.uri }} className="w-full flex-1" />
        <View className="p-2.5">
          <SafeAreaView edges={['bottom']}>
            <Button title="Save" onPress={() => saveFile(picture.uri)} />
          </SafeAreaView>
        </View>
        <MaterialIcons
          onPress={() => setPicture(undefined)}
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
        ref={camera}
        style={{ width: '100%', height: '100%' }}
        facing={facing}
      >
        <View className="mt-auto p-5 pb-12 flex flex-row justify-between items-center bg-[#00000099]">
          <View />
          <Pressable
            className="w-14 h-14 rounded-full bg-white"
            onPress={takePicture}
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
