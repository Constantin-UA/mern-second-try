import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
  const auth = useContext(AuthContext)
  const history = useHistory()

  const logoutHandler = (event) => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper nav-wrapper-my  blue-grey darken-1">
          <span className="brand-logo">TestTrening</span>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/create">Создать</NavLink>
            </li>
            <li>
              <NavLink to="/links">Список</NavLink>
            </li>
            <li>
              <a href="/" onClick={logoutHandler}>
                Выйти
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
