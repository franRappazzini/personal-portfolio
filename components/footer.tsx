import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} - Created by{" "}
          <Link
            href="https://www.linkedin.com/in/francisco-rappazzini/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Francisco Rappazzini
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
