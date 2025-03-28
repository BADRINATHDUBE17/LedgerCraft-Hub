
import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Download, Printer } from "lucide-react";

// Sample data for demonstration
const partyOptions = [
  { value: "party1", label: "ABC Suppliers" },
  { value: "party2", label: "XYZ Customers" },
  { value: "party3", label: "Office Rent" },
  { value: "party4", label: "Cash Account" },
  { value: "party5", label: "Bank of India" },
];

const sampleTransactions = [
  { 
    date: "2023-05-01", 
    particulars: "Opening Balance", 
    voucherType: "-", 
    voucherNo: "-", 
    debit: 0, 
    credit: 0, 
    balance: 25000,
    type: "Dr"
  },
  { 
    date: "2023-05-03", 
    particulars: "Sales to XYZ Customer", 
    voucherType: "Sales", 
    voucherNo: "SL/23-24/001", 
    debit: 0, 
    credit: 15000, 
    balance: 40000,
    type: "Dr"
  },
  { 
    date: "2023-05-07", 
    particulars: "Purchase from ABC Supplier", 
    voucherType: "Purchase", 
    voucherNo: "PUR/23-24/001", 
    debit: 12000, 
    credit: 0, 
    balance: 28000,
    type: "Dr"
  },
  { 
    date: "2023-05-15", 
    particulars: "Office Rent Payment", 
    voucherType: "Payment", 
    voucherNo: "PAY/23-24/001", 
    debit: 5000, 
    credit: 0, 
    balance: 23000,
    type: "Dr"
  },
  { 
    date: "2023-05-20", 
    particulars: "Receipt from XYZ Customer", 
    voucherType: "Receipt", 
    voucherNo: "REC/23-24/001", 
    debit: 0, 
    credit: 10000, 
    balance: 33000,
    type: "Dr"
  },
];

const LedgerReport = () => {
  const [selectedParty, setSelectedParty] = useState<string>("");
  const [transactions, setTransactions] = useState(sampleTransactions);
  const [dateRange, setDateRange] = useState({ from: "2023-05-01", to: "2023-05-31" });

  const handlePartyChange = (value: string) => {
    setSelectedParty(value);
    // In a real app, you would fetch transactions for the selected party
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExportPdf = () => {
    // Implement PDF export logic
    alert("Export to PDF functionality will be implemented here");
  };

  const handleExportExcel = () => {
    // Implement Excel export logic
    alert("Export to Excel functionality will be implemented here");
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Ledger Report</h1>
            <p className="text-gray-500">View detailed ledger by party</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={handlePrint}>
              <Printer className="mr-2 h-4 w-4" />
              Print
            </Button>
            <Button variant="outline" onClick={handleExportPdf}>
              <Download className="mr-2 h-4 w-4" />
              PDF
            </Button>
            <Button variant="outline" onClick={handleExportExcel}>
              <Download className="mr-2 h-4 w-4" />
              Excel
            </Button>
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Select Party</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="party">Party Name</Label>
                <Select onValueChange={handlePartyChange} value={selectedParty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a party" />
                  </SelectTrigger>
                  <SelectContent>
                    {partyOptions.map((party) => (
                      <SelectItem key={party.value} value={party.value}>
                        {party.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="fromDate">From Date</Label>
                <input 
                  type="date" 
                  id="fromDate" 
                  value={dateRange.from}
                  onChange={(e) => setDateRange({...dateRange, from: e.target.value})}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div>
                <Label htmlFor="toDate">To Date</Label>
                <input 
                  type="date" 
                  id="toDate" 
                  value={dateRange.to}
                  onChange={(e) => setDateRange({...dateRange, to: e.target.value})}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {selectedParty && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Ledger: {partyOptions.find(p => p.value === selectedParty)?.label}</CardTitle>
              <div className="text-sm text-gray-500">
                Period: {dateRange.from} to {dateRange.to}
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Particulars</TableHead>
                    <TableHead>Voucher Type</TableHead>
                    <TableHead>Voucher No</TableHead>
                    <TableHead className="text-right">Debit (₹)</TableHead>
                    <TableHead className="text-right">Credit (₹)</TableHead>
                    <TableHead className="text-right">Balance (₹)</TableHead>
                    <TableHead>Dr/Cr</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction, index) => (
                    <TableRow key={index}>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.particulars}</TableCell>
                      <TableCell>{transaction.voucherType}</TableCell>
                      <TableCell>{transaction.voucherNo}</TableCell>
                      <TableCell className="text-right">{transaction.debit.toLocaleString('en-IN')}</TableCell>
                      <TableCell className="text-right">{transaction.credit.toLocaleString('en-IN')}</TableCell>
                      <TableCell className="text-right">{transaction.balance.toLocaleString('en-IN')}</TableCell>
                      <TableCell>{transaction.type}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default LedgerReport;
