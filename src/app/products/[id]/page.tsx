import ProductDetails from "@/app/components/ProductDetails";
import { Metadata } from "next";

// Fetch product details for metadata
// TODO We can improve it getting the data from the graphql API instead
async function getProduct(id: string) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  return response.json();
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const id = (await params).id;

  const product = await getProduct(id);

  return {
    title: `${product.title} - My Store`,
    description: product.description,
    openGraph: {
      type: "website",
      title: product.title,
      description: product.description,
      images: [{ url: product.image }],
      url: `https://test-frontend-engineer-rho.vercel.app/products/${id}` // TODO: move to env var
    },
    other: {
      "og:type": "product"
    }
  };
}

export default async function Page({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <main>
      <ProductDetails id={id} />
    </main>
  );
}
