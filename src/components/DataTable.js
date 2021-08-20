import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

import './styles.css';

const KEYS = [
  '1_1_FACHADAS',
  '1_10_ASEOS',
  '1_11_INFORMACION',
  '1_2_ROTULOS',
  '1_3_ILUMINACION',
  '1_4_SUELOS',
  '1_5_TECHOS',
  '1_6_LIMPIEZA',
  '1_7_ESTANTERIAS',
  '1_8_ACCESOS',
  '1_9_CARROS',
  '2_1_EXPOSICIONES',
  '2_10_MUSICA',
  '2_11_FRENTE_LINEAL',
  '2_12_ALMACEN',
  '2_13_LINEA_DE_CAJAS',
  '2_2_AMBIENTACION',
  '2_3_CARTELERIA',
  '2_4_CABECERAS',
  '2_5_PILAS',
  '2_6_LINEALES',
  '2_7_ETIQ PRECIOS',
  '2_8_PORTA PREC',
  '2_9_UNIFO PERSO',
  '3_2_EXTIN_Y_MANGUE',
  '4_1_PTAS_EMERGENCIA',
];
const COLUMN_NAMES = ['DESCRIPCIÓN', 'M', 'R/M', 'R/B', 'B'];

export const DataTable = ({ rows, threshold }) => {
  return (
    <div>
      <Table
        variant="simple"
        colorScheme="blackAlpha"
        marginTop="2"
        className="dataTable"
        size="sm"
      >
        <Thead>
          <Tr>
            {COLUMN_NAMES.map((name, key) => (
              <Th key={key}>
                <Text as="samp" fontSize="sm" textAlign="center">
                  {name}
                </Text>
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {KEYS.map((row, key) => {
            const rowData = rows[row];
            const isYellow =
              rowData?.confidence_column <= threshold ||
              rowData?.confidence_row < threshold;
            const isRed =
              !rowData ||
              rowData?.selected_column === 'none' ||
              rowData?.selected_column === 'other';
            return (
              <Tr
                key={key}
                className={isRed ? 'isRed' : isYellow ? 'isYellow' : ''}
              >
                {COLUMN_NAMES.map((_, idx) => (
                  <Tooltip
                    label={
                      rowData
                        ? `Confidence column: ${rowData.confidence_column}\nConfidence row: ${rowData.confidence_row}`
                        : 'No data for this entry'
                    }
                    key={idx}
                  >
                    <Td>
                      {idx === 0 && (
                        <Text
                          as="samp"
                          className="colText"
                          fontSize={['11px', 'lg']}
                        >
                          {row}
                        </Text>
                      )}
                      {idx.toString() === rowData?.selected_column && (
                        <Text textAlign="center">
                          <CheckIcon />
                        </Text>
                      )}
                    </Td>
                  </Tooltip>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
};
