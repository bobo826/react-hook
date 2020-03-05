import React, {useEffect, useState} from "react"
import styled from "styled-components"
// 样式navbox
const Div = styled.div`
  margin: 16px;
`

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
const Li = styled.li`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-bottom: 10px;
`
const Label = styled.span`
  font-weight: bold;
  margin-right: 20px;
`

const Options = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
`

const Opt = styled.span`
  margin-right: 10px;
  padding: 0px 5px;
  text-align: center;
  cursor: pointer;
  background: ${props => (props.active ? '#1890ff' : 'white')};
  color: ${props => (props.active ? 'white' : 'black')};
  border-radius: 4px;
`

function useCount(num) {
  const [count, setCount] = useState(num)
  return [count, setCount]
}

function Shaixuan() {
  const [count, setCount] = useCount(0) // 自定义hook
  const [resdata, setResdata] = useState([]) // 存放获取到的筛选条件数据
  const [postdata, setPostdata] = useState({}) // 存放请求参数
  useEffect(
    () => {
      let data = [
        {
          label: '年份',
          name: 'year',
          options: [
            {label: '不限', value: '不限', active: true},
            {label: 2013, value: 2013, active: false},
            {label: 2012, value: 2012, active: false}
          ],
          multiple: true
        },
        {
          label: '科目',
          name: 'subject',
          options: [
            {label: '不限', value: '不限', active: true},
            {label: '数学', value: '数学', active: false},
            {label: '化学', value: '化学', active: false}
          ],
          multiple: false
        }
      ]
      setResdata(data)
    },
    []
  )
  function activeValue(Index, I) {
    let newresdata = resdata.map((item, index) => {
      if (index === Index) {
        let currentcell = {}
        item.options.map((cell, i) => {
          cell.active = item.multiple ? cell.active : false　// 多选逻辑处理
          if (i === I) {
            if (item.multiple) { // 多选
              if (cell.value !== '不限') { // 特使处理－不限－选中逻辑
                cell.active = !cell.active
                item.options[0].active = false
              } else {
                cell.active = true
              }
            } else {
              cell.active = true
            }
            currentcell = cell
          }
          return cell
        })
        delActiveValue(currentcell, item)
      }
      return item
    })
    setResdata(newresdata)
    setPostdata(postdata)
  }
  // 处理选中的数据存放在postdata中
  function delActiveValue(cell, item) {
    if (item.multiple) {　// 多选数据处理
      let allactive = []
      if (cell.value !== '不限') {
        item && item.options.length && item.options.forEach((val) => {
          if (val.active) {
            allactive.push(val.value)
          }
        })
      } else {
        // 处理选中-不限
        item && item.options.length && item.options.forEach((val) => {
          val.active = false
          if (val.value === '不限') {
            val.active = true
          } else {
            allactive.push(val.value)
          }
        })
      }
      postdata.hasOwnProperty(item.name) ? postdata[item.name] = allactive : postdata[item.name] = [...allactive]
    } else {　// 单选数据处理
      if (cell.active) {
        (postdata.hasOwnProperty(item.name) ? postdata[item.name] = cell.value : postdata[item.name] = cell.value)
      }
    }
  }

  return (
    <Div>
      <Ul>
        {
          resdata.map((item, index) => (
            <Li key={index}>
              <Label>{item.label}:</Label>
              <Options>
                {
                  item.options.map((cell, i) => (
                    <Opt key={i} onClick={() => activeValue(index, i)} active={cell.active}>{cell.label}</Opt>
                  ))
                }
              </Options>
            </Li>
          ))
        }
      </Ul>
      <span onClick={() => setCount(count + 1)}>{count}</span>
      <div>{JSON.stringify(postdata)}</div>
    </Div>
  )
}

export default Shaixuan