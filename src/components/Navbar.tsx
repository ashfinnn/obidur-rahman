"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function LinkBox({ href, label, linkClass, containerClass }: {
  href: string; label: string; linkClass: string; containerClass: string;
}) {
  return (
    <Link className={linkClass} href={href}>
      <div className={containerClass}>
        <div className="framer-pCi3K framer-ADq7i framer-p9ffvd framer-v-p9ffvd" data-framer-name="link" style={{ borderRadius: 8 }}>
          <div className="framer-1b1ufl" data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-8zdhwh" data-styles-preset="cMDGf1ZCC" dir="auto">
              {label}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function Navbar() {
  const sharedProps = (href: string, label: string, linkClass: string, containerClass: string) => ({
    href, label, linkClass, containerClass,
  });

  return (
    <div className="framer-1sf8mo9-container">
      <div
        className="framer-nvpae framer-1di71vz framer-v-1di71vz"
        data-border="true"
        data-framer-name="Desktop"
        style={{
          borderBottom: "1px solid var(--token-93d4df04-7be1-431d-aace-996a754bacb0, rgba(31, 29, 28, 0.05))",
          backdropFilter: "blur(7px)",
          backgroundColor: "rgba(248, 248, 250, 0.75)",
          width: "100%",
        }}
      >
        <div className="framer-f5mr4r">
          <LinkBox {...sharedProps("/", "home", "framer-1l67b88 framer-wvxlrx", "framer-1hrkg8f-container")} />
          <div className="framer-1fwfx4u">
            <LinkBox {...sharedProps("/#work", "work", "framer-1533ez7 framer-wvxlrx", "framer-1q9wyp5-container")} />
            <LinkBox {...sharedProps("/playground", "playground", "framer-dfjtkq framer-wvxlrx", "framer-tya3sx-container")} />
            <LinkBox {...sharedProps("/about", "about", "framer-lqujhh framer-wvxlrx", "framer-6dgzo3-container")} />
          </div>
        </div>
      </div>
    </div>
  );
}
