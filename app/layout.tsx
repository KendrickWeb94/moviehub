import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme-Provider";
import { ModeToggle } from "@/components/ModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MovieHub",
  description: "Top Movie Website , Hub , Movie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className=" w-full min-h-screen bg-white dark:bg-black ">
           <div className=" z-50 fixed bottom-0 right-0 m-5 p-3">
                <ModeToggle />
           </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
