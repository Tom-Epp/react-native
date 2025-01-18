/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {
  Image,
  StyleSheet,
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

export const App = () => {
  const [loading, setLoading] = React.useState(true);
  const onContactMe = async () =>
    await Linking.openURL(`mailto:${SocialMediaLinks.at}`);

  React.useEffect(() => {
    (async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <ActivityIndicator size="small" />
        <Text>Fetching data..</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']}>
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={{
                uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg',
              }}
              style={{ width: '100%', aspectRatio: 16 / 9 }}
            />
            <Image
              style={{
                width: 150,
                height: 150,
                borderRadius: 150,
                borderWidth: 5,
                borderColor: 'white',
                marginTop: -75,
              }}
              source={require('../../assets/tom.jpg')}
            />
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Thomas Epp</Text>
            <Text>Senior Software Engineer</Text>
            <SocialMediaIcons />
            <DisplayInsets />
            <Button title="Contact Me" onPress={onContactMe} />
            <Text
              style={{
                padding: 20,
                fontSize: 16,
                textAlign: 'justify',
              }}
            >
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: '#ffffff',
  },
  codeBlock: {
    backgroundColor: 'rgba(55, 65, 81, 1)',
    marginVertical: 12,
    padding: 12,
    borderRadius: 4,
  },
  monospace: {
    color: '#ffffff',
    fontFamily: 'Courier New',
    marginVertical: 4,
  },
  comment: {
    color: '#cccccc',
  },
  marginBottomSm: {
    marginBottom: 6,
  },
  marginBottomMd: {
    marginBottom: 18,
  },
  marginBottomLg: {
    marginBottom: 24,
  },
  textLight: {
    fontWeight: '300',
  },
  textBold: {
    fontWeight: '500',
  },
  textCenter: {
    textAlign: 'center',
  },
  text2XS: {
    fontSize: 12,
  },
  textXS: {
    fontSize: 14,
  },
  textSm: {
    fontSize: 16,
  },
  textMd: {
    fontSize: 18,
  },
  textLg: {
    fontSize: 24,
  },
  textXL: {
    fontSize: 48,
  },
  textContainer: {
    marginVertical: 12,
  },
  textSubtle: {
    color: '#6b7280',
  },
  section: {
    marginVertical: 12,
    marginHorizontal: 12,
  },
  shadowBox: {
    backgroundColor: 'white',
    borderRadius: 24,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowRadius: 12,
    padding: 24,
    marginBottom: 24,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  appTitleText: {
    paddingTop: 12,
    fontWeight: '500',
  },
  hero: {
    borderRadius: 12,
    backgroundColor: '#143055',
    padding: 36,
    marginBottom: 24,
  },
  heroTitle: {
    flex: 1,
    flexDirection: 'row',
  },
  heroTitleText: {
    color: '#ffffff',
    marginLeft: 12,
  },
  heroText: {
    color: '#ffffff',
    marginVertical: 12,
  },
  whatsNextButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderRadius: 8,
    width: '50%',
    marginTop: 24,
  },
  learning: {
    marginVertical: 12,
  },
  love: {
    marginTop: 12,
    justifyContent: 'center',
  },
});

export default App;
