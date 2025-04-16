import { Tabs } from "expo-router";
import tw from "@/lib/tailwind";
import { Text, View, Image } from "react-native";

const tabItemStyle = tw`justify-center items-center`;
const tabWidthStyle = { width: 70 }; 

export default function TabRoot() {
  return (
    <Tabs
      screenOptions={() => ({
        tabBarHideOnKeyboard: true,
        lazy: true,
        tabBarPressColor: "transparent", 
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 0,
        },
      })}
    >
      <Tabs.Screen
        name="shop/index"
        options={{
          href: "/shop",
          headerTitle: "Shop",
          headerShown: false,
          headerTitleStyle: {
            fontSize: 18,
          },
          tabBarIcon: ({ focused }) => (
            <View style={[tabItemStyle, tabWidthStyle]}>
              <Image
                source={
                  focused
                    ? require("@/assets/icons/active-shop.png")
                    : require("@/assets/icons/shop.png")
                }
                style={tw`w-6 h-6`}
                resizeMode="contain"
              />
              <Text
                style={tw`text-xs font-medium ${
                  focused ? "text-CustomBg" : "text-textNuetral"
                }`}
              >
                Shop
              </Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="explore/index"
        options={{
          href: "/explore",
          headerShown: false,
          headerTitleStyle: {
            fontSize: 18,
          },
          tabBarIcon: ({ focused }) => (
            <View style={[tabItemStyle, tabWidthStyle]}>
              <Image
                source={
                  focused
                    ? require("@/assets/icons/explore-active.png")
                    : require("@/assets/icons/explore.png")
                }
                style={tw`w-6 h-6`}
                resizeMode="contain"
              />
              <Text
                style={tw`text-xs font-medium ${
                  focused ? "text-CustomBg" : "text-textNuetral"
                }`}
              >
                Explore
              </Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="cart/index"
        options={{
          href: "/cart",
          headerTitle: "Cart",
          headerShown: false,
          headerTitleStyle: {
            fontSize: 18,
          },
          tabBarIcon: ({ focused }) => (
            <View style={[tabItemStyle, tabWidthStyle]}>
              <Image
                source={
                  focused
                    ? require("@/assets/icons/cart-active.png")
                    : require("@/assets/icons/cart.png")
                }
                style={tw`w-6 h-6`}
                resizeMode="contain"
              />
              <Text
                style={tw`text-xs font-medium ${
                  focused ? "text-CustomBg" : "text-textNuetral"
                }`}
              >
                Cart
              </Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="favourite/index"
        options={{
          href: "/favourite",
          headerTitle: "Favourite",
          headerShown: false,
          headerTitleStyle: {
            fontSize: 18,
          },
          tabBarIcon: ({ focused }) => (
            <View style={[tabItemStyle, tabWidthStyle]}>
              <Image
                source={
                  focused
                    ? require("@/assets/icons/favourite-active.png")
                    : require("@/assets/icons/favourite.png")
                }
                style={tw`w-6 h-6`}
                resizeMode="contain"
              />
              <Text
                style={tw`text-xs font-medium ${
                  focused ? "text-CustomBg" : "text-textNuetral"
                }`}
              >
                Favourite
              </Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="account/index"
        options={{
          href: "/account",
          headerShown: false,
          headerTitleStyle: {
            fontSize: 18,
          },
          tabBarIcon: ({ focused }) => (
            <View style={[tabItemStyle, tabWidthStyle]}>
              <Image
                source={
                  focused
                    ? require("@/assets/icons/account-active.png")
                    : require("@/assets/icons/account.png")
                }
                style={tw`w-6 h-6`}
                resizeMode="contain"
              />
              <Text
                style={tw`text-xs font-medium ${
                  focused ? "text-CustomBg" : "text-textNuetral"
                }`}
              >
                Account
              </Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}
