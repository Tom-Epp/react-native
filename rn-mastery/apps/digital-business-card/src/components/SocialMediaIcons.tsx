import { View } from 'react-native';
import React from 'react';
import { FontAwesome6 as FAIcon } from '@expo/vector-icons';
import { SocialMediaLinks } from '../utils/constants';

export function SocialMediaIcons() {
  const links = Object.keys(SocialMediaLinks);
  if (!links.length) return null;
  return (
    <View
      style={{ flex: 1, flexDirection: 'row', gap: 10, marginVertical: 10 }}
    >
      {links.map((social: string) => (
        <FAIcon name={social} size={24} color="black" key={`${social}-icon`} />
      ))}
    </View>
  );
}
