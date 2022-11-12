import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { addressBackend } from '../constants/backend'

interface Web3State {
  company: string | null
}

const initialState: Web3State = {
  company: 'null',
}

export const createCompany = createAsyncThunk(
  'createCompany',
  async (
    {
      name,
    }: {
      name: string
    },
    thunkApi,
  ) => {
    let res = await axios.post(`${addressBackend}/device`, {
      name: name,
    })

    let data = res.data
    console.log(data)
  },
)

export const allCompanies = createAsyncThunk(
  'allCompanies',
  async (_, thunkApi) => {
    const res = await (await axios.get(`${addressBackend}/device`)).data

    console.log(res)
  },
)

export const setupWeb3Slice = createSlice({
  name: 'web3slice',
  initialState: initialState as Web3State,
  reducers: {
    createCompanies: (
      state: Web3State,
      actions: PayloadAction<string | null>,
    ) => {
      state.company = actions.payload
    },
  },
  extraReducers: (builder: any) => {},
})

export const setupWeb3Reducer = setupWeb3Slice.reducer

export const { createCompanies } = setupWeb3Slice.actions
