import React from 'react'
import styles from './IndexPage.module.css'
import Header from '../../components/Header/Header'
import Articles from '../../components/Articles/Articles'
import { Container } from 'react-bootstrap'

const IndexPage = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Articles></Articles>
      </Container>
    </div>
  )
}

export default IndexPage