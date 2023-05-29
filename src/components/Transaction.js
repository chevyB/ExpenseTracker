import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

import theme from '../../constants/theme';

const Transaction = ({ isIncome }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <MaterialIcons name="directions-car" size={24} color="white" />
      </View>
      <View style={styles.detail}>
        <Text style={[theme.bold, theme.textBlack]}>Transportation</Text>
        <Text style={theme.textGray}>10:52</Text>
      </View>
      <Text style={[styles.amount, theme.textlg, theme.textBlack, isIncome ? styles.isIncome : styles.isExpense]}>
        {isIncome ? <Entypo name="plus" size={16} color="#5dd164" /> : <Entypo name="minus" size={16} color="#ff2b28" />} 
        ₱ 1.00
      </Text>
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
  isIncome: {
    color: '#5dd164',
  },
  isExpense: {
    color: '#ff2b28',
  }
})
