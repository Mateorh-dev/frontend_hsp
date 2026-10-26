


// +-------------------------+-------------+------+-----+---------+----------------+
// | Field                   | Type        | Null | Key | Default | Extra          |
// +-------------------------+-------------+------+-----+---------+----------------+
// | codigoTratamiento       | int(11)     | NO   | PRI | NULL    | auto_increment |
// | nombreTratamiento       | text        | NO   |     | NULL    |                |
// | descripcionTratamiento  | text        | YES  |     | NULL    |                |
// | fk_numeroIdentificacion | varchar(15) | NO   | MUL | NULL    |                |
// +-------------------------+-------------+------+-----+---------+----------------+

      <View style={[styles.contenedor, styles.marco, styles.gris]}>
        <View style={[styles.contenedor,,styles.componentesEnFilaJustificado]}>
          <View style={{flex:1}}>
          <Subtitulos contenedor={false}>
            Titulo bonito del tratamiento
          </Subtitulos>
          <Textos contenedor={false}>
            Breve descripción
          </Textos>
          </View>
            <Ionicons
            name="open-outline"
            size={dimensions.figura.xs}
            />
        </View>
      </View>
