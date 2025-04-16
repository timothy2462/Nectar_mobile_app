import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useAppDispatch } from '@/src/services/hooks/useAppDispatch';
import { useAppSelector } from '@/src/services/hooks/useAppSelector';
import { increaseQty, decreaseQty, removeFromCart } from '@/src/services/features/cart/cartSlice';
import { MaterialIcons } from '@expo/vector-icons';
import tw from '@/lib/tailwind';

const CartScreen = () => {
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={tw`flex-1 bg-white`}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={tw`flex-row items-center justify-between px-4 py-3 border-b border-gray-200`}>
            <Image source={{ uri: item.image }} style={tw`w-16 h-16`} resizeMode="contain" />
            <View style={tw`flex-1 ml-2`}>
              <Text style={tw`text-sm font-semibold text-black`}>{item.title}</Text>
              <Text style={tw`text-xs text-gray-500`}>1kg, Price</Text>
              <View style={tw`flex-row items-center mt-1`}>
                <TouchableOpacity onPress={() => dispatch(decreaseQty(item.id))} style={tw`p-1 border rounded-full`}>
                  <MaterialIcons name="remove" size={16} color="black" />
                </TouchableOpacity>
                <Text style={tw`mx-3 text-black`}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => dispatch(increaseQty(item.id))} style={tw`p-1 border rounded-full`}>
                  <MaterialIcons name="add" size={16} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={tw`items-end`}>
              <TouchableOpacity onPress={() => dispatch(removeFromCart(item.id))}>
                <MaterialIcons name="close" size={20} color="gray" />
              </TouchableOpacity>
              <Text style={tw`mt-4 text-sm font-bold text-black`}>${(item.price * item.quantity).toFixed(2)}</Text>
            </View>
          </View>
        )}
      />

      <View style={tw`px-4 py-4`}>
        <TouchableOpacity style={tw`bg-green-500 py-4 rounded-full flex-row justify-between px-6`}>
          <Text style={tw`text-white font-semibold`}>Go to Checkout</Text>
          <Text style={tw`text-white font-bold`}>${total.toFixed(2)}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
