import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { sixWeekCourses, sixMonthCourses } from "./courses";

export default function QuoteScreen() {
  const params = useLocalSearchParams();
  // params.selected is a JSON string of selected IDs
  const selectedIds: string[] = params.selected
    ? JSON.parse(params.selected as string)
    : [];
  const type = params.type as string | undefined;

  // Combine all courses
  const allCourses = [
    ...sixWeekCourses.map((c) => ({ ...c, type: "6 Week" })),
    ...sixMonthCourses.map((c) => ({ ...c, type: "6 Month" })),
  ];

  // Only show selected courses
  const selectedCourseObjects = allCourses.filter((c) =>
    selectedIds.includes(c.id)
  );
  const total = selectedCourseObjects.reduce((sum, c) => sum + c.price, 0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Your Quote</Text>
      {selectedCourseObjects.length === 0 ? (
        <Text style={styles.emptyText}>No courses selected.</Text>
      ) : (
        <View style={styles.quoteBox}>
          {selectedCourseObjects.map((course) => (
            <View key={course.id} style={styles.courseCard}>
              <Text style={styles.courseTitle}>
                {course.title} ({course.type})
              </Text>
              <Text>{course.purpose}</Text>
              <Text>Duration: {course.duration}</Text>
              <Text>Price: R{course.price}</Text>
            </View>
          ))}
          <Text style={styles.total}>Total: R{total}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fefaf5",
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 40,
  },
  courseCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  quoteBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  total: {
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 16,
    textAlign: "right",
  },
});
