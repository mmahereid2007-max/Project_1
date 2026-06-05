import auth from "@react-native-firebase/auth";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      const user = auth().currentUser;

      if (user) {
        // ✅ typedRoutes-friendly
        router.replace("./app/(tabs)/dashboard");
      } else {
        router.replace("/");
      }
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
<Image
  source={require("../assets/logo.png")}
  style={styles.logo}
  resizeMode="contain"
/>


      <View style={styles.textContainer}>
        <Text style={styles.title}>AEROGENIX</Text>
        <Text style={styles.subtitle}>
          Monitor • Generate • Sustain
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAF8",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: width * 0.55,
    height: width * 0.55,
    marginBottom: 25,
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#2E7D32",
    letterSpacing: 2,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: "#6B7280",
    fontWeight: "500",
  },
});
