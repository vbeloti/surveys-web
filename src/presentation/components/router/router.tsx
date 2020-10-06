import { Login } from '@/presentation/pages'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '@/presentation/styles/global.scss'

type Factory = {
  makeLogin: React.FC
  makeSignUp: React.FC
}

// const Router: React.FC<Factory> = (factory: Factory) => {
const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/login" exact component={factory.makeLogin} />
        <Route path="/signup" exact component={factory.makeSignUp} /> */}
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
