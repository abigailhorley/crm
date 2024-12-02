import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';
import PeopleList from './PeopleList';
import LandingPage from './LandingPage'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={LandingPage} />
      <Tab.Screen name="Employees" component={PeopleList} />
      <Tab.Screen name="Add Employee" component={AddPerson}/>
      <Tab.Screen name="Company Directory" component={CompanyList} />
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
