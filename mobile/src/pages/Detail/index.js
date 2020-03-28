import React from 'react';
import { View, Image, Text, TouchableOpacity} from 'react-native';
import { Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import logoImg from '../../assets/logo.png';


export default function Detail(){
    const Navigation = useNavigation(); 

    function navigateBack(){
        Navigation.goBack()
    }

    return (
        <View styles={styles.container}>
             <View style={styles.header}>
                <Image source={logoImg} />
               <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#e02041" />

               </TouchableOpacity>
            </View>

            <View style={styles.incident}>

            <Text style={[styles.incidentProprerty, {marginTop: 0}]}>ONG:</Text>
            <Text style={styles.incidentValue}>APAD</Text>
            
            <Text style={styles.incidentProprerty}>CASO:</Text>
            <Text style={styles.incidentValue}>Cadelinha atropelada</Text>
        
            <Text style={styles.incidentProprerty}>VALOR:</Text>
            <Text style={styles.incidentValue}>120</Text>

            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o Dia!</Text>
                <Text style={styles.heroTitle}>Seja o Heroi nesse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contacto: </Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={()=>{}}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={()=>{}}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>

                </View>


            </View>
        </View>
            
        
    )
}