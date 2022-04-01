import React from 'react'
import QuanCuoc from './QuanCuoc'
import { useSelector } from 'react-redux'
export default function DanhSachCuoc(props) {
  const danhSachCuoc = useSelector((state) => state.BaiTapGameBauCuaReducer.danhSachCuoc)

  const renderDanhSachCuoc = () => {
    return danhSachCuoc.map((qc, index) => {
      return (
        <div className="col-4" key={index}>
          <QuanCuoc qc={qc}></QuanCuoc>
        </div>
      )
    })
  }

  return <div className="row">{renderDanhSachCuoc()}</div>
}
