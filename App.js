import React, { Component } from "react";
import { Text, View, StyleSheet, Switch, TextInput, Button, Alert, TouchableOpacity} from "react-native"

import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome:'',
      idade:'',
      status: false,
      valor:250,
      sexo:0,
    sexos:[
      {key: 0, nome: 'Masculino'},
      {key: 1, nome: 'Feminino'},
    ],
  
     
    };
    this.alertar = this.alertar.bind(this);

  }

  alertar(){
    if(this.state.nome === '' || this.state.idade === ''){
      alert('Preencha todos dados corretamente!')
      return;
    }
    alert(

      'Conta aberta com sucesso!! \n\n' + 
      'Nome: '+this.state.nome + '\n' + 
      'Idade: ' + this.state.idade + '\n' +
      'Sexo: '+ this.state.sexos[this.state.sexo].nome + ' \n' +
      'Limite Conta: R$ ' + this.state.valor.toFixed(2) + '\n' +
      'Conta Estudante: ' + ((this.state.status)? 'Ativo' : 'Inativo')
    
    );
      
  }
  render() {

    let sexoItem = this.state.sexos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />
    })

    return (

      <View style={styles.container}>

        <Text style={styles.textoTitulo}> - Banco React - </Text>
        <TextInput style={styles.input}
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent"
          onChangeText={(texto)=> this.setState({nome: texto})}

        />

        <TextInput style={styles.input}
          placeholder="Digite sua idade"
          underlineColorAndroid="transparent"
          onChangeText={(texto)=> this.setState({idade: texto})}
          keyboardType="numeric"
        />

        <Text style={styles.Texto2}> Qual seu Sexo:</Text>
        
        <Picker style={styles.textoPicker}
          selectedValue={this.state.sexo}
          onValueChange={(itemValue, itemIdex) => this.setState({ sexo: itemValue})}>

          {sexoItem}
         
        </Picker>
       
        <Text style={styles.Texto2}> Seu Limite : R$ {this.state.valor.toFixed(2)}</Text>
        
        <Slider
          style={styles.textoSlider}
          minimumValue={0}
          maximumValue={1000}
          onValueChange={(valorSelecionado) => this.setState({ valor: valorSelecionado })}
          minimumTrackTintColor="blue"
          maximumTrackTintColor="red"
        />


        <Text style={styles.Texto2}> Você é estudante? </Text>
        <Switch style={styles.textoSwitch}
        value={this.state.status}
        onValueChange={(valorSwitch)=> this.setState({status: valorSwitch})}
        
        />

        
        <TouchableOpacity style={styles.botao} onPress={this.alertar} underlayColor="#000000">
            <Text style={styles.textoBotao}>Abrir Conta</Text>
        </TouchableOpacity>
          
        

      </View>

    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  textoTitulo:{
    fontSize:32,
    textAlign:'center',
    marginTop:20
  },
  input:{
    height:45,
    width:350,
    borderWidth:1,
    borderColor:'#222',
    margin:10,
    fontSize:22,
    marginHorizontal:'auto',
  },
  Texto2:{
    marginTop:40,
    margin:25,
    fontSize:22,
    lineHeight:25,
    marginTop:15
  },

  textoPicker:{
    
    marginHorizontal:180,
    marginTop:-65,
    marginRight:10,
  
  },

  textoSlider:{
    width:150,
    margin: 40,
    marginRight:250,
    marginTop:-45,
    flexDirection:'row',
    marginHorizontal:250
  },

  textoSwitch:{
    lineHeight:10,
    margin:25,
    marginTop:-50,
    flexDirection:'row',
    
  },

  botao:{
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 150,
    margin: 40,
    fontSize:50
  },

  textoBotao:{
    fontSize:28
  }
});


export default App;