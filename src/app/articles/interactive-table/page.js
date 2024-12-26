import InteractiveTable from "@/app/components/InteractiveTable";

import "@/app/components/interactive-table.css";

export default function InteractiveTensesPage() {
  return (
    <main className="flex-grow p-8">
      <h1 className="text-3xl font-bold text-black">
        Interactive Grammar Table
      </h1>
      <p className="text-darkGray mt-4">
        Explore different English tenses with examples, schemes, and time
        markers using the interactive table below.
      </p>
      <InteractiveTable />
    </main>
  );
}
