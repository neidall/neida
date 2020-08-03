import * as React from 'react'
import {TouchableOpacity, StatusBar, FlatList, } from 'react-native'
import { Container, Header, Content, Tab, Tabs, Button, Text, View, Icon, Spinner } from 'native-base';
import Notas from '../../Funciones/Notas'
import Contactos from '../../Funciones/Contactos'

/**p */
import Pendientes from '../../Funciones/Pendientes'


/**Pestañas */
import PendienteView from './Pendientes/Pendiente.view'
import TareaView from './Tareas/Tarea.view'
import ContactoView from './Contactos/Contacto.view'


export default class InicioView extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            notas: [],
            notas_load: true,

            contactos: [],
            contactos_load:true,

            pendientes: [],
            pendientes_load:true,
        }
    }
      eliminar(){}

    componentDidMount(){
        this.getNotasList()
        this.getContactosList()
        this.getPendientesList()
    }

    getContactosList(){
        setTimeout( async()=>{
            const contactosObject = await Contactos.getContactos();
            this.setState({contactos: contactosObject, contactos_load:false})
            this.getContactosList()
        }, 2000);
    }

    getNotasList(){
        setTimeout(async()=>{
            const notasObject = await Notas.getNotes()
            this.setState({notas: notasObject, notas_load: false})
            this.getNotasList()
        }, 2000)
    }


    getPendientesList(){
        setTimeout(async()=>{
            const pendientesObject = await Pendientes.getPendientes()
            this.setState({pendientes: pendientesObject, pendientes_load: false})
            this.getPendientesList()
        }, 2000)
    }

    screen(name){
        this.props.navigation.navigate(name)
    }

    render(){

        let {notas} = this.state;
        let {contactos} = this.state;
        let {pendientes} = this.state;

        return(
            <Container>
                <StatusBar backgroundColor="black" barStyle="light-content"/>
                <Tabs>
                   <Tab heading="Tareas Pendientes" tabStyle={{backgroundColor: '#111'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'black'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
                        <FlatList
                            data={pendientes}
                            keyExtractor={(x,i)=>i.toString()}
                            ListFooterComponent={()=>this.state.pendientes_load ? <Spinner/> : null}
                            ListEmptyComponent={<Text style={{textAlign:'center',padding:20}}>Sin Pendientes</Text>}
                            renderItem={({item}) => <PendienteView item={item} func={this}/>}
                        />

                        <View>
                            <Button full dark onPress={()=> this.screen("NewPendiente")}>
                                <Text>Agregar <Icon type="AntDesign" name="pluscircleo" style={{fontSize:12,color:'white'}}/></Text>
                            </Button>
                        </View>
                    </Tab>

                    <Tab heading="Notas" tabStyle={{backgroundColor: '#111'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'black'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
                        {/* <TareaView this={this}/>Tareas */}
                        
                        <FlatList
                            data={notas}
                            keyExtractor={(x,i)=>i.toString()}
                            ListFooterComponent={()=>this.state.notas_load ? <Spinner/> : null}
                            ListEmptyComponent={<Text style={{textAlign:'center',padding:20}}>Sin notas</Text>}
                            renderItem={({item}) => <TareaView item={item} this={this}/>}
                        />

                        <View>
                            <Button full dark onPress={()=> this.screen("NewTarea")}>
                                <Text>Agregar <Icon type="AntDesign" name="pluscircleo" style={{fontSize:12,color:'white'}}/></Text>
                            </Button>
                        </View>
                    </Tab>

                    <Tab heading="Contactos" tabStyle={{backgroundColor: '#111'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'black'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
                        <FlatList
                            data={contactos}
                            keyExtractor={(x,i)=>i.toString()}
                            ListFooterComponent={()=>this.state.contactos_load ? <Spinner/> : null}
                            ListEmptyComponent={<Text style={{textAlign:'center',padding:20}}>Sin Contactos</Text>}
                            renderItem={({item}) => <ContactoView item={item} func={this}/>}
                        />

                        <View>
                            <Button full dark onPress={()=> this.screen("NewContacto")}>
                                <Text>Agregar <Icon type="AntDesign" name="pluscircleo" style={{fontSize:12,color:'white'}}/></Text>
                            </Button>
                        </View>
                    </Tab>
                </Tabs>
            </Container>

        )
    }
}
