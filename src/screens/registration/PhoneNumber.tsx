import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import tw from "@/lib/tailwind";
import CustomInput from "@/src/components/CustomTextField";
import { MaterialIcons } from "@expo/vector-icons"; 


export default function PhoneNumberScreen() {
  const router = useRouter();

  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`h-[30%] w-full absolute top-0`}>
        <ImageBackground
          source={require("../../../assets/images/top_bg.png")}
          style={tw`w-full h-full`}
          resizeMode="cover"
        />
      </View>

      <KeyboardAvoidingView
        style={tw`flex-1 px-4`}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={tw`flex-1`}>
            <TouchableOpacity onPress={() => router.back()} style={tw`mt-12`}>
            <MaterialIcons name="chevron-left" size={34} color="black" />
            </TouchableOpacity>
            <View style={tw`mt-15`}>
              <Text style={tw`text-2xl font-semibold mt-6`}>
                Enter your mobile number
              </Text>
              <Text style={tw`text-gray-500 mt-4 mb-2 font-semibold`}>
                Mobile Number
              </Text>

              <CustomInput
                flag={require("../../../assets/icons/bangladash_flag.png")}
                prefix="+880"
                placeholder=""
              />
            </View>

            {/* Floating Button */}
            <TouchableOpacity
              style={tw`absolute bottom-10 right-6 bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-10`}
              onPress={() => router.push("/registration/otp")}
            >
              <Ionicons name="arrow-forward" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}
