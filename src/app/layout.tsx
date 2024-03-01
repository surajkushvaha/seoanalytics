import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { APP_CONSTANTS } from "@/common/constants/appconstants";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;
library.add(fas, far, fab);
import 'primeicons/primeicons.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: APP_CONSTANTS.APP_NAME,
  title: {
    default: APP_CONSTANTS.APP_DEFAULT_TITLE,
    template: APP_CONSTANTS.APP_TITLE_TEMPLATE,
  },
  description: APP_CONSTANTS.APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_CONSTANTS.APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_CONSTANTS.APP_NAME,
    title: {
      default: APP_CONSTANTS.APP_DEFAULT_TITLE,
      template: APP_CONSTANTS.APP_TITLE_TEMPLATE,
    },
    description: APP_CONSTANTS.APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_CONSTANTS.APP_DEFAULT_TITLE,
      template: APP_CONSTANTS.APP_TITLE_TEMPLATE,
    },
    description: APP_CONSTANTS.APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
