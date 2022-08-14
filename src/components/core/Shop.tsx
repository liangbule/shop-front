import React from 'react'
import { useSelector } from 'react-redux'
import Layout from './Layout'

const Shop = () => {
  const state = useSelector(state => state)
  return (
    <Layout title={"商城"}>Shop</Layout>
  )
}

export default Shop