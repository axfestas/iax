interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Search({ label = 'Buscar', className = '', ...props }: SearchProps) {
  return (
    <label className="flex w-full flex-col gap-2 text-sm text-slate-900">
      <span className="sr-only">{label}</span>
      <div className="relative">
        <input
          type="search"
          placeholder={label}
          className={`w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 pr-12 text-slate-900 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 ${className}`}
          {...props}
        />
      </div>
    </label>
  );
}
