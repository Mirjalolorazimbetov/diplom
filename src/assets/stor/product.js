import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    search: "",
    order: "",
    limit: 12, 
    offset: 0,
}


export const  productSlice = createSlice({
    name:"product", 
    initialState,
     reducers:{
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setOrder: (state, action) => {
            state.order = action.payload
        },
        setOffset:(state, action)=>{
          state.offset = action.payload*state.limit
        }
    }
})

export const {setSearch, setOffset,setOrder,} = productSlice.actions
export default productSlice.reducer;