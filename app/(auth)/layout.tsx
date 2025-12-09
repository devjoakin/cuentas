import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="flex min-h-svh items-center justify-center px-4">
      {children}
    </main>
  );
}
