
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-ledgercraft-light to-white p-4">
      <div className="text-center max-w-md">
        <FileQuestion className="h-24 w-24 text-ledgercraft-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4 text-ledgercraft-primary">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! This page doesn't exist</p>
        <p className="text-gray-500 mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Button 
          className="bg-ledgercraft-primary hover:bg-ledgercraft-secondary"
          onClick={() => window.location.href = "/"}
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
