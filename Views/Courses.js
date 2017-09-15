import React, { Component } from 'react';
import { FlatList, View, StyleSheet, TouchableHighlight } from 'react-native';

import courses from '../data/dev-course.json';

import Card from '../Components/Card'

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
});

class App extends Component {
  static navigationOptions = {
    title: 'Courses',
  }

  keyExtractor = (item, index) => index;

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.list}>
        <FlatList
          data={courses}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) =>
            <TouchableHighlight
              onPress={() => navigate('CoursePage', { ...item })}
              underlayColor="transparent"
            >
              <View>
                <Card
                  avatar={item.image}
                  name={item.name}
                  text={`${item.duration}h`}
                />
              </View>
            </TouchableHighlight>
          }
        />
      </View>
    );
  }
}

export default App;
