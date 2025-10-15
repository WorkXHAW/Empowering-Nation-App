import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function ContactScreen() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSend = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (message.trim().split(/\s+/).length > 500) {
      setError("Message must be 500 words or less.");
      return;
    }
    setError("");
    Alert.alert("Message Sent", "Thank you for contacting us!");
    setEmail("");
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Your Message (max 500 words)"
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={6}
        maxLength={4000} // generous char limit
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSend}
        disabled={!email || !message}
      >
        <Text style={styles.buttonText}>Send Message</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefaf5",
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
    color: "#e67e22",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 14,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  messageInput: {
    minHeight: 120,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#e67e22",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  error: {
    color: "#c0392b",
    marginBottom: 8,
    textAlign: "center",
  },
});
