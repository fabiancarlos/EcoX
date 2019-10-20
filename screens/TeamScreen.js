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
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#333',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  }
});

export default class TeamScreen extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.flex}>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          >
          <Text>TIME</Text>
        </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}
