
import * as React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const artImage = require("./assets/images/art.png");
const mileImage = require("./assets/images/mile.png");
const pierImage = require("./assets/images/pier.png");
const waterImage = require("./assets/images/water.png");
const willisImage = require("./assets/images/willis.png");

function LocationScreen({ route, navigation }) {
  const { locationImage } = route.params;

  return (
    <View style={styles.container}>
      <Image source={locationImage} style={styles.image} />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        useLegacyImplementation 
        initialRouteName="Home"
        screenOptions={{
          headerTitleStyle: {
            color: "#000",
          },
        }}>
        <Drawer.Screen 
          name="Art"
          component={LocationScreen} 
          initialParams={{ locationImage: artImage }} 
          options={{ title: "Art Institute of Chicago" }}
        />
        <Drawer.Screen 
          name="Mile"
          component={LocationScreen} 
          initialParams={{ locationImage: mileImage }} 
          options={{ title: "Magnificent Mile" }}
        />
        <Drawer.Screen 
          name="Willis"
          component={LocationScreen} 
          initialParams={{ locationImage: willisImage }} 
          options={{ title: "Willis Tower" }}
        />
        <Drawer.Screen 
          name="Pier"
          component={LocationScreen} 
          initialParams={{ locationImage: pierImage }} 
          options={{ title: "Navy Pier" }}
        />
        <Drawer.Screen 
          name="Water"
          component={LocationScreen} 
          initialParams={{ locationImage: waterImage }} 
          options={{ title: "Water Tower" }}
        />
      </Drawer.Navigator>
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
  image: {
    height: 480,
    width: 320,
  },
});
