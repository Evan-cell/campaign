import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './screens/Homepage'
import Chatscreen from './screens/Chatscreen'
import Messagescreen from './screens/Messagescreen';

import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'


export default function App() {
  return (
    <View style={styles.container}>
      <Text>my name is kimani</Text>
     
      <View> 
        <Text>STATUS</Text>
      </View>
      <StatusBar style="auto" />
    </View>
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
