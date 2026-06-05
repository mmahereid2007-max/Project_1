import auth from "@react-native-firebase/auth";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { signInWithGoogle, signOutFromGoogle } from "../services/googleAuth";

export default function LoginScreen() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  // ✅ Auto redirect لو المستخدم مسجل قبل كده
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        router.replace("./(tabs)/dashboard");
      } else {
        setCheckingAuth(false);
      }
    });

    return unsubscribe;
  }, []);

  const handleGoogleLogin = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      console.log("Starting Google Sign-In flow...");

      const userCredential = await signInWithGoogle();

      if (userCredential) {
        console.log(
          "Success! User Logged in:",
          userCredential.user.email
        );
        router.replace("./(tabs)/dashboard");
      }
    } catch (error: any) {
      console.error("❌ LOGIN ERROR:", error);
      Alert.alert(
        "Login failed",
        error?.message || "Something went wrong"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOutFromGoogle();
      Alert.alert("تم", "تم تسجيل الخروج بنجاح");
    } catch (error: any) {
      console.error("Logout Error:", error);
      Alert.alert("خطأ في الخروج", error.message);
    }
  };

  // ⏳ Loading أثناء فحص الـ auth
  if (checkingAuth) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#2E7D32" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MyApp</Text>
      <Text style={styles.subtitle}>Please sign in to continue</Text>

      <View style={styles.btnContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#2E7D32" />
        ) : (
          <>
            <Button
              title="SIGN IN WITH GOOGLE"
              onPress={handleGoogleLogin}
              color="#2E7D32"
            />

            {/* زر Test اختياري */}
            <View style={{ marginTop: 20 }}>
              <Button
                title="LOGOUT (TEST)"
                onPress={handleLogout}
                color="#d32f2f"
              />
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FAF7",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 10,
  },
  subtitle: {
    marginBottom: 40,
    fontSize: 16,
    color: "#666",
  },
  btnContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
});
