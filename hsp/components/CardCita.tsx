


// +------------------------+---------+------+-----+---------+----------------+
// | Field                  | Type    | Null | Key | Default | Extra          |
// +------------------------+---------+------+-----+---------+----------------+
// | codigoCita             | int(11) | NO   | PRI | NULL    | auto_increment |
// | fecha                  | date    | NO   |     | NULL    |                |
// | hora                   | time    | NO   |     | NULL    |                |
// | patologia              | text    | YES  |     | NULL    |                |
// | tratamientoRecomendado | text    | YES  |     | NULL    |                |
// | precio                 | int(11) | YES  |     | NULL    |                |
// | observacion            | text    | YES  |     | NULL    |                |
// | fk_codigoEstado        | char(3) | NO   | MUL | NULL    |                |
// +------------------------+---------+------+-----+---------+----------------+

      <View style={[styles.contenedor, styles.marco]}>
        <View style={[styles.contenedor,styles.componentesEnFilaJustificado]}>
          <View style={{flex:1}}>
            <Subtitulos contenedor={false}>
              Mateo Alejandro Rodríguez Hernández
            </Subtitulos>
          </View>
          <View>
            <Etiquetas color="gris">Control</Etiquetas>
            <Etiquetas >Pendiente</Etiquetas>
          </View>
        </View>
        <SeparadorHorizontal/>
        <Textos>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptas sequi harum, eos, dolor suscipit ea sunt, perspiciatis nostrum facere praesentium fugit rem molestias dignissimos nisi. Itaque distinctio suscipit neque!
        </Textos>
        <View style={[styles.contenedor,{ alignItems: 'flex-end'}]}>
          <Ionicons
          name="open-outline"
          size={dimensions.figura.xs}
          />
        </View>
      </View>