import React from 'react';
import { View,FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents(){
    const Navigation = useNavigation();

    function NavigationToDetail(){
        Navigation.navigate('Detail');
    }

    return (

        <View style={styles.container} >
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText} >
                    Total de <Text style={styles.headerTextBold}>0 Casos</Text>
                </Text>
            </View>
            <Text style={styles.title}> Bem-Vindo </Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>
        
        <FlatList 
        style={styles.incidentList}
        data={[1,2,3]}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
            <View style={styles.incident}>
            <Text style={styles.incidentProprerty}>ONG:</Text>
            <Text style={styles.incidentValue}>APAD</Text>
            
            <Text style={styles.incidentProprerty}>CASO:</Text>
            <Text style={styles.incidentValue}>Cadelinha atropelada</Text>
        
            <Text style={styles.incidentProprerty}>VALOR:</Text>
            <Text style={styles.incidentValue}>120</Text>
        
            <TouchableOpacity style={styles.detailsButton} onPress={NavigationToDetail}>
                <Text style={styles.detailsButtonText}> Ver mais detalhes</Text>    
                <Feather name="arrow-right" size={16} color="#e02041"/> 
            </TouchableOpacity> 

        </View>

        )}
        />
        </View>  
            
       
    )
}