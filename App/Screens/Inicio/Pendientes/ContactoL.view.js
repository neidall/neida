import * as React from 'react'
import {Alert, TouchableOpacity, ListView} from 'react-native'
import {Container, Content, View, ListItem, Left, Right, Icon, Text, Card, Button} from 'native-base'


const ContactoList = (props) =>{

        let {nombre} = props.item;
        let {telefono} = props.item;
        let {correo} = props.item;
        let {direccion} = props.item;

        return(
            <ListItem>
            <Left>
                <TouchableOpacity onPress={()=>Alert.alert(nombre, 'Teléfono: '+telefono+'\n\n Correo: '+correo+'\n\n Dirección: '+direccion)}>
                    <View style={{flexDirection:'column'}}>
                        <Text style={{fontSize:18,fontWeight:'bold'}} numberOfLines={1}>{nombre}</Text>
                        <Text style={{fontSize:16,color:'#A0A0A0'}} numberOfLines={2}>{telefono}</Text>
                    </View>
                </TouchableOpacity>
            </Left>
            <Right>
            <Button >
            <Text>add</Text>
          </Button>
            </Right>
        </ListItem>
        )
}

export default ContactoList;