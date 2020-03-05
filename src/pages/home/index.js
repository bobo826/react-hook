import React, {useState} from "react"
import Shaixuan from "./components/shaixuan/index"
import styled from "styled-components"
// 样式navbox
const Div = styled.div`
  display: flex;
  flex: 1;
  margin: 16px;
  border-radius: 4px;
  flex-direction: column;
  background: white;
`
const Head = styled.div`
  padding: 20px 16px;
  display: flex;
  width: 100%;
  height: 80px;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #ebeef5;
`
const Span = styled.span`
  color: #1890ff;
  cursor: pointer;
`
function Home() {
  const [open, setOpen] = useState(true)
  return (
    <Div>
      <Head>
        <Span onClick={() => setOpen(!open)}>{open ? '收起选项' : '展开选项'}</Span>
      </Head>
      {
        open ? <Shaixuan /> : null
      }
    </Div>
  )
}

export default Home