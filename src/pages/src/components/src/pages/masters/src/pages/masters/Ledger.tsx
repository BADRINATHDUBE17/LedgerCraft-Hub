
import { PlaceholderPage } from "@/components/PlaceholderPage";

const Ledger = () => {
  const sampleData = [
    {
      id: "1",
      name: "Cash Account",
      group: "Current Assets",
      openingBalance: "₹25,000",
      currentBalance: "₹32,500",
    },
    {
      id: "2",
      name: "Bank of India",
      group: "Bank Accounts",
      openingBalance: "₹75,000",
      currentBalance: "₹92,300",
    },
    {
      id: "3",
      name: "Office Rent",
      group: "Indirect Expenses",
      openingBalance: "₹0",
      currentBalance: "₹15,000",
    },
    {
      id: "4",
      name: "Salaries",
      group: "Direct Expenses",
      openingBalance: "₹0",
      currentBalance: "₹45,000",
    },
    {
      id: "5",
      name: "ABC Suppliers",
      group: "Current Liabilities",
      openingBalance: "₹0",
      currentBalance: "₹28,500",
    },
    {
      id: "6",
      name: "XYZ Customers",
      group: "Current Assets",
      openingBalance: "₹0",
      currentBalance: "₹56,200",
    },
    {
      id: "7",
      name: "Office Equipment",
      group: "Fixed Assets",
      openingBalance: "₹120,000",
      currentBalance: "₹110,000",
    },
  ];

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Group", accessor: "group" },
    { header: "Opening Balance", accessor: "openingBalance" },
    { header: "Current Balance", accessor: "currentBalance" },
  ];

  return (
    <PlaceholderPage
      title="Ledger Accounts"
      description="Manage your ledger accounts for tracking financial transactions"
      itemType="Ledger"
      sampleData={sampleData}
      columns={columns}
    />
  );
};

export default Ledger;
