import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
};

export const contactSlice = createSlice({
    name: "contactsssss",
    initialState,
    reducers: {
        addContact(state) {
            const randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
            state.data = [...state.data, { name: `sandeep_${randomNumber}`, id: randomNumber }];
        },
        resetContact(state) {
            state.data = [];
        }
    }
});

export const { addContact, resetContact } = contactSlice.actions;

export const selectAllContacts = (state) => state.contacts.data;

export default contactSlice.reducer;