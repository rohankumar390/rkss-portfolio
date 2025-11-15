// fillPages.js
import fs from "fs";
import path from "path";

const baseDir = "./src/app";

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && entry.name === "page.tsx") {
      const folderName = path.basename(path.dirname(fullPath));
      const content = `export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center text-3xl font-semibold">
      This is the ${folderName.replace(/-/g, " ")} page
    </div>
  );
}
`;
      fs.writeFileSync(fullPath, content);
      console.log(`✅ Updated: ${fullPath}`);
    }
  }
}

walk(baseDir);
console.log("✨ All page.tsx files updated successfully!");
