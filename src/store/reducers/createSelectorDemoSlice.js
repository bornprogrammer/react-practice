import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
    x: 0,
    y: 0,
    z: 0,
    z1: 0,
};

const createSelectorDemoSlice = createSlice({
    name: "selectorDemo",
    initialState,
    reducers: {
        incrementX(state) {
            state.x += 1;
        },
        incrementY(state) {
            state.y += 1;
        },
        incrementZ(state) {
            state.z += 1;
        },
        decrementX(state) {
            state.x -= 1;
        },
        decrementY(state) {
            state.y -= 1;
        },
        decrementZ(state) {
            state.z -= 1;
        },

        incrementZ1(state) {
            state.z1 += 1;
        }

    }
});

export const { incrementX, incrementY, incrementZ, incrementZ1, decrementX, decrementZ, decrementY } = createSelectorDemoSlice.actions

export const selectX = (state) => state.selectorDemo.x;

export const selectY = (state) => state.selectorDemo.y;

export const selectZ = (state) => state.selectorDemo.z;

export const randomCallback = (state) => {
    // const randomValue = Math.floor(Math.random * (100 - 11 + 1) + 11);
    // console.log("randomValue", randomValue);
    return 99;
}

export const selectSum = createSelector(selectX, selectY, selectZ, randomCallback, (x, y, z, randomValue) => {
    console.log("rendereding");
    return x + y + z + randomValue;
});

export const selectZ1 = (state) => state.selectorDemo.z1;

export default createSelectorDemoSlice.reducer; 