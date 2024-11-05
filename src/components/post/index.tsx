import { View, Pressable, Text, Image } from 'react-native';
import PagerView from 'react-native-pager-view'

export function Post() {
 return (
   <View className='w-56 h-96 rounded-2xl mt-5 mb-4 px-4'>

    <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
      
      {/*----POST 1----*/}
      <Pressable
        className='w-full h-96 rounded-2xl'
        key='1'
        onPress={() => console.log("CLICOU NO POST 1")}
        >
        <Image
        source={require("../../assets/post1.jpg")}
          className='w-full h-96 rounded-2xl'
        />
      </Pressable>

      {/*----POST 2----*/}
      <Pressable
        className='w-full h-96 rounded-2xl'
        key='2'
        onPress={() => console.log("CLICOU NO POST 2")}
        >
        <Image
        source={require("../../assets/post2.jpg")}
          className='w-full h-96 rounded-2xl'
        />
      </Pressable>

      {/*----POST 3----*/}
      <Pressable
        className='w-full h-96 rounded-2xl'
        key='3'
        onPress={() => console.log("CLICOU NO POST 3")}
        >
        <Image
        source={require("../../assets/post3.jpg")}
          className='w-full h-96 rounded-2xl'
        />
      </Pressable>

    </PagerView>
    
   </View>
  );
}