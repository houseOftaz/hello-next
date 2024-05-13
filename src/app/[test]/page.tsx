"use client";

import { useParams } from "next/navigation";

export default function Test() {
  const params = useParams();
  console.log(params)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello Test !</h1>        
    </main>
  );
}
