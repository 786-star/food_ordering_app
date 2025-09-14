import { View, Text, Button } from 'react-native'
import { router } from 'expo-router'

const SignUp = () => {
  return (
    <View>
      <Text>sign-up</Text>
            <Button title='Sign Up' onPress={()=> router.push("/sign-in")}></Button>
      
    </View>
  )
}

export default SignUp;