import CategoryList from "./CategoryList";

export default async function Categories() {
  const response = await fetch("https://dummyjson.com/products/category-list");
  const categories = await response.json();
  return (
    <div className="text-(--secondary) flex gap-4">
      <p>Category:</p>
      <CategoryList categories={categories} />
    </div>
  );
}
