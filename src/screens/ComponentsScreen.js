import React from "react";
import { Text, StyleSheet, View } from "react-native";
const ComponenentsScreen = () => {
  const name = "Asraa";
  return (
    <View>
      <Text style={styles.testStyle}>
        getting started with home react native!{" "}
      </Text>
      <Text style={styles.subHeaderStyle}>my name is {name}</Text>
      {greetings}
    </View>
  );
};
const styles = StyleSheet.create({
  testStyle: {
    fontSize: 45,
  },
  aa: {
    subHeaderStyle: 20,
  },
});
export default ComponenentsScreen;
