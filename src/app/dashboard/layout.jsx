// import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
// import { Toaster } from "react-hot-toast";

// const Dashboardlayout = ({ children }) => {
//   return (
//     <div className="flex min-h-screen bg-[#F8F5EF]">
//       <DashboardSidebar />

//       <main className="flex-1 overflow-x-hidden">
//         {children}

//         <Toaster
//           position="top-right"
//           reverseOrder={false}
//         />
//       </main>
//     </div>
//   );
// };

// export default Dashboardlayout;


"use client";

import { Toaster } from "react-hot-toast";
import { useSession } from "@/lib/auth-client";

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import SeekerSidebar from "@/components/dashboard/seeker/SeekerSidebar";

const DashboardLayout = ({ children }) => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#F8F5EF]">
        <div className="w-12 h-12 border-4 border-[#D4A64F] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const role = session?.user?.role;

  return (
    <div className="flex min-h-screen bg-[#F8F5EF]">

      {/* Sidebar based on role */}
      {role === "recruiter" ? (
        <DashboardSidebar />
      ) : (
        <SeekerSidebar />
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        {children}

        <Toaster position="top-right" reverseOrder={false} />
      </main>
    </div>
  );
};

export default DashboardLayout;