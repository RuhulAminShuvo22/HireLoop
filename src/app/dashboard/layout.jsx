import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Toaster } from "react-hot-toast";

const Dashboardlayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#F8F5EF]">
      <DashboardSidebar />

      <main className="flex-1 overflow-x-hidden">
        {children}

        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </main>
    </div>
  );
};

export default Dashboardlayout;