import React, { useEffect, useContext } from 'react'
import { useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { AuthContext } from '../context/AuthContext'
export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const { loadind, request, error, clearError } = useHttp()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form })
      message(data.message)
    } catch (e) {}
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form })
      auth.login(data.token, data.userId)
    } catch (e) {}
  }

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>TestTrening</h1>
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Авторизация</span>

            <div className="input-field">
              <input
                id="email"
                type="text"
                name="email"
                placeholder="Enter email"
                value={form.email}
                onChange={changeHandler}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
              <input
                id="password"
                type="password"
                name="password"
                value={form.password}
                placeholder="Enter password"
                onChange={changeHandler}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="card-action">
            <button
              className="btn btn-styled"
              onClick={loginHandler}
              disabled={loadind}
            >
              Вход
            </button>
            <button
              className="btn btn-styled"
              onClick={registerHandler}
              disabled={loadind}
            >
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
