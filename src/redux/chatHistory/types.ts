export interface ChatHistory {
    messages: string[];
}

export enum ChatHistoryActionTypes {
    ADD_MESSAGE = "@@chat/ADD_MESSAGE",
    FETCH_MESSAGE = "@@chat/FETCH_MESSAGE",
}

export interface ChatHistoryState {
    readonly data: {
        [key: string]: ChatHistory
    };
}

export interface Message {
    user: string;
    message: string
}

interface AddMessageAction {
    type: typeof ChatHistoryActionTypes.ADD_MESSAGE
    payload: Message
}

export type ChatActionTypes = AddMessageAction