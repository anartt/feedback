import React, { useState } from "react";
import {
  View,
  FlatList,
  Image,
  Pressable,
  Alert,
  StyleSheet,
} from "react-native";

export default function GalleryScreen({ navigation }) {
  const [images, setImages] = useState([
    { id: "1", uri: "https://i.pinimg.com/736x/68/8e/2a/688e2a85f5261e2a8cc22d8f20e8d193.jpg" },
    { id: "2", uri: "https://i.pinimg.com/1200x/67/33/f5/6733f5e19812faa95095f7a3e9225a89.jpg" },
    { id: "3", uri: "https://i.pinimg.com/1200x/e0/91/ae/e091aed9205d4b159846dbc66cef46aa.jpg" },
    { id: "4", uri: "https://i.pinimg.com/736x/ad/1d/24/ad1d249963d2ca20424af5523d6fb4e2.jpg" },
    { id: "5", uri: "https://i.pinimg.com/736x/1c/64/2e/1c642e94a7ab1dafcf4bd78b3e5b6f36.jpg" },
    { id: "6", uri: "https://i.pinimg.com/736x/41/16/a3/4116a357015501b8c7b871b73c9ea83a.jpg" },


  ]);

  const handleDelete = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const handleLongPress = (item) => {
    Alert.alert(
      "Excluir imagem?",
      "Tem certeza que deseja excluir esta imagem?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          onPress: () => handleDelete(item.id),
          style: "destructive",
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.imageContainer}
            onPress={() =>
              navigation.navigate("FullscreenImage", { uri: item.uri })
            }
            onLongPress={() => handleLongPress(item)}
            delayLongPress={700}
          >
            <Image source={{ uri: item.uri }} style={styles.image} />
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f4f4", padding: 10 },
  imageContainer: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    backgroundColor: "#fff",
  },
  image: { width: "100%", height: 180, resizeMode: "cover" },
});
