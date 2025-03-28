
mport { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Printer, Download, ExternalLink } from "lucide-react";

const sampleInvoices = [
  {
    id: "INV-2023-001",
    date: "2023-05-02",
    customer: "XYZ Customers",
    amount: 15400,
    status: "Paid",
    items: [
      { name: "Product A", quantity: 5, rate: 1000, amount: 5000 },
      { name: "Product B", quantity: 2, rate: 5200, amount: 10400 }
    ]
  },
  {
    id: "INV-2023-002",
    date: "2023-05-10",
    customer: "ABC Corp",
    amount: 8750,
    status: "Unpaid",
    items: [
      { name: "Product C", quantity: 10, rate: 875, amount: 8750 }
    ]
  },
  {
    id: "INV-2023-003",
    date: "2023-05-15",
    customer: "PQR Industries",
    amount: 22300,
    status: "Partial",
    items: [
      { name: "Product A", quantity: 8, rate: 1000, amount: 8000 },
      { name: "Product D", quantity: 3, rate: 4100, amount: 12300 },
      { name: "Service Fee", quantity: 1, rate: 2000, amount: 2000 }
    ]
  },
  {
    id: "INV-2023-004",
    date: "2023-05-22",
    customer: "LMN Enterprises",
    amount: 31500,
    status: "Paid",
    items: [
      { name: "Product E", quantity: 15, rate: 2100, amount: 31500 }
    ]
  }
];

const SalesRegister = () => {
  const [selectedTab, setSelectedTab] = useState("invoices");
  const [selectedInvoice, setSelectedInvoice] = useState<string | null>(null);

  const handlePrintInvoice = (invoiceId: string) => {
    // Handle invoice printing
    alert(`Printing invoice ${invoiceId}`);
  };

  const handleDownloadPdf = (invoiceId: string) => {
    // Handle PDF download
    alert(`Downloading invoice ${invoiceId} as PDF`);
  };

  const handleDownloadExcel = (invoiceId: string) => {
    // Handle Excel download
    alert(`Downloading invoice ${invoiceId} as Excel`);
  };

  const handleCreateEInvoice = (invoiceId: string) => {
    // Handle E-Invoice creation
    alert(`Creating E-Invoice for ${invoiceId}`);
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Sales Register</h1>
            <p className="text-gray-500">Manage invoices and sales transactions</p>
          </div>
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            Create New Invoice
          </Button>
        </div>

        <Tabs defaultValue="invoices" value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
            <TabsTrigger value="e-invoices">E-Invoices</TabsTrigger>
            <TabsTrigger value="summary">Sales Summary</TabsTrigger>
          </TabsList>

          <TabsContent value="invoices">
            <Card>
              <CardHeader>
                <CardTitle>Invoice List</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice #</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead className="text-right">Amount (₹)</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sampleInvoices.map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{invoice.date}</TableCell>
                        <TableCell>{invoice.customer}</TableCell>
                        <TableCell className="text-right">{invoice.amount.toLocaleString('en-IN')}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            invoice.status === "Paid" ? "bg-green-100 text-green-800" : 
                            invoice.status === "Unpaid" ? "bg-red-100 text-red-800" : 
                            "bg-yellow-100 text-yellow-800"
                          }`}>
                            {invoice.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-1">
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handlePrintInvoice(invoice.id)}
                            >
                              <Printer className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleDownloadPdf(invoice.id)}
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleCreateEInvoice(invoice.id)}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {selectedInvoice && (
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Invoice Details: {selectedInvoice}</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Invoice details would go here */}
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="e-invoices">
            <Card>
              <CardHeader>
                <CardTitle>E-Invoice Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 mb-4">Manage and generate e-invoices for GST compliance</p>
                {/* E-Invoice management interface would go here */}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="summary">
            <Card>
              <CardHeader>
                <CardTitle>Sales Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 mb-4">View sales summary by customer, product, or period</p>
                {/* Sales summary charts and tables would go here */}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default SalesRegister;
