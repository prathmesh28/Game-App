import { useTheme } from "@react-navigation/native";
import * as React from "react"
import {
  View,
  Text,
  Button,
  Vibration,
  BackHandler,
  Alert,
  Share,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  
  
} from "react-native"
import Board from "../Components/TicTacToe/Board";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default function (props) {
  const color = useTheme()

  return <TicTacToe {...props} color={color} />
}
class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }
  componentDidMount(){
    console.log(this.props.color.dark)
  }
  handleClick(i) {
    const {history, stepNumber, xIsNext} = this.state;
    const clickHistory = history.slice(0, stepNumber + 1);
    const current = clickHistory[clickHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    this.setState({
      history: clickHistory.concat([{squares}]),
      stepNumber: clickHistory.length,
      xIsNext: !xIsNext,
    });
    Vibration.vibrate(50);
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  newGame() {
    this.setState({
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    });
  }

  render(){



    const {history, stepNumber} = this.state;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    const showAlert = !!(winner || stepNumber === 9);
    const title = winner ? `Winner is ${winner} !` : 'Match tied';

    const moves = history.map((step, move) => {
      // const desc = move ? 'Go to move #' + move : 'Go to game start';
      const desc = `#${move}`;

      if (move === 0) {
        return null;
      }
      return (
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            padding: 10,
            backgroundColor: move % 2 === 0 ? '#3333' : '#1b1b1b',
          }}
          key={move.toString()}
          onPress={() => {
            this.jumpTo(move);
          }}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{color: move % 2 === 0 ? '#333' : '#b4b4b4', fontSize: 24}}>
            {desc}
          </Text>
        </TouchableOpacity>
      );
    });

    let status;
    const {xIsNext} = this.state;
    if (winner) {
      status = `${winner} Won!`;
    } else {
      status = `Player ${xIsNext ? 'X' : 'O'}'s  turn`;
    }

    return (
      <>
        <StatusBar backgroundColor="#1b1b1b" barStyle="light-content" />

        <View style={styles.game}>
          
        
          <Text style={styles.status}> 
          {status}
           </Text>

          <View style={styles.gameBoard}>
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </View>
          <View style={styles.gameInfo}>
            <TouchableOpacity
              style={styles.newGame}
              onPress={() => {
                this.newGame();
              }}>
              <Text style={styles.newText}>Reset </Text>
            </TouchableOpacity>
{/* 
            <AwesomeAlert
              cancelButtonStyle={styles.newGame}
              cancelButtonTextStyle={styles.newText}
              confirmButtonStyle={styles.newGame}
              confirmButtonTextStyle={styles.newText}
              // eslint-disable-next-line react-native/no-inline-styles
              actionContainerStyle={{flexDirection: 'column'}}
              // eslint-disable-next-line react-native/no-inline-styles
              overlayStyle={{backgroundColor: '#000'}}
              titleStyle={styles.title}
              contentContainerStyle={styles.alert}
              show={showAlert}
              showProgress={false}
              title={title}
              closeOnTouchOutside={false}
              closeOnHardwareBackPress={false}
              showCancelButton
              showConfirmButton
              cancelText="New Game"
              confirmText="Share"
              onCancelPressed={() => {
                this.newGame();
              }}
              onConfirmPressed={onShare}
            /> */}
          </View>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{flexDirection:'row',
              zIndex: 99999,
              position: 'absolute',
              bottom: 0,
              left: 0,
            }}>
            {moves}
          </View>
        </View>
      </>
    );
}
}

const styles = StyleSheet.create({
  status: {
    // color: '#fff',
    marginVertical: 10,
    fontSize: 30,
  },
  game: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#FEF5ED'
  },
  gameInfo: {
    // color: '#fff',
    marginLeft: 20,
  },
  newGame: {
    height: 50,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    
    width: 150,
  },
  newText: {
    fontSize: 20,
    // color: 'lightgrey',
  },
  menuIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 999,
  },
  alert: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    // backgroundColor: '#000',
    flexDirection: 'column',
  },
  title: {
    fontSize: 45,
    // color: '#fff',
  },
});
