import { View, Text } from "react-native";
import style from "./OpenPhotoView2.Styles";
import NavBar from "../commonFolder/Navbar";
import Header from "../commonFolder/Header";
import Img2 from "./LoadImages";

function OpenPhotoView2() {
    return (
        <View style = {style.container}>
            <Header/>
            <View style = {style.main_content}>
                <Img2/>
                <View style = {style.modal}>
                    <Text style = {style.modal_title}>Subir desde</Text>
                    <Text style = {style.modal_desc}>Cámara</Text>
                    <Text style = {style.modal_desc}>Archivos</Text>
                </View>
            </View>
            <NavBar/>
        </View>
    );
}

export default OpenPhotoView2;