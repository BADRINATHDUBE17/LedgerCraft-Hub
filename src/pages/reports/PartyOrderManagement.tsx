import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, FileSearch } from "lucide-react";

// Sample data
const partyOptions = [
  { value: "party1", label: "ABC Suppliers" },
  { value: "party2", label: "XYZ Customers" },
  { value: "party3", label: "PQR Distributors" },
];

const sampleOrders = [
  {
    id: "PO-001",
    date: "2023-05-01",
    party: "ABC Suppliers",
    items: [
      { id: "ITM-001", name: "Item X", ordered: 10, billed: 8, pending: 2 },
      { id: "ITM-002", name: "Item Y", ordered: 5, billed: 4, pending: 1 },
    ],
    total: 15000,
    status: "Partially Fulfilled"
  },
  {
    id: "PO-002",
    date: "2023-05-15",
    party: "XYZ Customers",
    items: [
      { id: "ITM-003", name: "Item Z", ordered: 20, billed: 20, pending: 0 },
    ],
    total: 25000,
    status: "Completed"
  },
  {
    id: "PO-003",
    date: "2023-06-01",
    party: "PQR Distributors",
    items: [
      { id: "ITM-001", name: "Item X", ordered: 15, billed: 10, pending: 5 },
      { id: "ITM-004", name: "Item W", ordered: 8, billed: 0, pending: 8 },
    ],
    total: 22000,
    status: "Partially Fulfilled"
  },
];

const PartyOrderManagement = () => {
  const [selectedParty, setSelectedParty] = useState<string>("");
  const [selectedTab, setSelectedTab] = useState<string>("summary");
  const [dateRange, setDateRange] = useState({ from: "2023-05-01", to: "2023-06-30" });
  
  const filteredOrders = selectedParty 
    ? sampleOrders.filter(order => order.party === partyOptions.find(p => p.value === selectedParty)?.label)
    : sampleOrders;

  const handlePartyChange = (value: string) => {
    setSelectedParty(value);
  };

  const handleExport = (format: string) => {
    alert(`Export to ${format} functionality will be implemented here`);
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Party Order Management</h1>
            <p className="text-gray-500">Track purchase orders and pending items</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={() => handleExport("PDF")}>
              <Download className="mr-2 h-4 w-4" />
              Export PDF
            </Button>
            <Button variant="outline" onClick={() => handleExport("Excel")}>
              <Download className="mr-2 h-4 w-4" />
              Export Excel
            </Button>
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Filter Options</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="party">Party Name</Label>
                <Select onValueChange={handlePartyChange} value={selectedParty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a party" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Parties</SelectItem>
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

        <Tabs defaultValue="summary" onValueChange={setSelectedTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="summary">Order Summary</TabsTrigger>
            <TabsTrigger value="details">Item Details</TabsTrigger>
            <TabsTrigger value="pending">Pending Items</TabsTrigger>
          </TabsList>
          
          <TabsContent value="summary" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Purchase Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>PO Number</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Party</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead className="text-right">Total (₹)</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell>{order.id}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>{order.party}</TableCell>
                        <TableCell>{order.items.length}</TableCell>
                        <TableCell className="text-right">{order.total.toLocaleString('en-IN')}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            order.status === "Completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {order.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <FileSearch className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="details" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Order Item Details</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>PO Number</TableHead>
                      <TableHead>Item Code</TableHead>
                      <TableHead>Item Name</TableHead>
                      <TableHead className="text-right">Ordered Qty</TableHead>
                      <TableHead className="text-right">Billed Qty</TableHead>
                      <TableHead className="text-right">Pending Qty</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredOrders.flatMap((order) => 
                      order.items.map((item) => (
                        <TableRow key={`${order.id}-${item.id}`}>
                          <TableCell>{order.id}</TableCell>
                          <TableCell>{item.id}</TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell className="text-right">{item.ordered}</TableCell>
                          <TableCell className="text-right">{item.billed}</TableCell>
                          <TableCell className="text-right">{item.pending}</TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="pending" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pending Items</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>PO Number</TableHead>
                      <TableHead>Party</TableHead>
                      <TableHead>Item Code</TableHead>
                      <TableHead>Item Name</TableHead>
                      <TableHead className="text-right">Pending Qty</TableHead>
                      <TableHead>Order Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredOrders.flatMap((order) => 
                      order.items
                        .filter(item => item.pending > 0)
                        .map((item) => (
                          <TableRow key={`${order.id}-${item.id}`}>
                            <TableCell>{order.id}</TableCell>
                            <TableCell>{order.party}</TableCell>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell className="text-right">{item.pending}</TableCell>
                            <TableCell>{order.date}</TableCell>
                          </TableRow>
                        ))
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default PartyOrderManagement;
