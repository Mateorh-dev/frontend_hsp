import { styles } from "@/assets/styles";
import { Modal, Pressable, ScrollView, View } from "react-native";
import Titulos from "./Titulos";
import Subtitulos from "./Subtitulos";
import Textos from "./Textos";
import SeparadorHorizontal from "./SeparadorHorizontal";
import { Ionicons } from "@expo/vector-icons";
import { dimensions } from "@/assets/dimensions";
import { useEffect, useState } from "react";
import { colors } from "@/assets/colors";
import api from "@/src/configAxios";

type Props = {
    dato : any[];
};

export default function CardDatosPaciente({dato}: Props) {
    const paciente = dato[0];

    const nombreConsulta = [];
    nombreConsulta.push(paciente.primerNombre);
    if (paciente.segundoNombre !== "") {nombreConsulta.push(`${paciente.segundoNombre[0]}.`);}
    nombreConsulta.push(paciente.primerApellido);
    if (paciente.segundoApellido !== "") {nombreConsulta.push(paciente.segundoApellido);}

    const nombreCompleto = [];
    nombreCompleto.push(paciente.primerNombre);
    if (paciente.segundoNombre !== "") {nombreCompleto.push(paciente.segundoNombre);}
    nombreCompleto.push(paciente.primerApellido);
    if (paciente.segundoApellido !== "") {nombreCompleto.push(paciente.segundoApellido);}

    const [visivilidadModal, actualizarVisivilidadModal] = useState(false);

    const[datosMunicipio, actualizarDatosMunicipio] = useState(Object);
    const[datosDepartamento, actualizarDatosDepartamento] = useState(Object);

    const gapiDatosMunicipio = async (dato:string) => {
        try {
            const resultado: any = await api.get(`select/municipio?codigoMunicipio=${dato}`);
            actualizarDatosMunicipio(resultado.data[0]);
        } catch (error) {
            actualizarDatosMunicipio([]);
        }
    }
    const gapiDatosDepartamento = async (dato:string) => {
        try {
            const resultado: any = await api.get(`select/departamento?codigoDepartamento=${dato}`);
            actualizarDatosDepartamento(resultado.data[0]);
        } catch (error) {
            actualizarDatosDepartamento([]);
        }
    }

    useEffect(() => { gapiDatosMunicipio(paciente.fk_codigoMunicipio); }, []);
    useEffect(() => {
        if (datosMunicipio.fk_codigoDepartamento) {
            gapiDatosDepartamento(datosMunicipio.fk_codigoDepartamento);
        }
    })

    // gapiDatosMunicipio(paciente.fk_codigoMunicipio);
    // gapiDatosDepartamento(datosMunicipio.fk_codigoDepartamento);

    return (
        <View>
            <Pressable onPress={() => actualizarVisivilidadModal(true)}>
            <View style={[styles.camposTexto,styles.inputSimple]}>
                <Subtitulos>
                    <Ionicons
                        name="person"
                        size={dimensions.figura.xs}
                        />
                    {` ${nombreConsulta.join(" ")}`}
                </Subtitulos>
                <Textos resaltado>Ver datos completos</Textos>
            </View>
            </Pressable>
            <Modal
                visible={visivilidadModal}
                animationType="slide"
                >
                <ScrollView>
                <View style={styles.camposTexto}>
                <Pressable style={styles.botonSecundario} onPress={() => actualizarVisivilidadModal(false)}>
                    <Ionicons name="arrow-back" color={colors.primario} size={dimensions.texto.l}/>
                </Pressable>
                <Titulos resaltado>{paciente.numeroIdentificacion}</Titulos>
                <Titulos>{nombreCompleto.join(" ")}</Titulos>
                <SeparadorHorizontal/>
                <Textos>
                    <Ionicons
                        name="call"
                        size={dimensions.figura.xs}
                    />
                    {` ${paciente.telefono}`}
                </Textos>
                <Textos>
                    <Ionicons
                        name="mail"
                        size={dimensions.figura.xs}
                    />
                    {` ${paciente.correoElectronico}`}
                </Textos>
                <Textos>
                    {paciente.direccion}
                </Textos>
                <Textos resaltado>
                    {`${datosMunicipio.nombreMunicipio}, ${datosDepartamento.nombreDepartamento}`}
                </Textos>
                <SeparadorHorizontal/>
                <Textos>
                    {paciente.profesion}
                </Textos>
                <Textos>
                    {paciente.antecedentes}
                </Textos>
                <Textos>
                    {paciente.alergias}
                </Textos>
                </View>
                </ScrollView>
            </Modal>
        </View>    
    );
}

// import React, { useState, useEffect, useMemo } from 'react';
// import { View, Pressable, Modal, ScrollView } from 'react-native';
// // Asegúrate de importar tus componentes de diseño (Subtitulos, Textos, Ionicons, etc.)

// export default function CardDatosPaciente({ dato }: Props) {
//     const paciente = dato[0];

//     // 1. Optimización: memorizar los nombres para que no se re-calculen en cada render
//     const nombreConsulta = useMemo(() => {
//         const nombre = [];
//         nombre.push(paciente.primerNombre);
//         if (paciente.segundoNombre !== "") {
//             nombre.push(`${paciente.segundoNombre[0]}.`);
//         }
//         nombre.push(paciente.primerApellido);
//         if (paciente.segundoApellido !== "") {
//             nombre.push(paciente.segundoApellido);
//         }
//         return nombre.join(" ");
//     }, [paciente]);

//     const nombreCompleto = useMemo(() => {
//         const nombre = [];
//         nombre.push(paciente.primerNombre);
//         if (paciente.segundoNombre !== "") {
//             nombre.push(paciente.segundoNombre);
//         }
//         nombre.push(paciente.primerApellido);
//         if (paciente.segundoApellido !== "") {
//             nombre.push(paciente.segundoApellido);
//         }
//         return nombre.join(" ");
//     }, [paciente]);

//     const [visivilidadModal, actualizarVisivilidadModal] = useState(false);
    
//     // Es mejor inicializar con objetos vacíos {} o null en lugar de la función constructora Object
//     const [datosMunicipio, actualizarDatosMunicipio] = useState<any>({});
//     const [datosDepartamento, actualizarDatosDepartamento] = useState<any>({});

//     const gapiDatosMunicipio = async (codigo: string) => {
//         try {
//             const resultado: any = await api.get(`select/municipio?codigoMunicipio=${codigo}`);
//             actualizarDatosMunicipio(resultado.data[0] || {});
//         } catch (error) {
//             actualizarDatosMunicipio({});
//         }
//     }

//     const gapiDatosDepartamento = async (codigo: string) => {
//         try {
//             const resultado: any = await api.get(`select/departamento?codigoDepartamento=${codigo}`);
//             actualizarDatosDepartamento(resultado.data[0] || {});
//         } catch (error) {
//             actualizarDatosDepartamento({});
//         }
//     }

//     // 2. Corregido: Se ejecuta cuando cambia el código de municipio del paciente
//     useEffect(() => {
//         if (paciente?.fk_codigoMunicipio) {
//             gapiDatosMunicipio(paciente.fk_codigoMunicipio);
//         }
//     }, [paciente?.fk_codigoMunicipio]);

//     // 3. Corregido: Solo se ejecuta CUANDO CAMBIA el fk_codigoDepartamento obtenido
//     useEffect(() => {
//         if (datosMunicipio?.fk_codigoDepartamento) {
//             gapiDatosDepartamento(datosMunicipio.fk_codigoDepartamento);
//         }
//     }, [datosMunicipio?.fk_codigoDepartamento]);


//     return (
//         <View>
//             <Pressable onPress={() => actualizarVisivilidadModal(true)}>
//                 <View style={[styles.camposTexto, styles.inputSimple]}>
//                     <Subtitulos>
//                         <Ionicons name="person" size={dimensions.figura.xs} />
//                         {` ${nombreConsulta}`}
//                     </Subtitulos>
//                     <Textos resaltado>Ver datos completos</Textos>
//                 </View>
//             </Pressable>

//             <Modal visible={visivilidadModal} animationType="slide">
//                 <ScrollView>
//                     <View style={styles.camposTexto}>
//                         <Pressable style={styles.botonSecundario} onPress={() => actualizarVisivilidadModal(false)}>
//                             <Ionicons name="arrow-back" color={colors.primario} size={dimensions.texto.l}/>
//                         </Pressable>
//                         <Titulos resaltado>{paciente.numeroIdentificacion}</Titulos>
//                         <Titulos>{nombreCompleto}</Titulos>
//                         <SeparadorHorizontal/>
//                         <Textos>
//                             <Ionicons name="call" size={dimensions.figura.xs} />
//                             {` ${paciente.telefono}`}
//                         </Textos>
//                         <Textos>
//                             <Ionicons name="mail" size={dimensions.figura.xs} />
//                             {` ${paciente.correoElectronico}`}
//                         </Textos>
//                         <Textos>{paciente.direccion}</Textos>
//                         <Textos resaltado>
//                             {`${datosMunicipio?.nombreMunicipio || ''}, ${datosDepartamento?.nombreDepartamento || ''}`}
//                         </Textos>
//                         <SeparadorHorizontal/>
//                         <Textos>{paciente.profesion}</Textos>
//                         <Textos>{paciente.antecedentes}</Textos>
//                         <Textos>{paciente.alergias}</Textos>
//                     </View>
//                 </ScrollView>
//             </Modal>
//         </View>    
//     );
// }