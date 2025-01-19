import { Image, ImageSourcePropType, Text, View } from 'react-native';
import React from 'react';

type ProjectCardProps = {
  image: ImageSourcePropType;
  name: string;
};

export function ProjectCard({ image, name }: ProjectCardProps) {
  return (
    <View className="gap-2">
      <Image className="size-36 aspect-video rounded-md" source={image} />
      <Text>{name}</Text>
    </View>
  );
}
