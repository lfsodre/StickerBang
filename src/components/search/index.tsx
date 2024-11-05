import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

export function Search() {
 return (
   <View>
    <Feather name='search' size={24} color="#FFF"/>

    <TextInput className='text-white'
        placeholder='Procure sua proxima viagem...'
    />

   </View>
  );
}