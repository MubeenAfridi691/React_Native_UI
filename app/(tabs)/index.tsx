import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../SRC/Signuplogin/login/Login'
import Signup_enter_email from '../../SRC/Signuplogin/signup/Signup_enter_email'
import Signup_Created_Account from '../../SRC/Signuplogin/signup/Signup_created_Account'
import Signup_Choose_Username from '../../SRC/Signuplogin/signup/Signup_Choose_Username'
import Signup_enter_verification_Code from '../../SRC/Signuplogin/signup/SignUp_enter_verification_Code'
import Forget_password_Enter_email from '../../SRC/Signuplogin/forgetpassward/Forget_password_Enter_email'
import MainPage from '../../SRC/MainPage/MainPage'
import Signup_choose_password from '../../SRC/Signuplogin/signup/Signup_choose_Password'
import Forget_password_Enter_verification_Code from '../../SRC/Signuplogin/forgetpassward/Forget_passward_Enter_verificationcode'
import Forget_Password_ChoosePassword from '../../SRC/Signuplogin/forgetpassward/Forget_Password_ChoosePassword'
import Forget_password_account_recovery from '../../SRC/Signuplogin/forgetpassward/Forget_password_account_recovery'
import All_chating from '../../SRC//ChatSection/All_Chating'
import Searchuserpage from '../../SRC/MainPage/Searchuserpage'
import Notification from '../../SRC/MainPage/Notification'
import My_user_profile from '../../SRC/Profile/My_user_profile'
import Setting from '../../SRC/Components/Setting'
import Changepassword from '../../SRC/MainPage/Changepassword'
import Uploadpic from '../../SRC/MainPage/Uploadpic'

const Stack = createNativeStackNavigator();
const index = () => {
  
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator initialRouteName='login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup_enter_email" component={Signup_enter_email} />
        <Stack.Screen name="Signup_Created_Account" component={Signup_Created_Account} />
        <Stack.Screen name="Signup_Choose_Username" component={Signup_Choose_Username} />
        <Stack.Screen name="Signup_enter_verification_Code" component={Signup_enter_verification_Code} />
        <Stack.Screen name="Forget_password_Enter_email" component={Forget_password_Enter_email} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="Signup_choose_password" component={Signup_choose_password} />
        <Stack.Screen name="Forget_password_Enter_verification_Code" component={Forget_password_Enter_verification_Code} />
        <Stack.Screen name="Forget_Password_ChoosePassword" component={Forget_Password_ChoosePassword} />
        <Stack.Screen name="Forget_password_account_recovery" component={Forget_password_account_recovery} />
        <Stack.Screen name="All_chating" options={{
          animation: 'slide_from_bottom'
        }} component={All_chating} />
        <Stack.Screen name="Searchuserpage" component={Searchuserpage} options={{
          animation: 'slide_from_left'
        }} />
        <Stack.Screen name="Notification" component={Notification} options={{
          animation: 'slide_from_left'
        }} />
        <Stack.Screen name="My_user_profile" component={My_user_profile} options={{
          animation: 'slide_from_left'
        }} />
        <Stack.Screen name="setting" component={Setting} options={{
          animation: 'slide_from_bottom'
        }} />
        <Stack.Screen name="Changepassword" component={Changepassword} options={{
          animation: 'slide_from_bottom'
        }} />
         <Stack.Screen name="Uploadpic" component={Uploadpic} options={{
          animation: 'slide_from_bottom'
        }} />
        
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default index

const styles = StyleSheet.create({})