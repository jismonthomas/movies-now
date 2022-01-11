import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        modal: false,
        notification: null
    },
    reducers: {
        toggleModal(state, action) {
            state.modal = !state.modal;
        },
        showNotification(state, action) {
            state.notification = {
                state: action.payload.state,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;
