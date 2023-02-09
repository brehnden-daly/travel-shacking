import { Text, SafeAreaView, View, Button, Image } from 'react-native';
import {useState, useEffect} from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Styles from '../Styling';
import { StackParams } from '../Navigation/navigation_stack_params';

const icon = require('../assets/adaptive-icon.png');




type Props = NativeStackScreenProps<StackParams>;

export default function LANDING({navigation}: Props) {

  const [optimizeLabels, setOptimizeLabels] = useState( ["getting points...             ", "using points...             "] );
  const [currLabel, setCurrLabel] = useState(0);
  const [currIndex, setCurrIndex] = useState(0);

  

  useEffect(() => {
    setTimeout(() => {
      if (currIndex === optimizeLabels[currLabel].length) {
        setCurrLabel( currLabel < optimizeLabels.length-1 ? currLabel+1:0 )
      }
      setCurrIndex( currIndex < optimizeLabels[currLabel].length ? currIndex + 1:0 )
    }, 100)
  }, [currIndex]);


  return (
    <SafeAreaView style={Styles.generalContainer}>

      <View style={{flex: 3, flexDirection: 'column-reverse'}}>
        <Image style={{height: "200px", width: "200px", alignSelf: 'center', borderRadius:50, overflow: 'hidden'}} source={require('../assets/prototype_logos/logo_1.png')}></Image>
      </View>

      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, flexDirection: 'column-reverse'}}>
          <Text style={{textAlign: 'right', fontSize: 18, fontFamily: 'courier', fontWeight: 'bold'}}>Optimize </Text>
        </View>
        <View style={{flex: 1.35, flexDirection: 'column-reverse'}}>
          <Text style={{textAlign: 'left', fontSize: 18, fontFamily: 'courier', fontWeight: 'bold'}}>{optimizeLabels[currLabel].slice(0,currIndex)}</Text>
        </View>
        
      </View>

      <View style={{flex: 2, width:"50%", maxWidth:300, alignSelf: 'center', alignItems: 'stretch', justifyContent: 'space-evenly'}}>
        <Button color={Styles.secondaryButton.color} title="sign up" onPress={() => navigation.navigate('Signup')}></Button>
        <Button color={Styles.secondaryButton.color} title="log in" onPress={() => navigation.navigate('Login')}></Button>
      </View>

    </SafeAreaView>
  );
}