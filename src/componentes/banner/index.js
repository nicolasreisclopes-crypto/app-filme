import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import styles from './styles';

export default function Banner () {
    return (

        <>

            <Text style = {styles.textBanner}> Em cartaz </Text>

            <Image
                source={require("../../../assets/vingadores-doomsday.jpg")}
                style = {styles.imageBanner}
            ></Image>

        </>

    );
};