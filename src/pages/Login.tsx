
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { LockKeyhole, Mail, User, Building, UserCircle2 } from "lucide-react";
import logo from "@/assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminId, setAdminId] = useState("");
  const [loginType, setLoginType] = useState("admin");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Admin-specific validation
    if (loginType === "admin" && !adminId) {
      toast({
        title: "Error",
        description: "Admin ID is required for admin login",
        variant: "destructive",
      });
      return;
    }

    // Mock login success - in a real app you would call an API
    toast({
      title: "Success",
      description: "Login successful",
    });
    
    // Navigate to dashboard based on login type
    if (loginType === "admin") {
      navigate("/dashboard");
    } else if (loginType === "company") {
      navigate("/company-dashboard");
    } else {
      navigate("/employee-dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-ledgercraft-light to-white p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img 
            src={logo} 
            alt="LedgerCraft Hub" 
            className="h-16 mx-auto mb-2"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/150x60?text=LedgerCraft";
            }}
          />
          <h1 className="text-3xl font-bold text-ledgercraft-primary">LedgerCraft Hub</h1>
          <p className="text-gray-600">Comprehensive Accounting Portal</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-center">Account Login</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>

          <Tabs defaultValue="admin" className="w-full" onValueChange={setLoginType}>
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="admin">Admin</TabsTrigger>
              <TabsTrigger value="company">Company</TabsTrigger>
              <TabsTrigger value="employee">Employee</TabsTrigger>
            </TabsList>

            {["admin", "company", "employee"].map((type) => (
              <TabsContent key={type} value={type}>
                <form onSubmit={handleLogin}>
                  <CardContent className="space-y-4 pt-4">
                    {type === "admin" && (
                      <div className="space-y-2">
                        <Label htmlFor="adminId">Admin ID</Label>
                        <div className="relative">
                          <UserCircle2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="adminId"
                            placeholder="Enter admin ID"
                            value={adminId}
                            onChange={(e) => setAdminId(e.target.value)}
                            className="pl-10"
                          />
                        </div>
                      </div>
                    )}
                    
                    {type === "company" && (
                      <div className="space-y-2">
                        <Label htmlFor="company">Company ID</Label>
                        <div className="relative">
                          <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="company"
                            placeholder="Enter company ID"
                            className="pl-10"
                          />
                        </div>
                      </div>
                    )}
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="password">Password</Label>
                        <a 
                          href="#" 
                          className="text-xs text-ledgercraft-accent hover:underline"
                        >
                          Forgot password?
                        </a>
                      </div>
                      <div className="relative">
                        <LockKeyhole className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button type="submit" className="w-full bg-ledgercraft-primary hover:bg-ledgercraft-secondary">
                      Log In
                    </Button>
                  </CardFooter>
                </form>
              </TabsContent>
            ))}
          </Tabs>
        </Card>
        
        {loginType === "admin" && (
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>Admin login has full access to create and manage companies and employees</p>
          </div>
        )}
        
        {loginType === "company" && (
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>Company login provides access to manage company-specific data and employees</p>
          </div>
        )}
        
        {loginType === "employee" && (
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>Employee login provides access to assigned company data and tasks</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
