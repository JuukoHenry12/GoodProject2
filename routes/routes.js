import { createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer';

import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';


import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Login from '.././src/screens/Login'
import Chat from '.././src/screens/Chat'
import Details from '.././src/screens/Details'
import MainList from '.././src/screens/MainList'
import welcome from '.././src/screens/welcome'
import Profile from '.././src/screens/Profile'
import SignUp from '.././src/screens/SignUp'
import Notification from '.././src/screens/Notification'
import Setting from '.././src/screens/Setting'

const homeStack = createStackNavigator({
  Home: {
    screen: MainList
  },
  detail: {
    screen: Details
  },
},
  {
  
  navigationOptions: {
    headerTintColor: '#a41034',
    headerStyle: {
      backgroundColor: '#fff',
    },
  },
  })

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile
  },
  detail: {
    screen: Details
  },
},
  {
    
    navigationOptions: {
      headerTintColor: '#a41034',
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
  })


const SettingStack = createStackNavigator({
  Profile: {
    screen: Setting
  },
  detail: {
    screen: Details
  },
},
  {

    navigationOptions: {
      headerTintColor: '#a41034',
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
  })



const notificationStack = createStackNavigator({
  notificaton: {
    screen: Notification
  },
  detail: {
    screen: Details
  },
},
  {
    
    navigationOptions: {
      headerTintColor: '#a41034',
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
  })

const MainTab = createBottomTabNavigator({

  Home: {
    screen: homeStack,
    navigationOptions: {
      tabBarIcon: ({ focused, horizontal,tintColor }) => {
        <Ionicons name={'iso-home'} size={25} color={tintColor} />
      }
    }
     
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({focused,horizontal,tintColor }) => {
        <Ionicons name={'ios-profile'} size={25} color={tintColor} />
      }
    }
    
  },
  notification: {
    screen: notificationStack,
    navigationOptions: {
      tabBarLabel: 'Notification',
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        <Ionicons name={`ios-add ${focused ? '': 'outline' }`} size={25} color={tintColor} />
      }
    }

  }

}, {
   
    tabBarOptions: {
      activeTintColor:'#eb6e3d'
    }
})


const MainDrawer = createDrawerNavigator({
  Home: MainTab,
  Settings: SettingStack,
});


const WelcomeStack = createAnimatedSwitchNavigator({
 welcome: {
    screen: welcome
  },
  login: {
    screen: Login
  },
  signup: {
    screen: SignUp
  },
  home: {
    screen: MainDrawer 
  }

}, {
    transition: (
    <Transition.Together>
      <Transition.Out
        type="slide-right"
        durationMs={100}
        interpolation="easeIn"
      >
        <Transition.In type="fade" durationMs={500} />
      </Transition.Out>
    </Transition.Together>
    )
})
const AppNavigator = createAppContainer( WelcomeStack );

export default AppNavigator;