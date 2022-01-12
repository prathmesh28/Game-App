import * as React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import { useIsFocused } from '@react-navigation/core';
export default function(props) {
  const isFocused = useIsFocused();

  return <RollDice {...props} isFocused={isFocused} />;
}
class RollDice extends React.Component {
  state = {
    rolling: false,
  };
  rollDice = () => {
    this.setState({rolling: true});
    const min = 1;
    const max = 6;
    const num = min + Math.random() * (max - min);
    // console.log(Math.round(rand)*100)
    console.log(num);
    let rand;
    if (Math.round(num) === 1) {
      rand = 2250;
    } else if (Math.round(num) === 2) {
      rand = 1250;
    } else if (Math.round(num) === 3) {
      rand = 3000;
    } else if (Math.round(num) === 4) {
      rand = 2600;
    } else if (Math.round(num) === 5) {
      rand = 2000;
    } else if (Math.round(num) === 6) {
      rand = 1900;
    }
    console.log(rand);

    this.animation.play();
    setTimeout(() => {
      this.setState({rolling: false});

      this.propsisFocused?this.animation.pause():null
    }, rand);
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <TouchableOpacity
          onPress={() => this.rollDice()}
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <LottieView
            resizeMode="contain"
            ref={animation => {
              this.animation = animation;
            }}
            source={require('../assets/rollingDice.json')}
          />
        </TouchableOpacity>
      
      </View>
    );
  }
}
