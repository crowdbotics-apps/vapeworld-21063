import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps125613Navigator from '../features/Maps125613/navigator';
import UserProfile125609Navigator from '../features/UserProfile125609/navigator';
import BlankScreen0125586Navigator from '../features/BlankScreen0125586/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps125613: { screen: Maps125613Navigator },
UserProfile125609: { screen: UserProfile125609Navigator },
BlankScreen0125586: { screen: BlankScreen0125586Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
