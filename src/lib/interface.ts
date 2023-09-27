import { ReactNode } from "react";

export interface Button {
  href: string;
  btnType: string;
  icon?: ReactNode;
  children: any;
  target?: string;
}

export interface BlogData {
  meta: {
    category: string;
    thumbnaillUrl: string;
    date: string;
    readingTime: number;
    title: string;
    description: string;
  };
  slug: string;
}

export interface BlogPreview {
  mapData: BlogData;
  key: number;
}

export interface BlogSection {
  blogData: any;
}
