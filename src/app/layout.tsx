import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#C02D2F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sorvetesreal.com.br"),
  title: "Sorvetes Real do Solar | Made in Salvador, Bahia",
  description: "Faça seu pedido para consumo, revenda ou delivery na Sorvetes Real do Solar Amado Bahia, na Ribeira, Salvador.",
  keywords: ["Sorvetes Real", "Solar Amado Bahia", "Ribeira", "Salvador", "Sorvete", "Delivery", "Picolé"],
  openGraph: {
    title: "Sorvetes Real do Solar | Made in Salvador, Bahia",
    description: "Faça seu pedido para consumo, revenda ou delivery na Sorvetes Real do Solar Amado Bahia.",
    url: "https://sorvetesreal.com.br",
    siteName: "Sorvetes Real do Solar",
    images: [
      {
        url: "/logos/Logo-real-do-solar-01.png",
        width: 1439,
        height: 809,
        alt: "Sorvetes Real do Solar",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-[#C02D2F]">
      <body className="antialiased bg-[#C02D2F] text-white selection:bg-real-gold selection:text-real-wine min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
