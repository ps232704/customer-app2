import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header1({ navigation }) {

    const openMenu = () => {
        navigation.openDrawer()
    }
    return (
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} style={styles.icon} onPress={openMenu} />
            <View>
                <Text style={styles.header1Text}>The Customer-app</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header1Text: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: 'white',
        backgroundColor: '#000',
    },
    icon: {
        position: 'absolute',
        left: 1,
        color: 'white',
    }
})
