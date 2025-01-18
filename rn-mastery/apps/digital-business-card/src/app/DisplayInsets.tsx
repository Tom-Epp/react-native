import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
export function DisplayInsets() {
  const { bottom, top } = useSafeAreaInsets();
  return <Text>{`Insets: Bottom:${bottom}, Top:${top} `}</Text>;
}
