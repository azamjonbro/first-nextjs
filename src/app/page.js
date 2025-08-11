// src/app/dashboard/page.jsx
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen  flex bg-gray-900 text-white">
      {/* Sidebar */}
      <aside
        className={`bg-gray-800 w-[15%] p-4 transition-all duration-300 ease-in-out 
          ${sidebarOpen ? "w-64" : "w-16"} flex flex-col`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <span className={`font-bold text-lg transition-all ${!sidebarOpen && "hidden"}`}>
            Business Panel
          </span>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded hover:bg-gray-700"
            aria-label="Toggle Sidebar"
          >
            {/* Simple Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 p-2 space-y-2">
          <Link
            href="/"
            className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 transition"
          >
            {/* Home Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-9 2v10" />
            </svg>
            {sidebarOpen && "Dashboard"}
          </Link>
        </nav>
      </aside>

      {/* Main content */}
       <main className="min-h-screen bg-gray-900 text-white px-6 py-10 w-full">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Businessmen Hub</h1>
        <p className="text-gray-400 mt-2 max-w-2xl">
          Welcome to the ultimate hub for business professionals — gain insights, track performance, 
          and make informed decisions in one place.
        </p>
      </header>

      {/* Stats Section */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-lg font-semibold">Monthly Revenue</h2>
          <p className="mt-2 text-2xl font-bold">$82,450</p>
          <p className="text-green-400 text-sm mt-1">▲ 12% from last month</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-lg font-semibold">Active Clients</h2>
          <p className="mt-2 text-2xl font-bold">152</p>
          <p className="text-green-400 text-sm mt-1">▲ 8% growth</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-lg font-semibold">Pending Deals</h2>
          <p className="mt-2 text-2xl font-bold">19</p>
          <p className="text-yellow-400 text-sm mt-1">● In negotiation</p>
        </div>
      </section>

      {/* Insights */}
      <section className="mt-10">
        <h2 className="text-xl font-bold mb-4">Market Insights</h2>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <ul className="space-y-3 list-disc list-inside text-gray-300">
            <li>Emerging trends in fintech and AI adoption</li>
            <li>Top 5 investment sectors for 2025</li>
            <li>Networking events in major business hubs</li>
          </ul>
        </div>
      </section>
    </main>
    </div>
  );
}
