import ProductList from "../components/ProductList";

export const metadata = {
  title: "Products - My Store",
  description: "Browse our amazing collection of products.",
  openGraph: {
    title: "Products - My Store",
    description: "Browse our amazing collection of products.",
    images: ["/public/globe.svg"],
    type: "website",
  },
};

export default function Products() {
  return (
    <main>
      <ProductList />
    </main>
  );
}
