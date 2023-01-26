import { createSlice } from '@reduxjs/toolkit'



const initialState = {

  currentUser: { username: "" },

  basic: {
    name: "",
    intro: "",
    email: "",
    phone: "",
    address: "",
    photo: "",
    skills: [],


  }




}





export const counterSlice = createSlice({

  name: 'counter',

  initialState,


  reducers: {


    set_name: (state, action) => {

      state.basic.name = action.payload

    },



    set_intro: (state, action) => {

      state.basic.intro = action.payload

    },



    set_email: (state, action) => {

      state.basic.email = action.payload

    },


    set_address: (state, action) => {

      state.basic.address = action.payload

    },


    set_phone: (state, action) => {

      state.basic.phone = action.payload

    },






  },
})





export const { set_name, set_email, set_intro ,  set_address ,  set_phone } = counterSlice.actions

export default counterSlice.reducer