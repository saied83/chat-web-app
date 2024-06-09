import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import Thread from "./Thread";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <Thread />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
