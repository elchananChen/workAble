import { SidebarTrigger } from "./ui/sidebar";

function Header() {
  return (
    <div className="fixed top-0 z-50 w-full  transition-all duration-300 bg-inherit ">
      <div className="px-4">
        <SidebarTrigger></SidebarTrigger>
      </div>
    </div>
  );
}

export default Header;
