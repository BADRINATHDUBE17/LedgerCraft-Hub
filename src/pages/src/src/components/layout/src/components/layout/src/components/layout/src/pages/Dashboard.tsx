
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ArrowDownRight, ArrowUpRight, CreditCard, DollarSign, Users, FileText, Building } from "lucide-react";

const Dashboard = () => {
  // Sample data for the charts
  const revenueData = [
    { name: "Jan", revenue: 4000 },
    { name: "Feb", revenue: 3000 },
    { name: "Mar", revenue: 5000 },
    { name: "Apr", revenue: 4500 },
    { name: "May", revenue: 6000 },
    { name: "Jun", revenue: 5500 },
  ];

  const expenseData = [
    { name: "Operations", value: 35 },
    { name: "Marketing", value: 15 },
    { name: "HR", value: 20 },
    { name: "IT", value: 30 },
  ];

  const EXPENSE_COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const accountsActivityData = [
    { name: "Mon", sales: 20, purchases: 15 },
    { name: "Tue", sales: 35, purchases: 25 },
    { name: "Wed", sales: 30, purchases: 20 },
    { name: "Thu", sales: 40, purchases: 30 },
    { name: "Fri", sales: 25, purchases: 18 },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6 text-ledgercraft-primary">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="flex items-center p-6">
            <div className="bg-ledgercraft-light p-4 rounded-full mr-4">
              <DollarSign className="h-6 w-6 text-ledgercraft-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Total Revenue</p>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold">₹245,800</h3>
                <span className="text-green-500 text-xs font-medium flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  12%
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-6">
            <div className="bg-red-100 p-4 rounded-full mr-4">
              <CreditCard className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Total Expenses</p>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold">₹128,250</h3>
                <span className="text-red-500 text-xs font-medium flex items-center">
                  <ArrowDownRight className="h-3 w-3 mr-1" />
                  8%
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-6">
            <div className="bg-blue-100 p-4 rounded-full mr-4">
              <Building className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Companies</p>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold">12</h3>
                <span className="text-green-500 text-xs font-medium flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  2 new
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-6">
            <div className="bg-purple-100 p-4 rounded-full mr-4">
              <Users className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Employees</p>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold">45</h3>
                <span className="text-green-500 text-xs font-medium flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  5 new
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue for the current year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={revenueData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#1a3a6d"
                    activeDot={{ r: 8 }}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Expense Distribution</CardTitle>
            <CardDescription>Expense breakdown by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {expenseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={EXPENSE_COLORS[index % EXPENSE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transaction Activity */}
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Accounts Activity</CardTitle>
            <CardDescription>Sales and purchases activity for the week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={accountsActivityData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sales" name="Sales" fill="#1a3a6d" />
                  <Bar dataKey="purchases" name="Purchases" fill="#5f82c8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-ledgercraft-primary mr-2" />
                <div>
                  <p className="text-sm font-medium">Invoice #INV-2023052</p>
                  <p className="text-xs text-gray-500">Created 2 hours ago</p>
                </div>
              </div>
              <span className="text-sm font-medium text-ledgercraft-success">₹15,400</span>
            </div>
          </div>
          
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CreditCard className="h-5 w-5 text-ledgercraft-warning mr-2" />
                <div>
                  <p className="text-sm font-medium">Payment to Supplier</p>
                  <p className="text-xs text-gray-500">3 hours ago</p>
                </div>
              </div>
              <span className="text-sm font-medium text-ledgercraft-danger">-₹8,750</span>
            </div>
          </div>
          
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Building className="h-5 w-5 text-blue-500 mr-2" />
                <div>
                  <p className="text-sm font-medium">New Company Added</p>
                  <p className="text-xs text-gray-500">5 hours ago</p>
                </div>
              </div>
              <span className="text-sm font-medium text-blue-500">ABC Corp</span>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-ledgercraft-success mr-2" />
                <div>
                  <p className="text-sm font-medium">GST Return Filed</p>
                  <p className="text-xs text-gray-500">Yesterday</p>
                </div>
              </div>
              <span className="text-sm font-medium text-ledgercraft-success">Completed</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
