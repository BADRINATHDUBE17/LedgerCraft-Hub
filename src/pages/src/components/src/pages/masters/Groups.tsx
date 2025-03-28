
import { PlaceholderPage } from "@/components/PlaceholderPage";

const Groups = () => {
  const sampleData = [
    {
      id: "1",
      name: "Capital Account",
      description: "Funds invested by owners or shareholders",
      type: "Primary",
      balance: "₹50,000",
    },
    {
      id: "2",
      name: "Current Assets",
      description: "Assets expected to be converted to cash within one year",
      type: "Primary",
      balance: "₹125,000",
    },
    {
      id: "3",
      name: "Current Liabilities",
      description: "Debts or obligations due within one year",
      type: "Primary",
      balance: "₹75,000",
    },
    {
      id: "4",
      name: "Direct Expenses",
      description: "Expenses directly tied to production",
      type: "Primary",
      balance: "₹35,000",
    },
    {
      id: "5",
      name: "Fixed Assets",
      description: "Long-term tangible assets",
      type: "Primary",
      balance: "₹200,000",
    },
    {
      id: "6",
      name: "Indirect Expenses",
      description: "Expenses not directly tied to production",
      type: "Primary",
      balance: "₹25,000",
    },
    {
      id: "7",
      name: "Bank Accounts",
      description: "Financial accounts with banking institutions",
      type: "Secondary",
      balance: "₹85,000",
    },
  ];

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Description", accessor: "description" },
    { header: "Type", accessor: "type" },
    { header: "Balance", accessor: "balance" },
  ];

  return (
    <PlaceholderPage
      title="Account Groups"
      description="Manage your accounting group structure"
      itemType="Group"
      sampleData={sampleData}
      columns={columns}
    />
  );
};

export default Groups;
