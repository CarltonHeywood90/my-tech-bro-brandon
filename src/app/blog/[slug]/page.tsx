import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import styles from './post.module.css';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content', `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(fileContent);

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
      </header>
      <div className={styles.content}>
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
