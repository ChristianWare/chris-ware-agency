import { ReactNode } from "react";

export interface Post {
  title: string;
  overview: string;
  content: any;
  _id: string;
  slug: {
    current: string;
  };
  _createdAt: string;
}

export interface Button {
  href: string;
  text: string;
  btnType: string;
  icon?: ReactNode;
}
