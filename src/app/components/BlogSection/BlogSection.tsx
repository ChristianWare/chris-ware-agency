"use client";

import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./BlogSection.module.css";
import BlogCard from "../BlogCard/BlogCard";
import Card from "../../../../public/images/success.png";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { Post } from "@/app/lib/interface";

interface BlogSectionProps {
  posts: Post[];
}

const BlogSection: FC<BlogSectionProps> = ({ posts }) => {
  const pathname = usePathname();

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
            // <div>
              <BlogCard key={post._id} src={Card} post={post} />
            // </div>
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
