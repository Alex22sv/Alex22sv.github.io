type Props = {
  status?: string;
  repository?: string;
  website?: string;
  tech?: string[];
};

export function ProjectInfo({
  status,
  repository,
  website,
  tech,
}: Props) {
  return (
    <section className="mb-12 rounded-xl border p-6">

      <h2 className="mb-4 text-xl font-semibold">
        Project Information
      </h2>

      <div className="space-y-4">

        {status && (
          <div>
            <strong>Status:</strong> {status}
          </div>
        )}

        {tech && tech.length > 0 && (
          <div>
            <strong>Tech Stack:</strong>

            <div className="mt-2 flex flex-wrap gap-2">
              {tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border px-3 py-1 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}