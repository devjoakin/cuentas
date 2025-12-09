"use client";
import { LoadingButton } from "@/components/loading-button";
import { PasswordInput } from "@/components/password-input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signInSchema = z.object({
  email: z.email({ message: "Please enter a valid email" }),
  password: z.string().min(1, { message: "Password is required" }),
});

type SignInValues = z.infer<typeof signInSchema>;

const SignInForm = () => {
  const form = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit({ email, password }: SignInValues) {
    console.log("values", email, password);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
                <FormLabel>Contraseña</FormLabel>
              </div>
              <FormControl>
                <PasswordInput autoComplete="current-password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* {error && (
              <div role="alert" className="text-sm text-red-600">
                {error}
              </div>
            )} */}

        <LoadingButton type="submit" className="w-full" loading={false}>
          Login
        </LoadingButton>

        {/* <div className="flex w-full flex-col items-center justify-between gap-2">
              <Button
                type="button"
                variant="outline"
                className="w-full gap-2"
                disabled={loading}
                onClick={handleSocialSignIn}
              >
                <GoogleIcon width="0.98em" height="1em" />
                Sign in with Google
              </Button>
            </div> */}
      </form>
    </Form>
  );
};

export default SignInForm;
