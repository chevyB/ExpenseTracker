import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import StatisticsScreen from './src/screens/StatisticsScreen';
import WalletScreen from './src/screens/WalletScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import theme from './constants/theme';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.color.primary,
        tabBarInactiveTintColor: theme.color.inactive,
      }}>
        <Tab.Screen name="Home" component={HomeScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Statistics" component={StatisticsScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="line-graph" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Waller" component={WalletScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="wallet" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="cog" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
