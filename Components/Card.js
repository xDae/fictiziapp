import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import PropTypes from 'prop-types';

import Avatar from './Avatar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 80,
    height: 80,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#E4E9EC',
    backgroundColor: '#fff'
  },
  name: {
    color: '#54636D',
    fontSize: 16
  },
  avatar: {
    marginRight: 10
  },
  message: {
    color: '#8798A4',
    fontSize: 13
  },
  nameContainer: {
    width: 100,
    flex: 1
  }
});

const Card = ({ avatar, name, text }) =>
  <View style={styles.container}>
    <View style={styles.avatar}>
      <Avatar avatarUrl={avatar} />
    </View>

    <View style={styles.nameContainer}>
      <Text
        style={styles.name}
        numberOfLines={2}
      >
        {name}
      </Text>
      {text &&
        <Text numberOfLines={1} style={styles.message}>
          {text}
        </Text>
      }
    </View>
  </View>;

export default Card;
