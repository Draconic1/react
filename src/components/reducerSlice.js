import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "toolkit",
    initialState: {
        isLoading: true,
        films: [],
    },
    reducers: {
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        loadFilms(state, action) {
            state.films = action.payload;
        },
        loadFilm(state, action) {
            state.films.push(action.payload);
        }
    },
});

export default slice.reducer;

export const { loadFilms, loadFilm, setLoading } = slice.actions;
