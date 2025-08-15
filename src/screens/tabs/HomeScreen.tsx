import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { useAppDispatch, useAppSelector } from '@shared/hooks/redux';
import { increment } from '@features/counter/counterSlice';

type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
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
    </View>
  );
}
