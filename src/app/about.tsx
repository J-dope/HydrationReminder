// app/about.tsx
import { StyleSheet, Text, View } from 'react-native';

export default function AboutTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.description}>
        Built for Mobile Application Development Lab 6. Demonstrates local notifications and Expo Router tab navigation.
      </Text>
      <Text style={styles.footer}>
        Developed with React Native and Expo.{'\n'}Created by [Enter Your Name].
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1E293B',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#475569',
    marginBottom: 20,
    lineHeight: 22,
  },
  footer: {
    fontSize: 14,
    textAlign: 'center',
    color: '#64748B',
    fontStyle: 'italic',
  },
});