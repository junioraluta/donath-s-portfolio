const SectionDivider = ({ variant = 'light' }) => {
  if (variant === 'gold') {
    return (
      <div className="flex justify-center py-8" aria-hidden="true">
        <div className="flex items-center gap-3">
          <div className="w-8 h-[1px] bg-gold/30" />
          <div className="w-2 h-2 rounded-full bg-gold/40" />
          <div className="w-8 h-[1px] bg-gold/30" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center py-6" aria-hidden="true">
      <div className="w-16 h-[1px] bg-gray-200" />
    </div>
  )
}

export default SectionDivider
