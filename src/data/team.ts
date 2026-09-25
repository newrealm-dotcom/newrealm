export interface TeamMember {
  slug: string
  name: string
  role: string
  bio: string[]
}

/** Real, supplied bio — reframed for the About page, facts unchanged. */
export const TEAM: TeamMember[] = [
  {
    slug: 'mike-franco',
    name: 'Mike Franco',
    role: 'Owner / Operator',
    bio: [
      'Mike Franco has spent over 25+ years turning design and marketing challenges into results that hold up in print and online. His background spans graphic and web design, with deep roots in both the design and print sectors — a combination that has become increasingly rare as the industry has specialized.',
      "Running his own business for most of that career, Mike has learned to move fluidly between roles: designer one day, fundraiser the next, team collaborator on the same project. That range shows up in how he works — approaching problems from multiple angles rather than a single fixed process.",
      "Today, he leads New Realm's online data services, digital marketing, SEO/AEO strategy, and the ongoing maintenance of all company websites and apps.",
    ],
  },
]

export function getTeamMemberBySlug(slug: string) {
  return TEAM.find((t) => t.slug === slug)
}
