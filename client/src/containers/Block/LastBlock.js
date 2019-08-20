import React, { useState, useEffect } from 'react'
import axios from 'axios'

const LastBlock = () => {

  const [blockIndex, setBlockIndex] = useState()
  const [blockHeight, setBlockHeight] = useState()
  const [blockTime, setBlockTime] = useState(0)
  const [blockTxIndexes, setBlockTxIndexes] = useState([])

  useEffect(() => {
    axios.get(`https://blockchain.info/latestblock`, {
      params: {
        cors: true
      }
    })
      .then(response => {
        console.log(response.data)
        setBlockIndex(response.data.block_index)
        setBlockHeight(response.data.height)
        setBlockTime(response.data.time)
        setBlockTxIndexes(response.data.txIndexes)
      })
  })

  return (
    <div>
      < p > Block Index: {blockIndex}</p >
      < p > Block Height: {blockHeight}</p >
      < p > Block Time: {blockTime.toString()}</p >
      <table border="1" className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Transaction Indexes</th>
          </tr>
        </thead>
        <tbody>
          {blockTxIndexes.map(block => {
            return (
              <tr key={block}>
                <td>{block}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default LastBlock
