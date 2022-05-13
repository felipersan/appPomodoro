import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function Footer(props) {
  return (
    <View style={styles.footer}>
      <View style={styles.line}></View>
      <TouchableOpacity onPress={props.setting} style={styles.config}>
        <Image source={require('../images/Setting.png')} />
      </TouchableOpacity>
      <Image source={require('../images/homeIn.png')} style={styles.home} />
      <View>
        <TouchableOpacity onPress={props.play} style={styles.play}>
          <Image source={require('../images/play.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    flexDirection: 'row',
  },
  line: {
    position: 'absolute',
    width: 500,
    height: 1,
    backgroundColor:
      'linear-gradient(90deg, rgba(208,71,255,1) 0%, rgba(255,255,255,71) 100%);',
  },
  home: {
    position: 'absolute',
    marginLeft: 53,
    marginTop: 30,
  },
  config: {
    marginLeft: 153,
    marginTop: 30,
  },
  play: {
    marginLeft: 72,
    marginTop: -65,
  },
});
