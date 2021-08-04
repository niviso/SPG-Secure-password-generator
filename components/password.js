import Title from './title';
import PropTypes from 'prop-types';
import {Text,TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import {gray,spacingLarge,passwordWrapperStyle,textSmall,textLarge} from '../shared/theme';

export default function Password(props) {
  const {data} = props;
  const [showPassword,setShowPassword] = useState(false);
  const hiddenPassword = new Array(data.length).fill().join("*");



  return (
    <TouchableOpacity activeOpacity={1} onPress={() => setShowPassword(!showPassword)} style={passwordWrapperStyle}>
    {data != "" && (
    <>
      <Text style={{...textLarge,textDecorationLine:'underline',marginTop: spacingLarge,textAlign:'center',width:'80%'}}>{showPassword ? data : hiddenPassword}</Text>
      <Text style={{...textSmall,marginTop: spacingLarge,color: gray}}>Click to {showPassword ? 'hide' : 'show'} password</Text>
    </>
    )}
    {data == "" && (
      <Text style={{fontSize: 80,marginTop: spacingLarge,color: gray}}>🔒</Text>
    )}
    </TouchableOpacity>
  )
}


Password.propTypes = {
  data: PropTypes.string.isRequired,
};
