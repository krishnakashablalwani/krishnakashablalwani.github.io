"use client";

import { motion } from "framer-motion";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const tabs = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "portfolio", label: "Portfolio" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="absolute top-0 right-0 bg-surface-light border-b border-l border-surface-border rounded-bl-3xl z-10 hidden md:block">
        <ul className="flex">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id ? "text-brand" : "text-gray-300 hover:text-brand"
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-surface-light border-b border-surface-border sticky top-0 z-10 rounded-t-3xl overflow-x-auto">
        <ul className="flex justify-around">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-4 font-medium text-sm transition-colors ${
                  activeTab === tab.id ? "text-brand" : "text-gray-300 hover:text-brand"
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
