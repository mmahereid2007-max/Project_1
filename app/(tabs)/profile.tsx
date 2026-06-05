import auth from "@react-native-firebase/auth";
import { useRouter } from "expo-router";
import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { signOutFromGoogle } from "../../services/googleAuth";

export default function ProfileScreen() {
  const router = useRouter();
  const user = auth().currentUser;

  const handleLogout = async () => {
    try {
      await signOutFromGoogle();

      // الرجوع لصفحة اللوجين (index.tsx)
      router.replace("/");
    } catch (error) {
      Alert.alert("Error", "Failed to log out");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>My Profile</Text>

      {/* صورة المستخدم + البيانات الأساسية */}
      <View style={styles.profileHeader}>
        <Image
          source={{
            uri:
              user?.photoURL ??
              "https://via.placeholder.com/100",
          }}
          style={styles.avatar}
        />
        <Text style={styles.userName}>
          {user?.displayName || "User Name"}
        </Text>
        <Text style={styles.userEmail}>
          {user?.email || ""}
        </Text>
      </View>

      {/* معلومات الحساب */}
      <View style={styles.infoSection}>
        <InfoCard
          label="Full Name"
          value={user?.displayName || "N/A"}
          icon="👤"
        />
        <InfoCard
          label="Account ID"
          value={
            user?.uid
              ? user.uid.substring(0, 12) + "..."
              : "N/A"
          }
          icon="🆔"
        />
        <InfoCard
          label="Provider"
          value="Google Auth"
          icon="🔐"
        />
      </View>

      {/* زر تسجيل الخروج */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.logoutText}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

/**
 * =========================
 * Info Card Component
 * =========================
 */
function InfoCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: string;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>
      <View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F3",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 20,
  },
  profileHeader: {
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 25,
    borderRadius: 20,
    elevation: 3,
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#2E7D32",
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  userEmail: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  infoSection: {
    marginTop: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
    elevation: 1,
  },
  icon: {
    fontSize: 24,
    marginRight: 15,
  },
  label: {
    fontSize: 12,
    color: "#888",
  },
  value: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  logoutButton: {
    backgroundColor: "#d32f2f",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  logoutText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
