
import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';




const App = () =>  {
  return (
    <View style={styles.screen}>
     <Text>hELLO wORLD</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }

});

export default App;
