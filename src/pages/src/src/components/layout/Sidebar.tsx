
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  CreditCard,
  FileText,
  Home,
  LayoutDashboard,
  LogOut,
  Package,
  PieChart,
  Settings,
  User,
  FilePlus,
  FileBarChart,
  BookOpen,
  Database,
  FileCheck,
  Truck,
  FileSearch,
  Building,
  Users,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
  submenu?: NavItem[];
};

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Accounting Masters",
    href: "#",
    icon: BookOpen,
    submenu: [
      { title: "Groups", href: "/masters/groups", icon: FileText },
      { title: "Ledger", href: "/masters/ledger", icon: FileText },
      { title: "Cost Center", href: "/masters/cost-center", icon: FileText },
      { title: "Currency", href: "/masters/currency", icon: CreditCard },
      { title: "Voucher Type", href: "/masters/voucher-type", icon: FilePlus },
    ],
  },
  {
    title: "Inventory Master",
    href: "#",
    icon: Package,
    submenu: [
      { title: "Stock Groups", href: "/inventory/stock-groups", icon: Package },
      { title: "Stock Category", href: "/inventory/stock-category", icon: Package },
      { title: "Stock Item", href: "/inventory/stock-item", icon: Package },
      { title: "Unit", href: "/inventory/unit", icon: FileText },
      { title: "Godown", href: "/inventory/godown", icon: Building },
    ],
  },
  {
    title: "Statutory Masters",
    href: "#",
    icon: FileCheck,
    submenu: [
      { title: "GST Registration", href: "/statutory/gst-registration", icon: FileCheck },
      { title: "GST Classification", href: "/statutory/gst-classification", icon: FileCheck },
      { title: "TDS Nature of Payments", href: "/statutory/tds-payments", icon: FileCheck },
      { title: "TCS Nature of Goods", href: "/statutory/tcs-goods", icon: FileCheck },
    ],
  },
  {
    title: "Statutory Details",
    href: "#",
    icon: Database,
    submenu: [
      { title: "Company GST Details", href: "/statutory-details/gst", icon: Database },
      { title: "TDS Details", href: "/statutory-details/tds", icon: Database },
      { title: "TCS Details", href: "/statutory-details/tcs", icon: Database },
      { title: "PAN & CIN Details", href: "/statutory-details/pan-cin", icon: Database },
    ],
  },
  {
    title: "Reports",
    href: "#",
    icon: FileBarChart,
    submenu: [
      { title: "Accounts Book", href: "/reports/accounts-book", icon: FileBarChart },
      { title: "Party Order Management", href: "/reports/party-order", icon: Truck },
      { title: "Statement of Accounts", href: "/reports/statement-accounts", icon: FileBarChart },
      { title: "Inventory Books", href: "/reports/inventory-books", icon: Package },
      { title: "Job Work Reports", href: "/reports/job-work", icon: FileSearch },
      { title: "Statutory Reports", href: "/reports/statutory", icon: FileCheck },
    ],
  },
  {
    title: "Company Management",
    href: "/company",
    icon: Building,
  },
  {
    title: "Employee Management",
    href: "/employees",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (title: string) => {
    if (expandedItems.includes(title)) {
      setExpandedItems(expandedItems.filter(item => item !== title));
    } else {
      setExpandedItems([...expandedItems, title]);
    }
  };

  return (
    <div className="w-64 h-screen bg-sidebar fixed left-0 top-0 overflow-y-auto border-r border-sidebar-border flex flex-col">
      <div className="p-4 border-b border-sidebar-border flex items-center justify-center">
        <h1 className="text-xl font-bold text-white">LedgerCraft Hub</h1>
      </div>
      
      <div className="flex-1 py-4 px-2">
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            const hasSubmenu = item.submenu && item.submenu.length > 0;
            const isExpanded = hasSubmenu && expandedItems.includes(item.title);
            
            return (
              <div key={item.title}>
                {hasSubmenu ? (
                  <Collapsible open={isExpanded} onOpenChange={() => toggleExpand(item.title)}>
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                          isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
                        )}
                      >
                        <item.icon className="mr-2 h-4 w-4" />
                        <span className="flex-1 text-left">{item.title}</span>
                        {isExpanded ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-8 mt-1 space-y-1">
                      {item.submenu?.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.href}
                          className={cn(
                            "flex items-center text-sm py-2 px-3 rounded-md text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                            location.pathname === subItem.href && 
                            "bg-sidebar-accent text-sidebar-accent-foreground"
                          )}
                        >
                          <subItem.icon className="mr-2 h-4 w-4" />
                          {subItem.title}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center text-sm py-2 px-3 rounded-md w-full text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                      isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
                    )}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>
      
      <div className="p-4 border-t border-sidebar-border">
        <Button
          variant="ghost"
          className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          onClick={() => {
            // Handle logout logic here
            window.location.href = '/login';
          }}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}
