import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
// import PostScreen from "../../../post/presentation/screens/PostsScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import PostsScreen from "../../../post/presentation/screens/PostsScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const initialRouteName: keyof RootStackParamList = "Posts";

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen name="Posts" component={PostsScreen} />

      {/* <Stack.Screen name="Post" component={PostScreen} /> */}

      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Navigator>
  );
}
