import { Footer, FormStatus, Input, LoginHeader, SubmitButton } from '@/presentation/components'
import React, { useState } from 'react'
import Styles from './login-styles.scss'
import Context from '@/presentation/contexts/form/form-context'

type StateProps = {
  isLoading: boolean
  mainError: string
}

const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    mainError: ''
  })

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={state}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />

          <Input type="password" name="password" placeholder="Digite sua senha" />

          <SubmitButton text="Entrar" />

          <span className={Styles.link}>Criar Conta</span>
          <FormStatus />
        </form>

      </Context.Provider>

      <Footer />
    </div>
  )
}

export default Login
