import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
    form: string;

}

const initialState: FormState = {
    form: "",
};

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        setForm: (state, action: PayloadAction<string>) => {
            state.form = action.payload;
        }
    }
});

export const { setForm } = formSlice.actions;
export default formSlice.reducer;