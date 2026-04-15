"use client";
import UnifiedIncomeManager from "@/components/income/FinalIncome"; 
import { incomeStyles } from "@/styles/income";

export default function IncomeViewPage() {
  return (
    <main className={incomeStyles.pageWrapper}>
       <UnifiedIncomeManager />
    </main>
  );
}