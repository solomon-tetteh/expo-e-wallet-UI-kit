import React from "react";
import { Image, StyleSheet, Text, View, TextInput } from "react-native";
import authimg from "../images/auth.png";
import { Entypo, FontAwesome5, Feather } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
class Login extends React.Component {
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
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.topContainer}>
            <Image source={authimg} style={{ height: 200, width: 200 }} />
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomContainerHeader}>Sign In</Text>
            <View style={styles.formContainer}>
              {/* Form For Email */}
              <View style={styles.textField}>
                <Entypo
                  name="email"
                  size={18}
                  color="#800079"
                  style={{ marginRight: 30, elevation: 20 }}
                />
                <TextInput
                  placeholder="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={{ paddingRight: 100 }}
                  value={this.state.email}
                  onChangeText={(text) => this.handleTextChange("email", text)}
                />
              </View>

              {/* Form For Password */}
              <View style={styles.textField}>
                <Entypo
                  name="lock"
                  size={18}
                  color="#800079"
                  style={{ marginRight: 30, elevation: 20 }}
                />
                <TextInput
                  placeholder="Password"
                  secureTextEntry={true}
                  autoCapitalize="none"
                  style={{ paddingRight: 100 }}
                  value={this.state.password}
                  onChangeText={(text) =>
                    this.handleTextChange("password", text)
                  }
                />
              </View>
              {/* Submit Button */}
              <TouchableOpacity>
                <Text style={styles.buttonOne}>Sign In</Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                <Text style={{ fontFamily: "ExtraBold", marginRight: 5 }}>
                  Don't have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("login")}>
                  <Text style={{ color: "#800079", fontFamily: "ExtraBold" }}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",

    flexDirection: "column",
  },
  topContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 4,
  },
  bottomContainer: {
    flex: 6,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  bottomContainerHeader: {
    fontFamily: "ExtraBold",
    fontSize: 25,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  textField: {
    lineHeight: 30,
    marginVertical: 5,
    fontSize: 18,
    fontFamily: "Medium",
    borderWidth: 1,
    borderColor: "#800079",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonOne: {
    lineHeight: 30,
    marginVertical: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontFamily: "ExtraBold",
    backgroundColor: "#800079",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});
