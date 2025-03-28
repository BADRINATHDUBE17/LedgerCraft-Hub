
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Printer } from "lucide-react";

const sampleGroups = [
  {
    id: "1",
    name: "Capital Account",
    description: "Funds invested by owners or shareholders",
    openingBalance: "₹45,000",
    closingBalance: "₹50,000"
  },
  {
    id: "2",
    name: "Current Assets",
    description: "Assets expected to be converted to cash within one year",
    openingBalance: "₹120,000",
    closingBalance: "₹125,000"
  },
  {
    id: "3",
    name: "Current Liabilities",
    description: "Debts or obligations due within one year",
    openingBalance: "₹70,000",
    closingBalance: "₹75,000"
  },
  {
    id: "4",
    name: "Direct Expenses",
    description: "Expenses directly tied to production",
    openingBalance: "₹30,000",
    closingBalance: "₹35,000"
  },
  {
    id: "5",
    name: "Fixed Assets",
    description: "Long-term tangible assets",
    openingBalance: "₹195,000",
    closingBalance: "₹200,000"
  }
];

const GroupSummary = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Group Summary</h1>
            <p className="text-gray-500">Summary of account groups</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Printer className="mr-2 h-4 w-4" />
              Print
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
              Account Groups
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Group Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Opening Balance</TableHead>
                  <TableHead>Closing Balance</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sampleGroups.map((group) => (
                  <TableRow key={group.id}>
                    <TableCell className="font-medium">{group.name}</TableCell>
                    <TableCell>{group.description}</TableCell>
                    <TableCell>{group.openingBalance}</TableCell>
                    <TableCell>{group.closingBalance}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default GroupSummary;
