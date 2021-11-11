import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styled from 'constants/styled';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Routes} from 'routes/routes';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FilmGenresScreen, SearchFilmScreen} from 'screens';

interface NavigatorProps {}

const Tab = createBottomTabNavigator();
const StackNavigator = createNativeStackNavigator();

const Navigator: React.FunctionComponent<NavigatorProps> = props => {
  const AppTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: styled.colors.white.white,
    },
  };

  return (
    <NavigationContainer theme={AppTheme}>
      <StackNavigator.Navigator initialRouteName={Routes.FilmGenresScreen}>
        <StackNavigator.Screen name={Routes.RootStack}>
          {() => {
            return (
              <Tab.Navigator>
                <Tab.Screen
                  name={Routes.FilmGenresScreen}
                  component={FilmGenresScreen}
                  options={{
                    tabBarIcon: ({focused}) => (
                      <Ionicons
                        name="ios-film-outline"
                        color={
                          focused
                            ? styled.colors.grey70opacity
                            : styled.colors.grey40opacity
                        }
                        size={24}
                      />
                    ),
                    tabBarLabel: 'MOVIES',
                    headerShown: false,
                    tabBarActiveTintColor: styled.colors.grey70opacity,
                    tabBarInactiveTintColor: styled.colors.grey40opacity,
                  }}
                />
                <Tab.Screen
                  name={Routes.SearchFilmScreen}
                  component={SearchFilmScreen}
                  options={{
                    tabBarIcon: ({focused}) => (
                      <Ionicons
                        name="ios-search-outline"
                        color={
                          focused
                            ? styled.colors.grey70opacity
                            : styled.colors.grey40opacity
                        }
                        size={24}
                      />
                    ),
                    tabBarLabel: 'SEARCH',
                    headerShown: false,
                    tabBarActiveTintColor: styled.colors.grey70opacity,
                    tabBarInactiveTintColor: styled.colors.grey40opacity,
                  }}
                />
              </Tab.Navigator>
            );
          }}
        </StackNavigator.Screen>
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
