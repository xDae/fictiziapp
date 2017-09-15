// import React from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Course from './Views/Course';
import Courses from './Views/Courses';

const App = StackNavigator({
  Courses: { screen: Courses },
  CoursePage: { screen: Course }
});

export default App;
