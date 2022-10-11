import { View, Text, ScrollView } from "react-native";
import style from "./Home.Styles";
import Logo from "../commonFolder/Logo";
import NavBar from "../commonFolder/Navbar";


function Home() {
    return (
        <View style = {style.container}>
            <Logo/>
            <ScrollView style = {style.main_content}>
                
            </ScrollView>
            <NavBar/>
        </View>
    );
}

export default Home;