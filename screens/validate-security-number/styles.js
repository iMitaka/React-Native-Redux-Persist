import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#353638'
  },
  imageAndMessageContainer: {
    flex: 2,
    justifyContent: 'center',
    marginTop: 10
  },
  imageContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  messageContainer: {
    flex: 1,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  keyboardContainer: {
    flex: 7
  },
  resetButtonContainer: {
    flex: 1,
    marginLeft: 50,
    marginRight: 50
  }
});

export default styles