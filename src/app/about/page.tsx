import type { Metadata } from "next";
import { FramerPage } from "@/components/FramerPage";
import { PAGE_STYLE } from "./page-style";
import { PAGE_HTML } from "./page-html";

const APPEAR_ANIMATIONS = "window.__framer__appearAnimationsContent={text:'{\"p9ffvd\":{\"default\":null,\"18wlyn1\":null,\"gxhzhe\":null,\"1j7y6jy\":null}}'}";
const BREAKPOINTS = "window.__framer__breakpoints={text:'[{\"hash\":\"1ehfl6m\",\"mediaQuery\":\"(min-width: 1725px)\"},{\"hash\":\"18wlyn1\",\"mediaQuery\":\"(min-width: 1200px) and (max-width: 1724.98px)\"},{\"hash\":\"gxhzhe\",\"mediaQuery\":\"(min-width: 810px) and (max-width: 1199.98px)\"},{\"hash\":\"1j7y6jy\",\"mediaQuery\":\"(max-width: 809.98px)\"}]'}";

export const metadata: Metadata = {
  title: "Obidur Rahman — About",
  description: "Research & development engineer building intelligent systems across machine learning, agentic workflows, and backend architecture.",
  openGraph: {
    title: "Obidur Rahman — About",
    description: "Research & development engineer building intelligent systems across machine learning, agentic workflows, and backend architecture.",
    type: "website",
    images: ["https://framerusercontent.com/assets/q70Pg134FKc5aYLp7Ipk8R6U.jpg"],
    url: "https://obidur.vercel.app/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "Obidur Rahman — About",
    description: "Research & development engineer building intelligent systems across machine learning, agentic workflows, and backend architecture.",
    images: ["https://framerusercontent.com/assets/q70Pg134FKc5aYLp7Ipk8R6U.jpg"],
  },
};

export default function Page() {
  return (
    <FramerPage
      pageStyle={PAGE_STYLE}
      html={PAGE_HTML}
      appearAnimations={APPEAR_ANIMATIONS}
      breakpoints={BREAKPOINTS}
    />
  );
}
