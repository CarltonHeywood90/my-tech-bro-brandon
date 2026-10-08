import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import styles from './blog.module.css';

export default function BlogPage() {
  const contentDir = path.join(process.cwd(), 'content');
  const files = fs.readdirSync(contentDir);
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
    <main className={styles.container}>
      <h1 className={styles.title}>The <span>Blog</span></h1>
      <div className={styles.posts}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={styles.post}
          >
            <h2>{post.title}</h2>
            <p>{post.date}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
