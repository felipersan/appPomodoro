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

import Header from './src/header';
import Modale from './src/modale';

import Footer from './src/footer/index';

let secondsWork = 0;
let minutesWork = 0;
let secondsPause = 0;
let minutesPause = 0;
let intervalo = 0;

export default function App() {
  const [timer, setTimer] = useState('00:00');
  const [status, setStatus] = useState('Escolha os tempos ');
  const [work, setWork] = useState(0);
  const [pause, setPause] = useState(0);
  const [times, setTimes] = useState(0);
  const [modal, setModal] = useState(false);

  function addWork() {
    setWork(work + 5);
  }

  function decreaseWork() {
    setWork(work - 5);
  }

  function addPause() {
    setPause(pause + 5);
  }

  function decreasePause() {
    setPause(pause - 5);
  }
  function addTimes() {
    setTimes(times + 1);
  }

  function decreaseTimes() {
    setTimes(times - 1);
  }

  let cont = 0;
  let cont2 = 0;

  function numero() {
    //funciona o trabalho
    if (cont < times) {
      setStatus('Hora do trabalho');
      if (minutesWork < work) {
        secondsWork++;
        if (secondsWork == 60) {
          secondsWork = 0;
          minutesWork++;
        }

        let formatWork =
          (minutesWork < 10 ? '0' + minutesWork : minutesWork) +
          ':' +
          (secondsWork < 10 ? '0' + secondsWork : secondsWork);
        setTimer(formatWork);
      } else if (minutesPause < pause) {
        setStatus('Hora do descanso');
        secondsPause++;
        if (secondsPause == 60) {
          secondsPause = 0;
          minutesPause++;
        }

        let formatPause =
          (minutesPause < 10 ? '0' + minutesPause : minutesPause) +
          ':' +
          (secondsPause < 10 ? '0' + secondsPause : secondsPause);
        setTimer(formatPause);
        cont2++;
      } else {
        secondsPause = 0;
        secondsWork = 0;
        minutesPause = 0;
        minutesWork = 0;
        cont++;
      }
    } else {
      terminou();
    }
  }

  function trabalho() {
    intervalo = setInterval(numero, 100);
  }

  function terminou() {
    clearInterval(intervalo);
    alert('Parabens, você completou a tarefa');
    setWork(0);
    setPause(0);
    setTimes(0);
    setTimer('00:00');
    setStatus('Escolha os tempos');
  }

  function zerar() {
    clearInterval(intervalo);
    setWork(0);
    setPause(0);
    setTimes(0);
    setTimer('00:00');
    setStatus('Escolha os tempos');
  }

  function modalAdd() {
    setModal(true);
  }

  function modalClose() {
    setModal(false);
  }

  function clicou() {
    alert('clicou');
  }

  return (
    <View>
      <Header reload={zerar} />
      <View style={styles.timerView}>
        <Image
          style={styles.timerImage}
          source={require('./src/images/timer.png')}
        />
        <Text style={styles.timer}>{timer}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>
      <View style={styles.selectorsAndPlay}>
        <Modal visible={modal} transparent={true} animationType="slide">
          <View style={styles.modal}>
            <View style={styles.settingHeader}>
              <Text style={styles.title}>Settings</Text>
              <TouchableOpacity onPress={modalClose}>
                <Text style={styles.settingClose}> X</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.lineHeader}></View>
            <Text style={styles.indicator}>TIME (MINUTES)</Text>
            <View style={styles.input}>
              <Text style={styles.textInput}>Trabalho</Text>

              <TouchableOpacity onPress={decreaseWork} style={styles.selector}>
                <Text style={styles.selectorText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.number}>{work}</Text>

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
            <TouchableOpacity style={styles.touchConcluir} onPress={modalClose}>
              <Text style={styles.concluir}>Concluir</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Footer play={trabalho} setting={modalAdd} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  timerImage: {
    width: 370,
    height: 370,
  },
  timerView: {
    alignItems: 'center',
    marginTop: 10,
  },
  timer: {
    fontSize: 52,
    fontFamily: 'Poppins-Medium',
    color: '#fff',
    marginTop: -223,
  },
  status: {
    marginTop: 120,
    marginBottom: 20,
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    color: '#D047FF',
  },
  input: {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 15,
    backgroundColor: '#D047FF',
    width: 220,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: '#fff',
    borderWidth: 1,
  },
  textInput: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 8,
    fontFamily: 'Poppins-Medium',
  },
  selector: {
    backgroundColor: '#fff',
    width: 25,
    height: 25,
    borderRadius: 12.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  selectorText: {
    fontFamily: 'Poppins-Bold',
    marginTop: 2,
  },
  number: {
    color: '#fff',
    fontFamily: 'Poppins-Ligth',
    fontSize: 25,
  },
  selectorsAndPlay: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: -125,
  },

  timeSelect: {
    backgroundColor: '#D047FF',
    color: '#fff',
    padding: 12,
    borderRadius: 15,
    marginLeft: 15,
    fontFamily: 'Poppins-Medium',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cabeçalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modal: {
    position: 'absolute',
    width: '90%',
    height: 430,
    bottom: 0,
    alignItems: 'center',
    backgroundColor: '#c152e7',
    borderRadius: 50,
    margin: '5%',
  },
  settingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 33,
    justifyContent: 'space-around',
    width: '100%',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    fontSize: 24,
  },
  settingClose: {
    color: '#fff',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  lineHeader: {
    width: '100%',
    height: 1,
    backgroundColor: '#fff',
    marginTop: 22,
  },
  indicator: {
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
  },
  touchConcluir: {
    marginLeft: 15,
    marginTop: 15,
    backgroundColor: '#D047FF',
    width: 220,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: '#fff',
    borderWidth: 1,
  },
  concluir: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 8,
    fontFamily: 'Poppins-Medium',
  },
});
