import React, {useState, useCallback} from "react"
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

function useInputValue(initialValue) {
  let [value, setValue] = useState(initialValue)
  let onChange = useCallback(function(event) {
    setValue(event.currentTarget.value)
  }, [])
  return {
    value,
    onChange
  }
}

function Comments(params) {
  console.log('render?')
  return <h1>no</h1>
}

function Page({ children }) {
  if (true) return <h1>Please login</h1>
  return (
    <div>
      {children}
    </div>
  )
}

function Home() {
  const [open, setOpen] = useState(true)
  const name = useInputValue("Jamie")
  return (
    <Div>
      <Head>
        <Span onClick={() => setOpen(!open)}>{open ? '收起选项' : '展开选项'}</Span>
      </Head>
      {
        open ? <Shaixuan /> : null
      }
      <input {...name} />
      {name.value}
      <Page>
        <Comments />
      </Page>
    </Div>
  )
}

export default Home