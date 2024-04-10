import React, {useContext, useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View,TextInput} from 'react-native';
import { GlobalContext } from '../context';

const App = () => {
 
  const {modalVisible, setModalVisible} = useContext(GlobalContext)
  return (
   
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TextInput
                autoCorrect={false}
                placeholder='enter your user name'
                style={styles.loginInput}
                onChangeText={(value)=>setCurrentUserName(value)}
                
                ></TextInput>
            <Text style={styles.modalText}>Hello World!</Text>
            <View style={styles.buttonWrapper}>
                <Pressable onPress={handleRegisterAndSignIn(false)} style={styles.button}>
                  <View>
                    <Text style={styles.buttonText}>Register</Text>
                  </View>
                </Pressable>
                <Pressable onPress={handleRegisterAndSignIn(true)} style={styles.button}>
                  <View>
                    <Text style={styles.buttonText}>Login</Text>
                  </View>
                </Pressable>
              </View>
          </View>
        </View>
      </Modal>


  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  loginInput: {
    borderRadius: 50,
    borderWidth: 1,
    padding: 8,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button : {
    backgroundColor : '#703efe',
    padding: 15,
    marginVertical: 10,
    width : '34%',
    elevation: 1,
    borderRadius: 50,
    
  },
  buttonWrapper: {
    flexDirection: 'row',
    gap:10,
  },
  buttonText: {
    textAlign: 'center',
    color:'white',
    fontWeight: 'bold',
    fontSize: 15,
  }
});

export default App;