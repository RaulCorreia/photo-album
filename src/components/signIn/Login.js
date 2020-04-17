import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Images } from '../../resources/Images';

class Login extends Component {

    
    state = {
      email:"",
      password:"",
      loading: false
    };
    

    _onPressButton = () => {
      this.setState({loading: true});
      setTimeout(this._verifyLogin, 1000);
    }

    _verifyLogin = () =>{

      // Apenas simulação de Login
      // Deve ser digitado alguma coisa nos campos de login e senha
      this.setState({loading: false});
      if(this.state.email.length && this.state.password.length){
        Actions.main();
      } else {
        alert('Email e/ou Senha Invalido');
      }

    }

    render() {
        return (
          <View style={styles.container} >

            <Image
              style={styles.logo}
              source={Images.logo}
            />

            <View style={styles.inputView} >
              <TextInput  
                style={styles.inputText}
                placeholder="Email" 
                placeholderTextColor="#ffffff"
                onChangeText={text => this.setState({email:text})}/>
            </View>

            <View style={styles.inputView} >
              <TextInput  
                secureTextEntry
                style={styles.inputText}
                placeholder="Senha" 
                placeholderTextColor="#ffffff"
                onChangeText={text => this.setState({password:text})}/>
            </View>

            {this.state.loading?
              <ActivityIndicator size="large" color="#0000ff" />
            :
              <TouchableOpacity style={styles.loginBtn} onPress={this._onPressButton}>
                <Text style={styles.loginText}>Acessar</Text>
              </TouchableOpacity>
            }
            

          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 100
  },
  inputView:{
    width:"80%",
    backgroundColor:"#833AB4",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#C13584",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);