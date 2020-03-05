import React from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"
// 样式navbox
const Div = styled.div`
  height: 80px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #263548;
`
// 样式ul
const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`
// 样式ul-li
const Li = styled.li`
  padding: 0 40px;
  text-align: center;
`
// 样式li-Link
const StyledLink = styled(Link)`
  color: white;
  cursor: pointer;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`

const header = () => {
  return (
    <Div>
      <Ul>
        <Li>
          <StyledLink to="/home">课件库</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/tongji">统计</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/tiku">题库</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/juanku">卷库</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/setting">设置</StyledLink>
        </Li>
      </Ul>
    </Div>
  )
}

export default header