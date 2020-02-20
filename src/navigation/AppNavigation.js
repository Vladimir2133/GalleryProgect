import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
//screens
import MainScreen from "../screens/MainScreen";
import { PhotoScreen } from "../screens/PhotoScreen";

const GalleryNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Photo: {
      screen: PhotoScreen
    }
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {

        headerTintColor: '#fff',
        headerTitleAlign: 'center',

    }
  }
);

export const AppNavigation = createAppContainer(GalleryNavigator);
