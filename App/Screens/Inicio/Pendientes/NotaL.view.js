import * as React from 'react'
import {TouchableOpacity, Alert} from 'react-native'
import {Container, Content, View, ListItem, Left, Right, Icon, Text, Card, Button} from 'native-base'
//new
import NotasN from '../../../Funciones/NotasN';


export default function NotaL(param){

        let {asunto} = param.item;
        let {descripcion} = param.item;


        const pop = (asunto, descripcion) =>{
            Alert.alert(
                asunto,
                descripcion,
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
              <TouchableOpacity onPress={()=>pop(asunto, descripcion)}>
                  <View style={{flexDirection:'column'}}>
                      <Text style={{fontSize:18,fontWeight:'bold'}} numberOfLines={1}>{asunto}</Text>
                      <Text style={{fontSize:16,color:'#A0A0A0'}} numberOfLines={1}>{descripcion}</Text>
                  </View>
              </TouchableOpacity>
          </Left>
          <Right>
          <Button>
            <Text>Add</Text>
          </Button>
          </Right>
  </ListItem>
        )
}