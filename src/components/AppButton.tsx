import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import tw from "../../lib/tailwind"


interface ButtonProps {
  text: string;
  onPress: () => void;
  bg?: string;
  icon?: any;
  textColor?: string;
  customStyles?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  text,
  onPress,
  bg = "bg-green-500",
  icon,
  textColor = "text-white",
  customStyles = "",
}) => {
  return (
    <TouchableOpacity
      style={tw`w-[90%] h-14 rounded-2xl flex-row items-center justify-center ${bg} ${customStyles}`}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={tw`flex-row items-center`}>
        {icon && <Image source={icon} style={tw`w-4 h-4 mr-6`} />}
        <Text style={tw`text-base font-medium font-gilroyMedium ${textColor}`}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
