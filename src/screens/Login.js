import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
} from "react-native";
import background from "../images/background.png";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleTextChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground
        source={background}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
      >
        <View style={styles.mainContainer}>
          <ScrollView>
            <View style={styles.bottomContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("landing")}
                style={{
                  paddingHorizontal: 15,
                  paddingTop: 20,
                  paddingBottom: 30,
                }}
              >
                <AntDesign name="arrowleft" size={25} color="#fff" />
              </TouchableOpacity>
              <View style={{ marginBottom: 50 }}>
                <Text style={styles.bottomContainerHeader}>Welcome</Text>
                <Text style={styles.bottomContainerHeader}>Back</Text>
              </View>

              <View style={styles.formContainer}>
                {/* Form For Email */}
                <View style={styles.textField}>
                  <TextInput
                    placeholder="Email"
                    keyboardType="email-address"
                    placeholderTextColor="#fff"
                    autoCapitalize="none"
                    style={{ paddingRight: 100 }}
                    value={this.state.email}
                    onChangeText={(text) =>
                      this.handleTextChange("email", text)
                    }
                  />
                </View>

                {/* Form For Password */}
                <View style={styles.textField}>
                  <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#fff"
                    autoCapitalize="none"
                    style={{ paddingRight: 100 }}
                    value={this.state.password}
                    onChangeText={(text) =>
                      this.handleTextChange("password", text)
                    }
                  />
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("forgotPwd")}
                >
                  <Text style={styles.forgotPwd}>Forgot Password?</Text>
                </TouchableOpacity>

                {/* Submit Button */}
                <View style={styles.signUpContainer}>
                  <TouchableOpacity>
                    <Text style={styles.signUpButton}>Sign In</Text>
                  </TouchableOpacity>
                </View>

                {/* Already Have An Account */}
                <View
                  style={{
                    justifyContent: "center",
                    flexDirection: "row",
                    borderBottomColor: "#fff",
                    borderBottomWidth: 0.2,
                    paddingBottom: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontFamily: "ExtraBold",
                      fontSize: 15,
                      marginRight: 10,
                    }}
                  >
                    Don't have an account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("register")}
                  >
                    <Text
                      style={{
                        color: "#800079",
                        fontFamily: "ExtraBold",
                        fontSize: 15,
                        borderBottomColor: "#800079",
                        borderBottomWidth: 1,
                      }}
                    >
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* Other Logins */}
                <Text
                  style={{
                    color: "#fff",
                    fontFamily: "ExtraBold",
                    textAlign: "center",
                    marginVertical: 10
                  }}
                >
                  OR
                </Text>
                <TouchableOpacity style={styles.google}>
                  <AntDesign
                    name="google"
                    size={24}
                    color="#fff"
                    style={{ marginRight: 10 }}
                  />
                  <Text style={styles.googleText}>Sign In With Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.apple}>
                  <AntDesign
                    name="apple1"
                    size={24}
                    color="#fff"
                    style={{ marginRight: 10 }}
                  />
                  <Text style={styles.appleText}>Sign In With Apple</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  topContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  bottomContainerHeader: {
    fontFamily: "Medium",
    fontSize: 35,
    marginHorizontal: 15,
    color: "#fff",
  },
  forgotPwd: {
    fontFamily: "ExtraBold",
    fontSize: 15,
    color: "#fff",
    alignSelf: "flex-end",
  },
  formContainer: {
    paddingHorizontal: 15,
  },
  textField: {
    lineHeight: 30,
    marginVertical: 5,
    fontSize: 18,
    fontFamily: "Medium",
    borderWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },

  signUpButton: {
    backgroundColor: "#800079",
    padding: 20,
    borderRadius: 50,
    lineHeight: 30,
    marginVertical: 5,
    fontSize: 18,
    fontFamily: "ExtraBold",
    color: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
    textAlign: "center",
  },
  google: {
    lineHeight: 50,
    marginVertical: 10,

    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  googleText: {
    fontSize: 18,
    fontFamily: "ExtraBold",
    color: "#fff",
  },
  apple: {
    lineHeight: 50,
    marginVertical: 5,

    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  appleText: {
    fontSize: 18,
    fontFamily: "ExtraBold",
    color: "#fff",
  },
});
