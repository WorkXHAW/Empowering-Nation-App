import { View, Text, StyleSheet } from "react-native";

export default function SixWeekScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>6 Week Courses</Text>

      {/* Example course cards */}
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Cooking</Text>
        <Text>Purpose: To prepare and cook nutritious family meals.</Text>
        <Text>Duration: 6 weeks</Text>
        <Text>Price: R750</Text>
      </View>

      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Child Minding</Text>
        <Text>Purpose: To provide basic child and baby care</Text>
        <Text>Duration: 6 weeks</Text>
        <Text>Price: R750</Text>
      </View>

      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Garden Maintenance</Text>
        <Text>
          Purpose: To provide basic knowledge of watering, pruning and planting
          in domestic garden.
        </Text>
        <Text>Duration: 6 weeks</Text>
        <Text>Price: R750</Text>
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
