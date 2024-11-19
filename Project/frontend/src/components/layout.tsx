import * as React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
        <div className="flex">
            <AppSidebar />
        </div>
        <div className="flex-grow">
            <main className="h-screen py-8 px-2">
                <SidebarTrigger />
                {children}
            </main>
        </div>
    </SidebarProvider>
  )
}