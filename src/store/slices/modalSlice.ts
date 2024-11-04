import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "../../types";

type TModalState = {
  boardId: string;
  listId: string;
  task: ITask;
};

const initialState : TModalState = {
  boardId: "board-0",
  listId: "list-0",
  task: {
    taskId: "task-0",
    taskName: "task 0",
    taskDescription: "task description",
    taskOwner: "Kim",
  },
};

const modalSlice = createSlice({
  name: "modal", //슬라이스의 이름 : 지금은 modal
  initialState, // 초기State
  reducers :{

  }//액션을 사용하는 함수들
});

export const modalReducer = modalSlice.reducer;

