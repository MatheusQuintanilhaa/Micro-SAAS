import { AppSidebar } from "@/app/_components/app-sidebar"
import { ChartAreaInteractive } from "@/app/_components/chart-area-interactive"
import { DataTable } from "@/app/_components/data-table"
import { SectionCards } from "@/app/_components/section-cards"
import { SiteHeader } from "@/app/_components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/app/_components/ui/sidebar"

import data from "./data.json"
import { auth } from "@/services/auth"

export default async function Page() {

  const session = await auth()
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
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
