# Alex22sv.github.io

Personal website built with **Next.js**, designed as the central hub of my digital presence.

This project is more than a portfolio. It is intended to become a complete personal platform including:

- 📝 Blog
- 💼 Portfolio
- 📸 Gallery
- 👤 About Me
- 📚 Projects
- ✍️ Articles
- 🚀 Future personal tools

---

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Lucide React
- Docker
- pnpm

---

## Development

Start the development environment:

```bash
docker compose up -d
```

Open a shell inside the container:

```bash
docker compose exec web bash
```

Move to the web application:

```bash
cd /workspace/apps/web
```

Run the development server:

```bash
pnpm dev
```

The application will be available at:

http://localhost:3000

---

## Project Structure

```text
apps/
└── web/

content/
docker/
docs/
public/
```

---

## License

This project is licensed under the **GPL-3.0 license**.