import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import tw from "@/lib/tailwind";
import CustomButton from "@/src/components/AppButton";
import CustomInput from "@/src/components/CustomTextField";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={tw`flex-1 items-center justify-center bg-white`}>
      <TouchableOpacity
        onPress={() => router.push("/registration/location")}
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
      />

      <View style={tw`w-full px-4`}>
        <View style={tw`items-start`}>
          <Text style={tw`text-2xl font-bold text-left mb-4`}>Sign Up</Text>
          <Text style={tw`text-gray-500 text-base mb-6 text-left`}>
            Enter your credentials to continue
          </Text>
        </View>

        <Text
          style={tw`text-gray-500 mt-4 mb-2 text-lg font-semibold text-left`}
        >
          Email
        </Text>
        <CustomInput
          placeholder="Example@gmail.com"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text
          style={tw`text-gray-500 mt-4 mb-2 text-lg font-semibold text-left`}
        >
          Password
        </Text>
        <CustomInput
          placeholder="******"
          value={password}
          onChangeText={setPassword}
          isPassword={true}
        />

        <Text style={tw`text-gray-500 text-base mb-6 text-left mt-10`}>
          By continuing you agree to our{" "}
          <Text style={tw`text-green-500`}>Terms of Service</Text> and{" "}
          <Text style={tw`text-green-500`}>Privacy Policy</Text>.
        </Text>

        <CustomButton text="Sign up" onPress={() => router.push("/login")} />
      </View>
      <View style={tw`flex-row mt-6`}>
        <Text style={tw`text-gray-700 font-bold text-base`}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text style={tw`text-green-500 ml-1 text-base`}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
