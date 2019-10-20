/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './screens/HomeScreen';

const FirstRoute = () => (
  <HomeScreen />
);

const SecondRoute = () => (
  <HomeScreen />
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      routes: [
        { key: 'first', title: 'GLOBAL', icon: require('./assets/icons/ic_tab_global.png') },
        { key: 'second', title: 'TIME', icon: require('./assets/icons/ic_tab_team.png') },
        { key: 'third', title: 'EXPLORE', icon: require('./assets/icons/ic_tab_explore.png') },
        { key: 'fourt', title: 'MAIS', icon: require('./assets/icons/ic_tab_bar.png') },

      ],
    };
  }

  renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return(
          <ScrollView>
            <HomeScreen />
          </ScrollView>
        );
      case 'second':
        return(
          <ScrollView>
            <View style={styles.container}>
              <HomeScreen />
            </View>
          </ScrollView>
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <View style={styles.flex}>
        <StatusBar barStyle="dark-content" />
        <TabView
          navigationState={this.state}
          renderScene={this.renderScene}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
          tabBarPosition={'bottom'}
          
          renderTabBar={props =>
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: '#aaa', borderRadius: 20, marginBottom: 0, }}
              tabStyle={{ justifyContent: 'center', alignItems: 'center',justifyContent: 'center', }}
              style={{ backgroundColor: '#060606', height: 80, }}
              labelStyle={{ color: '#aaa', fontWeight: 'bold', }}
              activeColor={'#ffffff'}
              renderIcon={({ route, focused, color }) => (
                <Image source={route.icon} style={[styles.icon, {tintColor: focused ? '#fff' : '#333'}]} resizeMode={'center'} />
              )}
              renderLabel={({ route, focused, color }) => (
                <Text style={{ color, fontSize: 9, fontWeight: 'bold', margin: 8 }}>
                  {route.title}
                </Text>
              )}
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  icon: {
    width: 30,
    height: 30,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
