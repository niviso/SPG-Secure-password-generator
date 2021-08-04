
import React from "react";
import PropTypes from 'prop-types';
import { Text,TouchableOpacity,Alert } from "react-native";
import * as Clipboard from 'expo-clipboard';
import {lightgray,blue,gray,flexCenterStyle,spacingSmall,fontSizeMedium,fontSizeSmall,spacingLarge} from '../shared/theme';

export default function PasswordGenerator(props){
  const {onPress,data} = props;

  const GeneratePassword = () => {
    let charset = "";
    let symbols = "!@#$%^&*()_+~|}´`{[]\:;?><,./-='";
    let new_password = "";

    if(data.uppercaseLetters){
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(data.lowercaseLetters){
      charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if(data.numbers){
      charset += "0123456789";
    }
    if(data.symbols){
      for (var i = 0;i < data.minSymbolLength; ++i) {
        new_password += symbols.charAt(Math.floor(Math.random() * symbols.length));
      }
    }

    for (var i = new_password.length; i < data.passwordLength; i++) {
      new_password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    //Shuffle
    new_password = new_password.split(/\s\b(?!\s)/).sort(function(){return 0.5-Math.random()}).join(' ');

    onPress(new_password);
    Clipboard.setString(new_password);
    Alert.alert("Password copied to clipboard.");

  }

  return(
    <TouchableOpacity onPress={GeneratePassword} style={{width:'100%',height: 'auto',flex:1,marginTop:spacingLarge,...flexCenterStyle}}>
    <Text style={{textAlign:'center',color:blue,fontSize: fontSizeMedium}}>Generate new password</Text>
    <Text style={{textAlign:'center',color:gray,fontSize: fontSizeSmall,marginTop: spacingSmall}}>The password will copy to your clipboard automatically</Text>
    </TouchableOpacity>
  )
}

PasswordGenerator.propTypes = {
  data: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired
};
