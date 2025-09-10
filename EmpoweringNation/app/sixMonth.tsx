import { View, Text, StyleSheet } from "react-native";

export default function SixMonthScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>6 Month Courses</Text>

      {/* Example course cards */}
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Sewing</Text>
        <Text>Purpose: To provide alterations and new garment tailoring services</Text>
        <Text>Duration: 6 months</Text>
        <Text>Price: R1500</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefaf5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  courseCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
