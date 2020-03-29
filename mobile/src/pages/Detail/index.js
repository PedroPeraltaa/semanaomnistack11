import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking} from 'react-native';
import { Feather} from '@expo/vector-icons'
import { useNavigation,useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';


import styles from './styles';
import logoImg from '../../assets/logo.png';


export default function Detail(){
    const Navigation = useNavigation(); 
    const Route = useRoute();

    const incident = Route.params.incident;
    const message = `Olá ${incident.name}, estou entrando em contacto pois gostaria de ajudar no caso "${incident.title} no valor de ${Intl.NumberFormat('pt-PT', {style: 'currency', currency: 'EUR'}).format(incident.value)}`;

    function navigateBack(){
        Navigation.goBack()
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Heroi do Caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function sendWhatsApp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
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
            <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>
            
            <Text style={styles.incidentProprerty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>
        
            <Text style={styles.incidentProprerty}>VALOR:</Text>
            <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-PT', {style: 'currency', currency: 'EUR'}).format(incident.value)}</Text>

            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o Dia!</Text>
                <Text style={styles.heroTitle}>Seja o Heroi nesse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contacto: </Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>

                </View>


            </View>
        </View>
            
        
    )
}