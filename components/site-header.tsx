import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/buttom-theme";
import { getSession } from "@/lib/get-session";
import LogoutButton from "./logout-button";



export async function SiteHeader() {
  const session = await getSession();
  const user = session?.user;

  if (!user) return null;
  return (
    <header className="flex h-12  items-center gap-2 border-b ">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <div>
          <span className="font-medium">{user.name}</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
        </div>
        <div>
         <LogoutButton />
        </div>
      </div>
    </header>
  );
}
