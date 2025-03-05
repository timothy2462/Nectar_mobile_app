import React, { useState } from "react";
import { View, Text, Image, Platform, ImageBackground, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import CustomButton from "@/src/components/AppButton";
import tw from "@/lib/tailwind";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

const Location = () => {
  const zones = ["Banasree", "Dhanmondi", "Gulshan"] as const;
  const areas = {
    Banasree: ["Sector 1", "Sector 2", "Sector 3"],
    Dhanmondi: ["Road 4", "Road 12", "Road 27"],
    Gulshan: ["Circle 1", "Circle 2", "Circle 3"],
  } as const;
  const [selectedZone, setSelectedZone] = useState<keyof typeof areas | "">("");
  const [selectedArea, setSelectedArea] = useState("");

  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`h-[30%] w-full absolute top-0`}>
        <ImageBackground
          source={require("../../../assets/images/top_bg.png")}
          style={tw`w-full h-full`}
          resizeMode="cover"
        />
      </View>

      <TouchableOpacity
        onPress={() => router.push("/registration/otp")} 
        style={tw`absolute top-12 left-4 z-10`} 
      >
        <MaterialIcons name="chevron-left" size={34} color="black" />
      </TouchableOpacity>

      {/* Main Content */}
      <View style={tw`flex-1 items-center justify-center`}>
        <Image
          source={require("../../../assets/images/location.png")}
          style={tw`w-[250px] h-[250px]`}
          resizeMode="contain"
        />
        <Text style={tw`text-2xl font-semibold mt-4`}>Select Your Location</Text>
        <Text style={tw`text-customText text-center px-6 mt-2 w-[400px] text-base`}>
          Switch on your location to stay in tune with what’s happening in your area
        </Text>

        {/* Zone Dropdown */}
        <View style={tw`w-[90%] mt-6`}>
          <Text style={tw`text-base font-semibold text-customText`}>Your Zone</Text>
          <View style={tw`border-b border-gray-300 mb-6`}>
            <Picker
              selectedValue={selectedZone}
              onValueChange={(value) => setSelectedZone(value)}
              style={tw`text-lg`}
            >
              <Picker.Item label="Select a zone" value="" />
              {zones.map((zone) => (
                <Picker.Item key={zone} label={zone} value={zone} />
              ))}
            </Picker>
          </View>
        </View>

        <View style={tw`w-[90%] mt-4 mb-16`}>
          <Text style={tw`text-base font-semibold text-customText`}>Your Area</Text>
          <View style={tw`border-b border-gray-300`}>
            <Picker
              selectedValue={selectedArea}
              onValueChange={(value) => setSelectedArea(value)}
              enabled={!!selectedZone}
              style={tw`text-lg`}
            >
              <Picker.Item label="Types of your area" value="" />
              {selectedZone &&
                areas[selectedZone].map((area) => (
                  <Picker.Item key={area} label={area} value={area} />
                ))}
            </Picker>
          </View>
        </View>

        <CustomButton text="Submit" onPress={() => router.push("/signup")} />
      </View>
    </View>
  );
};

export default Location;