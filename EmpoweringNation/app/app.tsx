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


