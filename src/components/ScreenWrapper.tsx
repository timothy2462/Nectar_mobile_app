import React from "react";
import { View, ImageBackground, ScrollView } from "react-native";
import tw from "@/lib/tailwind";

interface ScreenWrapperProps {
  children: React.ReactNode;
  topImage: any; 
  bottomImage: any; 
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children, topImage, bottomImage }) => {
  return (
    <View style={tw`flex-1 bg-white`}>
      <ImageBackground
        source={topImage}
        style={tw`absolute top-0 w-full h-[40%]`}
        resizeMode="cover"
      />

      <ScrollView contentContainerStyle={tw`flex-1 justify-end p-6`} showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>

      <ImageBackground
        source={bottomImage}
        style={tw`absolute bottom-0 left-0 w-40 h-40`}
        resizeMode="contain"
      />
    </View>
  );
};

export default ScreenWrapper;
