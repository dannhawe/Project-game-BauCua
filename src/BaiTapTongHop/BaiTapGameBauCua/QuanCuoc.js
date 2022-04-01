import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSpring, animated } from 'react-spring'
export default function QuanCuoc(props) {
  const dispatch = useDispatch()

  return (
    <div className="mt-3" style={{ textAlign: 'center' }}>
      <img src={props.qc.hinhAnh} style={{ width: '35%' }}></img>
      <div className="bg-danger text-center py-1 mt-2" style={{ width: '50%', margin: 'auto' }}>
        <button
          onClick={() => {
            dispatch({
              type: 'DAT_CUOC_BAU_CUA',
              quanCuoc: props.qc,
              tangGiam: true,
            })
          }}
          className="btn btn-success"
          style={{
            fontSize: 20,
            padding: '10',
          }}
        >
          +
        </button>
        <span className=" mt-2" style={{ color: 'yellow', fontSize: 20 }}>
          {props.qc.diemCuoc}
        </span>
        <button
          onClick={() => {
            dispatch({
              type: 'DAT_CUOC_BAU_CUA',
              quanCuoc: props.qc,
              tangGiam: false,
            })
          }}
          className="btn btn-success"
          style={{ fontSize: 20, padding: '10' }}
        >
          -
        </button>
      </div>
    </div>
  )
}
