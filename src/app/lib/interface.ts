import { ReactNode } from "react";

export interface Button {
  href: string;
  // text: string;
  btnType: string;
  icon?: ReactNode;
  children: any;
}

export interface BlogData {
  meta: {
    category: string;
    thumbnaillUrl: string;
    date: string;
    readingTime: number;
    title: string;
    description: string;
    // Add other properties if needed
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
