import React, { Component } from 'react';
import { View, Text, Image, Modal, TouchableHighlight, StyleSheet } from 'react-native';
import axios from 'axios';
import { AppLoading, Constants } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import Card from '../Components/Card';
import GrayBox from '../Components/GrayBox';

const styles = StyleSheet.create({
  hero: {
    width: '100%',
    height: 160
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  descWrapper: {
    flex: 1,
    padding: 10
  },
  modalContainer: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    padding: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  teacherName: {
    fontSize: 20,
    marginBottom: 16
  },
  card: {
    borderTopWidth: 1,
    borderColor: '#E4E9EC',
    height: 80
  }
});

class Course extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
  });

  state = {
    isLoading: true,
    modalVisible: false,
    teacher: null
  }

  componentDidMount() {
    this.getTeacherInfo(this.props.navigation.state.params.teacherID);
  }

  getTeacherInfo = async (teacherID) => {
    const response = await axios.get(`https://fictiziapp.firebaseio.com/teachers/${teacherID}.json`);
    const { data } = response;

    this.setState({
      isLoading: false,
      teacher: { ...data }
    });
  }

  toggleModal = visible => this.setState({modalVisible: visible});

  render() {
    const { name, image, desc, hero, duration } = this.props.navigation.state.params;

    return (
      this.state.isLoading
      ? <AppLoading />
      : <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.teacherName}>{this.state.teacher.name}</Text>
              <TouchableHighlight
                onPress={() => this.toggleModal(!this.state.modalVisible)}
                underlayColor="transparent"
              >
                <Ionicons name="md-close" size={32} />
              </TouchableHighlight>
            </View>
            <GrayBox>
              <Text>{this.state.teacher.desc}</Text>
            </GrayBox>
          </View>
        </Modal>

        <Image
          source={{ uri: hero }} style={styles.hero}
          resizeMode="cover"
        />

        <Card
          avatar={image}
          name={name}
          text={`${duration}h`}
        />

        <View style={styles.descWrapper}>
          <Text>{desc}</Text>
        </View>

        <TouchableHighlight onPress={() => this.toggleModal(!this.state.modalVisible)}>
          <View style={styles.card}>
            <Card
              avatar={this.state.teacher.image}
              name={this.state.teacher.name}
            />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Course;
