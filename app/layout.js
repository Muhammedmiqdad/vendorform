import "./globals.css"

export const metadata = {
  title: "Vendor Form",
  description: "Vendor registration portal",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-[#1f2b44] text-white flex flex-col p-5">
          <div className="mb-6">
            {/* logo area */}
            <div className="h-12 w-full flex items-center gap-2">
              <div className="h-12 w-12 rounded-sm bg-[#2b3a5a] flex items-center justify-center">
                <span className="text-xl font-bold">ع</span>
              </div>
              <div className="text-sm font-semibold">معرض<br/>مرزام</div>
            </div>
          </div>

          <nav className="mt-4">
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-md bg-[#17223a] hover:bg-[#152038] text-sm"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 7h18M3 12h18M3 17h18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Add Company & Product
            </a>
          </nav>
        </aside>

        {/* Main area */}
        <div className="flex-1 flex flex-col">
          {/* Top header */}
          <header className="bg-gray-100 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="text-lg font-semibold">Add Company & Product</div>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 overflow-auto">
            <div className="max-w-7xl mx-auto px-6 py-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
