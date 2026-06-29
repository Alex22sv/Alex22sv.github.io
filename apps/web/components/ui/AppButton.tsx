import { Button } from "@/components/ui/button";

export function AppButton(props: React.ComponentProps<typeof Button>) {
  return (
    <Button
      {...props}
      className="rounded-full px-6"
    />
  );
}