import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* FAQ button top left */}
      <TouchableOpacity
        style={styles.faqButton}
        onPress={() => router.push("./faq")}
      >
        <Text style={styles.faqButtonText}>FAQ</Text>
      </TouchableOpacity>

      {/* Contact button top right */}
      <TouchableOpacity
        style={styles.contactButton}
        onPress={() => router.push("./contact")}
      >
        <Text style={styles.contactButtonText}>Contact</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Empowering Nation</Text>
      </View>

      <View style={styles.aboutBox}>
        <Text style={styles.aboutTitle}>About Us</Text>
        <Text style={styles.aboutText}>
          Empowering Nation is dedicated to fostering community growth and
          development through various initiatives and programs.
          {"\n"}Our mission is to empower individuals and communities to achieve
          their full potential.
        </Text>
      </View>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("./sixWeek")}
      >
        <Text style={styles.buttonText}>6 WEEK COURSES</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("./sixMonth")}
      >
        <Text style={styles.buttonText}>6 MONTH COURSES</Text>
      </TouchableOpacity>
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
  faqButton: {
    position: "absolute",
    top: 40,
    left: 24,
    backgroundColor: "#e67e22",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    zIndex: 10,
  },
  faqButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  contactButton: {
    position: "absolute",
    top: 40,
    right: 24,
    backgroundColor: "#e67e22",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    zIndex: 10,
  },
  contactButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 250,
    height: 250,
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
  button: {
    backgroundColor: "#e67e22",
    padding: 15,
    borderRadius: 8,
    width: "80%",
    marginVertical: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
