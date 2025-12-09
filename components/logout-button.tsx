"use client";

import { LogOut } from "lucide-react";
import { Button } from "./ui/button";

import { revokeSessions } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { LoadingButton } from "./loading-button";

function LogoutButton() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleLogoutEverywhere() {
    setLoading(true);
    const { error } = await revokeSessions();
    setLoading(false);

    if (error) {
      toast.error("Failed to log out everywhere. Please try again.");
    } else {
      toast.success("Sesiín cerrada.");
      router.push("/sign-in");
    }
  }
  return (
    <LoadingButton
      onClick={handleLogoutEverywhere}
      loading={loading}
      variant="outline"
    >
      Cerrar session
    </LoadingButton>
  );
}

export default LogoutButton;
