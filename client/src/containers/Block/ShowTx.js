import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const ShowTx = (props) => {

  const [blockSize, setBlockSize] = useState()
  const [blockWeight, setBlockWeight] = useState()
  const [blockHeight, setBlockHeight] = useState()


  useEffect(() => {
    const id = props.match.params.id
    axios.get(`https://blockchain.info/rawtx/${id}`, {
      params: {
        cors: true
      }
    })
      .then(response => {
        console.log(response.data)
        setBlockSize(response.data.size)
        setBlockWeight(response.data.weight)
        setBlockHeight(response.data.block_height)

      })
  })

  return (
    <div>
      {/* <h2>{props.match.params.id}</h2> */}
      <h3>Transaction Details</h3>
      < p > Block Index: {blockSize}</p >
      < p > Block Weight: {blockWeight}</p >
      < p > Block Height: {blockHeight}</p >
      <button><NavLink style={{ textDecoration: 'none', color: 'gray' }} to="/single">Back</NavLink></button>
    </div>
  )
}

export default ShowTx
