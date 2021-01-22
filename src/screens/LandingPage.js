import React from "react";
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import image from "../images/landingpage.jpg";
import wallet from "../images/wallet.png";

const LandingPage = ({ navigation }) => {
  return (
    <ImageBackground
      source={image}
      style={StyleSheet.absoluteFillObject}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Image source={wallet} />

          <Text style={styles.title}>WalleTor</Text>
          <Text style={styles.description}>
            Digital Wallet to complete all your needs
          </Text>
          <View style={{ marginVertical: 50 }}>
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
              <Text style={styles.buttonOne}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("register")}>
              <Text style={styles.buttonTwo}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  buttonOne: {
    color: "#fff",
    fontFamily: "ExtraBold",
    fontSize: 18,
    textAlign: "center",
    backgroundColor: "#800079",
    width: 300,
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonTwo: {
    color: "#fff",
    fontFamily: "ExtraBold",
    fontSize: 18,
    textAlign: "center",
    borderColor: "#787878",
    borderWidth: 1,
    width: 300,
    paddingVertical: 15,
    borderRadius: 5,
  },
  title: {
    color: "#fff",
    fontFamily: "ExtraBold",
    fontSize: 40,
    marginTop: 60,
    marginVertical: 20,
  },
  description: {
    color: "#fff",
    fontFamily: "ExtraBold",
    fontSize: 15,
    textAlign: "center",
    marginHorizontal: 50,
    marginBottom: 50,
  },
});
