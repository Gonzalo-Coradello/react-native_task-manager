import { useState } from 'react'
import { styles } from './styles'
import { View, TextInput, Button, SafeAreaView } from 'react-native'

export default function App() {
  const [borderColor, setBorderColor] = useState('#C5C9E7')

  const handleFocus = () => {
    setBorderColor('#424D9E')
  }
  const handleBlur = () => {
    setBorderColor('#C5C9E7')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            style={[styles.input, { borderColor: borderColor }]} 
            placeholder='add new task' 
            autoCapitalize='none'
            autoCorrect={false}
            cursorColor='#424D9E'
            selectionColor='#D4D7ED'
            placeholderTextColor='#C5C9E7'
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <Button color='#424D9E' title='create' />
        </View>
      </View>
    </SafeAreaView>
  )
}
