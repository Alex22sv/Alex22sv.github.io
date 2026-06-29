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

    p: (props) => (
      <p
        className="leading-8 text-muted-foreground"
        {...props}
      />
    ),
    
    Callout,
  };
}