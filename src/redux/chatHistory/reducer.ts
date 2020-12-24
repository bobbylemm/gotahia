import { Reducer } from "redux";
import { ChatHistoryActionTypes, ChatHistoryState } from "./types";

export const initialState: ChatHistoryState = {
    data: {},
};

const reducer: Reducer<ChatHistoryState> = (state = initialState, action) => {
    switch (action.type) {
        case ChatHistoryActionTypes.ADD_MESSAGE: {
            const newStateData = state.data

            if (newStateData[action.payload.user]) {
                newStateData[action.payload.user].messages.push(action.payload.message)
            } else {
                newStateData[action.payload.user] = { messages: [action.payload.message] }
            }
            return { ...state, data: newStateData };
        }
        default: {
            return state;
        }
    }
};

export { reducer as ChatHistoryReducer };