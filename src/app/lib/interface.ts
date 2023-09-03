import { ReactNode } from "react";

export interface Button {
  href: string;
  text: string;
  btnType: string;
  icon?: ReactNode;
}