import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

export default function HomeScreen() {
    return (
      return (
        <View style={styles.container}>
            {/* Logo */}
            <View style={styles.header}>
                <Image
                    source={require("../assets/logo.png")}
                    style={styles.logo}
                />
                <Text style={styles.title}>Empowering Nation</Text>
            </View>

            <View style={styles.aboutBox}>
                <Text style={styles.aboutTitle}>About Us</Text>
                <Text style={styles.aboutText}>
                    Empowering Nation is dedicated to fostering community growth and development through various initiatives and programs. Our mission is to empower individuals and communities to achieve their full potential.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fefaf5",
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        alignItems: "center",
        marginBottom: 20,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 10,
        resizeMode: "contain",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    aboutBox: {
        marginVertical: 20,
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 10,
        width: "85%",
        alignItems: "center",
    },
    aboutTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    aboutText: {
        fontSize: 14,
        color: "#666",
        textAlign: "center",
    },
});
