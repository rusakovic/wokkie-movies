import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styled from 'constants/styled';
import React from 'react';

import {Routes} from 'routes/routes';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {FilmDetailsScreen, FilmGenresScreen} from 'screens';
import SearchScreen from 'screens/SearchScreen';
import {getHeaderTitle} from 'utils/navigation/getScreenName';

const Tab = createBottomTabNavigator();
const StackNavigator = createNativeStackNavigator();

const Navigator: React.FunctionComponent = () => {
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
        <StackNavigator.Screen
          name={Routes.RootStack}
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
          })}>
          {() => (
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
                component={SearchScreen}
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
          )}
        </StackNavigator.Screen>
        <StackNavigator.Screen
          name={Routes.FilmDetailsScreen}
          component={FilmDetailsScreen}
          options={{headerTitle: 'Movie info'}}
        />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
