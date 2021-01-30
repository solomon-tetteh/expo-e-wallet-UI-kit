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
class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
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
                  paddingBottom: 40,
                }}
              >
                <AntDesign name="arrowleft" size={25} color="#fff" />
              </TouchableOpacity>
              <View style={{ marginBottom: 20 }}>
                <Text style={styles.bottomContainerHeader}>Create</Text>
                <Text style={styles.bottomContainerHeader}>Account</Text>
              </View>

              <View style={styles.formContainer}>
                {/* Form For First Name */}
                <View style={styles.textField}>
                  <TextInput
                    placeholder="First Name"
                    returnKeyType="next"
                    placeholderTextColor="#fff"
                    style={{ paddingRight: 100 }}
                    value={this.state.firstName}
                    onChangeText={(text) =>
                      this.handleTextChange("firstName", text)
                    }
                  />
                </View>
                {/* Form For Last Name */}
                <View style={styles.textField}>
                  <TextInput
                    placeholder="Last Name"
                    returnKeyType="next"
                    placeholderTextColor="#fff"
                    style={{ paddingRight: 100 }}
                    value={this.state.lastName}
                    onChangeText={(text) =>
                      this.handleTextChange("lastName", text)
                    }
                  />
                </View>
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
                {/* Form For Phone Number */}
                <View style={styles.textField}>
                  <TextInput
                    placeholder="Phone Number"
                    keyboardType="number-pad"
                    placeholderTextColor="#fff"
                    style={{ paddingRight: 100 }}
                    value={this.state.phoneNumber}
                    onChangeText={(text) =>
                      this.handleTextChange("phoneNumber", text)
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
                {/* Submit Button */}
                <View style={styles.signUpContainer}>
                <TouchableOpacity>
                    <Text style={styles.signUpButton}>Sign Up</Text>
                  </TouchableOpacity>
                </View>

                {/* Already Have An Account */}
                <View
                  style={{
                    justifyContent: "center",
                    flexDirection: "row",
                    marginVertical: 10
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
                    Already have an account
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("login")}
                  >
                    <Text
                      style={{
                        color: "#800079",
                        fontFamily: "ExtraBold",
                        fontSize: 15,
                      }}
                    >
                      Sign In
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

export default Register;

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
});
