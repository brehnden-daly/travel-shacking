import { Text, SafeAreaView, View, Button, Image } from 'react-native';
import Styles from '../Styling';

const icon = require('../assets/adaptive-icon.png');

export default function LANDING() {
  return (
    <SafeAreaView style={Styles.spaciousContainer}>
      {/* <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      <View style={Styles.tightContainer}>
        {/* Animation below where the text is 'typed' and then 'deleted' illustrating all things that can be optimized */}
        <Text style={Styles.textInfoTitle}>optimize spending...</Text>
        <Image style={{height: "200px", width: "200px", alignSelf: 'center'}} source={require('../assets/adaptive-icon.png')}></Image>

        <Button color={Styles.primaryButton.color} title="sign up"></Button>
        <Button color={Styles.secondaryButton.color} title="log in"></Button>
      </View>
    </SafeAreaView>
  );
}