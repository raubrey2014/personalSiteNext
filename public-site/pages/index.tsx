import { greeting } from "@rma/core";
import { SimpleUser } from "@rma/components";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>This is home.. {greeting()}</h1>
      <SimpleUser />
      <Link href="/blog/hello-world">Hello World</Link>
    </div>
  );
}
