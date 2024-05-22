import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchCountries = createAsyncThunk("fetchCountries", async () => {
    try {
        const response = await fetch("https://countriesnow.space/api/v0.1/countries");
        const data = await response.json();
        return data.data; // Assuming the array of countries and cities is under 'data'
    } catch (error) {
        console.error("Error fetching countries:", error);
        throw error; // Rethrow the error to be caught by the rejected action
    }
});

const countrySlice = createSlice({
    name: "Countries",
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload; // Update data field with the fetched countries data
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                console.error("Error fetching countries:", action.error);
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export default countrySlice.reducer;
