import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

import Wrapper from '../templates/Wrapper';
import theme from '../../constants/theme';
import Transaction from '../components/Transaction';
import Box from '../components/Box';

const StatisticsScreen =()=> {
  const [active, setActive] = useState('income')
  const commonSettings = {
    spacing: 10,
    labelWidth: 50,
    labelTextStyle: {color: 'gray'},
    frontColor: theme.color.primary,
  }

  const barData = [
    {
      value: 400,
      label: 'Week 1',
      ...commonSettings,
    },
    {value: 200, frontColor: theme.color.secondary},
    {
      value: 500,
      label: 'Week 2',
      ...commonSettings,
    },
    {value: 400, frontColor: theme.color.secondary},
    {
      value: 750,
      label: 'Week 3',
      ...commonSettings,
    },
    {value: 250, frontColor: theme.color.secondary},
    {
      value: 300,
      label: 'Week 4',
      ...commonSettings,
    },
    {value: 200, frontColor: theme.color.secondary},
  ];

  const Chart = () => {
    return (
      <View
      style={{
        paddingBottom: 40,
        borderRadius: 10,
      }}>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'}}>
        <Text style={[theme.semibold, theme.textxl, theme.textBlack]}>
          Statistics
        </Text>
        <Text style={[theme.textmd, theme.textGray]}>
          Weekly
        </Text>
        </View>
        <BarChart
          data={barData}
          barWidth={15}
          spacing={30}
          roundedTop
          // roundedBottom
          xAxisThickness={0}
          yAxisThickness={0}
          yAxisTextStyle={{color: 'gray'}}
          noOfSections={6}
          yAxisLabelTexts={['0', '1k', '2k', '3k', '4k', '5k', '6k']}
          // maxValue={6000}
          yAxisLabelPrefix="₱"
        />
      </View>
    )
  }

  const Overview = () => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20}}>
        <Box 
          bgcolor={theme.color.primary2} 
          renderTop={<Text style={styles.overviewTitle}>Total Income</Text>} 
          renderBottom={
            <>
              <View style={[styles.iconCircle, {backgroundColor: theme.color.primary}]}>
                <MaterialIcons name="arrow-upward" size={16} color="white" />
              </View>
              <Text style={[theme.textBlack, theme.textmd, theme.semibold]}> ₱ 1,123.00</Text>
            </>
          } 
        />
        <Box 
          bgcolor={theme.color.secondary2} 
          renderTop={<Text style={styles.overviewTitle}>Total Expenses</Text>} 
          renderBottom={
            <>
              <View style={[styles.iconCircle, {backgroundColor: theme.color.secondary}]}>
              <MaterialIcons name="arrow-downward" size={16} color="white" />
              </View>
              <Text style={[theme.textBlack, theme.textmd, theme.semibold]}> ₱ 1,123.00</Text>
            </>
          } 
        />
      </View>
    )
  }

  const Transactions = () => {
    return (
      <View>
        <View style={styles.transaction}>
          <TouchableOpacity 
            onPress={() => setActive('income')} 
            style={[
                styles.transactionBtns, 
                active === 'income' ? styles.transactionBtnPrimaryActive : styles.transactionBtnPrimary
              ]}
          >
              <Text style={active === 'income' && styles.transactionBtnPrimaryActive}>Income</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setActive('expenses')} 
            style={[
                styles.transactionBtns,
                active === 'expenses' ? styles.transactionBtnSecondaryActive : styles.transactionBtnSecondary
              ]}
          >
            <Text style={active === 'expenses' && styles.transactionBtnSecondaryActive}>Expenses</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginVertical: 16}}>
          <Transaction isIncome={false} />
          <Transaction isIncome={true}/>
        </View>
      </View>
    )
  }

    return (
      <Wrapper>
        <Overview />
        <Chart />
        <Transactions />
      </Wrapper>
    );
}

const styles = StyleSheet.create({
  overviewTitle: {
    color: theme.color.gray,
    fontSize: 18,
    padding: 4,
    fontWeight:500,
  },
  iconCircle:{
    padding: 2,
    width: 20,
    borderRadius: '50%',
  },
  transaction:{
    flexDirection: 'row'
  },
  transactionBtns: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  transactionBtnPrimary: {
    color: theme.color.gray,
    backgroundColor: theme.color.primary2,
  },
  transactionBtnPrimaryActive: {
    color: theme.color.white,
    fontWeight: 500,
    backgroundColor: theme.color.primary,
  },
  transactionBtnSecondary: {
    color: theme.color.gray,
    backgroundColor: theme.color.secondary2
  },
  transactionBtnSecondaryActive: {
    color: theme.color.white,
    fontWeight: 500,
    backgroundColor: theme.color.secondary,
  }
});

export default StatisticsScreen
