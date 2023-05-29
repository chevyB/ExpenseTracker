import {StyleSheet, View, Text} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Wrapper from '../templates/Wrapper';
import theme from '../../constants/theme';
import Box from '../components/Box';
import Transaction from '../components/Transaction';

const AddScreen =()=> {

  const AddButtons = () => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20}}>
        <Box
          bgcolor={theme.color.primary2} 
          renderTop={<MaterialCommunityIcons name="bank-plus" size={30} color={theme.color.primary} />} 
          renderBottom={<Text style={styles.btnTitle}>Add Income</Text>}
        />
        <Box 
          bgcolor={theme.color.secondary2} 
          renderBottom={<Text style={styles.btnTitle}>Add Expense</Text>} 
          renderTop={<MaterialCommunityIcons name="bank-minus" size={30} color={theme.color.secondary} />} 
        />
      </View>
    )
  }

    return (
      <Wrapper>
        <AddButtons />
        <Text style={[theme.semibold, theme.textxl, theme.textBlack]}>
          Last Added
        </Text>
        <View style={{marginVertical: 16}}>
          <Transaction isIncome={false} />
          <Transaction isIncome={true}/>
        </View>
      </Wrapper>
    );
}

const styles = StyleSheet.create({
  btnTitle: {
    color: theme.color.gray,
    fontSize: 18,
    padding: 4,
    fontWeight:500,
  },
});

export default AddScreen
