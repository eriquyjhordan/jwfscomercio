import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IAdress {
  city: string;
  neighborhood: string;
  state: string;
  street: string;
}

const signUp = createSlice({
  name: 'signUp',
  initialState: {
    fullname: '',
    zipcode: '',
    isConsultCep: false,
    city: '',
    neighborhood: '',
    state: '',
    street: '',
    complement: '',
    number: '',
  },

  reducers: {
    setFullname: (state, action: PayloadAction<string>) => {
      state.fullname = action.payload;
    },
    setZipcode: (state, action: PayloadAction<string>) => {
      state.zipcode = action.payload;
    },
    setIsConsultCep: (state, action: PayloadAction<boolean>) => {
      state.isConsultCep = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setNeighborhood: (state, action: PayloadAction<string>) => {
      state.neighborhood = action.payload;
    },
    setState: (state, action: PayloadAction<string>) => {
      state.state = action.payload;
    },
    setStreet: (state, action: PayloadAction<string>) => {
      state.street = action.payload;
    },
    setNumber: (state, action: PayloadAction<string>) => {
      state.number = action.payload;
    },
    setComplement: (state, action: PayloadAction<string>) => {
      state.complement = action.payload;
    },
    setAddress: (state, action: PayloadAction<IAdress>) => {
      state.city = action.payload.city;
      state.neighborhood = action.payload.neighborhood;
      state.state = action.payload.state;
      state.street = action.payload.street;
    },
    clearAddress: (state) => {
      state.city = '';
      state.neighborhood = '';
      state.state = '';
      state.street = '';
    },
  },
});

export const {
  setFullname,
  setZipcode,
  setIsConsultCep,
  setCity,
  setNeighborhood,
  setState,
  setStreet,
  setAddress,
  clearAddress,
  setComplement,
  setNumber,
} = signUp.actions;

export default signUp.reducer;
