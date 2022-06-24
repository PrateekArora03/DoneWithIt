import { StyleSheet, Text, Image, SafeAreaView } from 'react-native';

export default function App() {
  console.log(require('./assets/icon.png'));
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello react Native</Text>
      <Image
        source={{
          width: 200,
          height: 300,
          uri: 'https://picsum.photos/200/300',
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
