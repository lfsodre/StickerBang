import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

export function Search() {
 return (
   <View className='w-full flex-row border border-slate-200 h-14 rounded-full items-center gap-2 px-3 bg-transparent'>
    <Feather name='search' size={24} color="#FFF"/>

    <TextInput
        className='text-white w-full flex-1 h-full bg-transparent'
        placeholder='Procure sua proxima viagem...'
        placeholderTextColor="#FFF"
    />

   </View>
  );
}