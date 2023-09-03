import { Posts } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import styles from "./Slugpage.module.css";
import SlugIntro from "@/app/components/SlugIntro/SlugIntro";

async function getData(slug: string) {
  const query = `*[_type == 'post' && slug.current == "${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;
export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Posts;

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <div className={styles.imgContainer}>
          <Image
            src={urlFor(value).url()}
            alt='Image'
            width={800}
            height={800}
            className={styles.img}
          />
        </div>
      ),
    },
  };
  return (
    <div>
      <SlugIntro posts={data} />
      <h1>{data.title}</h1>
      <PortableText value={data.content} components={PortableTextComponent} />
    </div>
  );
}
