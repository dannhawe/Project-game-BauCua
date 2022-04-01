const initialState = {
  danhSachCuoc: [
    { ma: 'nai', hinhAnh: './img/BaiTapGameBauCua/nai.png', diemCuoc: 0 },
    { ma: 'bau', hinhAnh: './img/BaiTapGameBauCua/bau.png', diemCuoc: 0 },
    { ma: 'ga', hinhAnh: './img/BaiTapGameBauCua/ga.png', diemCuoc: 0 },
    { ma: 'ca', hinhAnh: './img/BaiTapGameBauCua/ca.png', diemCuoc: 0 },
    { ma: 'cua', hinhAnh: './img/BaiTapGameBauCua/cua.png', diemCuoc: 0 },
    { ma: 'tom', hinhAnh: './img/BaiTapGameBauCua/tom.png', diemCuoc: 0 },
  ],
  tongDiem: 1000,
  mangXucXac: [
    { ma: 'nai', hinhAnh: './img/BaiTapGameBauCua/ga.png' },
    { ma: 'nai', hinhAnh: './img/BaiTapGameBauCua/nai.png' },
    { ma: 'nai', hinhAnh: './img/BaiTapGameBauCua/nai.png' },
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'DAT_CUOC_BAU_CUA': {
      const danhSachCuocUpdate = [...state.danhSachCuoc]
      const index = state.danhSachCuoc.findIndex((qc) => qc.ma === action.quanCuoc.ma)
      if (index !== -1) {
        if (action.tangGiam && state.tongDiem >= 100) {
          danhSachCuocUpdate[index].diemCuoc += 100
          state.tongDiem -= 100
        }
        if (!action.tangGiam && danhSachCuocUpdate[index].diemCuoc > 0) {
          danhSachCuocUpdate[index].diemCuoc -= 100
          state.tongDiem += 100
        }
      }
      return { ...state, danhSachCuoc: danhSachCuocUpdate }
    }

    case 'PLAY_GAME_BAU_CUA': {
      let mangXucXacUpdate = []
      let bienTam = 0
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6)
        let xucXacNgauNhien = state.danhSachCuoc[soNgauNhien]
        mangXucXacUpdate.push(xucXacNgauNhien)
      }
      mangXucXacUpdate.forEach((item, i) => {
        for (let i = 0; i < state.danhSachCuoc.length; i++) {
          if (item.ma === state.danhSachCuoc[i].ma) {
            state.tongDiem += state.danhSachCuoc[i].diemCuoc
          }
        }
      })
      state.danhSachCuoc.forEach((item, i) => {
        let index = mangXucXacUpdate.findIndex((xx) => xx.ma === item.ma)
        if (index !== -1) {
          state.tongDiem += item.diemCuoc
        } 
      })
      state.danhSachCuoc = state.danhSachCuoc.map((qc,index)=>{
          return{...qc,diemCuoc:0}
      })
      return { ...state, mangXucXac: mangXucXacUpdate }
    }

    default:
      return state
  }
}
