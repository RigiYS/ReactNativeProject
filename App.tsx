import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Pastikan library ini sudah terinstal

const image = require('./assets/background.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      <ImageBackground source={image} style={styles.imageBackground} resizeMode="cover">
        <LinearGradient
          colors={['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.8)']}
          style={styles.gradientOverlay}
        >
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.content}>
              <Text style={styles.title}>Your Next Adventure Starts Here</Text>
              <Text style={styles.subtitle}>
                Life's too short to stay in one place. Find your next favorite city, beach, or mountain and let's get moving!
              </Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Start Exploring</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  gradientOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
  },
  subtitle: {
    color: 'grey',
    fontSize: 12,
    textAlign: 'left',
    marginBottom: 15,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#00B894',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 30,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});