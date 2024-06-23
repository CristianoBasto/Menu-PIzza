import React, {Component} from "react";
import { Text, View, StyleSheet} from 'react-native'

import {Picker} from '@react-native-picker/picker';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      pizza:0,
      pizzas:[
        {key:1, nome:'Strogonoff', valor: 35.90},
        {key:2, nome:'Calabresa', valor: 59.00},
        {key:3, nome:'Quatro queijo', valor: 37},
        {key:4, nome:'Brigadeiro', valor: 25.70},
        {key:5, nome:'Frango Catupiri', valor: 30},

      ]


    };
  }
  render(){

    let pizzasItem = this.state.pizzas.map( (v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })
    return(

      <View style={styles.container}>
       <Text style={styles.logo}> Menu Pizza</Text>

         <Picker 
         selectedValue={this.state.pizza}
         onValueChange={(itemValue, itemIdex)=> this.setState({pizza: itemValue})}
         >
          {pizzasItem}
         </Picker>
       <Text style={styles.pizzas}> Vocês escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>
       <Text style={styles.pizzas}> R$: {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
       
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
container:{
  flex: 1,
  marginTop: 20,
},

logo:{
  textAlign:'center',
  fontSize: 30,
  fontWeight:'bold'

},

pizzas:{
  marginTop:15,
  fontSize:28,
  textAlign: 'center'

}

});

export default App;
