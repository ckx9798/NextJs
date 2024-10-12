import { Metadata } from "next";
import Navigation from "../components/navigation";

// app/layout.tsx
export const metadata: Metadata = {
  title: {
    template: "%s | Next movies",
    default: "Next movies",
  },
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
