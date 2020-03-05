import React from 'react'
import { Button } from 'antd'
import styled from "styled-components"
// import {BrowserRouter as Router} from "react-router-dom"
import Header from './components/header/index'
import Content from './components/content/index'

// 样式navbox
const Div = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  background: #ebf0f6;
`

function App() {
  return (
    <Div>
      <Header />
      <Content />
      <Button type="primary">模拟页面底部</Button>
    </Div>
  )
}

export default App
