import FirstScreen from "./src/screens/FirstScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SecondScreen from "./src/screens/SecondScreen";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import ThirdScreen from "./src/screens/ThirdScreen";
import FourthScreen from "./src/screens/FourthScreen/FourthScreen";
import { FifthScreen } from "./src/screens/FifthScreen";
import { SixthScreen } from "./src/screens/SixthScreen";
import { SeventhScreen } from "./src/screens/SeventhScreen";
import EighthScreen from "./src/screens/EightScreen/EighthScreen";

export default function App({ navigation }) {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="FirstScreen" component={FirstScreen} />
          <Stack.Screen name="SecondScreen" component={SecondScreen} />
          <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
          <Stack.Screen name="FourthScreen" component={FourthScreen} />
          <Stack.Screen name="FifthScreen" component={FifthScreen} />
          <Stack.Screen name="SixthScreen" component={SixthScreen} />
          <Stack.Screen name="SeventhScreen" component={SeventhScreen} />
          <Stack.Screen name="EightScreen" component={EighthScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
});
