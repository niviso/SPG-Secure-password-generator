import React from 'react';
import Title from './title';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {spacingLarge} from '../shared/theme';

export default function List(props) {
  const {title} = props;
  return(
    <View style={{width:'100%',marginBottom: spacingLarge}}>
    <Title headline title={title}/>
    {props.children}
    </View>
  )
}

List.propTypes = {
  title: PropTypes.string.isRequired
};
