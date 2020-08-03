import 'react-native-gesture-handler';
import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/**Screens */
import InicioView from '../App/Screens/Inicio/Inicio.view'
import NewTarea from '../App/Screens/Inicio/Tareas/NewTarea.view'
import NewContacto from '../App/Screens/Inicio/Contactos/NewContacto.view'
import NewPendiente from '../App/Screens/Inicio/Pendientes/NewPendiente.view'
import Lista from '../App/Screens/Inicio/Pendientes/Lista.view'
import ListaN from '../App/Screens/Inicio/Pendientes/ListaN.view'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={InicioView} 
          options={{
            title: '              Agenda Electrónica',
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen name="NewTarea" component={NewTarea}
          options={{
            title: 'Agregar Tarea'
          }}
        />

        <Stack.Screen name="NewContacto" component={NewContacto}
          options={{
            title: 'Nuevo Contacto'
          }}
        />
        
        <Stack.Screen name="NewPendiente" component={NewPendiente}
         options={{
          title: ' Tarea Pendiente'
        }}
        />
        <Stack.Screen name="Lista" component={Lista}
         options={{
          title: 'Contactos'
        }}
        />

        <Stack.Screen name="ListaN" component={ListaN}
         options={{
          title: 'Notas'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;