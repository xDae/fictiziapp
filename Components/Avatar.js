import React from 'react';
import { Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  normal: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  small: {
    height: 22,
    width: 22,
    borderRadius: 11
  }
});

const Avatar = ({ avatarUrl, size, style }) =>
  <Image source={{ uri: avatarUrl }} style={[styles[size], style]} />;

Avatar.defaultProps = {
  size: 'normal',
  style: ''
};

Avatar.propTypes = {
  size: PropTypes.oneOf(['normal', 'small']),
  avatarUrl: PropTypes.string.isRequired
};

export default Avatar;
