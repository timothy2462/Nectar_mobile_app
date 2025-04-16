import { View, Text, ScrollView, Image } from 'react-native';
import { useEffect, useMemo } from 'react';
import { useAppDispatch } from '@/src/services/hooks/useAppDispatch';
import { useAppSelector } from '@/src/services/hooks/useAppSelector';
import { fetchProducts } from '@/src/services/features/products/productThrunk';
import ProductCard from '@/src/components/ProductCard';
import tw from '@/lib/tailwind';

const getRandomProducts = (allProducts: any[], count: number, excludeIds: Set<number>) => {
  const available = allProducts.filter((p) => !excludeIds.has(p.id));
  const shuffled = [...available].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const ShopScreen = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const { exclusiveOffers, bestSelling } = useMemo(() => {
    const selected = new Set<number>();
    const exclusive = getRandomProducts(products, 4, selected);
    exclusive.forEach((p) => selected.add(p.id));
    const bestSelling = getRandomProducts(products, 4, selected);
    return { exclusiveOffers: exclusive, bestSelling };
  }, [products]);

  const renderSection = (title: string, items: typeof products) => (
    <View style={tw`mt-4 px-4`}>
      <View style={tw`flex-row justify-between items-center mb-2`}>
        <Text style={tw`text-lg font-bold text-black`}>{title}</Text>
        <Text style={tw`text-green-600`}>See all</Text>
      </View>
      <View style={tw`flex-row flex-wrap justify-between`}>
        {items.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))}
      </View>
    </View>
  );

  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <View style={tw`p-4`}>
        <Image
          source={require('@/assets/images/banner.png')}
          style={tw`w-full h-36 rounded-xl`}
          resizeMode="cover"
        />
      </View>

      {renderSection('Exclusive Offer', exclusiveOffers)}
      {renderSection('Best Selling', bestSelling)}
    </ScrollView>
  );
};

export default ShopScreen;
