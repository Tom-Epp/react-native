import React from 'react';
import { View, Image } from 'react-native';
import { useLocalSearchParams, Stack, router } from 'expo-router';
import * as FileSystem from 'expo-file-system';
import { MaterialIcons } from '@expo/vector-icons';

export default function ImageDetailsScreen() {
  const { name } = useLocalSearchParams<{ name: string }>();
  const fullUri = (FileSystem.documentDirectory || '') + (name || '');

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
      <Image className="w-full h-full" source={{ uri: fullUri }} />
    </View>
  );
}
