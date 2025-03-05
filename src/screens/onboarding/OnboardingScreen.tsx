import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import tw from "../../../lib/tailwind";
import AppButton from "../../components/AppButton";
import { router } from "expo-router";

export default function OnboardingScreen() {
  return (
    <ImageBackground
      source={require("../../../assets/images/onboarding_image.png")} 
    style={tw`flex-1 h-[100%] w-[100%]`}
      resizeMode="cover"
    >
      <View style={tw`flex-1 justify-end  items-center p-6`}>
        <Image
          source={require("../../../assets/icons/nectar.png")} 
          style={tw`w-10 h-14 mb-10 `}
        />

        <Text style={tw`text-white text-5xl font-medium text-center font-gilroyMedium`}>
          Welcome 
        </Text>
        <Text style={tw`text-white text-5xl font-medium text-center font-gilroyMedium`}>
          to our store
        </Text>
        <Text style={tw`text-disabled text-base text-center font-gilroyLight mb-15 mt-2`}>
          Get your groceries in as fast as one hour
        </Text>

        <AppButton text="Get Started" onPress={() => router.push('/continue')} customStyles="mb-[100px]" />
      </View>
    </ImageBackground>
  );
}
