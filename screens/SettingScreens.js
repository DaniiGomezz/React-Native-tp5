import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const colorOptions = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#F0FF33']; // 5 colores a elección

const SettingScreen = () => {
  const navigation = useNavigation();
    const [colorIndex, setColorIndex] = useState(0); // Índice para seguir el color actual

    const changeBackgroundColor = () => {
        // Incrementa el índice, y si llega al final, vuelve al principio
        setColorIndex((colorIndex + 1) % colorOptions.length);
    };

    return (
        <View style={[styles.container, { backgroundColor: colorOptions[colorIndex] }]}>
            <Text style={styles.text}>
                Setting Screen
            </Text>
            <TouchableOpacity 
                style={styles.button} 
                onPress={changeBackgroundColor}
            >
                <Text style={styles.buttonText}>
                    Cambiar Color
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button2}
                onPress={() => navigation.navigate('Home')}
            >
              <Text >Robo</Text>
            </TouchableOpacity>
            
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        margin: '20%',
    },
    button: {
        backgroundColor: '#333', // Color del botón
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    button2: {
      backgroundColor: '#FFFFFF', // Color del botón
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
  },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default SettingScreen;
