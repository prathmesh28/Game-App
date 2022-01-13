import React, {
  Component,
} from 'react';
import {
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {
  PropTypes,
} from 'prop-types';

class Net extends Component {
  render() {
    return (
      <Image
          ref={(netImg) => {
            this.netImg = netImg
          }}
          resizeMode="contain"
          source={ require('../../assets/BasketballNet.png') }
          style={{
            position: 'absolute',
            left: this.props.x,
            bottom:this.props.y-227,
            width: this.props.width,
            backgroundColor: 'transparent',
           
          }}
        />
    );
  }
}
{/* <View style={[styles.netContainer, {
        left: this.props.x,
        bottom: this.props.y,
        height: this.props.height,
        width: this.props.width,
      }]}
      /> */}
const styles = StyleSheet.create({
  netContainer: {
    position: 'absolute',
    borderColor:'#b33f40',
    borderWidth:1,
    // backgroundColor: '#b33f40',
    borderRadius: 100,
  },
});

Net.defaultProps = {
  x: 0,
  y: 0,
  height: 10,
  width: 10,
};

Net.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Net;
