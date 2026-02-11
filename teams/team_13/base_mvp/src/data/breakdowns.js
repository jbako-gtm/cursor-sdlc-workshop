/**
 * Stub data: breakdown factors that explain each team's win percentage.
 * Each team has an array of factors with a label, value (%), and a short explanation.
 * The factor values are just for illustration — they don't need to add up to winPercent.
 */
export const BREAKDOWNS = {
  brazil: {
    summary: "Five-time champions with unmatched tournament pedigree.",
    factors: [
      { label: "History", value: 40, detail: "Record 5 World Cup titles" },
      { label: "Current Form", value: 30, detail: "Strong qualifying campaign" },
      { label: "Squad Depth", value: 20, detail: "World-class talent at every position" },
      { label: "Draw Difficulty", value: 10, detail: "Favorable group-stage draw" },
    ],
  },
  france: {
    summary: "Defending champions with a generational squad.",
    factors: [
      { label: "History", value: 25, detail: "2 World Cup titles, back-to-back finalist" },
      { label: "Current Form", value: 35, detail: "Dominant in recent tournaments" },
      { label: "Squad Depth", value: 30, detail: "Deep roster led by Mbappé" },
      { label: "Draw Difficulty", value: 10, detail: "Moderate group opponents" },
    ],
  },
  argentina: {
    summary: "Reigning champions riding a long unbeaten run.",
    factors: [
      { label: "History", value: 30, detail: "3 World Cup titles including 2022" },
      { label: "Current Form", value: 35, detail: "Copa América winners, long unbeaten streak" },
      { label: "Squad Depth", value: 25, detail: "Messi-era veterans plus young talent" },
      { label: "Draw Difficulty", value: 10, detail: "Manageable early-round path" },
    ],
  },
  germany: {
    summary: "Tournament specialists with a rebuilt young squad.",
    factors: [
      { label: "History", value: 35, detail: "4 World Cup titles, always contenders" },
      { label: "Current Form", value: 20, detail: "Rebuilding but improving rapidly" },
      { label: "Squad Depth", value: 25, detail: "Strong Bundesliga core" },
      { label: "Draw Difficulty", value: 20, detail: "Tough group but manageable" },
    ],
  },
  spain: {
    summary: "Tiki-taka masters with exciting new generation.",
    factors: [
      { label: "History", value: 20, detail: "2010 World Cup and Euro dominance" },
      { label: "Current Form", value: 35, detail: "Euro 2024 champions" },
      { label: "Squad Depth", value: 30, detail: "Young stars like Yamal and Pedri" },
      { label: "Draw Difficulty", value: 15, detail: "Could face tough knockout path" },
    ],
  },
  england: {
    summary: "Perennial contenders still chasing first title since 1966.",
    factors: [
      { label: "History", value: 15, detail: "1 World Cup title (1966)" },
      { label: "Current Form", value: 30, detail: "Back-to-back Euro finalists" },
      { label: "Squad Depth", value: 35, detail: "Premier League's best on one team" },
      { label: "Draw Difficulty", value: 20, detail: "Historically tough knockout draws" },
    ],
  },
  portugal: {
    summary: "Talented squad transitioning beyond the Ronaldo era.",
    factors: [
      { label: "History", value: 15, detail: "Euro 2016 champions, no World Cup title" },
      { label: "Current Form", value: 25, detail: "Solid qualifying results" },
      { label: "Squad Depth", value: 35, detail: "Exciting mix of youth and experience" },
      { label: "Draw Difficulty", value: 25, detail: "Often drawn into tough groups" },
    ],
  },
  netherlands: {
    summary: "Historic runners-up looking to finally lift the trophy.",
    factors: [
      { label: "History", value: 20, detail: "3 World Cup finals, 0 wins" },
      { label: "Current Form", value: 25, detail: "Consistent but not dominant" },
      { label: "Squad Depth", value: 30, detail: "Good mix across top European clubs" },
      { label: "Draw Difficulty", value: 25, detail: "Mid-tier seeding, harder path" },
    ],
  },
  belgium: {
    summary: "Golden generation's last chance to deliver.",
    factors: [
      { label: "History", value: 10, detail: "Best finish: 3rd place (2018)" },
      { label: "Current Form", value: 25, detail: "Aging core, declining results" },
      { label: "Squad Depth", value: 35, detail: "Still talented but less deep" },
      { label: "Draw Difficulty", value: 30, detail: "Likely tough group and bracket" },
    ],
  },
  italy: {
    summary: "Rebuilding after missing recent tournaments.",
    factors: [
      { label: "History", value: 30, detail: "4 World Cup titles, storied program" },
      { label: "Current Form", value: 15, detail: "Inconsistent recent qualifying" },
      { label: "Squad Depth", value: 25, detail: "Serie A talent but fewer stars" },
      { label: "Draw Difficulty", value: 30, detail: "Low seeding means harder draw" },
    ],
  },
}
