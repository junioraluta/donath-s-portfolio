const CategoryBadge = ({ category }) => {
  return (
    <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider text-navy bg-gold/15 border border-gold/30 rounded-full">
      {category}
    </span>
  )
}

export default CategoryBadge
