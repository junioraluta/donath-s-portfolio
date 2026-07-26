const EducationCard = ({ institution, qualification, year }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
      <div>
        <h3 className="font-heading text-base font-semibold text-dark mb-1">
          {qualification}
        </h3>
        <p className="text-body-sm text-dark/60">{institution}</p>
      </div>
      {year && (
        <span className="text-body-sm text-gold font-medium shrink-0">{year}</span>
      )}
    </div>
  )
}

export default EducationCard
