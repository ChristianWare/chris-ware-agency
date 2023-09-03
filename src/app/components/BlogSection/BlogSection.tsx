"use client";

import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./BlogSection.module.css";
import BlogCard from "../BlogCard/BlogCard";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { Posts } from "@/app/lib/interface";

interface BlogSectionProps {
  posts: Posts[];
}

export const revalidate = 60;

const BlogSection: FC<BlogSectionProps> = ({ posts }) => {
  const pathname = usePathname();

  if (!posts || posts.length === 0) {
    return <div>No posts available.</div>;
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <SectionHeading
          labelText='Blog'
          headingText='News & Updates'
          copyText=' Insights and Innovations in Web Development'
        />
        <div className={styles.bottom}>
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
        {pathname !== "/blog" && (
          <div className={styles.btnContainer}>
            <Button href='/blog' text='See all posts' btnType='primary' />
          </div>
        )}
      </div>
    </section>
  );
};
export default BlogSection;
