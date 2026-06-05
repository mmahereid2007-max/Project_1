import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ConnectScreen() {
  const router = useRouter();

  const handleConnect = () => {
    // هنا بعدين هتحط Bluetooth logic
    // دلوقتي نكمّل فلو التطبيق
    router.replace("./(tabs)/dashboard.tsx");
  };

  const handleSkip = () => {
    router.replace("./(tabs)/dashboard.tsx");
  };

  return (
    <View style={styles.container}>
      {/* العنوان */}
      <Text style={styles.title}>Connect your device</Text>

      {/* زر Bluetooth */}
      <TouchableOpacity
        style={styles.connectButton}
        onPress={handleConnect}
        activeOpacity={0.8}
      >
        <MaterialCommunityIcons
          name="bluetooth"
          size={22}
          color="#FFF"
          style={{ marginRight: 8 }}
        />
        <Text style={styles.connectText}>
          Connect via Bluetooth
        </Text>
      </TouchableOpacity>

      {/* Skip */}
      <Text style={styles.skipText} onPress={handleSkip}>
        Skip for now
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 24,
  },
  connectButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2E7D32",
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 16,
  },
  connectText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  skipText: {
    textAlign: "left",
    color: "#6B7280",
    fontSize: 14,
  },
});
