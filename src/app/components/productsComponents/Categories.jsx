import CategoryList from "./CategoryList";

export default async function Categories() {
  const response = await fetch("https://dummyjson.com/products/category-list");
  const categories = await response.json();
  return <CategoryList categories={categories} />;
}
