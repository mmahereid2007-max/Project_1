import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "945561274688-s6rkj08i3rfn9sok49bkdcmacaa12u76.apps.googleusercontent.com",
      offlineAccess: true,
    });
  }, []);

  return <Stack screenOptions={{ headerShown: false }} />;
}
