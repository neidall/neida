import * as React from 'react'
// import {View, Text} from 'react-native'
import { Container, DatePicker, Content, Card, CardItem, Body, Text, Item, Label, Input, Button, Textarea } from 'native-base';
import Notas from '../../../Funciones/Notas'

export default class NewTarea extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            asunto:'',
            descripcion:'',
            date:''
        }
    }

    componentDidMount(){
        
    }

    screen(name){
        this.props.navigation.navigate(name)
    }

    crearNota(){
        Notas.guardar(this.state.asunto, this.state.descripcion,this.state.date)
        this.screen("Inicio")
    }

    guardarNote(){

    }

    render(){
        return(
            <Container>
                <Content>
                    <Card transparent style={{padding:20}}>
                        <Label>Asunto</Label>
                        <Item style={{marginBottom:20}}>
                            <Input placeholder="Escribir aqui" onChangeText={asunto => this.setState({asunto})}/>
                        </Item>
                        
                        <Label>Descripción</Label>
                        <Item style={{marginBottom:20}}>
                            <Textarea style={{width:'100%',borderRadius:5,padding:10}} rowSpan={5} bordered placeholder="Escribir aqui" onChangeText={descripcion => this.setState({descripcion})}/>
                        </Item>

                        <Label>Citar Nota</Label>
                        <Item style={{marginBottom:20}}>
                          <DatePicker
                             date={this.props.date}
                             mode="date"
                             placeHolderText="Seleccione fecha"
                             format="DD-MM-YYYY "
                             minDate="01-01-2017"
                             maxDate="01-01-2050"
                             confirmBtnText="Confirm"
                             cancelBtnText="Cancel"
                             locale={"es"}
                             onDateChange={date => this.setState({date})}
                             //onDateChange={(date) => this.props.onChangeDate(date)}
                           />  
                          
                       </Item>
                       
                    </Card>
                </Content>

                <Button full danger onPress={()=>this.crearNota()}>
                    <Text>Crear Nota</Text>
                </Button>
            </Container>
        )
    }
}