import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

export default function ContactScreen() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const countWords = (text: string) =>
    text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;

  const onChangeMessage = (text: string) => {
    const wc = countWords(text);
    setWordCount(wc);
    setMessage(text);
    if (wc > 500) {
      setError("Message must be 500 words or less.");
    } else {
      // clear only word-count related error
      setError((e) => (e === "Message must be 500 words or less." ? "" : e));
    }
  };

  const handleSend = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (wordCount > 500) {
      setError("Message must be 500 words or less.");
      return;
    }
    setError("");
    Alert.alert("Message Sent", "Thank you for contacting us!");
    setEmail("");
    setMessage("");
    setWordCount(0);
  };

  const overLimit = wordCount > 500;
  const sendDisabled = !email || !message || overLimit;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.contactInfo}>
          Contact us at Empowering@gmail.com
        </Text>
        <Text style={styles.contactInfo}>Contact us at +27 83 123 4567</Text>

        <TextInput
          style={styles.input}
          placeholder="Your Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={[
            styles.input,
            styles.messageInput,
            overLimit && styles.inputError,
          ]}
          placeholder="Your Message (max 500 words)"
          value={message}
          onChangeText={onChangeMessage}
          multiline
          numberOfLines={6}
          maxLength={4000}
        />

        <Text style={[styles.counter, overLimit && styles.counterOver]}>
          {wordCount}/500 words
        </Text>

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity
          style={[styles.button, sendDisabled && styles.buttonDisabled]}
          onPress={handleSend}
          disabled={sendDisabled}
        >
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
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
    marginBottom: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  inputError: { borderColor: "#c0392b" },
  messageInput: { minHeight: 120, textAlignVertical: "top" },
  counter: { textAlign: "right", marginBottom: 8, color: "#555" },
  counterOver: { color: "#c0392b", fontWeight: "600" },
  button: {
    backgroundColor: "#e67e22",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonDisabled: { opacity: 0.5 },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  error: { color: "#c0392b", marginBottom: 8, textAlign: "center" },
  contactInfo: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 8,
  },
});
