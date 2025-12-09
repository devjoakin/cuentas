import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignInForm from "./sign-in-form";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inico sesión - Cuentas",
};

const SignIn = () => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Inicio sesión</CardTitle>
        <CardDescription className="text-xs md:text-sm">
          Introduce tu email para inciar sessión
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignInForm />
      </CardContent>
      <CardFooter>
        <div className="flex w-full justify-center border-t pt-4">
          <p className="text-muted-foreground text-center text-xs">
            ¿Aún no tienes cuenta?{" "}
            <Link href="/sign-up" className="underline">
              Regístrate
            </Link>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SignIn;
