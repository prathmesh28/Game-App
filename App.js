import * as React from "react"
import {
  View,
  Text,
  Button,
  useColorScheme,
  LogBox,
  Pressable,
  StyleSheet,
} from "react-native"
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import TicTacToe from "./src/Screens/TicTacToe"
import RollDice from "./src/Screens/RollDice"
import Basketball from "./src/Screens/Basketball"

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#FEF5ED",
      }}
    >
      <Pressable
        style={styles.butt}
        onPress={() => navigation.navigate("TicTacToe")}
      >
        <Text style={styles.butttxt}>TicTacToe</Text>
      </Pressable>

      <Pressable
        style={styles.butt}
        onPress={() => navigation.navigate("RollDice")}
      >
        <Text style={styles.butttxt}>Roll A Dice</Text>
      </Pressable>
      <Pressable
        style={styles.butt}
        onPress={() => navigation.navigate("Basketball")}
      >
        <Text style={styles.butttxt}>Basketball</Text>
      </Pressable>

    </View>
  )
}

const Stack = createNativeStackNavigator()

function App() {
  const colorScheme = useColorScheme()
  React.useEffect(() => {
    LogBox.ignoreLogs(["Animated"])
  })

  return (
    <NavigationContainer
      theme={colorScheme === "light" ? DefaultTheme : DarkTheme}
    >
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerBlurEffect: "systemChromeMaterial",
          headerStyle: { backgroundColor: "#99A799" },
          // headerTitleStyle:{color:colorScheme==='light'?'#212121':'#cccccc'},
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="TicTacToe"
          component={TicTacToe}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="RollDice"
          component={RollDice}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="Basketball"
          component={Basketball}
          options={{ title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  butt: {
    backgroundColor: "#ADC2A9",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 5,
  },
  butttxt: { color: "#fff", fontSize: 18 },
})
