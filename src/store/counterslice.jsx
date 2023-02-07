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
    skills: '',
    image: '',
    image_clicked: false,


  },



  click_func: {}



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


    set_skills: (state, action) => {

      state.basic.skills = action.payload

    },


    set_image: (state, action) => {

      state.basic.image = action.payload

    },


    click_image: (state, action) => {

      state.basic.image_clicked = !state.basic.image_clicked

    },


    set_click: (state, action) => {

      state.click_func = action.payload

    },












  },
})





export const { set_name, set_email, set_intro, set_address, set_phone, set_skills, set_image, click_image, set_click } = counterSlice.actions

export default counterSlice.reducer