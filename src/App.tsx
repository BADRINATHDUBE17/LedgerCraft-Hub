import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Groups from "./pages/masters/Groups";
import Ledger from "./pages/masters/Ledger";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

// Reports
import AccountsBook from "./pages/reports/AccountsBook";
import LedgerReport from "./pages/reports/LedgerReport";
import GroupSummary from "./pages/reports/GroupSummary";
import GroupVoucher from "./pages/reports/GroupVoucher";
import ContraRegister from "./pages/reports/ContraRegister";
import PaymentRegister from "./pages/reports/PaymentRegister";
import ReceiptRegister from "./pages/reports/ReceiptRegister";
import SalesRegister from "./pages/reports/SalesRegister";
import PurchaseRegister from "./pages/reports/PurchaseRegister";
import JournalRegister from "./pages/reports/JournalRegister";
import DebitNoteRegister from "./pages/reports/DebitNoteRegister";
import CreditNoteRegister from "./pages/reports/CreditNoteRegister";
import PartyOrderManagement from "./pages/reports/PartyOrderManagement";
import StatementOfAccounts from "./pages/reports/StatementOfAccounts";
import InventoryBooks from "./pages/reports/InventoryBooks";
import StockManagement from "./pages/reports/StockManagement";
import JobWorkReports from "./pages/reports/JobWorkReports";
import DeliveryChallan from "./pages/reports/DeliveryChallan";
import StatutoryReports from "./pages/reports/StatutoryReports";
import GSTR1Report from "./pages/reports/GSTR1Report";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Masters Routes */}
            <Route path="/masters/groups" element={<Groups />} />
            <Route path="/masters/ledger" element={<Ledger />} />
            
            {/* Reports Routes */}
            <Route path="/reports/accounts-book" element={<AccountsBook />} />
            <Route path="/reports/accounts-book/ledger" element={<LedgerReport />} />
            <Route path="/reports/accounts-book/group-summary" element={<GroupSummary />} />
            <Route path="/reports/accounts-book/group-voucher" element={<GroupVoucher />} />
            <Route path="/reports/accounts-book/contra-register" element={<ContraRegister />} />
            <Route path="/reports/accounts-book/payment-register" element={<PaymentRegister />} />
            <Route path="/reports/accounts-book/receipt-register" element={<ReceiptRegister />} />
            <Route path="/reports/accounts-book/sales-register" element={<SalesRegister />} />
            <Route path="/reports/accounts-book/purchase-register" element={<PurchaseRegister />} />
            <Route path="/reports/accounts-book/journal-register" element={<JournalRegister />} />
            <Route path="/reports/accounts-book/debit-note-register" element={<DebitNoteRegister />} />
            <Route path="/reports/accounts-book/credit-note-register" element={<CreditNoteRegister />} />
            
            <Route path="/reports/party-order" element={<PartyOrderManagement />} />
            <Route path="/reports/statement-accounts" element={<StatementOfAccounts />} />
            
            <Route path="/reports/inventory-books" element={<InventoryBooks />} />
            <Route path="/reports/inventory-books/stock-management" element={<StockManagement />} />
            
            <Route path="/reports/job-work" element={<JobWorkReports />} />
            <Route path="/reports/job-work/delivery-challan" element={<DeliveryChallan />} />
            
            <Route path="/reports/statutory" element={<StatutoryReports />} />
            <Route path="/reports/statutory/gstr1" element={<GSTR1Report />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
