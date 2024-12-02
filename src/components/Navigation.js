import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';
import PeopleList from './PeopleList';
import LandingPage from './LandingPage'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={LandingPage} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={'#941a1d'} size={'20px'} />
          ),
        }}/>
      <Tab.Screen name="Employees" component={PeopleList} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="users" color={'#941a1d'} size={'20px'} />
          ),
        }}/>
      <Tab.Screen name="Add Employee" component={AddPerson} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="add-user" color={'#941a1d'} size={'20px'} />
          ),
        }}/>
      <Tab.Screen name="Company Directory" component={CompanyList} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="text-document-inverted" color={'#941a1d'} size={'20px'} />
          ),
        }}/>
    </Tab.Navigator>
    
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
