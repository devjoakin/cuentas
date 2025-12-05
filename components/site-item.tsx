"use client";
import { Settings, LayoutDashboard, ArrowRightLeft } from "lucide-react";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SITE_ITEMS, SiteItemKey } from "./main-nav";

interface SiteItemProps {
  item: SiteItemKey;
}

const mapper = {
  [SITE_ITEMS.DASHBOARD]: {
    title: "Dashboard",
    url: "/",
    icon: <LayoutDashboard />,
  },
  [SITE_ITEMS.TRANSACTIONS]: {
    title: "Transactions",
    url: "/transactions",
    icon: <ArrowRightLeft />,
  },
  [SITE_ITEMS.SETTINGS]: {
    title: "Settings",
    url: "/settings",
    icon: <Settings />,
  },
};

export function SiteItem(item: SiteItemProps) {
  const pathname = usePathname();
  const { title, url, icon } = mapper[item.item];
  return (
    <SidebarMenuButton
      asChild
      tooltip={title}
      className={cn(
        "transition-colors hover:bg-primary-foreground hover:font-bold",
        pathname === url && "bg-sidebar-primary text-accent font-bold"
      )}
    >
      <Link href={url} className="flex items-center gap-3 w-fit">
        {icon}
        <span>{title}</span>
      </Link>
    </SidebarMenuButton>
  );
}
