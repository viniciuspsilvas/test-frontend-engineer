import ProductDetails from "@/app/components/ProductDetails";

interface ProductDetailProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: ProductDetailProps) {
   // asynchronous access of `params.id`.
  const { id } = await params;
  return (
    <main>
      <ProductDetails id={id} />
    </main>
  );
}
