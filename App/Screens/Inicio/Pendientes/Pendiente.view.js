import * as React from 'react'
import {Alert, TouchableOpacity,Pendientes} from 'react-native'
import { View, ListItem, Left, Right, Icon, Text, Card, Button} from 'native-base'


const PendienteView = (props) =>{

        let {nombre} = props.item;
        let {fecha} = props.item;
        let {alarma} = props.item;

        return(
            <ListItem key = {props.time}>
                <Left>
                    <TouchableOpacity onPress={()=>Alert.alert(nombre, 'Fecha: '+fecha+'\n\n Alarma: '+alarma)}>
                        <View style={{flexDirection:'column'}}>
                            <Text style={{fontSize:18,fontWeight:'bold'}} numberOfLines={1}>{nombre}</Text>
                            <Text style={{fontSize:16,color:'#A0A0A0'}} numberOfLines={1}>{fecha}</Text>
                        </View>
                    </TouchableOpacity>
                </Left>
                <Right>
                <TouchableOpacity onPress>
                <Icon active name="trash"  />           
                </TouchableOpacity>
                </Right>
            </ListItem>
        )
}

export default PendienteView;