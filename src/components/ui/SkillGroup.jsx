const SkillGroup = ({ title, skills }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="font-heading text-lg font-semibold text-dark mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-body-sm text-navy bg-gray-light rounded-md font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillGroup
