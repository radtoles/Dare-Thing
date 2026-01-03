import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

/*
Create a main App component for a portfolio.
Use SafeAreaView and ScrollView.

Sections needed:
- Header / Hero
- About
- Projects
- Contact

Keep everything in one file for now.
*/

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        {/* Header / Hero */}
        <View>
          <Text style={styles.header}>My Portfolio</Text>
        </View>

        {/* About */}
        <View>
          <Text>About section goes here</Text>
        </View>

        {/* Projects */}
        <View>
          <Text>Projects section goes here</Text>
        </View>

        {/* Contact */}
        <View>
          <Text>Contact section goes here</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
});
