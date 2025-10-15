import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

const courses = [
  {
    id: "sewing",
    title: "Sewing",
    purpose: "To provide alterations and new garment tailoring services",
    duration: "6 months",
    price: 1500,
  },
  {
    id: "firstAid",
    title: "First Aid",
    purpose: "To provide first aid awareness and basic life support",
    duration: "6 months",
    price: 1500,
  },
  {
    id: "landscaping",
    title: "Landscaping",
    purpose: "To provide Landscaping services for new and established gardens",
    duration: "6 months",
    price: 1500,
  },
];

export default function SixMonthScreen() {
  const [selected, setSelected] = useState<string[]>([]);
  const router = useRouter();

  const toggleCourse = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>6 Month Courses</Text>
      {courses.map((course) => (
        <TouchableOpacity
          key={course.id}
          style={[
            styles.courseCard,
            selected.includes(course.id) && styles.selectedCard,
          ]}
          onPress={() => toggleCourse(course.id)}
        >
          <Text style={styles.courseTitle}>{course.title}</Text>
          <Text>Purpose: {course.purpose}</Text>
          <Text>Duration: {course.duration}</Text>
          <Text>Price: R{course.price}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={[
          styles.addButton,
          selected.length === 0 && styles.disabledButton,
        ]}
        disabled={selected.length === 0}
        onPress={() =>
          router.push({
            pathname: "/quote",
            params: { selected: JSON.stringify(selected), type: "6 Month" },
          })
        }
      >
        <Text style={styles.addButtonText}>Add to Quote</Text>
      </TouchableOpacity>
    </ScrollView>
  );

  <TouchableOpacity
    style={[styles.addButton, selected.length === 0 && styles.disabledButton]}
    disabled={selected.length === 0}
    onPress={() =>
      router.push({
        pathname: "/quote",
        params: { selected: JSON.stringify(selected), type: "6 Month" },
      })
    }
  >
    <Text style={styles.addButtonText}>Add to Quote</Text>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fefaf5",
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
    borderWidth: 1,
    borderColor: "#ddd",
  },
  selectedCard: {
    borderColor: "#e67e22",
    borderWidth: 2,
    backgroundColor: "#ffe5c2",
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  addButton: {
    backgroundColor: "#e67e22",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 15,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  disabledButton: {
    backgroundColor: "#ccc",
    opacity: 0.7,
  },
});
