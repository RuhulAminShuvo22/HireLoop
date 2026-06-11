// // import type {ComponentType, SVGProps} from "react";

// import { LayoutSideContentLeft, Bell, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";
// import { Button, Drawer } from "@heroui/react";

// export function DashboardSidebar() {
//     const navItems = [
//         { icon: House, label: "Home" },
//         { icon: Magnifier, label: "Search" },
//         { icon: Bell, label: "Notifications" },
//         { icon: Envelope, label: "Messages" },
//         { icon: Person, label: "Profile" },
//         { icon: Gear, label: "Settings" },
//     ];

//     const navContent = <nav className="flex flex-col gap-1">
//         {navItems.map((item) => (
//             <button
//                 key={item.label}
//                 className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
//                 type="button"
//             >
//                 <item.icon className="size-5 text-muted" />
//                 {item.label}
//             </button>
//         ))}
//     </nav>


//     return (
//         <>
//             <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
//                 {navContent}
//             </aside>

//             <Drawer>
//                 <Button className="lg:hidden" variant="secondary">
//                     <LayoutSideContentLeft />
//                     Sidebar
//                 </Button>
//                 <Drawer.Backdrop>
//                     <Drawer.Content placement="left">
//                         <Drawer.Dialog>
//                             <Drawer.CloseTrigger />
//                             <Drawer.Header>
//                                 <Drawer.Heading>Navigation</Drawer.Heading>
//                             </Drawer.Header>
//                             <Drawer.Body>
//                                 {navContent }
//                             </Drawer.Body>
//                         </Drawer.Dialog>
//                     </Drawer.Content>
//                 </Drawer.Backdrop>
//             </Drawer>
//         </>
//     );
// }



"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "@/lib/auth-client";

import {
    Briefcase,
    Building2,
    FileText,
    Settings,
    LayoutDashboard,
    Menu,
} from "lucide-react";

import { Button, Drawer } from "@heroui/react";

export default function DashboardSidebar() {
    const pathname = usePathname();
    const { data: session } = useSession();

    const navItems = [
        {
            icon: LayoutDashboard,
            label: "Dashboard",
            href: "/dashboard/recruiter",
        },
        {
            icon: Building2,
            label: "My Company",
            href: "/dashboard/recruiter/company",
        },
        {
            icon: Briefcase,
            label: "Manage Jobs",
            href: "/dashboard/recruiter/jobs",
        },
        {
            icon: FileText,
            label: "Applications",
            href: "/dashboard/recruiter/applications",
        },
        {
            icon: Settings,
            label: "Settings",
            href: "/dashboard/recruiter/settings",
        },
    ];

    const SidebarContent = (
        <div className="flex h-full flex-col">
            {/* Logo */}
            <div className="border-b border-[#E6DCC8] pb-6">
                <Link href="/">
                    <Image
                        src="/assets/new-logo.png"
                        alt="HireLoop"
                        width={180}
                        height={60}
                        className="h-12 w-auto"
                    />
                </Link>
            </div>

            {/* User */}
            <div className="mt-6 border-b border-[#E6DCC8] pb-6">
                <div className="flex items-center gap-3">
                    <img
                        src={
                            session?.user?.image ||
                            "https://ui-avatars.com/api/?name=User"
                        }
                        alt="user"
                        className="h-12 w-12 rounded-full object-cover border border-[#D4A95A]"
                    />

                    <div>
                        <h3 className="font-semibold text-[#3B2F1E]">
                            {session?.user?.name}
                        </h3>

                        <p className="text-xs text-[#8B6F47]">
                            {session?.user?.role === "recruiter"
                                ? "Recruiter"
                                : "Job Seeker"}
                        </p>
                    </div>
                </div>

                <div className="mt-3 inline-block rounded-md bg-[#D4A95A]/15 px-3 py-1 text-xs font-medium text-[#D4A95A]">
                    PREMIUM ACCOUNT
                </div>
            </div>

            {/* Navigation */}
            <nav className="mt-6 flex flex-col gap-2">
                {navItems.map((item) => {
                    const active = pathname === item.href;

                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all
                ${active
                                    ? "bg-[#D4A95A] text-white shadow-md"
                                    : "text-[#3B2F1E] hover:bg-[#F2E8D7]"
                                }`}
                        >
                            <item.icon size={18} />
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );

    return (
        <>
            {/* Desktop */}
            <aside className="hidden lg:block w-72 min-h-screen border-r border-[#E6DCC8] bg-[#F8F5EF] p-6">
                {SidebarContent}
            </aside>

            {/* Mobile */}
            <Drawer>
                <Button
                    className="lg:hidden"
                    variant="flat"
                >
                    <Menu size={18} />
                    Menu
                </Button>

                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />

                            <Drawer.Body className="bg-[#F8F5EF] p-5">
                                {SidebarContent}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>
    );
}