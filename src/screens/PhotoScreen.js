import React from "react";
import { View, Image } from "react-native";

export const PhotoScreen = ({ navigation }) => {
  const image = navigation.getParam("image");
  return (
    <View>
      <Image
        source={{ uri: image }}
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );
};

PhotoScreen.navigationOptions = {
  headerTitle:'',
  headerTintColor: 'black',
    headerTransparent: true
};
