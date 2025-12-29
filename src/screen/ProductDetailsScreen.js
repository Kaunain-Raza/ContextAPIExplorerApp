import { View, Text, Image } from 'react-native';

export default function ProductDetails({ route }) {
  const { item } = route.params;

  return (
    <View>
      <Image source={{ uri: item.image }} style={{ height: 200 }} />
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>${item.price}</Text>
    </View>
  );
}
