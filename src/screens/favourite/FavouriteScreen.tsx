import { View, Text } from "react-native";
import tw from "@/lib/tailwind";

const FavouriteScreen= () => {
  return (
    <View style={tw`flex-1 items-center justify-center bg-white`}>
      <Text style={tw`text-xl font-bold text-gray-800`}>FavouriteScreen</Text>
    </View>
  );
};

export default FavouriteScreen;
