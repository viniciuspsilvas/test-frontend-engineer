import { Metadata } from "next";
import ProductDetails from "@/app/components/ProductDetails";

interface ProductDetailProps {
  params: {
    id: string;
  };
}

// Fetch product details for metadata
// TODO We can improve it getting the data from the graphql API instead
async function getProduct(id: string) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  return response.json();
}

export async function generateMetadata({
  params
}: ProductDetailProps): Promise<Metadata> {
  const product = await getProduct(params.id);

  return {
    title: `${product.title} - My Store`,
    description: product.description,
    openGraph: {
      type: "website",
      title: product.title,
      description: product.description,
      images: [{ url: product.image }],
      url: `https://yourstore.com/products/${params.id}`
    },
    other: {
      "og:type": "product"
    }
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
