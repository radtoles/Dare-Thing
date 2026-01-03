import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.name}>Radha Tole</Text>
          <Text style={styles.role}>MBA Student | Marketing & Strategy</Text>
          <Text style={styles.intro}>
            Curious, creative, and interested in business, sustainability, and design.
          </Text>
        </View>

        {/* About */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>About</Text>
          <Text>
              I am an MBA student with a strong interest in marketing strategy, sustainability,
  and creative problem-solving. I enjoy working on case studies, projects, and
  ideas that combine business thinking with design and impact.
          </Text>
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Projects</Text>
          <Text>• Marketing case study</Text>
          <Text>• Sustainability project</Text>
        </View>

        {/* Contact */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Contact</Text>
          <Text>Email: radhatole@gmail.com</Text>
          <Text>LinkedIn: linkedin.com/in/radhatole</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  hero: { padding: 24, alignItems: 'center' },
  name: { fontSize: 28, fontWeight: 'bold' },
  role: { fontSize: 16, color: '#555', marginTop: 4 },
  intro: { textAlign: 'center', marginVertical: 12 },
  section: { padding: 20 },
  sectionHeader: { fontSize: 18, fontWeight: 'bold', marginBottom: 6 },
});
