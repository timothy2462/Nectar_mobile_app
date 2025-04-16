import { Stack } from "expo-router";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export interface StackRootProps {
  name: string;
  options?: NativeStackNavigationOptions;
}

export function StackRoot({ name, options = {} }: StackRootProps) {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#000",
        headerBackTitle: "", 
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name={name} options={options} />
    </Stack>
  );
}