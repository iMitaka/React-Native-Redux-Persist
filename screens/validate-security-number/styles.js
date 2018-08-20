import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#353638'
  },
  imageAndMessageContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 10
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  keyboardContainer: {
    flex: 3
  },
  resetButtonContainer: {
    flex: 1,
    margin: 50
  }
});

export default styles