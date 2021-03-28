import React from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core'

function Orders () {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography>
                Informações do pedido
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>
              <div>
                <Typography variant='button'>
                  Horário do pedido: 10h20
                </Typography>
              </div>

              <div>
                <Typography variant='button'>
                  Pedido:
                </Typography>
                <ul>
                  <li>
                    <Typography>
                      1 pizza média de {' '}
                      Frango com catupiry e calabresa
                    </Typography>
                  </li>
                </ul>
              </div>

              <div>
                <Typography variant='button'>
                  Endereço de entrega:
                </Typography>
                <Typography>
                  Rua Tal, no 92, {' '}
                  ap 10 <br />
                  Bairro sao januario
                  sao paulo capital
                </Typography>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Orders
