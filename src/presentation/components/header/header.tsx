import Styles from './header-styles.scss'
import { Logo } from '@/presentation/components'
import { useLogout } from '@/presentation/hooks'
import React, { memo } from 'react'

const Header: React.FC = () => {
  const logout = useLogout()
  // const { getCurrentAccount } = useContext(ApiContext)s
  const buttonClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    event.preventDefault()
    logout()
  }
  return (
    <header className={Styles.headerWrap}>
      <div className={Styles.headerContent}>
        <Logo />
        <div className={Styles.logoutWrap}>
          <span data-testid="username">Vinicius</span>
          <a data-testid="logout" href="#" onClick={buttonClick}>Sair</a>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
