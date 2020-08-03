import * as React from 'react'
import {TouchableOpacity, StatusBar, FlatList, } from 'react-native'
import { Container, Header, Content, Tab, Tabs, Button, Text, View, Icon, Spinner } from 'native-base';

import Contactos from '../../../Funciones/Contactos';
/**Pestañas */
import ContactoList from './ContactoL.view'


export default class Lista extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            contactos: [],
            contactos_load:true,
         }
    }
      

    componentDidMount(){
           this.getContactosList()
       }

    getContactosList(){
        setTimeout( async()=>{
            const contactosObject = await Contactos.getContactos();
            this.setState({contactos: contactosObject, contactos_load:false})
            this.getContactosList()
        }, 2000);
    }

    screen(name){
        this.props.navigation.navigate(name)
    }

    render(){

        let {contactos} = this.state;
        

        return(
            <Container>
                <StatusBar backgroundColor="black" barStyle="light-content"/>
                <Tabs>
                    <Tab heading="Contactos" tabStyle={{backgroundColor: '#111'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'black'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
                        <FlatList
                            data={contactos}
                            keyExtractor={(x,i)=>i.toString()}
                            ListFooterComponent={()=>this.state.contactos_load ? <Spinner/> : null}
                            ListEmptyComponent={<Text style={{textAlign:'center',padding:20}}>Sin Contactos</Text>}
                            renderItem={({item}) => <ContactoList item={item} func={this}/>}
                        />
                    </Tab>
                </Tabs>
            </Container>

        )
    }
}
