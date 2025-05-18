// import { useState } from "react";
import { Counter } from "@/app/components/counter";
type Params = Promise<{ slug: string }>;

export default async function Dashboardroute({ params }: { params: Params }) {
  const { slug } = await params;

//   const [count, setCount] = useState(0);
  return (
    <h1>
      hello from the slug: {slug}
      {/* <button onClick={() => setCount(count + 1 )}>count: {count} </button> */}
      <Counter/>
    </h1>
  );
}
