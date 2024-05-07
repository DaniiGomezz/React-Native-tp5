import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreens = () => {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const toggleContentVisibility = () => {
        setIsContentVisible(!isContentVisible);
    };
    const navigation = useNavigation();

    return (
        <View 
            style={[
                styles.container, 
                { backgroundColor: isContentVisible ? 'red' : '#f0f0f0' } // Cambia el fondo a rojo si está visible
            ]}
        >
            {isContentVisible && (
                <>
                    <Image
                        style={styles.image}
                        source={require('../public/logo.png')} // Cambia esta ruta por la de tu imagen
                    />
                    <Text style={styles.text}>
                        Dame tu dinero o lloro
                    </Text>
                </>
            )}
            <TouchableOpacity 
                style={[
                    styles.button, 
                    { backgroundColor: isContentVisible ? 'green' : '#4CAF50' } // Cambia el color del botón a verde si está visible
                ]}
                onPress={toggleContentVisibility}
            >
                <Text style={styles.buttonText}>
                    {isContentVisible ? "Ponerse a salvo" : "!No lo presiones¡"}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
               style={[
                styles.button, 
                { backgroundColor: isContentVisible ? 'green' : '#4CAF50' } // Cambia el color del botón a verde si está visible
            ]}
                onPress={() => navigation.navigate('cambio')}
            >
              <Text >Colores</Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        margin: '20%',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default HomeScreens;
