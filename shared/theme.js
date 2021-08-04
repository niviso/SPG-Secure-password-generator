import { Dimensions } from 'react-native';

const gray = "#85858A";
const lightgray = "#F2F2F6";
const white = "#ffffff";
const black = "#000000";
const blue = "#3478F6";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const fontSizeSmall = 10;
const fontSizeMedium = 14;
const fontSizeLarge = 30;
const fontFamilyPassword = "Menlo";
const fontFamily = "Helvetica Neue";

const spacingSmall = 5;
const spacingMedium = 10;
const spacingLarge = 15;

const flexCenterStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent:'center'
}

const textSmall = {
  fontFamily: fontFamily,
  fontSize:fontSizeSmall,
  lineHeight: 20
}
const textMedium = {
  fontFamily: fontFamily,
  fontSize:fontSizeMedium,
  lineHeight: 20
}
const textLarge = {
  fontFamily: fontFamilyPassword,
  fontSize:fontSizeLarge
}
const listItemWrapperStyle = {
  width:windowWidth,
  paddingLeft: spacingLarge,
  paddingRight: spacingLarge,
  backgroundColor:white,
  height: 50,
  display: 'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  marginBottom: 2
}

const passwordWrapperStyle = {
  width:windowWidth,
  paddingLeft: spacingLarge,
  paddingRight: spacingLarge,
  backgroundColor:white,
  height: windowHeight * 0.20,
  marginBottom: 2,
  marginBottom: spacingLarge,
  ...flexCenterStyle
}


export {gray,lightgray,white,black,blue,fontSizeSmall,fontSizeMedium,fontSizeLarge,fontFamily,spacingSmall,spacingMedium,spacingLarge,flexCenterStyle,listItemWrapperStyle,passwordWrapperStyle,textSmall,textMedium,textLarge};
