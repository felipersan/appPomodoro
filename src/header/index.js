import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}> POMODORO</Text>
      <TouchableOpacity onPress={props.reload}>
        <Image source={require('../images/reload.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    marginLeft: 43,
    marginRight: 43,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textHeader: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: '#D047FF',
  },
});
