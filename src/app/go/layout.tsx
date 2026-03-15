import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Prismorph App",
  description: "Download Prismorph on iOS or Android. Transform your photos into stunning art with AI-powered filters.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
