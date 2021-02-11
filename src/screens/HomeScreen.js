import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { log } from "react-native-reanimated";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hello Developer</Text>
      <Button
        onPress={() => {
          console.log("button pressed");
        }}
        title="Go to Components Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
