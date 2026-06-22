import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function BlogPage() {
  // 1. Get the directory path
  const contentDir = path.join(process.cwd(), 'content');
  
  // 2. Read all files in that directory
  const files = fs.readdirSync(contentDir);
  
  // 3. Map over the files to extract metadata
  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '');
    const markdownWithMeta = fs.readFileSync(path.join(contentDir, filename), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);
    
    return {
      slug,
      title: frontmatter.title,
      date: frontmatter.date,
    };
  });

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-extrabold mb-12">The <span className="text-cyan-400">Blog</span></h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <Link 
            key={post.slug} 
            href={`/blog/${post.slug}`}
            className="block p-8 border border-slate-800 rounded-2xl bg-slate-900/50 hover:border-cyan-500/50 transition-colors"
          >
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-slate-400 text-sm">{post.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}