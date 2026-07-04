import { CalendarDays, Clock3 } from "lucide-react";

interface Props {
  date?: string;
  readingTime?: string;
}

export function ContentMetadata({
  date,
  readingTime,
}: Props) {
  return (
    <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">

      {date && (
        <span className="flex items-center gap-2">
          <CalendarDays size={15} />
          {date}
        </span>
      )}

      {readingTime && (
        <span className="flex items-center gap-2">
          <Clock3 size={15} />
          {readingTime}
        </span>
      )}

    </div>
  );
}