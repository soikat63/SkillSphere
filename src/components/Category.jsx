"use client";

import { Button } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";

const Category = ({ categories }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get("category");

  const handleClick = (category) => {
    if (category === "all") {
      router.push("/all-courses");
    } else {
      router.push(`/all-courses?category=${category.toLowerCase()}`);
    }
  };

  return (
    <div className="flex gap-4 flex-wrap  mb-4">
      {/* All Button */}
      <Button
        onClick={() => handleClick("all")}
        size="md"
        radius="full"
        className={`px-8 font-bold transition-all duration-300 shadow-sm ${
          !activeCategory
            ? "bg-primary text-white shadow-primary/40 scale-105"
            : "bg-white border-2 border-gray-100 text-gray-500 hover:border-primary/30 hover:bg-gray-50"
        }`}
      >
        All
      </Button>

      {/* Dynamic Category Buttons */}
      {categories.map((cat) => {
        const isSelected = activeCategory === cat.toLowerCase();
        return (
          <Button
            key={cat}
            onClick={() => handleClick(cat)}
            size="md"
            radius="full"
            className={`px-8 font-bold transition-all duration-300 shadow-sm ${
              isSelected
                ? "bg-primary text-white shadow-primary/40 scale-105"
                : "bg-white border-2 border-gray-100 text-gray-500 hover:border-primary/30 hover:bg-gray-50"
            }`}
          >
            {cat}
          </Button>
        );
      })}
    </div>
  );
};

export default Category;
