export function Link({ href, children }: { href: string; children: any }) {
  return (
    <div className="Link">
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    </div>
  );
}
