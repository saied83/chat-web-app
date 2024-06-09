const Message = (props) => {
  const { start } = props;
  return (
    <div className={`chat ${start}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://avatar.iran.liara.run/public/boy?username=saied"
            alt="tailwindCSS chat bubble component"
          />
        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-500">Hi! What is upp?</div>
      <div className="chat-footer text-xs text-white flex gap-1 items-center">
        12:42
      </div>
    </div>
  );
};

export default Message;
