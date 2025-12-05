import { Settings, LayoutDashboard, ArrowRightLeft } from "lucide-react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SiteItem } from "./site-item";

export const SITE_ITEMS = {
  DASHBOARD: "Dashboard",
  TRANSACTIONS: "Transactions",
  SETTINGS: "Settings",
} as const;

export type SiteItemKey = (typeof SITE_ITEMS)[keyof typeof SITE_ITEMS];

const items = [
  SITE_ITEMS.DASHBOARD,
  SITE_ITEMS.TRANSACTIONS,
  SITE_ITEMS.SETTINGS,
];
export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarMenu className="gap-4">
        {items.map((item) => (
          <SidebarMenuItem>
            <SiteItem item={item} />
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
