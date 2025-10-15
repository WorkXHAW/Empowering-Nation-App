import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

      {/* Dropdown for course selection */}
      <View style={styles.dropdownContainer}>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => setDropdownOpen(!dropdownOpen)}
        >
          <Text style={styles.dropdownButtonText}>Select a course ▼</Text>
        </TouchableOpacity>
        {dropdownOpen && (
          <View style={styles.dropdownContent}>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => {
                setDropdownOpen(false);
                router.push("./sixWeek");
              }}
            >
              <Text style={styles.dropdownItemText}>6 WEEK COURSES</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => {
                setDropdownOpen(false);
                router.push("./sixMonth");
              }}
            >
              <Text style={styles.dropdownItemText}>6 MONTH COURSES</Text>
            </TouchableOpacity>
          </View>
        )}
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
  dropdownContainer: {
    width: "80%",
    alignItems: "center",
    marginTop: 16,
  },
  dropdownButton: {
    backgroundColor: "#e67e22",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  dropdownButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  dropdownContent: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginTop: 4,
    width: "100%",
    shadowColor: "#e67e22",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    alignItems: "center",
  },
  dropdownItemText: {
    color: "#e67e22",
    fontWeight: "bold",
    fontSize: 16,
  },
});
