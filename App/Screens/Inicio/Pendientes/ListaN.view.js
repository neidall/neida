import * as React from 'react'
import {TouchableOpacity, StatusBar, FlatList, } from 'react-native'
import { Container, Header, Content, Tab, Tabs, Button, Text, View, Icon, Spinner } from 'native-base';

import Notas from '../../../Funciones/Notas'

/**p */

import NotaL from './NotaL.view'



export default class ListaN extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            notas: [],
            notas_load: true,
        }
    }
      

    componentDidMount(){
        this.getNotasList()
    }

    getNotasList(){
        setTimeout(async()=>{
            const notasObject = await Notas.getNotes()
            this.setState({notas: notasObject, notas_load: false})
            this.getNotasList()
        }, 2000)
    }

    screen(name){
        this.props.navigation.navigate(name)
    }

    render(){

        let {notas} = this.state;

        return(
            <Container>
                <StatusBar backgroundColor="black" barStyle="light-content"/>
               

                    <Tab heading="Notas" tabStyle={{backgroundColor: '#111'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'black'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
                        {/* <TareaView this={this}/>Tareas */}
                        
                        <FlatList
                            data={notas}
                            keyExtractor={(x,i)=>i.toString()}
                            ListFooterComponent={()=>this.state.notas_load ? <Spinner/> : null}
                            ListEmptyComponent={<Text style={{textAlign:'center',padding:20}}>Sin notas</Text>}
                            renderItem={({item}) => <NotaL item={item} this={this}/>}
                        />

                        
                    </Tab>
               
            </Container>

        )
    }
}
