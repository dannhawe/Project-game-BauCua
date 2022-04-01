import React from 'react'
import {useSelector}from 'react-redux'
export default function DiemCuoc(props) {
  const tongDiem = useSelector(state=>state.BaiTapGameBauCuaReducer.tongDiem)
  return (
    <div className="">
      <h3 className="text-center display-4 text-danger">Bài Tập Gam Bầu Cua</h3>
      <div className="text-center mt-5">
        <span style={{ fontSize: '20px' }} className="p-3 text-white bg-danger">
          Tiền Thưởng
        </span>
        <span style={{ fontSize: '20px' }} className="p-3 text-white bg-danger">
         {tongDiem} $
        </span>
      </div>

      <div className="text-center mt-5">
     <button  className='btn btn-seccess p-3 text-white bg-danger'> chơi Lại</button>
      </div>
    </div>
  )
}
 