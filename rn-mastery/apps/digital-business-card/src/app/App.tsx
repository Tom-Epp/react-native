/* eslint-disable jsx-a11y/accessible-emoji */
import '../../global.css';
import React from 'react';
import { Image, View, Text, ScrollView, Button, Linking } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { DisplayInsets } from '@/components/DisplayInsets';
import { SocialMediaIcons } from '@components/SocialMediaIcons';
import { SocialMediaLinks } from '@utils/constants';
import { ProjectCard } from '@components/ProjectCard';
import { Loader } from '@components/Loader';
import { useIsLoading } from '@/hooks/useIsLoading';

export const App = () => {
  const { isLoading } = useIsLoading();

  const onContactMe = async () =>
    await Linking.openURL(`mailto:${SocialMediaLinks.at}`);

  if (isLoading) return <Loader />;

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']}>
        <ScrollView>
          <View className="flex-1 justify-center items-center bg-white">
            <Image
              className="w-full aspect-video"
              source={{
                uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg',
              }}
            />
            <Image
              className="size-36 rounded-full border-4 border-white -mt-20"
              source={require('@assets/tom.jpg')}
            />
            <Text className="font-bold text-3xl">Thomas Epp</Text>
            <Text className="font-medium">Senior Software Engineer</Text>
            <SocialMediaIcons />

            <DisplayInsets />
            <Button title="Contact Me" onPress={onContactMe} />
            <Text className="p-5 text-md text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
              aliquam sem et tortor consequat id porta nibh.
            </Text>
            <Text className="font-bold text-xl mt-5">Projects</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10, padding: 10 }}
            >
              <ProjectCard
                name="Is is a hotdog?"
                image={require(`@assets/projects/project1.jpeg`)}
              />
              <ProjectCard
                name="Is it a banana?"
                image={require(`@assets/projects/project2.jpeg`)}
              />
              <ProjectCard
                name="Is it a dog?"
                image={require(`@assets/projects/project3.jpeg`)}
              />
              <ProjectCard
                name="Is it a cat?"
                image={require(`@assets/projects/project4.jpeg`)}
              />
            </ScrollView>
            <StatusBar style="light" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
