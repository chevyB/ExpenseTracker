import { View, StyleSheet } from 'react-native';


const Box = ({ bgcolor, renderTop, renderBottom, }) => {
  return (
      <View style={[styles.box, {backgroundColor: bgcolor}]}>
        <View style={{flexDirection: 'row'}}>
            {renderTop}
        </View>
        <View style={{flexDirection: 'row'}}>
          {renderBottom}
        </View>
      </View>
  );
};

export default Box;

const styles = StyleSheet.create({
    box: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        margin: 4,
        borderRadius: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
})
