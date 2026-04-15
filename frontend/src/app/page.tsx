"use client";

import { useState } from "react";
import CenterSideBySideIncome from "@/components/income/FinalIncome";
import AllocationManagement from "@/components/allocation/FinalAllocation";
import { incomeStyles } from "@/styles/income";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleSignOut = () => {
    setIsLoggedIn(false);
    window.location.href = "/account-signout";
  };

  if (!isLoggedIn) {
    return (
      <main
        className={`${incomeStyles.pageWrapper} min-h-screen w-full flex flex-col items-center justify-center px-6 text-center`}
      >
        <h1 className="mb-4 text-4xl font-bold text-white">Welcome to Lucrum</h1>
        <p className="mb-8 max-w-md text-slate-400">
          Please log in to your account to manage your budget and view your
          income.
        </p>

        <a
          href="/account-creation"
          className="rounded-lg bg-emerald-600 px-8 py-3 font-bold text-white transition-colors hover:bg-emerald-500"
        >
          Go to Account Creation
        </a>
      </main>
    );
  }

  return (
    <main
      className={`${incomeStyles.pageWrapper} min-h-screen w-full flex flex-col items-center bg-slate-950 text-white`}
    >
      <div className="w-full max-w-7xl px-6 py-10">
        <header className="mb-12 text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">Lucrum</h1>
          <p className="text-slate-400">Your personal budget manager.</p>
        </header>

        <section className="mb-16">
          <CenterSideBySideIncome />
        </section>

        <section className="mb-16">
          <AllocationManagement />
        </section>

        <div className="pt-4 text-center">
          <button
            onClick={handleSignOut}
            className="text-sm text-slate-500 transition-colors hover:text-white"
          >
            Sign Out
          </button>
        </div>
      </div>
    </main>
  );
}