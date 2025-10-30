import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GalleryScreen from "./screens/GalleryScreen";
import { Image, View, StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Gallery"
          component={GalleryScreen}
          options={{ title: "Galeria de Imagens" }}
        />
        <Stack.Screen
          name="FullscreenImage"
          component={FullscreenImage}
          options={{ title: "Imagem em Tela Cheia" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Tela secundária pra exibir imagem em tela cheia
function FullscreenImage({ route }) {
  const { uri } = route.params;
  return (
    <View style={styles.fullscreenContainer}>
      <Image source={{ uri }} style={styles.fullscreenImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  fullscreenContainer: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  fullscreenImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
