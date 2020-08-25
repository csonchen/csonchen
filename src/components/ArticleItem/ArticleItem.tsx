import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const ArticleItem = () => {
  return (
    <Card className="mt15">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>小程序富文本解析</Card.Title>
        <Card.Text className="color-gray">发布: 2020-8-25</Card.Text>
        <Card.Text>介绍...</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ArticleItem