import type { Metadata } from "next";
import { FramerPage } from "@/components/FramerPage";
import { PAGE_STYLE } from "./page-style";
import { PAGE_HTML } from "./page-html";

const SCRIPT_2_SRC = "/Christina%20Lu%20%E2%80%94%20Designer_files/script_WGPx";
const APPEAR_ANIMATIONS = "window.__framer__appearAnimationsContent={text:'{\"p9ffvd\":{\"default\":null,\"8kyut9\":null,\"1cf1x0t\":null,\"iup2ps\":null},\"hbo24m\":{\"default\":null,\"8kyut9\":null,\"1cf1x0t\":null,\"iup2ps\":null}}'}";
const BREAKPOINTS = "window.__framer__breakpoints={text:'[{\"hash\":\"72rtr7\",\"mediaQuery\":\"(min-width: 1725px)\"},{\"hash\":\"8kyut9\",\"mediaQuery\":\"(min-width: 1200px) and (max-width: 1724.98px)\"},{\"hash\":\"1cf1x0t\",\"mediaQuery\":\"(min-width: 810px) and (max-width: 1199.98px)\"},{\"hash\":\"iup2ps\",\"mediaQuery\":\"(max-width: 809.98px)\"}]'}";
const SCRIPT_10_SRC = "/Christina%20Lu%20%E2%80%94%20Designer_files/script_main.BIdwEETd_WGPx.mjs";

export const metadata: Metadata = {
  title: "Obidur Rahman",
  description: "Applied research and technical discovery for core AI product features, autonomous agentic workflows, and machine learning models.",
  openGraph: {
    title: "Obidur Rahman",
    description: "Applied research and technical discovery for core AI product features, autonomous agentic workflows, and machine learning models.",
    type: "website",
    images: ["https://framerusercontent.com/assets/TTpb510CPWLBQ8CSIL7fug2g2Q.jpg"],
    url: "https://obidur.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Obidur Rahman",
    description: "Applied research and technical discovery for core AI product features, autonomous agentic workflows, and machine learning models.",
    images: ["https://framerusercontent.com/assets/TTpb510CPWLBQ8CSIL7fug2g2Q.jpg"],
  },
};

export default function Page() {
  return (
    <FramerPage
      pageStyle={PAGE_STYLE}
      html={PAGE_HTML}
      script2Src={SCRIPT_2_SRC}
      appearAnimations={APPEAR_ANIMATIONS}
      breakpoints={BREAKPOINTS}
      script10Src={SCRIPT_10_SRC}
    />
  );
}
