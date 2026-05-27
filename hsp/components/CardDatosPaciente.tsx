import { styles } from "@/assets/styles";
import { Modal, Pressable, ScrollView, View } from "react-native";
import Titulos from "./Titulos";
import Subtitulos from "./Subtitulos";
import Textos from "./Textos";
import SeparadorHorizontal from "./SeparadorHorizontal";
import { Ionicons } from "@expo/vector-icons";
import { dimensions } from "@/assets/dimensions";
import { useEffect, useState, useMemo } from "react";
import { colors } from "@/assets/colors";
import api from "@/src/configAxios";

type Props = {
    dato : any[];
};

export default function CardDatosPaciente({dato}: Props) {
    const paciente = dato[0];

    const nombreConsulta = useMemo(() => {
        const nombre =[];
        nombre.push(paciente.primerNombre);
        if (paciente.segundoNombre !== "") {nombre.push(`${paciente.segundoNombre[0]}.`);}
        nombre.push(paciente.primerApellido);
        if (paciente.segundoApellido !== "") {nombre.push(paciente.segundoApellido);}
        return nombre.join(" ");
    }, [paciente]
    );

    const nombreCompleto = useMemo(() => {
        const nombre =[];
        nombre.push(paciente.primerNombre);
        if (paciente.segundoNombre !== "") {nombre.push(paciente.segundoNombre);}
        nombre.push(paciente.primerApellido);
        if (paciente.segundoApellido !== "") {nombre.push(paciente.segundoApellido);}
        return nombre.join(" ");
    },[paciente]
    );

    const [visivilidadModal, actualizarVisivilidadModal] = useState(false);

    const[datosMunicipio, actualizarDatosMunicipio] = useState<any>(Object);
    const[datosDepartamento, actualizarDatosDepartamento] = useState<any>(Object);

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

    useEffect(() => {
        if (paciente?.fk_codigoMunicipio) {
            gapiDatosMunicipio(paciente.fk_codigoMunicipio); 
        }
    }, [paciente?.fk_codigoMunicipio]);
    useEffect(() => {
        if (datosMunicipio?.fk_codigoDepartamento) {
            gapiDatosDepartamento(datosMunicipio.fk_codigoDepartamento);
        }
    }, [datosMunicipio?.fk_codigoDepartamento]);

    // gapiDatosMunicipio(paciente.fk_codigoMunicipio);
    // gapiDatosDepartamento(datosMunicipio.fk_codigoDepartamento);

    return (
        <View>
            <Pressable onPress={() => actualizarVisivilidadModal(true)}>
            <View style={[styles.contenedor,styles.marco]}>
                <Subtitulos>
                    <Ionicons
                        name="person"
                        size={dimensions.figura.xs}
                        />
                    {nombreConsulta}
                </Subtitulos>
                <Textos resaltado>Ver datos completos</Textos>
            </View>
            </Pressable>
            <Modal
                visible={visivilidadModal}
                animationType="slide"
                >
                <ScrollView>
                <View style={styles.contenedor}>
                <Pressable style={styles.botonSecundario} onPress={() => actualizarVisivilidadModal(false)}>
                    <Ionicons name="arrow-back" color={colors.primario} size={dimensions.texto.l}/>
                </Pressable>
                <Titulos resaltado>{paciente.numeroIdentificacion}</Titulos>
                <Titulos>{nombreCompleto}</Titulos>
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
