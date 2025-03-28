
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Plus, Search, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  itemType: string;
  sampleData: Array<{
    id: string;
    name: string;
    description?: string;
    [key: string]: any;
  }>;
  columns: Array<{
    header: string;
    accessor: string;
  }>;
}

export function PlaceholderPage({
  title,
  description,
  itemType,
  sampleData,
  columns,
}: PlaceholderPageProps) {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(sampleData);

  const handleEdit = (id: string) => {
    toast({
      title: "Edit Mode",
      description: `Editing ${itemType} with ID: ${id}`,
    });
  };

  const handleDelete = (id: string) => {
    setData(data.filter(item => item.id !== id));
    toast({
      title: "Deleted",
      description: `${itemType} deleted successfully`,
    });
  };

  const handleCreate = () => {
    toast({
      title: "Create Mode",
      description: `Creating a new ${itemType}`,
    });
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-ledgercraft-primary">{title}</h1>
          <p className="text-gray-500">{description}</p>
        </div>
        <Button 
          className="bg-ledgercraft-primary hover:bg-ledgercraft-secondary"
          onClick={handleCreate}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add {itemType}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>{itemType} List</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder={`Search ${itemType}...`}
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full data-table">
              <thead>
                <tr>
                  {columns.map((column, index) => (
                    <th key={index}>{column.header}</th>
                  ))}
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      {columns.map((column, index) => (
                        <td key={index}>{item[column.accessor]}</td>
                      ))}
                      <td className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEdit(item.id)}
                          className="text-ledgercraft-primary"
                        >
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(item.id)}
                          className="text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={columns.length + 1} className="text-center py-4 text-gray-500">
                      No {itemType.toLowerCase()} found. Create one to get started.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t px-6 py-4">
          <div className="text-sm text-gray-500">
            Showing {filteredData.length} of {sampleData.length} entries
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </DashboardLayout>
  );
}
