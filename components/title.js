import {gray,textMedium,spacerLarge} from '../shared/theme';
import PropTypes from 'prop-types';
import {View,Text} from 'react-native';
import React from 'react';
export default function Title(props){
  return (
    <View style={{display: 'flex',flexDirection:'row'}}>
    <Text style={{...textMedium,color: gray,marginBottom: props.headline ? 15 : 0,marginLeft: props.headline ? 10 : 0}}>{props.icon}</Text>
    <Text style={{...textMedium,color: gray,marginLeft: props.icon ? 10 : 0 }}>{props.title}</Text>
    </View>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};
