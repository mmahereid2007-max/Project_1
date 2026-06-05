import React, { useEffect, useState } from "react";
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import BatteryCircle from "../components/BatteryCircle";
import { subscribeToVawtData, VawtData } from "../../services/fakeDataService";

const { width } = Dimensions.get("window");

export default function DashboardScreen() {
  const [vawtData, setVawtData] = useState<VawtData>({
    v: 0,
    i: 0,
    w: 0,
    p: 0,
    t: 0,
    b: 0,
  });

  useEffect(() => {
    const unsubscribe = subscribeToVawtData((data) => {
      setVawtData(data);
    });

    return unsubscribe;
  }, []);

  return (
    <ImageBackground
   source={require("../assets/go.jpeg")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.overlay}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
          {/* ===== Header ===== */}
          <Text style={styles.headerTitle}>Battery Storage</Text>

          {/* ===== Main Card ===== */}
          <View style={styles.mainCard}>
            <BatteryCircle percent={vawtData.b} />

            <View style={styles.chargeBadge}>
              <MaterialCommunityIcons
                name="lightning-bolt"
                size={14}
                color="#fff"
              />
              <Text style={styles.chargeText}>CHARGING</Text>
            </View>
          </View>

          {/* ===== Grid ===== */}
          <View style={styles.grid}>
            <StatCard
              icon="flash"
              title="Voltage"
              value={`${vawtData.v} v`}
              subtitle="Input Power"
            />
            <StatCard
              icon="fan"
              title="RPM"
              value={`${vawtData.p}`}
              subtitle="Turbine Speed"
            />
            <StatCard
              icon="current-ac"
              title="Current"
              value={`${vawtData.i} a`}
              subtitle="Load Flow"
            />
            <StatCard
              icon="battery-charging"
              title="Power"
              value={`${vawtData.w} w`}
              subtitle="Total Watts"
            />
            <StatCard
              icon="thermometer"
              title="Temp"
              value={`${vawtData.t} °c`}
              subtitle="System Heat"
              green
            />
            <StatCard
              icon="shield-check"
              title="Health"
              value="Stable"
              subtitle="Device Status"
              green
            />
          </View>

          {/* ===== Footer ===== */}
          <Text style={styles.footer}>
            Live data from ESP32-WROOM
          </Text>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

/* ================= COMPONENT ================= */

function StatCard({
  icon,
  title,
  value,
  subtitle,
  green,
}: {
  icon: string;
  title: string;
  value: string;
  subtitle: string;
  green?: boolean;
}) {
  return (
    <View
      style={[
        styles.card,
        green && { backgroundColor: "#E8F5E9" },
      ]}
    >
      <View style={styles.cardHeader}>
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color="#2E7D32"
        />
        <Text style={styles.cardTitle}>{title}</Text>
      </View>

      <Text style={styles.cardValue}>{value}</Text>
      <Text style={styles.cardSubtitle}>{subtitle}</Text>
    </View>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
  },
  mainCard: {
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 28,
    padding: 25,
    alignItems: "center",
    marginBottom: 20,
  },
  chargeBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 12,
  },
  chargeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 6,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: (width - 60) / 2,
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 20,
    padding: 14,
    marginBottom: 14,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#666",
    marginLeft: 6,
  },
  cardValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E7D32",
  },
  cardSubtitle: {
    fontSize: 10,
    color: "#999",
  },
  footer: {
    textAlign: "center",
    marginTop: 10,
    color: "#fff",
    fontSize: 12,
    opacity: 0.9,
  },
});
