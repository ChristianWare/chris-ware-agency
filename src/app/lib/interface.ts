import { ReactNode } from "react";
import { PortableTextBlock } from "sanity";

export interface Button {
  href: string;
  text: string;
  btnType: string;
  icon?: ReactNode;
}

export type Posts = {
  _id: string;
  _createdAt: string;
  title: string;
  overview: string;
  image: string;
  slug: string;
  content: PortableTextBlock[];
};
