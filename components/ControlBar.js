import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 50,
    flexDirection: 'row',
    marginVertical: 10,
    marginTop: 30,
  },
  controlButton: {
    width: 35,
    height: 35,
    backgroundColor: '#fff',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 8,
    height: 20,
  },
  controlText: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlLabel: {
    width: 100,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  }
});

export default (props) => {
  const {
    label
  } = props;

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.controlButton}>
        <Image source={require('../assets/icons/arrow_left.png')} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.controlText}>
        <Text style={styles.controlLabel}>{label}</Text>
      </View>
      <TouchableOpacity style={styles.controlButton}>
        <Image source={require('../assets/icons/arrow_right.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};
