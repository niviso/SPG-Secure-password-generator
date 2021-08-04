import Title from './title';
import PropTypes from 'prop-types';
import {Text,TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import {gray,spacingLarge,passwordWrapperStyle,textSmall,textLarge} from '../shared/theme';

export default function ListItemPassword(props) {
  const {data} = props;
  const [showPassword,setShowPassword] = useState(false);
  const hiddenPassword = new Array(data.length).fill().join("*");
  return (
    <TouchableOpacity activeOpacity={1} onPress={() => setShowPassword(!showPassword)} style={passwordWrapperStyle}>
    <Text style={{...textLarge,textDecorationLine:'underline',marginTop: spacingLarge,textAlign:'center',width:'80%'}}>{showPassword ? data : hiddenPassword}</Text>
    <Text style={{...textSmall,marginTop: spacingLarge,color: gray,fontSize: 12}}>Click to {showPassword ? 'hide' : 'show'} password</Text>
    </TouchableOpacity>
  )
}
