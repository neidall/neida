import * as React from 'react'
// import {View, Text} from 'react-native'
import {TouchableOpacity, FlatList} from 'react-native'
import { Container, DatePicker,List, Left, Right, Header, Content, Card, CardItem, Body,View, Text, Item, Label, Input, Button, Textarea, ListItem, Spinner } from 'native-base';
import Pendientes from '../../../Funciones/Pendientes';


export default class NewPendiente extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            nombre:'',
            fecha:'',
            alarma:'',
            notas:'',
            
        }
    }


    screen(name){
        this.props.navigation.navigate(name)
    }

    crearPendiente(){
        Pendientes.guardar(this.state.nombre, this.state.fecha, this.state.alarma)
        this.screen("Inicio")
    }

    

    render(){
      
        return(
            <Container>
                <Content>
                    <Card transparent style={{padding:20}}>
                        <Label>Titulo</Label>
                        <Item style={{marginBottom:20}}>
                            <Input placeholder="Escribir aqui" onChangeText={nombre => this.setState({nombre})}/>
                        </Item>
                        <Label>Fecha</Label>
                        <Item style={{marginBottom:20}}>
                          <DatePicker
                             date={this.props.date}
                             mode="datetime"
                             placeholder="Date"
                             format="YYYY-MM-DD HH:mm"
                             minDate="2017-01-01"
                             maxDate="2050-01-01"
                             confirmBtnText="Confirm"
                             cancelBtnText="Cancel"
                             locale={"es"}
                             onDateChange={(date) => this.props.onChangeDate(date)}
                           />  
                       </Item>

                        <Label>Alarma</Label>
                        <Item style={{marginBottom:20}}>
                            <Input placeholder="Escribir aqui" onChangeText={alarma => this.setState({alarma})} keyboardType="email-address"/>
                        </Item>
                        <Item style={{marginBottom:20}}>
                            <Left><Text>Notas</Text></Left>
                            <Right><TouchableOpacity onPress={()=> this.screen("ListaN")}>
                            <Text>Añadir</Text>
                          </TouchableOpacity></Right>
                        </Item>
                        
                        <Item style={{marginBottom:20}}>
                            <Left><Text>Contactos</Text></Left>
                            <Right><TouchableOpacity onPress={()=> this.screen("Lista")}>
                            <Text>Añadir</Text>
                          </TouchableOpacity></Right>
                        </Item>
                      
                    </Card>
                </Content>

                <Button full danger onPress={()=>this.crearPendiente()}>
                    <Text>Crear Pendiente</Text>
                </Button>
            </Container>
        )
    }
}