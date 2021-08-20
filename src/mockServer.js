import { createServer } from 'miragejs';

export const mockServer = () =>
  createServer({
    routes() {
      this.post('http://api-ml.carrasco.uruit.com/form', () => ({
        processing_time: 157.634,
        rows: {
          '1_2_ROTULOS': {
            confidence_row: '0.575',
            confidence_column: '0.971',
            selected_column: '2',
          },
          '2_2_AMBIENTACION': {
            confidence_row: '0.947',
            confidence_column: '0.853',
            selected_column: '1',
          },
          '2_4_CABECERAS': {
            confidence_row: '0.826',
            confidence_column: '0.442',
            selected_column: '1',
          },
          '1_8_ACCESOS': {
            confidence_row: '0.757',
            confidence_column: '0.967',
            selected_column: '3',
          },
          '1_11_INFORMACION': {
            confidence_row: '0.836',
            confidence_column: '0.952',
            selected_column: '4',
          },
          '2_11_FRENTE_LINEAL': {
            confidence_row: '0.696',
            confidence_column: '0.666',
            selected_column: '2',
          },
          '1_7_ESTANTERIAS': {
            confidence_row: '0.909',
            confidence_column: '0.737',
            selected_column: '1',
          },
          '2_3_CARTELERIA': {
            confidence_row: '0.876',
            confidence_column: '0.759',
            selected_column: '3',
          },
          '2_1_EXPOSICIONES': {
            confidence_row: '0.715',
            confidence_column: '0.622',
            selected_column: '4',
          },
          '1_5_TECHOS': {
            confidence_row: '0.883',
            confidence_column: '0.979',
            selected_column: '3',
          },
          '1_10_ASEOS': {
            confidence_row: '0.741',
            confidence_column: '0.742',
            selected_column: 'none',
          },
          '1_4_SUELOS': {
            confidence_row: '0.647',
            confidence_column: '0.755',
            selected_column: 'none',
          },
          '2_8_PORTA PREC': {
            confidence_row: '0.863',
            confidence_column: '0.812',
            selected_column: '2',
          },
          '4_1_PTAS_EMERGENCIA': {
            confidence_row: '0.758',
            confidence_column: '0.944',
            selected_column: '3',
          },
          '1_1_FACHADAS': {
            confidence_row: '0.806',
            confidence_column: '0.991',
            selected_column: '1',
          },
          '2_5_PILAS': {
            confidence_row: '0.837',
            confidence_column: '0.947',
            selected_column: '3',
          },
          '1_6_LIMPIEZA': {
            confidence_row: '0.963',
            confidence_column: '0.924',
            selected_column: 'none',
          },
          '2_7_ETIQ PRECIOS': {
            confidence_row: '0.954',
            confidence_column: '0.615',
            selected_column: '3',
          },
          '1_9_CARROS': {
            confidence_row: '0.842',
            confidence_column: '0.721',
            selected_column: '2',
          },
          '2_9_UNIFO PERSO': {
            confidence_row: '0.897',
            confidence_column: '0.942',
            selected_column: '1',
          },
          '2_12_ALMACEN': {
            confidence_row: '0.921',
            confidence_column: '0.818',
            selected_column: '3',
          },
          '3_2_EXTIN_Y_MANGUE': {
            confidence_row: '0.858',
            confidence_column: '0.641',
            selected_column: '1',
          },
          '2_13_LINEA_DE_CAJAS': {
            confidence_row: '0.814',
            confidence_column: '0.892',
            selected_column: 'none',
          },
          '2_10_MUSICA': {
            confidence_row: '0.643',
            confidence_column: '0.961',
            selected_column: '3',
          },
          '2_6_LINEALES': {
            confidence_row: '0.824',
            confidence_column: '0.899',
            selected_column: '1',
          },
        },
      }));

      this.post('/login', () => ({
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      }));
    },
  });
