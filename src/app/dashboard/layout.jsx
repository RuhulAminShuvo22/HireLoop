import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

const Dashboardlayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#F8F5EF]">
      <DashboardSidebar />

      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
};

export default Dashboardlayout;