import React, {useState, useEffect, useReducer} from "react"
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

const initialState = {
  count: 0,
  step: 1
}

function reducer (state, action) {
  const { count, step } = state
  if (action.type === 'tick') {
    return { count: count + step, step }
  } else if (action.type === 'step') {
    return { count, step: action.step }
  } else {
    throw new Error()
  }
}

function Counter () {

  const [state, dispatch] = useReducer(reducer, initialState)
  const { count, step } = state

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' })
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <h1>{count}</h1>
      <input value={step} onChange={e => {
        dispatch({
          type: 'step',
          step: Number(e.target.value)
        })
      }} />
    </>
  )
}

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
      <Page>
        <Comments />
      </Page>
      <Counter />
    </Div>
  )
}

export default Home