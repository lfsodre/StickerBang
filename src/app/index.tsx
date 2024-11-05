import { Text, View, ScrollView } from "react-native";
import { Header } from "../components/header";

import Constants from "expo-constants";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { Post } from "../components/post";

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView 
      style={{flex: 1}}
      className="bg-slate-900" 
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 10 }}>
        <Header/>
        <Banner/>
        <Search/>
      </View>
      <Section
      name="Promoções em alta"
      label="Veja mais"
      size="text-lg"
      action={ () => console.log("CLICOU NO VEJA MAIS") }
      />
      <Post/>
    </ScrollView>
  )
}

{/*----npx expo start----*/}