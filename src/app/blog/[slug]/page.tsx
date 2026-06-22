import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // Standard tool for parsing frontmatter
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // 1. Get the file path
  const filePath = path.join(process.cwd(), 'content', `${slug}.mdx`);

  // 2. Read the file
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // 3. Extract frontmatter and content separately
  const { data: frontmatter, content } = matter(fileContent);

  return (
    <article className="max-w-3xl mx-auto px-6 py-24">
      <header className="mb-12">
        <h1 className="text-5xl font-extrabold mb-4">{frontmatter.title}</h1>
        <p className="text-cyan-400 font-medium">{frontmatter.date}</p>
      </header>
      
      {/* 4. Render content directly using the server component */}
      <div className="prose prose-invert prose-cyan max-w-none">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
