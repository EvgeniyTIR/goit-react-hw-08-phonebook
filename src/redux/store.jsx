import { configureStore } from '@reduxjs/toolkit';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from 'redux/constactAPI';

const actions = [fetchContacts, addContact, deleteContact];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.contacts.items.findIndex(
          e => e.id === action.payload.id
        );
        state.contacts.items.splice(index, 1);
      })
      .addMatcher(isAnyOf(...actions.map(action => action.pending)), state => {
        state.contacts.isLoading = true;
      })
      .addMatcher(
        isAnyOf(...actions.map(action => action.fulfilled)),
        state => {
          state.contacts.isLoading = false;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        isAnyOf(...actions.map(action => action.rejected)),
        (state, action) => {
          state.contacts.isLoading = false;
          state.contacts.error = action.payload;
        }
      ),
});
//   extraReducers: {
//     [fetchContacts.pending](state) {
//       state.contacts.isLoading = true;
//     },
//     [fetchContacts.fulfilled](state, action) {
//       state.contacts.isLoading = false;
//       state.contacts.error = null;
//       state.contacts.items = action.payload;
//     },
//     [fetchContacts.rejected](state, action) {
//       state.contacts.isLoading = false;
//       state.contacts.error = action.payload;
//     },
//     [addContact.pending](state) {
//       state.contacts.isLoading = true;
//     },
//     [addContact.fulfilled](state, action) {
//       state.contacts.isLoading = false;
//       state.contacts.error = null;
//       state.contacts.items.push(action.payload);
//     },
//     [addContact.rejected](state, action) {
//       state.contacts.isLoading = false;
//       state.contacts.error = action.payload;
//     },
//     [deleteContact.pending](state) {
//       state.contacts.isLoading = true;
//     },
//     [deleteContact.fulfilled](state, action) {
//       state.contacts.isLoading = false;
//       state.contacts.error = null;
//       const index = state.contacts.items.findIndex(
//         e => e.id === action.payload.id
//       );
//       state.contacts.items.splice(index, 1);
//     },
//     [deleteContact.rejected](state, action) {
//       state.contacts.isLoading = false;
//       state.contacts.error = action.payload;
//     },
//   },
// });

export const { setFilter } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;

export const store = configureStore({
  reducer: contactsReducer,
});
