import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const ImageDetail = ({ imageScore, title, imageSource }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score is {imageScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
