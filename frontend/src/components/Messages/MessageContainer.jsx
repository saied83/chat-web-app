import { useEffect } from "react";
import useConversation from "../../store/useConversation";
import Chat from "./Chat";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //cleanup function (unmount components)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected
          name={JSON.parse(localStorage.getItem("user-info")).fullName}
        />
      ) : (
        <>
          <div className="bg-blue-400 px-4 py-2 mb-2">
            <span className="label-text text-black ">To: </span>
            <span className="text-white font-bold pl-2">
              {selectedConversation.fullName}
            </span>
          </div>
          <Chat />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = ({ name }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-white font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {name} ❄️</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
