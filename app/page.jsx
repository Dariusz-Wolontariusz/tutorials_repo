// app/page.jsx
import Link from "next/link";

const projects = [
  {
    title: "Api Call Case",
    href: "/api-call-case",
  },
  {
    title: "Officer Note Form",
    href: "/officer-note-form",
  },
  {
    title: "Pomodoro Tracker",
    href: "/pomodoro-task-tracker",
  },
  {
    title: "Task Tracker",
    href: "/task-tracker",
  },
  {
    title: "Search Box",
    href: "/search-box",
  },
  {
    title: "Modal A11Y",
    href: "/modal-a11y",
  },
  {
    title: "Sass Traversy",
    href: "/sass-traversy",
  },
];

export default function HomePage() {
  return (
    <main>
      <h1>My Projects</h1>
      <p>Choose a project to view:</p>

      <ul>
        {projects.map((project) => (
          <li key={project.href}>
            <Link href={project.href}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
