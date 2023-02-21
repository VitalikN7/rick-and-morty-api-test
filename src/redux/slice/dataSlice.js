import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "../../https/setupAxios";

export const fetchRick_and_Morti_Api = createAsyncThunk('/fetch', async () => {
   const { data } = await axios.get()
   return data
})

export const fetchRick_and_Morti_Api_Solo = createAsyncThunk('/fetchSolo', async (id) => {
   const { data } = await axios.get(`/${id}`)
   return data
})

const initialState = {
   allDataIsApi: null,
   allDataIsApiSolo: null,
   reserveallDataIsApi: null,
   statusRequest: 'loading',
   statusRequestSolo: 'loading',
   searchString: null,
}

export const dataSlice = createSlice({
   name: 'data',
   initialState,
   reducers: {
      searchName(state, action) {
         state.searchString = action.payload
      },
      sortStatus(state, action) {
         if (state.allDataIsApi !== null) {
            const copyAllDataIsApi = [...state.reserveallDataIsApi?.results]
            if (action.payload === 'Категории') {
               state.allDataIsApi.results = copyAllDataIsApi
            } else {
               const sortItem = copyAllDataIsApi.filter(el => {
                  return el.status === action.payload
               })
               state.allDataIsApi.results = sortItem
            }
         }
      }
   },
   extraReducers: {
      [fetchRick_and_Morti_Api.pending]: (state) => {
         state.statusRequest = 'loading'
      },
      [fetchRick_and_Morti_Api.fulfilled]: (state, action) => {
         state.statusRequest = 'loaded'
         if (!action.payload) {
            return alert('Не удалось получить данные')
         }
         state.allDataIsApi = action.payload
         state.reserveallDataIsApi = action.payload
      },
      [fetchRick_and_Morti_Api.rejected]: (state) => {
         state.statusRequest = 'error'
      },

      [fetchRick_and_Morti_Api_Solo.pending]: (state) => {
         state.statusRequestSolo = 'loading'
      },
      [fetchRick_and_Morti_Api_Solo.fulfilled]: (state, action) => {
         state.statusRequestSolo = 'loaded'
         if (!action.payload) {
            return alert('Не удалось получить данные')
         }
         state.allDataIsApiSolo = action.payload
      },
      [fetchRick_and_Morti_Api_Solo.rejected]: (state) => {
         state.statusRequestSolo = 'error'
      },
   }
})

export const dataReducer = dataSlice.reducer

export const selectAllDataIsApi = state => state.data

export const { searchName } = dataSlice.actions

export const { sortStatus } = dataSlice.actions