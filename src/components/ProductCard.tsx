import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Product } from '@/src/services/features/products/types';
import { MaterialIcons } from '@expo/vector-icons';
import { useAppDispatch } from '@/src/services/hooks/useAppDispatch';
import { addToCart } from '@/src/services/features/cart/cartSlice';
import tw from '@/lib/tailwind';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <View style={tw`w-[48%] p-2 bg-white rounded-xl shadow-sm mb-4`}>
      <Image
        source={{ uri: product.image }}
        style={tw`w-full h-24`}
        resizeMode="contain"
      />
      <Text numberOfLines={1} style={tw`mt-1 text-sm font-semibold text-black`}>
        {product.title}
      </Text>
      <Text style={tw`text-gray-600 text-xs`}>1kg, Price</Text>
      <View style={tw`flex-row justify-between items-center mt-1`}>
        <Text style={tw`text-black font-bold`}>${product.price}</Text>
        <TouchableOpacity onPress={handleAddToCart} style={tw`bg-green-500 p-1 rounded-full`}>
          <MaterialIcons name="add" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
