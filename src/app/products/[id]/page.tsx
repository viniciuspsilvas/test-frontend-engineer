import ProductDetails from "@/app/components/ProductDetails";

interface ProductDetailProps {
  params: {
    id: string;
  };
}

export default async function Page({ params: { id } }: ProductDetailProps) {
  return (
    <main>
      <ProductDetails id={id} />
    </main>
  );
}
