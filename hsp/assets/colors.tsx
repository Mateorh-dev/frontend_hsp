export const colors = {
    primario:"#456BD5",
    tonosPrimario:{
        100:"#dfe9fa",
        200:"#c7daf6",
        300:"#a0c2f0",
        400:"#73a1e7",
        500:"#5281df",
        600:"#456bd5",
        700:"#3452c1",
        800:"#2f449e",
        900:"#2b3c7d"
    },
    azul:"#456BD6",
    amarillo:"#FFAD00",
    verde:"#98ED00",
    magenta:"#E73894",
    blanco:"white",
    negro:"blalck",
    claro:{
        texto:"black",
        fondo:"#F2F3F4",
        borde:"#D7DBDD",
    },
    oscuro:{
        texto:"white",
        fondo:"#283747",
        borde:"#34495E",
    }
} as const;

export type ColorTheme = typeof colors;

// Normal *oscuro
// #D0006E
// #FFAD00
// #98ED00
// #133CAC
// #34495E
// #283747

// Brillo
// #456bd5
// #E73894
// #B3F63B
// #FFC13D

// Defecto *claro
// #45D652
// #D6AD45
// #456BD6
// #D64576
// #F2F3F4
// #D7DBDD

// Saturado
// #005FFF
// #FFAD00
// #FF0087
// #05FF00

// Complemento
// #666a7a
// #FFFFFF

// Primario
// #456BD5 A
// #0046cc B
