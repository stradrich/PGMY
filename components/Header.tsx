import Link from "next/link";
import React from "react";
import Button from "@mui/material/Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
          <div className="leading-none">
            <div className="text-lg font-bold text-gray-900">Property Genie</div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {["Buy", "Rent", "Projects", "Resources", "Others", "Contact Us"].map(
            (link) => (
              <Link
                key={link}
                href="/"
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                {link}
              </Link>
            )
          )}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Outlined buttons */}
          <Button
            variant="outlined"
            size="small"
            sx={{
              color: "#2563eb", // Tailwind blue-600
              borderColor: "#2563eb",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#eff6ff", // Tailwind blue-50
                borderColor: "#2563eb",
              },
              display: { xs: "none", sm: "flex" }, // hidden sm:flex
            }}
          >
            JOIN AS AGENT
          </Button>
          <Button
            variant="outlined"
            size="small"
            sx={{
              color: "#2563eb",
              borderColor: "#2563eb",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#eff6ff",
                borderColor: "#2563eb",
              },
              display: { xs: "none", sm: "flex" },
            }}
          >
            SIGN UP
          </Button>

          {/* Contained login button */}
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#2563eb",
              color: "#fff",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#1e40af", // Tailwind blue-700
              },
            }}
          >
            LOGIN
          </Button>
        </div>
      </div>
    </header>
  );
}
