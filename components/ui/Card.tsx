interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

export function Card({ title, description, className = '', children, ...props }: CardProps) {
  return (
    <section className={`rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft ${className}`} {...props}>
      {title && <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>}
      {description && <p className="mb-4 text-sm leading-6 text-slate-600">{description}</p>}
      {children}
    </section>
  );
}
