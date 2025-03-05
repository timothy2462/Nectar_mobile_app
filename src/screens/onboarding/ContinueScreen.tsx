import React from "react";
import { View, Text, ImageBackground } from "react-native";
import CustomButton from "../../components/AppButton";
import CustomInput from "@/src/components/CustomTextField";
import tw from "@/lib/tailwind";
import { router } from "expo-router";

export default function ContinueScreen() {
  return (
    // <ScrollView>
    <ImageBackground
      source={require("../../../assets/images/light_bottom_image.png")}
      style={tw`flex-1 w-full h-full`}
      resizeMode="cover"
    >
      <View style={tw`h-[40%] w-full absolute top-0`}>
        <ImageBackground
          source={require("../../../assets/images/ContinueBg.png")}
          style={tw`w-full h-full`}
          resizeMode="cover"
        />
      </View>

      <View style={tw`flex-1 justify-end items-center p-6 mb-[20%] z-10` }>
        <View style={tw`w-full`}>
          <Text
            style={tw`text-primary text-2xl    font-gilroyMedium self-start mb-10`}
          >
            Get your groceries{"\n"}with nectar
          </Text>
          <CustomInput
            flag={require("../../../assets/icons/bangladash_flag.png")}
            prefix="+880"
            placeholder=""
          />
        </View>

        <Text style={tw`text-gray-500 my-4`}>Or connect with social media</Text>

        <CustomButton
          text="Continue with Google"
          onPress={() => router.push("/registration/phone-number")}
          bg="bg-googlebtn"
          icon={require("../../../assets/icons/google.png")}
        />
        <CustomButton
          text="Continue with Facebook"
          onPress={() => router.push("/registration/phone-number")}
          bg="bg-facebookbtn"
          icon={require("../../../assets/icons/facebook.png")}
          customStyles="mt-4"
        />
      </View>
    </ImageBackground>
    // </ScrollView>
  );
}
