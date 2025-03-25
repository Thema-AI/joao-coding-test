import Image from "next/image";
import Logo from "../public/thema.svg";
import { getProducts } from "@/lib/api";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function Home() {
  const { products } = await getProducts();

  return (
    <div className="grid grid-rows-[50px_1fr] min-h-screen">
      <header className="bg-muted flex items-center justify-center">
        <Image src={Logo} alt="Thema" className="h-[30px] w-auto" />
      </header>
      <main className="p-10">
        <h1 className="text-2xl font-extrabold mb-6">Products</h1>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={product.thumbnail} alt={product.title} />
                    <AvatarFallback>
                      {product.title.split(" ").map((word) => word[0])}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle>{product.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{product.description}</p>
              </CardContent>
              <CardFooter className="gap-4 mt-auto">
                <p className="text-sm">
                  <strong>Brand:</strong> {product.brand}
                </p>
                <p className="text-sm">
                  <strong>Price:</strong> {product.price}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
