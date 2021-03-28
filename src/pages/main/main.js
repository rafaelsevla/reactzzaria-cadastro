import React, { Suspense } from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import {
  Divider,
  Drawer as MaterialDrawer,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core'

const Main = () => (
  <>
    <Drawer variant='permanent'>
      <DrawerContent>
        <Typography variant='h4'>
          React-zzaria
        </Typography>

        <Typography>
          (Sistema de cadastro)
        </Typography>
      </DrawerContent>

      <Divider />

      <List>
        {menuItens.map(item => (
          <ListItem key={item.label} button>
            <ListItemText>
              {item.label}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Drawer>

    <Content>
      <Suspense fallback='loading...'>
        <Switch>
          <Route>
            <h1>main</h1>
          </Route>
        </Switch>
      </Suspense>
    </Content>
  </>
)

const menuItens = [
  {
    label: 'Pedidos'
  },
  {
    label: 'Tamanhos'
  },
  {
    label: 'Sabores'
  }
]

export default Main

const Drawer = styled(MaterialDrawer)`
  && {
    .MuiPaper-root {
      width: ${({ theme }) => theme.extend.drawerWidth}px;
    }
  }
`

const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(3)}px;
  text-align: center;
`

const Content = styled.main`
  margin-left: ${({ theme }) => theme.extend.drawerWidth}px;
  padding: ${({ theme }) => theme.spacing(3)}px;
`
