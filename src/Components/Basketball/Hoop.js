import React, {
  Component,
} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  PropTypes,
} from 'prop-types';

class Hoop extends Component {
  render() {
    return (
      <View style={[styles.hoopContainer, {
        bottom: this.props.y,
      }]}
      >
        <View style={styles.hoopContained} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hoopContainer: {
    position: 'absolute',
    left: (Dimensions.get('window').width / 2) - (179 / 2),
    width: 179,
    height: 112,
    alignItems: 'center',
    borderWidth: 4,
    backgroundColor:'#fff',
    borderColor: '#b33f40',
    borderBottomColor:'#D3E4CD',
    borderRadius: 4,
  },
  hoopContained: {
    width: 70,
    height: 54,
    marginTop: 38,
    borderWidth: 4,
    borderColor: '#b33f40',
    borderBottomColor:'#D3E4CD',
  },
});

Hoop.defaultProps = {
  y: 0,
};

Hoop.propTypes = {
  y: PropTypes.number,
};

export default Hoop;
