import '../../global.css';
import React, { useCallback, useState } from 'react';
import { FlatList, Image, Pressable, View } from 'react-native';
import { Link, useFocusEffect } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import { getMediaType, MediaType } from '@utils/media';
import { ResizeMode, Video } from 'expo-av';

type Media = {
  name: string;
  uri: string;
  type: MediaType;
};

export default function HomeScreen() {
  const [images, setImages] = useState<Media[]>([]);

  const loadFiles = async () => {
    if (!FileSystem.documentDirectory) {
      return;
    }
    const res = await FileSystem.readDirectoryAsync(
      FileSystem.documentDirectory
    );

    setImages(
      res.map(file => {
        return {
          name: file,
          uri: FileSystem.documentDirectory + file,
          type: getMediaType(file),
        };
      })
    );
  };

  useFocusEffect(
    useCallback(() => {
      loadFiles();
    }, [])
  );

  return (
    <View className="flex-1">
      <FlatList
        data={images}
        numColumns={3}
        contentContainerStyle={{ gap: 1 }}
        columnWrapperStyle={{ gap: 1 }}
        renderItem={({ item }) => {
          return (
            <Link href={`/${item.name}`} asChild>
              <Pressable className="flex-1 max-w-[33.33%]">
                {item.type === 'image' ? (
                  <Image
                    source={{ uri: item.uri }}
                    // style={{ aspectRatio: 3 / 4, borderRadius: 5 }}
                    className="aspect-[3/4] rounded-md"
                  />
                ) : (
                  <>
                    <Video
                      resizeMode={ResizeMode.COVER}
                      source={{ uri: item.uri }}
                      // className="aspect-[3/4] rounded-md"
                      style={{ aspectRatio: 3 / 4, borderRadius: 5 }}
                      positionMillis={100}
                      shouldPlay
                      isLooping
                    />
                    <MaterialIcons
                      className="absolute"
                      name="play-circle-outline"
                      size={24}
                      color="white"
                    />
                  </>
                )}
              </Pressable>
            </Link>
          );
        }}
      />

      <Link href="/camera" asChild>
        <Pressable className="bg-blue-500 rounded-full p-3.5 absolute bottom-8 right-4 ">
          <MaterialIcons name="photo-camera" size={25} color="white" />
        </Pressable>
      </Link>
    </View>
  );
}
