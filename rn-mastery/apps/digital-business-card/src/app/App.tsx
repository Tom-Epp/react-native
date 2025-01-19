/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {
  Image,
  View,
  Text,
  ScrollView,
  Button,
  Linking,
  ActivityIndicator,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { DisplayInsets } from '@/components/DisplayInsets';
import { SocialMediaIcons } from '@components/SocialMediaIcons';
import { SocialMediaLinks } from '@utils/constants';
import ProfileImage from '@assets/tom.jpg'
import "../../global.css";

export const App = () => {
  const [loading, setLoading] = React.useState(true);
  const onContactMe = async () =>
    await Linking.openURL(`mailto:${SocialMediaLinks.at}`);

  React.useEffect(() => {
    (async () => {
      await new Promise(resolve => setTimeout(resolve, 5200));
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center gap-2.5">
        <ActivityIndicator size="small" />
        <Text>Fetching data..</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']}>
        <ScrollView>
          <View className='flex-1 justify-center items-center'>
            <Image
              className='w-full aspect-video'
              source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg',}}
            />
            <Image
              className="size-36 rounded-full border-4 border-white -mt-20"
              source={ProfileImage}
            />
            <Text className="font-bold text-3xl">Thomas Epp</Text>
            <Text className='font-medium'>Senior Software Engineer</Text>
            <SocialMediaIcons />

            <DisplayInsets />
            <Button title="Contact Me" onPress={onContactMe} />
            <Text className='p-5 text-md text-justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
              aliquam sem et tortor consequat id porta nibh. Pellentesque nec
              nam aliquam sem. Placerat duis ultricies lacus sed. Non curabitur
              gravida arcu ac tortor dignissim convallis aenean. Amet nisl purus
              in mollis nunc. Vel elit scelerisque mauris pellentesque pulvinar
              pellentesque. Sagittis orci a scelerisque purus semper eget duis
              at tellus. Sed libero enim sed faucibus turpis in eu mi bibendum.
              Duis at consectetur lorem donec massa sapien faucibus et molestie.
              At ultrices mi tempus imperdiet nulla malesuada pellentesque elit
              eget. Purus sit amet volutpat consequat mauris nunc congue nisi
              vitae. Urna condimentum mattis pellentesque id nibh tortor id.
              Consequat id porta nibh venenatis. Lectus vestibulum mattis
              ullamcorper velit sed ullamcorper. Mauris a diam maecenas sed enim
              ut sem. Volutpat commodo sed egestas egestas fringilla phasellus.
              Turpis egestas integer eget aliquet nibh praesent tristique magna
              sit. Congue mauris rhoncus aenean vel elit scelerisque. Tellus
              integer feugiat scelerisque varius morbi enim. Consectetur a erat
              nam at. Bibendum arcu vitae elementum curabitur vitae nunc. Sit
              amet consectetur adipiscing elit. Rhoncus mattis rhoncus urna
              neque viverra justo. Malesuada pellentesque elit eget gravida.
              Vitae nunc sed velit dignissim sodales ut eu sem integer.
            </Text>
            <StatusBar style="light" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
