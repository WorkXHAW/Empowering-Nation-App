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
        