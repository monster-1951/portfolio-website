import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="glass flex justify-center h-[80vh] items-center ">
      <div className="text-3xl text-center border p-5 space-y-3">
        <h2 className="font-bold">🥲 Page Not Found 👎</h2>
        <p>Could not find requested resource</p>
        <Link href="/">
          <Button className="glass text-3xl font-bold mt-5">Return Home 🏠</Button>
        </Link>
      </div>
    </div>
  );
}
