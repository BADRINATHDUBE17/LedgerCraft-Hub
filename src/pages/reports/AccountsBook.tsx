
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  BookOpen, 
  FileBarChart, 
  FileCheck 
} from "lucide-react";

const reportOptions = [
  { 
    title: "Ledger",
    description: "View detailed ledger accounts by party",
    icon: FileText,
    path: "/reports/accounts-book/ledger"
  },
  { 
    title: "Group Summary",
    description: "View summary of account groups like capital accounts, cash, etc.",
    icon: BookOpen,
    path: "/reports/accounts-book/group-summary"
  },
  { 
    title: "Group Voucher",
    description: "View vouchers by account group",
    icon: FileBarChart,
    path: "/reports/accounts-book/group-voucher"
  },
  { 
    title: "Contra Register",
    description: "Track contra entries between accounts",
    icon: FileText,
    path: "/reports/accounts-book/contra-register"
  },
  { 
    title: "Payment Register",
    description: "View all payment transactions and party payments",
    icon: FileText,
    path: "/reports/accounts-book/payment-register"
  },
  { 
    title: "Receipt Register",
    description: "View all receipt transactions and party receipts",
    icon: FileText,
    path: "/reports/accounts-book/receipt-register"
  },
  { 
    title: "Sales Register",
    description: "Manage invoices, E-invoices with print and export options",
    icon: FileText,
    path: "/reports/accounts-book/sales-register"
  },
  { 
    title: "Purchase Register",
    description: "Manage purchase orders with print and export options",
    icon: FileText,
    path: "/reports/accounts-book/purchase-register"
  },
  { 
    title: "Journal Register",
    description: "Track party-to-party debit/credit transactions and expense vouchers",
    icon: FileText,
    path: "/reports/accounts-book/journal-register"
  },
  { 
    title: "Debit Note Register",
    description: "Manage item-wise debit notes",
    icon: FileCheck,
    path: "/reports/accounts-book/debit-note-register"
  },
  { 
    title: "Credit Note Register",
    description: "Manage item-wise credit notes",
    icon: FileCheck,
    path: "/reports/accounts-book/credit-note-register"
  }
];

const AccountsBook = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="container mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Accounts Book</h1>
          <p className="text-gray-500">Manage and view all accounting reports</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reportOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <option.icon className="h-5 w-5 mr-2 text-blue-600" />
                  {option.title}
                </CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => navigate(option.path)}
                  className="w-full"
                >
                  View Report
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AccountsBook;
