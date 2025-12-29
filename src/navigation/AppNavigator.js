import { useContext } from "react";
import { Button, Alert } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screen/LoginScreen";
import ProductList from "../screen/ProductListScreen";
import ProductDetails from "../screen/ProductDetailsScreen";
import { AuthContext } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

const LogoutButton = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  return (
    <Button
      title="Logout"
      color="#ff0000"
      onPress={() =>
        Alert.alert("Logout", "Are you sure you want to logout?", [
          { text: "Cancel", style: "cancel" },
          { text: "Yes", onPress: () => logout(navigation) },
        ])
      }
    />
  );
};

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Products"
        component={ProductList}
        options={({ navigation }) => ({
          headerRight: () => <LogoutButton navigation={navigation} />,
        })}
      />
      <Stack.Screen name="Details" component={ProductDetails} />
    </Stack.Navigator>
  );
}
