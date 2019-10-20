import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  NativeModules,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ControlBar from '../components/ControlBar';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#333',
  },
  container: {
    flex: 1,
    height: Dimensions.get("window").height,
    backgroundColor: '#000'
  },
  sloganContainer: {

  },
  slogan: {
    fontSize: 20,
    fontWeight: '200',
    color: '#fff',
    fontFamily: 'serif',
    marginHorizontal: 25,
    marginRight: 55,
    marginVertical: 5,
  },
  sloganBold: {
    fontWeight: 'bold',
  },
  sloganRight: {
    textAlign: 'right',
    marginLeft: 55,
    marginRight: 25,
  },
  slognSm: {
    fontSize: 18,
  },
  controlsContainer: {
    height: 100,
    alignItems: 'center'
  }
});

export default class HomeScreen extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.flex}>
        <SafeAreaView>
          <View style={styles.container}>
            
            <View style={styles.controlsContainer}>
              <ControlBar label={2018} />
            </View>
            <View style={styles.sloganContainer}>
              <Text style={styles.slogan}>Foram desmatados mais de{'\n'}<Text style={styles.sloganBold}>1,3 milhões</Text> de hectares</Text>
              <Text style={[styles.slogan, styles.sloganRight, styles.slognSm]}>Tiveram <Text style={styles.sloganBold}>246 mil{'\n'} alertas</Text> de queimadas</Text>
              <Text style={[styles.slogan, styles.slognSm]}>O nivel do mar subiu <Text style={styles.sloganBold}>3 metros</Text> em regiões costeiras</Text>
            </View>

            <Image source={require('../assets/image/earth.png')} style={{width: '100%', height: 300}} />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
