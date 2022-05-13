import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';

export default function Modale(props) {
  return (
    <View>
      <View>
        <Text>Settings</Text>
        <TouchableOpacity onPress={modalClose}>
          <Text> X</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Trabalho</Text>

        <TouchableOpacity onPress={decreaseWork}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text>{work}</Text>

        <TouchableOpacity onPress={addWork} style={styles.selector}>
          <Text style={styles.selectorText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.input}>
        <Text style={styles.textInput}>Descanso</Text>

        <TouchableOpacity onPress={decreasePause} style={styles.selector}>
          <Text style={styles.selectorText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.number}>{pause}</Text>

        <TouchableOpacity onPress={addPause} style={styles.selector}>
          <Text style={styles.selectorText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.input}>
        <Text style={styles.textInput}>Repetições</Text>

        <TouchableOpacity onPress={decreaseTimes} style={styles.selector}>
          <Text style={styles.selectorText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.number}>{times}</Text>

        <TouchableOpacity onPress={addTimes} style={styles.selector}>
          <Text style={styles.selectorText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
