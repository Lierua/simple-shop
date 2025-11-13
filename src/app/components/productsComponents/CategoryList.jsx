
"use client";
import { useRouter } from "next/navigation";

function CategoryList({ categories = [] }) {
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      router.push(`?category=${value}`);
    } else {
      router.push("/");
    }
  };

  return (
    <select id="categories" name="categories" onChange={handleChange}>
      <option className="text-black">Alle Produkter</option>
      {categories.map((category) => (
        <option key={category} value={category} className="text-black">
          {category}
        </option>
      ))}
    </select>
  );
}

export default CategoryList;
