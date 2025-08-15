import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';

import { useAppDispatch, useAppSelector } from '@shared/hooks/redux';
import { increment } from '@features/counter/counterSlice';

type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetch('https://api.github.com/repos/TanStack/query').then((res) => res.json()),
  });

  if (isPending) return <Text>Loading...</Text>;

  if (error) return <Text>An error has occurred: {error.message}</Text>;
  return (
    <View className="flex-1 items-center justify-center">
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text>Go to Settings screen</Text>
      </TouchableOpacity>

      <View className="mt-4">
        <Text>Counter: {count}</Text>
        <TouchableOpacity onPress={() => dispatch(increment())}>
          <Text>Increment</Text>
        </TouchableOpacity>
      </View>

      <View className="p-4 gap-2">
        <Text>{data.name}</Text>
        <Text>{data.description}</Text>
        <Text>👀 {data.subscribers_count}</Text>
        <Text>✨ {data.stargazers_count}</Text>
        <Text>🍴 {data.forks_count}</Text>
      </View>
    </View>
  );
}
