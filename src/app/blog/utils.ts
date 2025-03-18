import fs from "fs";
import matter from "gray-matter";
import path from "path";

// Get all blog posts
function getMdXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

// Read data from those files
function readMDXFile(filePath: fs.PathOrFileDescriptor) {
  const rawContent = fs.readFileSync(filePath, "utf8");
  return matter(rawContent);
}

// show the content of the file
function getMDXContent(filePath: string) {
  const mdxFiles = getMdXFiles(filePath).map((file) => {
    const { data: metaData, content } = readMDXFile(path.join(filePath, file));
    const slug = path.basename(file, path.extname(file));
    return {
      slug,
      metaData,
      content,
    };
  });
  return mdxFiles;
}

export function getBlogPosts() {
  return getMDXContent(
    path.join(process.cwd(), "src", "app", "blog", "contents")
  );
}

export function getTermsOfServices() {
  return getMDXContent(
    path.join(process.cwd(), "src", "app", "terms-of-services")
  );
}

export function getPrivacyPolicy() {
  return getMDXContent(
    path.join(process.cwd(), "src", "app", "privacy-policy")
  );
}

// display the date of the post
export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();
  if (date && date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);
  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo} year${yearsAgo > 1 ? "s" : ""} ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo} month${monthsAgo > 1 ? "s" : ""} ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
