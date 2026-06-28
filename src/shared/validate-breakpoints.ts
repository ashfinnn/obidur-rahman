import fs from "fs";
import path from "path";

interface BreakpointEntry {
  hash: string;
  mediaQuery: string;
}

function extractBreakpointsFromPage(filePath: string): BreakpointEntry[] {
  const raw = fs.readFileSync(path.resolve(filePath), "utf8");
  const line = raw.split("\n").find((l) => l.includes("BREAKPOINTS"));
  if (!line) throw new Error(`BREAKPOINTS not found in ${filePath}`);
  const first = line.indexOf('"');
  const last = line.lastIndexOf('"');
  if (first === -1 || last === first) throw new Error(`Could not parse BREAKPOINTS in ${filePath}`);
  const inner = line.substring(first + 1, last).replace(/\\"/g, '"');
  const jsonMatch = inner.match(/text:'(.*)'\}/);
  if (!jsonMatch) throw new Error(`Could not extract JSON from BREAKPOINTS in ${filePath}`);
  return JSON.parse(jsonMatch[1]);
}

function extractBreakpointsFromHtml(filePath: string): BreakpointEntry[] {
  const raw = fs.readFileSync(path.resolve(filePath), "utf8");
  const match = raw.match(/breakpoints&quot;:(\[[^\]]+?\])/);
  if (!match) throw new Error(`Breakpoints not found in HTML: ${filePath}`);
  const cleaned = match[1].replace(/&quot;/g, '"');
  return JSON.parse(cleaned);
}

const pages = [
  {
    name: "Home",
    tsx: "src/app/page.tsx",
    html: "src/app/page-html.ts",
  },
  {
    name: "About",
    tsx: "src/app/about/page.tsx",
    html: "src/app/about/page-html.ts",
  },
];

let failed = false;

for (const page of pages) {
  const fromTsx = extractBreakpointsFromPage(page.tsx).map((b) => b.hash);
  const fromHtml = extractBreakpointsFromHtml(page.html).map((b) => b.hash);

  console.log(`\n${page.name}:`);
  console.log(`  page.tsx:        [${fromTsx.join(", ")}]`);
  console.log(`  page-html.ts:    [${fromHtml.join(", ")}]`);

  let pageOk = true;
  if (fromTsx.length !== fromHtml.length) {
    console.error(`  ERROR: breakpoint count mismatch (tsx:${fromTsx.length} vs html:${fromHtml.length})`);
    pageOk = false;
  }
  const allMatch = fromTsx.every((h, i) => h === fromHtml[i]);
  if (!allMatch) {
    console.error(`  ERROR: breakpoint hashes differ between sources`);
    pageOk = false;
  }
  if (pageOk) console.log(`  OK - all breakpoints synced`);
  if (!pageOk) failed = true;
}

if (failed) {
  console.error("\nBREAKPOINT VALIDATION FAILED");
  process.exit(1);
} else {
  console.log("\nBREAKPOINT VALIDATION PASSED");
}
