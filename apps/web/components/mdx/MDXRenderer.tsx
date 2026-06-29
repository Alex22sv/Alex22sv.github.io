import { renderMDX } from "@/lib/content/render";

type Props = {
  source: string;
};

export async function MDXRenderer({
  source,
}: Props) {
  const content = await renderMDX(source);

  return content;
}