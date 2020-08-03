import * as React from 'react'
import {TouchableOpacity, Alert} from 'react-native'
import {Container, Content, View, ListItem, Left, Right, Icon, Text, Card, Button} from 'native-base'
//new
import Notas from '../../../Funciones/Notas'


export default function TareaView(param){

        let {asunto} = param.item;
        let {descripcion} = param.item;
        let {date} = param.item;


        const pop = (asunto, descripcion,date) =>{
            Alert.alert(
                asunto,
                descripcion,
                date,
                [
                  {
                    text: 'Editar',
                    onPress: () => this.props.navigation.navigate()
                    //console.log('Ask me later pressed')
                  },
                  {
                    text: 'Cerrar',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                  },
                //   { text: 'OK', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
            );
        }

      
       
              


        return(
          <ListItem>
          <Left>
              <TouchableOpacity onPress={()=>pop(asunto, descripcion,date)}>
                  <View style={{flexDirection:'column'}}>
                      <Text style={{fontSize:18,fontWeight:'bold'}} numberOfLines={1}>{asunto}</Text>
                      <Text style={{fontSize:16,color:'#A0A0A0'}} numberOfLines={1}>{descripcion}</Text>
                      <Text style={{fontSize:16,color:'#A0A0A0'}} numberOfLines={1}>{date}</Text>
                  </View>
              </TouchableOpacity>
          </Left>
          <Right>
               <Button full danger onPress={()=>Notas.eliminar(asunto, descripcion,date)}>
                    <Icon active name="trash" /> 
                </Button>
          </Right>
  </ListItem>
        )
}