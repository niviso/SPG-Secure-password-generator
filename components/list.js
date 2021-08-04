import Title from './title';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import React from 'react';
import {spacingLarge} from '../shared/theme';

export default function List(props) {
  return(
    <View style={{width:'100%',marginBottom: spacingLarge}}>
    <Title headline title={props.title}/>
    {props.children}
    </View>
  )
}

List.propTypes = {
  title: PropTypes.string.isRequired
};
