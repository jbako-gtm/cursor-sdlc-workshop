import { BREAKDOWNS } from '../data/breakdowns.js'

/**
 * WhyThisPercent — shows a short breakdown of *why* a team has
 * its win percentage. Displays a summary line plus a bar-chart
 * style list of factors (Form, History, Draw, Squad Depth).
 *
 * Props:
 *   team – the currently selected team object ({ id, name, winPercent })
 */
export default function WhyThisPercent({ team }) {
  // Look up breakdown for this team; fall back to a generic message
  const breakdown = BREAKDOWNS[team.id]

  if (!breakdown) {
    return (
      <div className="breakdown">
        <h2 className="breakdown-title">Why {team.winPercent}%?</h2>
        <p className="breakdown-summary">No detailed breakdown available for {team.name}.</p>
      </div>
    )
  }

  return (
    <div className="breakdown">
      <h2 className="breakdown-title">Why {team.winPercent}%?</h2>
      <p className="breakdown-summary">{breakdown.summary}</p>

      <ul className="breakdown-factors">
        {breakdown.factors.map((factor) => (
          <li key={factor.label} className="factor">
            {/* Factor header: label on left, value on right */}
            <div className="factor-header">
              <span className="factor-label">{factor.label}</span>
              <span className="factor-value">{factor.value}%</span>
            </div>

            {/* Visual bar showing relative weight */}
            <div className="factor-bar-track">
              <div
                className="factor-bar-fill"
                style={{ width: `${factor.value}%` }}
              />
            </div>

            {/* Short explanation */}
            <p className="factor-detail">{factor.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
