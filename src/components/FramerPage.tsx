import Script from "next/script"
import { SharedScripts } from "./SharedScripts"
import { FramerStyles } from "./FramerStyles"
import { SHARED_STYLE } from "@/shared/shared-style"

interface FramerPageProps {
  pageStyle: string
  html: string
  appearAnimations: string
  breakpoints: string
}

export function FramerPage({ pageStyle, html, appearAnimations, breakpoints }: FramerPageProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: SHARED_STYLE + pageStyle }} />
      <FramerStyles />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <SharedScripts />
      <Script id="script-inline-6" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: appearAnimations }} />
      <Script id="script-inline-7" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: breakpoints }} />
    </>
  )
}
