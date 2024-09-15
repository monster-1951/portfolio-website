declare module '@react-email/components' {
  import { ComponentType, ReactNode, CSSProperties } from 'react';

  export interface HtmlProps {
    lang?: string;
    dir?: string;
    children?: ReactNode;
  }

  export const Html: ComponentType<HtmlProps>;

  export interface HeadProps {
    children?: ReactNode;
  }

  export const Head: ComponentType<HeadProps>;

  export interface FontProps {
    fontFamily: string;
    fallbackFontFamily?: string;
    webFont?: {
      url: string;
      format: string;
    };
    fontWeight?: number;
    fontStyle?: string;
  }

  export const Font: ComponentType<FontProps>;

  export interface PreviewProps {
    children?: ReactNode;
  }

  export const Preview: ComponentType<PreviewProps>;

  export interface HeadingProps {
    as?: string;
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
  }

  export const Heading: ComponentType<HeadingProps>;

  export interface RowProps {
    style?: CSSProperties;
    children?: ReactNode;
  }

  export const Row: ComponentType<RowProps>;

  export interface SectionProps {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
  }

  export const Section: ComponentType<SectionProps>;

  export interface TextProps {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
  }

  export const Text: ComponentType<TextProps>;

  export interface ButtonProps {
    href: string;
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
  }

  export const Button: ComponentType<ButtonProps>;

  export interface ImgProps {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    style?: CSSProperties;
    className?: string;
  }

  export const Img: ComponentType<ImgProps>;

  export interface ContainerProps {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
  }

  export const Container: ComponentType<ContainerProps>;

  export interface ColumnProps {
    style?: CSSProperties;
    align?: 'left' | 'right' | 'center';
    className?: string;
    children?: ReactNode;
  }

  export const Column: ComponentType<ColumnProps>;

  export interface HrProps {
    style?: CSSProperties;
    className?: string;
  }

  export const Hr: ComponentType<HrProps>;

  export interface LinkProps {
    href: string;
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
  }

  export const Link: ComponentType<LinkProps>;

  export interface BodyProps {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
  }

  export const Body: ComponentType<BodyProps>;

  export const Tailwind: ComponentType<{ children?: ReactNode }>;
}
