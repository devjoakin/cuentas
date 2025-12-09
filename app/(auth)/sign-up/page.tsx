import type { Metadata } from "next";
import { SignUpForm } from "./sign-up-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Registro - Cuentas",
};

export default function SignUp() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Registro</CardTitle>
        <CardDescription className="text-xs md:text-sm">
          Introduce tus datos para crear una cuenta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm />
      </CardContent>
      <CardFooter>
        <div className="flex w-full justify-center border-t pt-4">
          <p className="text-muted-foreground text-center text-xs">
            ¿Ya tienes cuenta?{" "}
            <Link href="/sign-in" className="underline">
              Inicia sesión
            </Link>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
