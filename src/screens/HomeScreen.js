import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

import Wrapper from '../templates/Wrapper';
import theme from '../../constants/theme'
import Transaction from '../components/Transaction';

const HomeScreen =()=> {

    const Card = () => {
      return (
        <LinearGradient
          colors={['#f6856f','#7e31f9']}
          style={styles.card}
          start={{ x: 0.75, y: 0 }}
        >
        <View style={styles.cardRow}>
            <View>
            <Text style={[styles.white, theme.textmd]}>Total Balance</Text>
            <Text style={[styles.boldWhite, theme.textxl]}>₱ 12,345.00</Text>

            </View>
            <Entypo name="eye" size={20} color="white" />
        </View>
        <View style={styles.space}></View>
        <View style={styles.cardRow}>
            <View>
              <View style={styles.flexRow}>
                <View style={styles.iconCircle}>
                  <MaterialIcons name="arrow-upward" size={16} color="white" />
                </View>
                <Text style={[styles.white, theme.textmd]}> Income</Text>
              </View>
              <Text style={[styles.boldWhite, theme.textlg]}>₱ 5,142.00</Text>
            </View>
            <View>
              <View style={styles.flexRow}>
                <View style={styles.iconCircle}>
                  <MaterialIcons name="arrow-downward" size={16} color="white" />
                </View>
                <Text style={[styles.white, theme.textmd]}> Expenses</Text>
              </View>
              <Text style={[styles.boldWhite, theme.textlg]} className="text-xl">₱ 3,511.00</Text>
            </View>
        </View>
      </LinearGradient>
      )
    }

    return (
      <Wrapper>
        <Card />
        <View>
          <View style={[styles.transactionHeader]}>
            <Text style={[theme.textBlack, theme.bold, theme.textlg]}>Recent Transactions</Text>
            <Text style={[theme.textGray, theme.textmd]}>See all</Text>
          </View>

          <Transaction isIncome={false} />
          <Transaction isIncome={true}/>
          
        </View>
      </Wrapper>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
  white: {
      color: 'white',
  },
  bold: {
      fontWeight: 'bold',
  },
  boldWhite: {
      color: 'white',
      fontWeight: 'bold',
  },
  card: {
      padding: 24,
      borderRadius: 24,
  },
  cardRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
  },
  flexRow: {
      flexDirection: 'row',
  },
  transactionHeader: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: 36,
      marginBottom: 12,
  },
  space: {
    height: 40,
  },
  iconCircle:{
    padding: 2,
    backgroundColor: 'rgba(255,255,255, 0.3)',
    width: 20,
    borderRadius: '50%',
  },
});
