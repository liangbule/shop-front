import React from 'react'
import { useSelector } from 'react-redux'
import Layout from './Layout'
const Home = () => {
  const state = useSelector(state => state)
  console.log(state)
  return (
    <Layout title={"首页"}>Home {JSON.stringify(state)}</Layout>
  )
}

export default Home