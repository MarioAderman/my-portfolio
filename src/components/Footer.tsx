export default function Footer() {
  return (
    <footer className="py-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="font-mono text-sm text-text-muted">
          mario.aderman
        </span>
        <span className="text-sm text-text-muted">
          © {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
    </footer>
  )
}
