import React from 'react'
import {AsyncStorage} from 'react-native'
//import { not } from 'react-native-reanimated'

class Contactos{

    async verify(){//verifica si existe un AsyncStorage con el nombre 'notas'
        const contactos = await AsyncStorage.getItem('contactos')
        if(contactos == null){
            const contactos = []
            AsyncStorage.setItem('contactos', JSON.stringify(contactos))
        }
    }



    async getContactos(){//obtener contactos
        const contactos =  await AsyncStorage.getItem('contactos')
        let contactosObject = JSON.parse(contactos)
        return  contactosObject
    }

    async guardar(setNombre, setTelefono, setCorreo, setDireccion){//Guarda las contactos
        
        this.verify();
        
        const contactos = await AsyncStorage.getItem('contactos')
        const contactosObtecj = JSON.parse(contactos)

        contactosObtecj.push(
            {
                nombre: setNombre,
                telefono: setTelefono,
                correo: setCorreo,
                direccion: setDireccion,
            }
        )

        contactosObtecj.reverse()
        AsyncStorage.setItem('contactos', JSON.stringify(contactosObtecj))
        // console.log(await this.getContactos())
        
    }

}

export default new Contactos;