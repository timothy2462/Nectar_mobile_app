import { View, Text } from "react-native";
import tw from "@/lib/tailwind";

const ExploreScreen = () => {
  return (
    <View style={tw`flex-1 items-center justify-center bg-white`}>
      <Text style={tw`text-xl font-bold text-gray-800`}>ExploreScreen</Text>
    </View>
  );
};

export default ExploreScreen;
