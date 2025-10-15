import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const faqs = [
  {
    question: "What is Empowering Nation?",
    answer:
      "Empowering Nation is a community-focused organization offering practical courses and programs to help individuals develop valuable skills for personal and professional growth.",
  },
  {
    question: "What courses do you offer?",
    answer:
      "We offer 6-week and 6-month courses in areas such as Cooking, Child Minding, Garden Maintenance, Sewing, First Aid, and Landscaping.",
  },
  {
    question: "How do I enroll in a course?",
    answer:
      "You can browse available courses on our app and enroll directly by selecting your preferred course and following the instructions.",
  },
  {
    question: "What is the cost of each course?",
    answer:
      "6-week courses cost R750 each, and 6-month courses cost R1500 each. The total will be shown on the quote page after you select your courses.",
  },
  {
    question: "Do I need prior experience to join?",
    answer:
      "No prior experience is required. Our courses are designed for beginners and those looking to improve their skills.",
  },
  {
    question: "How can I contact Empowering Nation?",
    answer:
      "You can reach us via the Contact page in the app. Fill in your email and message, and we’ll get back to you as soon as possible.",
  },
  {
    question: "Where are the classes held?",
    answer:
      "Classes are held at our community center. Details will be provided upon enrollment.",
  },
];

export default function FAQScreen() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      {faqs.map((faq, idx) => (
        <View key={idx} style={styles.faqBox}>
          <TouchableOpacity onPress={() => toggleFAQ(idx)}>
            <Text style={styles.question}>{faq.question}</Text>
          </TouchableOpacity>
          {openIndex === idx && <Text style={styles.answer}>{faq.answer}</Text>}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#fefaf5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
    color: "#e67e22",
  },
  faqBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#eee",
  },
  question: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  answer: {
    fontSize: 15,
    color: "#666",
    marginTop: 8,
    lineHeight: 22,
  },
});
