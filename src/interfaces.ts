import { ReactNode } from "react";
import { StaticImageData } from "next/image";

export interface IText {
  titles?: boolean;
  small?: boolean;
  big?: boolean;
  white?: boolean;
  upper?: boolean;
  margin?: string;
  post?: boolean;
}

export interface ISection {
  right?: boolean;
  title: string;
  subtitle: ReactNode;
  img: StaticImageData;
}

export interface IHeading {
  title: string;
  padding?: string;
}
