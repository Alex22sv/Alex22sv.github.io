import type { MDXComponents } from "mdx/types";
import { Callout } from "./Callout";

export function useMDXComponents(): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="mb-8 text-5xl font-bold"
        {...props}
      />
    ),

    h2: (props) => (
      <h2
        className="mt-16 mb-6 text-3xl font-semibold"
        {...props}
      />
    ),

    h3: (props) => (
      <h3
        className="mt-12 mb-4 text-2xl font-semibold"
        {...props}
      />
    ),

    p: (props) => (
      <p
        className="leading-8 text-foreground"
        {...props}
      />
    ),

    li: (props) => (
      <li
        className="mt-2 leading-8 text-foreground"
        {...props}
      />
    ),

    ol: (props) => (
      <ol
        className="my-6 ml-6 list-decimal space-y-2"
        {...props}
      />
    ),

    ul: (props) => (
      <ul
        className="my-6 ml-6 list-disc space-y-2"
        {...props}
      />
    ),
    
    a: (props) => (
      <a
        className="font-medium text-primary underline-offset-4 hover:underline"
        {...props}
      />
    ),
    
    pre: (props) => (
      <pre
        className="mb-8 mt-6 rounded-lg border bg-muted p-4"
        {...props}
      />
    ),
    
    code: (props) => (
      <code
        className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
        {...props}
      />
    ),

    blockquote: (props) => (
      <blockquote
        className="mb-8 mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground"
        {...props}
      />
    ),
    
    Callout,
  };
}