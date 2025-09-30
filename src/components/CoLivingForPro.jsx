import React from 'react'
import { CoWorkingRulesData } from '../data/rules'
const CoLivingForPro = () => {
  return (
<>
    <div className="container mx-auto py-10">
      <p className="text">{CoWorkingRulesData.intro}</p>

      {/* Rules Section */}
   {CoWorkingRulesData.sections?.map((section, idx) => (
  <div key={idx} className="mt-6">
    <h1 className="py-5 font-semibold">{section.title}</h1>
    <ul className="list-group-numbered">
      {section.items?.map((item, i) => (
        <li key={i}>
          {item.subtitle}
          <ul className="list-disc pl-6">
            {item.points?.map((point, j) => (
              <li key={j}>{point}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
))}

{/* Fines Chart */}
<div className="mt-10">
  <h1 className="py-5 font-semibold">Fines Chart</h1>
  <table className="w-full border border-gray-300">
    <thead>
      <tr className="bg-gray-200">
        <th className="border border-gray-300 px-4 py-2 text-left">
          Violation
        </th>
        <th className="border border-gray-300 px-4 py-2 text-left">
          Fine (৳)
        </th>
      </tr>
    </thead>
    <tbody>
      {CoWorkingRulesData.fines?.map((fine, idx) => (
        <tr key={idx} className="odd:bg-white even:bg-gray-50">
          <td className="border border-gray-300 px-4 py-2">
            {fine.violation}
          </td>
          <td className="border border-gray-300 px-4 py-2">{fine.amount}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
</>
  )
}

export default CoLivingForPro