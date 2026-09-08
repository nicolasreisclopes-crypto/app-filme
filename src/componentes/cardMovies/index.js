import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function CardMovies ({ titulo, nota, imagem }) {
    return (

        <TouchableOpacity style = {styles.containerJogos}>

            <Image
                style = {styles.images}
                source = {{uri: imagem}} 
            />

            <Text style = {styles.titulo}> {titulo} </Text>

            <Text style = {styles.textNota}> {nota} </Text>
    
        
        </TouchableOpacity>
        
    );
};