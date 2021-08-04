import Title from './title';
import PropTypes from 'prop-types';
import {View,Text} from 'react-native';
import React,{useState} from 'react';
import {gray,lightgray,blue,listItemWrapperStyle,textMedium} from '../shared/theme';
import Slider from '@react-native-community/slider';

export default function ListItemSlider(props) {
  const {data,onChange,min=0} = props;
  return(
  <View style={listItemWrapperStyle}>
  <Slider
  style={{width: '90%'}}
  minimumValue={min}
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

ListItemSlider.propTypes = {
  data: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number
};
