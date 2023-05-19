import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';

import Wrapper from '../templates/Wrapper';
import theme from '../../constants/theme'

const HomeScreen =()=> {
    return (
      <Wrapper>
        <LinearGradient
            colors={['#f6856f','#7e31f9']}
            style={styles.card}
            start={{ x: 0.75, y: 0 }}
        >

        <View style={styles.cardRow}>
            <View>
            <Text style={[styles.white, theme.textmd]}>Total Balance</Text>
            <Text style={[styles.boldWhite, theme.textxl]}>$ 12,345.00</Text>

            </View>
            <Entypo name="eye" size={20} color="white" />
        </View>
        <View style={styles.space}></View>
        <View style={styles.cardRow}>
            <View>
              <Text style={[styles.white, theme.textmd]}>Income</Text>
              <Text style={[styles.boldWhite, theme.textlg]}>$ 5,142.00</Text>
            </View>
            <View>
              <Text style={[styles.white, theme.textmd]}>Expenses</Text>
              <Text style={[styles.boldWhite, theme.textlg]} className="text-xl">$ 3,511.00</Text>
            </View>
        </View>
        </LinearGradient>
      </Wrapper>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    white: {
        color: 'white',
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
    space: {
      height: 40,
    }
});
