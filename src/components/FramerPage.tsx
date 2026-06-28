import Script from "next/script"
import { SharedScripts } from "./SharedScripts"
import { FramerStyles } from "./FramerStyles"

interface FramerPageProps {
  pageStyle: string
  html: string
  script2Src: string
  appearAnimations: string
  breakpoints: string
  script10Src: string
}

export function FramerPage({ pageStyle, html, script2Src, appearAnimations, breakpoints, script10Src }: FramerPageProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyle }} />
      <FramerStyles />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <SharedScripts />
      <Script id="script-src-2" src={script2Src} strategy="afterInteractive" />
      <Script id="script-inline-6" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: appearAnimations }} />
      <Script id="script-inline-7" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: breakpoints }} />
      <Script id="script-src-10" src={script10Src} strategy="afterInteractive" />
    </>
  )
}
