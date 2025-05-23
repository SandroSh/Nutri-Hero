import { CSSProperties } from "react";

export interface ImageFieldProps {
  src: string;
  layout?: "fill" | "fixed" | "intrinsic" | "responsive";
  width?: number;
  className?: string;
  height?: number;
  alt: string;
  style?:CSSProperties;

}
