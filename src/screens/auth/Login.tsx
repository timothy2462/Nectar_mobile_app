import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import tw from "@/lib/tailwind";
import CustomButton from "@/src/components/AppButton";
import CustomInput from "@/src/components/CustomTextField";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/services/stores/store";
import { loginUser } from "@/src/services/features/auth/authThrunk";
import Toast from "react-native-toast-message";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector((state: RootState) => state.auth);

  const handleLogin = async () => {
    if (!username || !password) {
      Toast.show({ type: "error", text1: "Please fill in both fields" });
      return;
    }

    try {
      const resultAction = await dispatch(loginUser({ username, password }));

      if (loginUser.fulfilled.match(resultAction)) {
        Toast.show({ type: "success", text1: "Login successful!" });
        router.replace("/shop"); 
      } else {
        Toast.show({ type: "error", text1: "Login failed", text2: "Invalid credentials" });
      }
    } catch (error) {
      Toast.show({ type: "error", text1: "Something went wrong" });
    }
  };

  return (
    <View style={tw`flex-1 items-center justify-center bg-white`}>
      <TouchableOpacity
        onPress={() => router.push("/signup")}
        style={tw`absolute top-12 left-4 z-10`}
      >
        <MaterialIcons name="chevron-left" size={34} color="black" />
      </TouchableOpacity>

      <View style={tw`h-[30%] w-full absolute top-0`}>
        <ImageBackground
          source={require("../../../assets/images/top_bg.png")}
          style={tw`w-full h-full`}
          resizeMode="cover"
        />
      </View>

      <Image
        source={require("../../../assets/images/carrot_icon.png")}
        style={tw`w-14 h-14 mb-14`}
        resizeMode="contain"
      />

      <View style={tw`w-full px-4`}>
        <View style={tw`items-start`}>
          <Text style={tw`text-2xl font-bold text-left mb-4`}>Login</Text>
          <Text style={tw`text-gray-500 text-base mb-6 text-left`}>
            Enter your username and password
          </Text>
        </View>

        <Text style={tw`text-gray-500 mt-4 mb-2 text-lg font-semibold text-left`}>
          Username
        </Text>
        <CustomInput
          placeholder="johnd"
          keyboardType="default"
          value={username}
          onChangeText={setUsername}
        />

        <Text style={tw`text-gray-500 mt-4 mb-2 text-lg font-semibold text-left`}>
          Password
        </Text>
        <CustomInput
          placeholder="******"
          value={password}
          onChangeText={setPassword}
          isPassword={true}
        />

        <TouchableOpacity style={tw`self-start w-full mt-4 mb-6`}>
          <Text style={tw`text-customText font-semibold text-right`}>Forgot Password?</Text>
        </TouchableOpacity>

        <CustomButton
          text={isLoading ? "Logging in..." : "Log In"}
          // onPress={handleLogin}
          onPress={()=> router.push('/shop')}
          disable={isLoading}
        />
      </View>

      <View style={tw`flex-row mt-6`}>
        <Text style={tw`text-gray-700 font-bold text-base`}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => router.push("/signup")}>
          <Text style={tw`text-green-500 ml-1 text-base`}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
