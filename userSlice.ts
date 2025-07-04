import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    isLogin: false,
    token: "",
    todoList: {},
    fcmToken: '',
    taskFormDraft: null,
    housekeepingDraft: {
        checkedItems: {},
        roomType: "Deluxe",
        page: 1,
      },
      engineeringDraft: {},
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLogin: (state) => {
            state.isLogin = true;
        },
        setToken: (state, action) => {  
            state.token = action.payload;
        },
        setLogout: (state) => {
            state.user = {};
            state.isLogin = false;
            state.token = "";
            state.fcmToken = ''
        },
        setTodoList: (state, action) => {
            state.todoList = action.payload
        },
        setFcmToken: (state, action) => {
            state.fcmToken = action.payload
        },
        removeTodoList: (state) => {
            state.todoList = {}
        },

    saveTaskFormDraft: (state, action) => {
        state.taskFormDraft = action.payload;
      },
      clearTaskFormDraft: (state) => {
        state.taskFormDraft = null;
      },
      setHousekeepingDraft: (state, action) => {
        state.housekeepingDraft = {
          ...state.housekeepingDraft,
          ...action.payload,
        };
      },
      clearHousekeepingDraft: (state) => {
        state.housekeepingDraft = {
          checkedItems: {},
          roomType: "Deluxe",
          page: 1,
        };
      },
      setEngineeringDraft: (state, action) => {
        state.engineeringDraft = {
          ...state.engineeringDraft,
          ...action.payload,
        };
      },
      clearEngineeringDraft: (state) => {
        state.engineeringDraft = {};
      },
    },
});

export const { setUser, setLogin, setToken, setLogout, setTodoList, removeTodoList, setFcmToken, saveTaskFormDraft, clearTaskFormDraft,setHousekeepingDraft, clearHousekeepingDraft,   setEngineeringDraft,         // ✅ add this
  clearEngineeringDraft  } = userSlice.actions;
export default userSlice.reducer;