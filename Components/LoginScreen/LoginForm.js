import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
// import firebase from "../../firebase";
import { NavigationHelpersContext } from "@react-navigation/native";

const LoginForm = ({ navigation }) => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    password: Yup.string()
      .required()
      .min(6, "Your Password has to have at least 6 characters"),
  });
  // const onLogin = async (email, password) => {
  //   try {
  //     await firebase.auth().signInWithEmailAndPassword(email, password);
  //     console.log("Firebase login successfull", email, password);
  //   } catch (error) {
  //     Alert.alert(
  //       error.message +
  //         "\n\n What would you like to do"[
  //           ({
  //             text: "OK",
  //             onPress: () => console.log("OK"),
  //             style: "cancel",
  //           },
  //           {
  //             text: "Sign Up",
  //             onPress: () => NavigationHelpersContext.push("SignupScreen"),
  //           })
  //         ]
  //     );
  //   }
  // };
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
          // onLogin(values.email, values.password);
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Phone number, username or email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 6 //password length bwtween 1 and 6 gives red, less than one means not started to type
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry={true}
                textContentType="password"
                autoCorrect={false}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
              <Text style={{ color: "#6BB0F5" }}>Forgot Password</Text>
            </View>
            <Pressable
              titleSize={20}
              style={styles.button} //(isValid)
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Log-In</Text>
            </Pressable>
            <View style={styles.signupContainer}>
              <Text>Don't have an account</Text>
              <TouchableOpacity onPress={() => navigation.push("SignupScreen")}>
                <Text style={{ color: "#6BB0F5" }}> Sign-Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
  },
  button: {
    //(isValid) => (
    //if not working act as function
    backgroundColor: "#0096F6", //isValid ? :  "#9ACAF7"
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  }, //)
  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },
  signupContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
});
export default LoginForm;
