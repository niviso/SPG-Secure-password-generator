import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import List from './components/list';
import ListItemSwitch from './components/listItemSwitch';
import ListItemSlider from './components/listItemSlider';
import Password from './components/password';
import PasswordGenerator from './components/passwordGenerator';
import {lightgray,mainWrapperStyle} from './shared/theme';
const App = () => {
  const [settings,setSettings] = useState({
    uppercaseLetters: true,
    lowercaseLetters: true,
    numbers: true,
    symbols: true,
    passwordLength: 12,
    minSymbolLength: 3
  });

  const [password,setPassword] = useState("");

  return (
    <>
    <SafeAreaView style={mainWrapperStyle}>
      <Password data={password}/>
      <List title="PASSWORD FORMAT">
        <ListItemSwitch onChange={(e) => setSettings({...settings,uppercaseLetters:e})} data={settings.uppercaseLetters} title="A-Z" icon="🔠"/>
        <ListItemSwitch onChange={(e) => setSettings({...settings,lowercaseLetters:e})} data={settings.lowercaseLetters} title="a-z" icon="🔡"/>
        <ListItemSwitch onChange={(e) => setSettings({...settings,numbers:e})} data={settings.numbers} title="0-9" icon="🔢"/>
        <ListItemSwitch onChange={(e) => setSettings({...settings,symbols:e})} data={settings.symbols} title="Symbols" icon="🔣"/>
      </List>
      <List title="PASSWORD LENGTH">
        <ListItemSlider min={4} onChange={(e) => setSettings({...settings,passwordLength:e,minSymbolLength: e < settings.minSymbolLength ? e : settings.minSymbolLength})} data={settings.passwordLength}/>
      </List>
      <List title="MINIMUM SYMBOLS LENGTH">
        <ListItemSlider onChange={(e) => setSettings({...settings,minSymbolLength:e,passwordLength: e > settings.passwordLength ? e : settings.password,passwordLength: e > settings.passwordLength ? e : settings.passwordLength})} data={settings.minSymbolLength}/>
      </List>
      <PasswordGenerator onPress={setPassword} data={settings}/>
    </SafeAreaView>
    </>
  );
}

export default App;
