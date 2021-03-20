import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'popup',
    initialState: {
        showPopup: false,
        month: null,
        day: null,
    },
    reducers: {
        openPopup: (state) => ({
            ...state,
            showPopup: true,
        }),
        closePopup: (state) => ({
            ...state,
            showPopup: false,
        }),
        setMonth: (state, action) => ({
            ...state,
            month: action.payload,
        }),
        setDay: (state, action) => ({
            ...state,
            day: action.payload,
        }),
    },
});

export const { openPopup, closePopup, setMonth, setDay } = slice.actions;

export const selectShowPopup = (state) => state.popup.showPopup;
export const selectMonth = (state) => state.popup.month;
export const selectDay = (state) => state.popup.day;

export default slice.reducer;
