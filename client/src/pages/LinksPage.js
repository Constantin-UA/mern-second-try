import React, { useState, useCallback, useEffect, useContext } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { Loader } from '../components/Loader'
import { LinksList } from '../components/LinksList'
export const LinksPage = () => {
  const [links, setLinks] = useState([])
  const { request, loading } = useHttp()
  const { token } = useContext(AuthContext)

  const fetchLinks = useCallback(async () => {
    const fetched = await request('/api/link', 'GET', null, {
      Authorization: `Bearer ${token}`,
    })
    setLinks(fetched)
  }, [request, token])
  useEffect(() => {
    fetchLinks()
  }, [fetchLinks])
  if (loading) {
    return <Loader />
  }
  return <>{!loading && <LinksList links={links} />}</>
}
