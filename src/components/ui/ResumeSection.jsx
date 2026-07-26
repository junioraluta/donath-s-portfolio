const ResumeSection = ({ title, children }) => {
  return (
    <div className="mb-14 last:mb-0">
      <h2 className="font-heading text-xl font-semibold text-dark mb-8 pb-4 border-b border-gray-200">
        {title}
      </h2>
      <div>{children}</div>
    </div>
  )
}

export default ResumeSection
