import React, { lazy, Suspense } from 'react'
import styled from 'styled-components'
import { Link, Route, Switch, useLocation } from 'react-router-dom'
import {
  Divider,
  Drawer as MaterialDrawer,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core'

import * as routes from 'routes'

const Orders = lazy(() => import('pages/orders'))
const PizzasSizes = lazy(() => import('pages/pizzas-sizes'))
const PizzasFlavours = lazy(() => import('pages/pizzas-flavours'))

const Main = () => {
  const { pathname } = useLocation()

  return (
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
            <ListItem
              key={item.label}
              button
              selected={pathname === item.link}
              component={Link}
              to={item.link}
            >
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
            {menuItens.map(item => (
              <Route
                key={item.link}
                path={item.link}
                exact={item.exact}
              >
                <item.component />
              </Route>
            ))}
          </Switch>
        </Suspense>
      </Content>
    </>
  )
}

const menuItens = [
  {
    label: 'Pedidos',
    link: routes.HOME,
    component: Orders,
    exact: true
  },
  {
    label: 'Tamanhos',
    link: routes.PIZZAS_SIZES,
    component: PizzasSizes,
    exact: false
  },
  {
    label: 'Sabores',
    link: routes.PIZZAS_FLAVOURS,
    component: PizzasFlavours,
    exact: false
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
