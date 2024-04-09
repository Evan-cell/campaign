import React, { Component, useContext } from 'react'
import { Text, View ,StyleSheet, ImageBackground, TextInput, Pressable} from 'react-native'
import homeImage from '../assets/home-image.jpg'
import GlobalState, { GlobalContext} from '../context'
export default function Homepage(){
  const {
    showLoginView,
    setShowLoginView,
    currentUserName,
    setCurrentUserName,

  } = useContext(GlobalContext);
    return (
      
      <View style={styles.mainWrapper}>
        <ImageBackground
        source={homeImage}
        style={styles.homeImage}
        />
        <View style={styles.content}>
          {
            showLoginView ?
            <View style={styles.infoBlock}>
              <View style={styles.loginInputContainer}>
                <Text style={styles.heading}>Enter Your User Name</Text>
                <TextInput
                autoCorrect={false}
                placeholder='enter your user name'
                style={styles.loginInput}
                onChangeText={(value)=>setCurrentUserName(value)}
                value={currentUserName}
                ></TextInput>
              </View>
              <View style={styles.buttonWrapper}>
                <Pressable style={styles.button}>
                  <View>
                    <Text style={styles.buttonText}>Register</Text>
                  </View>
                </Pressable>
                <Pressable style={styles.button}>
                  <View>
                    <Text style={styles.buttonText}>Login</Text>
                  </View>
                </Pressable>
              </View>
            </View> :
            <View style={styles.infoBlock}>
              <Text style={styles.heading}>Connect,Grow,and,Inspire,,</Text>
              <Text style={styles.subheading}>Connect with people around the world for free</Text>
              <Pressable style={styles.button} onPress={()=>setShowLoginView(true)}>
                  <View>
                    <Text style={styles.buttonText}>Get Started</Text>
                  </View>
                </Pressable>
            </View>
          }
        </View>
      </View>
    )
  }




const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1
  },
  homeImage :{
    width: '100%',
    flex: 3,
    justifyContent: 'center'
  },
  content :{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'white'
  },
  infoBlock : {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading : {
    fontSize: 28,
    fontWeight: 'bold',
    color :'#000',
    marginBottom: 10,

  },
  subheading : {
    fontSize: 15,
    color: '#acacac',
    marginBottom: 15,
  },
  loginInput: {
    borderRadius: 50,
    borderWidth: 1,
    padding: 8,
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
})
