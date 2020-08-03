import React from 'react'
import {AsyncStorage} from 'react-native'
//import { not } from 'react-native-reanimated'

class Notas{

    async verify(){//verifica si existe un AsyncStorage con el nombre 'notas'
        const notas = await AsyncStorage.getItem('notas')
        if(notas == null){
            const notas = []
            AsyncStorage.setItem('notas', JSON.stringify(notas))
        }
    }

    async getNotes(){//obtener notas
        const notas =  await AsyncStorage.getItem('notas')
        let notasObject = JSON.parse(notas)
        return notasObject
    }
    
    async eliminar(asunto,descripcion,date){
       this.eliminarC(asunto);
       this.eliminarC(descripcion);
       this.eliminarC(date);
    }

   

    async guardar(setAsunto, setDescripcion,setdate){//Guarda las notas
        this.verify();

        const notas = await AsyncStorage.getItem('notas')
        const notasObtecj = JSON.parse(notas)

        notasObtecj.push(
            {
                asunto: setAsunto,
                descripcion: setDescripcion,
                date :setdate,
            }
        )

        notasObtecj.reverse()

        AsyncStorage.setItem('notas', JSON.stringify(notasObtecj))
        console.log(await this.getNotes())
    }
    
}

export default new Notas;