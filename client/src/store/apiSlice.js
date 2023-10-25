import { createSlice } from '@reduxjs/toolkit'

export const apiSlice = createSlice({
  name: 'apiSlice',
  initialState: {
    appid: '20231011001843810',
    key:'e6LP7XJ60vf2diHime6z',
    salt:'1697006358111'
  },
  reducers: {
    increment: state => {

    },

  }
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { increment } = apiSlice.actions

export default apiSlice.reducer