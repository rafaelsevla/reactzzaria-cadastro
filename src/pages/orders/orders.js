import React from 'react'
import styled from 'styled-components'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer as MaterialTableContainer,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core'

import { useOrders } from 'hooks'

function Orders () {
  const { orders } = useOrders()
  console.log('orders', orders)

  return allOrderStatus.map(orderStatus => (
    <TableContainer key={orderStatus.title}>
      <TableTitle>
        {orderStatus.title}
      </TableTitle>
      <Table>
        <THead>
          <TableRow>
            <Th>
              <Typography>
                Informações do pedido
              </Typography>
            </Th>
          </TableRow>
        </THead>

        <TableBody>
          <TableRow>
            <TableCell>
              <div>
                <SubTitle>
                  Horário do pedido: 10h20
                </SubTitle>
              </div>

              <div>
                <SubTitle>
                  Pedido:
                </SubTitle>
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
                <SubTitle>
                  Endereço de entrega:
                </SubTitle>
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
  ))
}

const allOrderStatus = [
  {
    title: 'Pedidos pendentes'
  },

  {
    title: 'Pedidos em produção'
  },

  {
    title: 'Saiu para entrega'
  },

  {
    title: 'Pedidos finalizados'
  }
]

const TableContainer = styled(MaterialTableContainer).attrs({
  component: Paper
})`
  && {
    margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  }
`

const TableTitle = styled(Typography).attrs({
  variant: 'h6'
})`
  && {
    padding: ${({ theme }) => theme.spacing(3)}px;
  }
`

const SubTitle = styled(Typography).attrs({
  variant: 'button'
})`
  font-weight: bold;
`

const THead = styled(TableHead)`
  && {
    background-color: ${({ theme }) => theme.palette.common.black};
  }
`

const Th = styled(TableCell)`
  && {
    color: ${({ theme }) => theme.palette.common.white};
  }
`

export default Orders
