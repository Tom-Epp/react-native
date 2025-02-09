import React from 'react';
import { View, Image } from 'react-native';
import { useLocalSearchParams, Stack, router } from 'expo-router';
import * as FileSystem from 'expo-file-system';
import { MaterialIcons } from '@expo/vector-icons';
import { getMediaType } from '@utils/media';
import { useVideoPlayer, VideoView } from 'expo-video';

export default function ImageDetailsScreen() {
  const { name } = useLocalSearchParams<{ name: string }>();
  const fullUri = (FileSystem.documentDirectory || '') + (name || '');
  const type = getMediaType(fullUri);

  const player = useVideoPlayer(fullUri, player => {
    player.loop = true;
    player.play();
  });

  const onDelete = async () => {
    await FileSystem.deleteAsync(fullUri);
    router.back();
  };
  return (
    <View className="flex-1 items-center justify-center">
      <Stack.Screen
        options={{
          title: 'Media',
          headerRight: () => (
            <View className="flex-row gap-2.5">
              <MaterialIcons
                onPress={onDelete}
                name="delete"
                size={26}
                color="crimson"
              />
              <MaterialIcons
                onPress={() => {}}
                name="save"
                size={26}
                color="dimgray"
              />
            </View>
          ),
        }}
      />
      {type === 'image' && (
        <Image className="w-full h-full" source={{ uri: fullUri }} />
      )}
      {type === 'video' && (
        <VideoView
          player={player}
          contentFit="cover"
          style={{ width: '100%', height: '100%' }}
          // className="w-full h-full"
        />
      )}
    </View>
  );
}
