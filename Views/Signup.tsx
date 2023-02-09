import { TextInput, SafeAreaView, View, Button, Image } from 'react-native';
import {useState, useEffect} from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Styles from '../Styling';
import { StackParams } from '../Navigation/navigation_stack_params';




type Props = NativeStackScreenProps<StackParams>;

export default function SIGNUP() {


    return(
        <View style={Styles.generalContainer}>
            <View style={{flex: 2, flexDirection: 'column-reverse'}}>
                <Image style={{height: "200px", width: "200px", alignSelf: 'center', borderRadius:50, overflow: 'hidden'}} source={require('../assets/prototype_logos/logo_1.png')}></Image>
            </View>

            <View style={{flex: 2, width:"50%", maxWidth:300, alignSelf: 'center', alignItems: 'stretch', justifyContent: 'space-around'}}>
                <TextInput style={Styles.textInputGeneral} placeholder='E-Mail'></TextInput>
                <TextInput style={Styles.textInputGeneral} placeholder='Phone Number'></TextInput>
                <TextInput style={Styles.textInputGeneral} placeholder='Password'></TextInput>
                <TextInput style={Styles.textInputGeneral} placeholder='Confirm Password'></TextInput>
            </View>

            <View style={{flex: 3, width:"50%", maxWidth:300, alignSelf: 'center', alignItems: 'stretch', justifyContent: 'space-around'}}>
                <Button color={Styles.secondaryButton.color} title="Sign up" onPress={() => console.log("Signing up...")}></Button>
                <Button title="Google"></Button>
            </View>
        </View>
    );
}