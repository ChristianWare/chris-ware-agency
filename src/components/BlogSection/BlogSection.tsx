// "use client";

import { BlogSection, BlogData } from "@/lib/interface";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./BlogSection.module.css";
import BlogCard from "../BlogCard/BlogCard";
import Button from "../Button/Button";
import { FC } from "react";
import BlogPreview from "../BlogPreview/BlogPreview";

export const revalidate = 60;

const BlogSection: FC<BlogSection> = ({ blogData }) => {
  return (
    <section className={styles.container}>
      <h1>Blog Section</h1>
      <div className={styles.content}>
        {blogData.map((x: BlogData, index: number) => (
          <BlogPreview key={index} mapData={x} />
        ))}
        {/* <SectionHeading
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
        )} */}
      </div>
    </section>
  );
};
export default BlogSection;
