import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { addMessage } from "../../redux/chatHistory/action";
import { AppState } from "../../redux/store";
import { MessageIcon } from "../../components/Icons";

const users = [
  "martin",
  "jessie",
  "Alexander",
  "Eugene",
  "Lloyd",
  "Caleb",
  "Douglas",
];

const messages = [
  "hello there",
  "how are you",
  "hello there",
  "how are you",
  "hello there",
  "how are you",
  "hello there",
  "how are you",
];

interface HomeState {
  newMessage: string;
  chattingWith: string;
}

const Home = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState<HomeState>({
    newMessage: "",
    chattingWith: users[0],
  });

  const { chatHistory } = useSelector((state: AppState) => ({
    chatHistory: state.chatHistory.data,
  }));

  const handleChnage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setState((s) => ({
      ...s,
      newMessage: e.target.value,
    }));
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-4/5 bg-white shadow-md">
        <div className="col-span-3 shadow-md p-4 flex items-center">
          <MessageIcon />
          <span className="ml-4">Welcome User</span>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="overflow-auto">
            {users.map((user, key) => {
              return (
                <div
                  key={key}
                  className={`${cn({
                    "bg-indigo-300": state.chattingWith === user,
                  })} border shadow-inner md:p-8 p-4`}
                  onClick={() =>
                    setState((s) => ({
                      ...s,
                      chattingWith: user,
                    }))
                  }
                >
                  {user}
                </div>
              );
            })}
          </div>
          <div className="col-span-2 px-8 py-4">
            <div className="flex flex-col h-full">
              <div className="h-2/3 overflow-y-auto">
                {chatHistory[state.chattingWith] &&
                  chatHistory[state.chattingWith].messages.map(
                    (message, key) => {
                      return (
                        <div
                          key={key}
                          className="border-2 border-black rounded-md mb-4 p-2 text-right"
                        >
                          {message}
                        </div>
                      );
                    }
                  )}
              </div>
              <div className="h-1/3 flex flex-col">
                <textarea
                  rows={10}
                  className="resize border rounded-md"
                  onChange={handleChnage}
                ></textarea>
                <button
                  onClick={() => {
                    return dispatch(
                      addMessage({
                        message: state.newMessage,
                        user: state.chattingWith,
                      })
                    );
                  }}
                  className="mt-4 self-end border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 px-8 py-3 md:text-lg md:px-10 md:py-4"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
