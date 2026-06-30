interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <label className="flex flex-col gap-2 text-sm text-slate-900">
      {label && <span className="font-medium">{label}</span>}
      <input className={`rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 ${className}`} {...props} />
      {error && <span className="text-xs text-rose-600">{error}</span>}
    </label>
  );
}
