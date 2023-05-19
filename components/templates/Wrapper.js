
import { View, StyleSheet } from 'react-native';

const Wrapper =({ children })=> {
    return (
      <View style={style.wrapper}>
        { children }
      </View>
    );
}

export default Wrapper

const style = StyleSheet.create({
    wrapper: {
        padding: 32,
    }
});
