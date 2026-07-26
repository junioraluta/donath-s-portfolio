const FormField = ({ label, name, type = 'text', placeholder, value, onChange, error, rows }) => {
  const baseClasses =
    'w-full px-4 py-3 text-body-sm text-dark bg-white border rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold'
  const borderClass = error ? 'border-red-400' : 'border-gray-200'

  return (
    <div className="mb-5">
      <label htmlFor={name} className="block text-body-sm font-medium text-dark mb-2">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows || 5}
          className={`${baseClasses} ${borderClass} resize-vertical`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${baseClasses} ${borderClass}`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      )}
      {error && (
        <p id={`${name}-error`} className="text-xs text-red-500 mt-1.5" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export default FormField
