
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className={`sidebar-wrapper transition-all duration-300 ${sidebarCollapsed ? 'hidden' : 'block'}`}>
        <Sidebar />
      </div>
      
      <Header 
        toggleSidebar={toggleSidebar} 
        sidebarCollapsed={sidebarCollapsed} 
      />
      
      <main 
        className="flex-1 overflow-auto transition-all duration-300" 
        style={{ 
          marginLeft: sidebarCollapsed ? '0' : '16rem',
          marginTop: '4rem'
        }}
      >
        <div className="container mx-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
