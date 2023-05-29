
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import theme from '../../constants/theme';
import Wrapper from '../templates/Wrapper';

const CardsScreen =()=> {

  const colors = [
    ['#6c8ead','#f6856f','#7e31f9'],
    ['#7e31f9','#f15152', '#6c8ead'],
    ['#f6856f','#7e31f9'],
    ['#1d3557','#f15152'],
    ['#3d5a80','#8b74d4', '#ff8c00'],
    ['#c94926','#6c8ead', '#ff8c00'],
    ['#1d5f7a','#8b74d4', '#616e88'],
    ['#65000b','#8b74d4', '#e25c95'],
    ['#14b0ff','#8b74d4', '#6f57ea'],
    ['#e25c95','#65000b'],
  ]

  function getRandomInt(min = 0, max = 9) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const Card = () => {
    return (
      <LinearGradient
        colors={colors[getRandomInt()]}
        style={styles.card}
        start={{ x: 0.75, y: 0 }}
      >
        <View style={styles.cardRow}>
          
          <FontAwesome name="cc-visa" size={30} color="white" />

          <View>
            <Text style={[theme.textWhite, theme.textmd, styles.textShadow]}>Current Balance</Text>
            <Text style={[theme.textWhite, theme.bold, theme.textxl]}>₱ 12,345.00</Text>
          </View>
        </View>
        <View style={styles.space}></View>
        <Text style={[theme.textWhite, theme.bold, theme.textmd]}>1234 1234 1234 1234</Text>
        <Text style={[theme.textWhite, theme.textmd]}>Chevy Banico</Text>
      </LinearGradient>
      )
    }

    return (
      <Wrapper>
        <Card />
        <Card />
        <Card />
      </Wrapper>
    );
}

const styles = StyleSheet.create({
  card: {
    padding: 24,
    borderRadius: 24,
    marginBottom: 24,
  },
  space: {
    height: 40,
  },
  textShadow: {
    shadowColor: theme.color.gray
  },
  cardRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
  },
})

export default CardsScreen
