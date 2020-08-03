import * as React from 'react'
// import {View, Text} from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text, Item, Label, Input, Button, Textarea } from 'native-base';
import Contactos from '../../../Funciones/Contactos';

export default class NewContacto extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            nombre:'',
            telefono:'',
            correo:'',
            direccion:'',
        }
    }

    componentDidMount(){
        
    }

    screen(name){
        this.props.navigation.navigate(name)
    }

    crearContacto(){
        Contactos.guardar(this.state.nombre, this.state.telefono, this.state.correo, this.state.direccion)
        this.screen("Inicio")
    }

    guardarContacto(){

    }

    render(){
        return(
            <Container>
                <Content>
                    <Card transparent style={{padding:20}}>
                        <Label>Nombre</Label>
                        <Item style={{marginBottom:20}}>
                            <Input placeholder="Escribir aqui" onChangeText={nombre => this.setState({nombre})}/>
                        </Item>
                        <Label>Telefono o celular</Label>
                        <Item style={{marginBottom:20}}>
                            <Input placeholder="Escribir aqui" onChangeText={telefono => this.setState({telefono})} keyboardType="phone-pad"/>
                        </Item>

                        <Label>Correo</Label>
                        <Item style={{marginBottom:20}}>
                            <Input placeholder="Escribir aqui" onChangeText={correo => this.setState({correo})} keyboardType="email-address"/>
                        </Item>

                        <Label>Direccion</Label>
                        <Item style={{marginBottom:20}}>
                            <Input placeholder="Escribir aqui" onChangeText={direccion => this.setState({direccion})}/>
                        </Item>
                    </Card>
                </Content>

                <Button full danger onPress={()=>this.crearContacto()}>
                    <Text>Crear Contacto</Text>
                </Button>
            </Container>
        )
    }
}