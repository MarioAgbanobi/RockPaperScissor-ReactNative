import * as React from 'react'
import { Appbar } from 'react-native-paper'
import { Text } from 'react-native'

const Header = () => {
  return (
    <>
    <Appbar.Header style={{backgroundColor: '#fff'}}>
      <Appbar.Content title='Rock Paper Scissor' style={{alignItems: 'center', transform: [{scaleX: 1.5}, {scaleY: 1.5}] }}/>
    </Appbar.Header>
    <Text style={{alignSelf: 'center', }}>Agbanobi stanley</Text>
    </>
  )
}

export default Header

