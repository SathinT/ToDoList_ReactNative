import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

       <Text style={styles.title}>Stress Less , Gain Best.</Text>
       <Text style={styles.Mtitle}>Tasky </Text>
      <Image source={require('./assets/image.png')} style={styles.image} />
      <Text style={styles.title}>Your Friendly Task Managing Companion</Text>
      <Text style={styles.subtitle}>
        When you're overwhelmed by the amount of work you have on your plate, stop and rethink.
      </Text>

      <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('Tasks')}>
        <Text style={styles.startButtonText}>Let's Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '80%',
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  Mtitle: {
       color: '#FF8242',
       fontSize: 28,
       fontWeight: 'bold',
       textAlign: 'center',
       marginBottom:5,
     },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  videoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  playButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  startButton: {
    backgroundColor: '#FF8242',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 30,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
