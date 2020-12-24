import { ChatHistoryActionTypes, Message, ChatActionTypes } from './types'

// TypeScript infers that this function is returning SendMessageAction
export function addMessage(data: Message): ChatActionTypes {
    return {
        type: ChatHistoryActionTypes.ADD_MESSAGE,
        payload: data
    }
}