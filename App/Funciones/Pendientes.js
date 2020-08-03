import React from 'react'
import {AsyncStorage} from 'react-native'
//import { not } from 'react-native-reanimated'

class Pendientes{

    async verify(){//verifica si existe un AsyncStorage con el nombre 'notas'
        const pendientes = await AsyncStorage.getItem('pendientes')
        if(pendientes == null){
            const pendientes = []
            AsyncStorage.setItem('pendientes', JSON.stringify(pendientes))
        }
    }

    async getPendientes(){//obtener pendientes
        const pendientes =  await AsyncStorage.getItem('pendientes')
        let pendientesObject = JSON.parse(pendientes)
        return  pendientesObject
    }

    async eliminar(key){
        const pendientes = await AsyncStorage.getItem('pendientes')
        const pendientesObtecj = JSON.parse(pendientes)

    }

    async guardar(setNombre, setFecha, setAlarma){//Guarda las pendientes
        
        this.verify();
        
        const pendientes = await AsyncStorage.getItem('pendientes')
        const pendientesObtecj = JSON.parse(pendientes)

        pendientesObtecj.push(
            {
                nombre: setNombre,
                fecha: setFecha,
                alarma: setAlarma,
               
            }
        )

        pendientesObtecj.reverse()
        AsyncStorage.setItem('pendientes', JSON.stringify(pendientesObtecj))
        //console.log(await this.getPendientes())
        
    }

}

export default new Pendientes;