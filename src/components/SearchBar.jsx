"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchBar = () => {
   const router = useRouter();
   const searchParams = useSearchParams();

   const [query, setQuery] = useState(searchParams.get("search") || "");

   // --- Debounce: wait 400ms after user stops typing, then update URL ---
   useEffect(() => {
     const timer = setTimeout(() => {
       const params = new URLSearchParams(searchParams.toString());

       if (query.trim()) {
         params.set("search", query.trim());
       } else {
         params.delete("search");
       }

       router.push(`/all-courses?${params.toString()}`);
     }, 400);

     // --- Cleanup: cancel previous timer if user is still typing ---
     return () => clearTimeout(timer);
   }, [query]);

   // --- Clear search ---
   const handleClear = () => {
     setQuery("");
   };
  return (
     <div className="relative max-w-xl mb-6">

      {/* --- Search icon --- */}
      <svg
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        width="16" height="16" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      {/* --- Live search input --- */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search courses or instructors..."
        className="w-full pl-11 pr-10 py-3 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all"
      />

      {/* --- Clear button --- */}
      {query && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}

    </div>
  );

};

export default SearchBar;
