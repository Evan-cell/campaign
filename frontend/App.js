import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './screens/Homepage'
import Chatscreen from './screens/Chatscreen'
import Messagescreen from './screens/Messagescreen';

import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'

const stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
        name='homescreen'
        component={Homepage}
        options={{headerShown:false}}
        />
        <stack.Screen
        name='chatscreen'
        component={Chatscreen}
        options={{headerShown:false}}
        />
        <stack.Screen
        name='messagescreen'
        component={Messagescreen}
        options={{headerShown:false}}
        />
        
      </stack.Navigator>
          <View style={styles.container}>
      
     

      <StatusBar style="auto" />
    </View>
    </NavigationContainer>

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
