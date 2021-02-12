import React from 'react'
export const LinkCard = ({ link }) => {
  return (
    <>
      <h2>YOUR DATA</h2>
      <p>
        Из чего:{' '}
        <a href={link.from} target="_blank" rel="noopener noreferrer">
          {link.from}
        </a>
      </p>
      <p>
        Во что:{' '}
        <a href={link.to} target="_blank" rel="noopener noreferrer">
          {link.to}
        </a>
      </p>
      <p>
        Количество кликов: <strong>{link.clicks}</strong>
      </p>
      <p>
        Дата создания:{' '}
        <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </>
  )
}
