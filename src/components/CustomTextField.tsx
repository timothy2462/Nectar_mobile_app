import React, { useState } from "react";
import { View, TextInput, Image, Text, TextInputProps, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "../../lib/tailwind";

interface InputProps extends TextInputProps { 
  flag?: any; 
  prefix?: string; 
  placeholder?: string;
  isPassword?: boolean;
}

const CustomInput: React.FC<InputProps> = ({ 
  flag, 
  prefix, 
  placeholder, 
  keyboardType = "default", 
  isPassword = false, 
  ...props 
}) => {
  const [secureText, setSecureText] = useState(isPassword);

  return (
    <View style={tw`w-[90%] flex-row items-center border-b border-gray-300 py-2`}>
      {flag && <Image source={flag} style={tw`w-6 h-6 mr-2`} />}
      {prefix && <Text style={tw`text-lg font-gilroyMedium mr-2`}>{prefix}</Text>}
      <TextInput
        {...props} 
        placeholder={placeholder}
        keyboardType={keyboardType} 
        secureTextEntry={secureText}
        style={tw`flex-1 text-lg`}
        placeholderTextColor="#999"
      />
      {isPassword && (
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          <Ionicons 
            name={secureText ? "eye-off" : "eye"} 
            size={20} 
            color="gray" 
            style={tw`ml-2`} 
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInput;
