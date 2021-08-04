import Title from './title';
import PropTypes from 'prop-types';
import {View,Switch,Text} from 'react-native';
import React,{useState} from 'react';
import {gray,lightgray,blue,listItemWrapperStyle,textMedium} from '../shared/theme';
import Slider from '@react-native-community/slider';

export default function ListItemSlider(props) {
  const {data,onChange} = props;
  return(
  <View style={listItemWrapperStyle}>
  <Slider
  style={{width: '90%'}}
  minimumValue={0}
  maximumValue={30}
  value={data}
  minimumTrackTintColor={blue}
  maximumTrackTintColor={lightgray}
  onValueChange={(e) => onChange(Math.round(e))}
/>
<Text style={{color:gray,...textMedium}}>{data}</Text>


  </View>
)
}
