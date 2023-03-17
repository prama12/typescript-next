import Navbar from "./Navbar";
import Sidebar from "./sidebar/Sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="flex bg-secondary-background-gray">
        <Sidebar />
        <div className="flex-1 h-screen no-scrollbar overflow-y-auto">
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
