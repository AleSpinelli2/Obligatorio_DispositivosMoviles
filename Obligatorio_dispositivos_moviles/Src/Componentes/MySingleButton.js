import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MySingleButton = ({
  title = "Mi botón",
  btnColor = "red",
  onPress = () => console.log("click"),
}) => {
  return (
    <TouchableOpacity
      styles={[styles.button, { backgroundColor: btnColor }]}
      onPress={onPress}
    >
      <View styles={styles.container}>
        <Text styles={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MySingleButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
    padding: 10,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    borderRadius: 5,
  },
  text: {
    color: "white",
  },
});
