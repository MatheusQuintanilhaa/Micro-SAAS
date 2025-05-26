import { auth } from "@/services/auth";
import { SidebarInset, SidebarProvider } from "../_components/ui/sidebar";
import { AppSidebar } from "../_components/app-sidebar";
import { SiteHeader } from "../_components/site-header";
import { PropsWithChildren } from "react";

export default async function Layout ({children}:PropsWithChildren) {
      const session = await auth();
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar user={session?.user} />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
         {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}