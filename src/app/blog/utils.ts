// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

// function getMDXFiles(dir: string) {
//   return fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));
// }

// function readMDXFile(filePath: fs.PathOrFileDescriptor) {
//   const rawContent = fs.readFileSync(filePath, "utf-8");
//   return matter(rawContent);
// }

// function getMDXData(dir: string) {
//   const mdxFiles = getMDXFiles(dir);

//   return mdxFiles.map((file) => {
//     const { data: metadata, content } = readMDXFile(path.join(dir, file));
//     const slug = path.basename(file, path.extname(file));

//     return {
//       metadata,
//       content,
//       slug,
//     };
//   });
// }

// export function getBlogPosts() {
//   return getMDXData(path.join(process.cwd(), "src", "app", "blog", "contents"));
// }

// export function formatDate(date: string, includeRelative = false) {
//   const currentDate = new Date();
//   if (!date.includes("T")) {
//     date = `${date}T00:00:00`;
//   }
//   const postDate = new Date(date);

//   const yearsAgo = currentDate.getFullYear() - postDate.getFullYear();
//   const monthsAgo = currentDate.getMonth() - postDate.getMonth();
//   const daysAgo = currentDate.getDate() - postDate.getDate();

//   let formattedDate = "";

//   if (yearsAgo > 0) {
//     formattedDate = `${yearsAgo}y ago`;
//   } else if (monthsAgo > 0) {
//     formattedDate = `${monthsAgo}m ago`;
//   } else if (daysAgo > 0) {
//     formattedDate = `${daysAgo}d ago`;
//   } else {
//     formattedDate = "today";
//   }

//   const fullDate = postDate.toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });

//   if (!includeRelative) {
//     return fullDate;
//   }

//   return `${fullDate} (${formattedDate})`;
// }
