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

  open: "",

  QualTitle: "",
  QualYear: "",

  ExpTitle: "",
  ExpYear: "",


  ResearchTitle: "",
  ResearchYear: "",



  qualification: [],
  experience: [],
  research: [],

  speciality: "",


  click_func: {},





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


    set_qualification: (state, action) => {
      state.qualification[0] = action.payload

    },




    add_qualification: (state, action) => {


      state.qualification.push({ title: state.QualTitle, year: state.QualYear, institute: action.payload })

    },



    QualTitle: (state, action) => {
      state.QualTitle = action.payload

    },
    QualYear: (state, action) => {
      state.QualYear = action.payload

    },



    add_experience: (state, action) => {

      state.experience.push({ title: state.ExpTitle, year: state.ExpYear, institute: action.payload })

    },




    set_experience: (state, action) => {
      state.experience[0] = action.payload

    },








    ExpTitle: (state, action) => {
      state.ExpTitle = action.payload

    },
    ExpYear: (state, action) => {
      state.ExpYear = action.payload

    },






    add_research: (state, action) => {


      state.research.push({ title: state.ResearchTitle, year: state.ResearchYear, institute: action.payload })

    },



    ResearchTitle: (state, action) => {
      state.ResearchTitle = action.payload

    },
    ResearchYear: (state, action) => {
      state.ResearchYear = action.payload

    },



    add_speciality: (state, action) => {

      state.speciality = action.payload

    },


    add_open: (state, action) => {

      state.open = action.payload

    },





  },
})





export const { add_open, add_speciality, ExpTitle, ExpYear, ResearchTitle, ResearchYear, add_research, QualTitle, QualYear, set_name, set_email, set_intro, set_address, set_phone, set_skills, set_image, click_image, set_click, set_qualification, add_qualification, set_experience, add_experience } = counterSlice.actions

export default counterSlice.reducer