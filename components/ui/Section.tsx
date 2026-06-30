interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  heading: string;
  description?: string;
}

export function Section({ heading, description, className = '', children, ...props }: SectionProps) {
  return (
    <section className={`space-y-4 ${className}`} {...props}>
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold text-slate-900">{heading}</h2>
        {description && <p className="text-sm text-slate-600">{description}</p>}
      </div>
      {children}
    </section>
  );
}
