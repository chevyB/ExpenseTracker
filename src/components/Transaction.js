import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import theme from '../../constants/theme';

const Transaction = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <MaterialIcons name="directions-car" size={24} color="white" />
      </View>
      <View style={styles.detail}>
        <Text style={theme.bold}>Transportation</Text>
        <Text style={theme.textGray}>10:52</Text>
      </View>
      <Text style={[styles.amount, theme.textlg]}>₱ 1.00</Text>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 10,
    alignItems: 'center',
  },
  icon:{
    backgroundColor: theme.color.primary, 
    padding: 6,
    borderRadius: 5,
    marginRight: 8,
  },
  detail: {
    flex: 1,
    justifyContent: 'space-between',
  },
})
