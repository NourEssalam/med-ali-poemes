// All poem content here is illustrative placeholder text, not a verified work by the author.

export type Poem = {
  slug: string
  title: string
  theme: 'Amour' | 'Exil' | 'Patrie' | 'Foi'
  lines?: string[][]
}

export const poems: Poem[] = [
  { slug: 'le-poids-des-absences', title: 'Le poids des absences', theme: 'Amour' },
  { slug: 'dans-tes-yeux', title: 'Dans tes yeux', theme: 'Amour' },
  { slug: 'leloignement-nous-ecrit', title: "L'éloignement nous écrit", theme: 'Amour' },
  {
    slug: 'poeme-d-exemple', title: "Poème d'exemple", theme: 'Exil',
    lines: [['Il y a des silences', 'qui traversent les frontières,', 'des mots qui voyagent', 'plus loin que nos pas.'], ['Et dans chaque distance,', 'une part de nous', 'continue de chercher', 'le chemin du retour.']],
  },
  { slug: 'entre-deux-rives', title: 'Entre deux rives', theme: 'Exil' },
  { slug: 'la-valise-et-le-ciel', title: 'La valise et le ciel', theme: 'Exil' },
  { slug: 'ailleurs-toujours', title: 'Ailleurs, toujours', theme: 'Exil' },
  { slug: 'mon-pays-en-silence', title: 'Mon pays en silence', theme: 'Patrie' },
  { slug: 'les-racines-et-le-vent', title: 'Les racines et le vent', theme: 'Patrie' },
  { slug: 'tunis-encore', title: 'Tunis, encore', theme: 'Patrie' },
  { slug: 'lumiere-dans-lombre', title: "Lumière dans l'ombre", theme: 'Foi' },
  { slug: 'le-chemin-du-coeur', title: 'Le chemin du cœur', theme: 'Foi' },
  { slug: 'rester-debout', title: 'Rester debout', theme: 'Foi' },
]

export const themes = ['Amour', 'Exil', 'Patrie', 'Foi'] as const
export const poemWithContent = poems.find((poem) => poem.lines)
export const getPoem = (slug: string) => poems.find((poem) => poem.slug === slug)
export const getAvailablePoems = () => poems.filter((poem) => poem.lines)
export const groupByTheme = (theme: Poem['theme']) => poems.filter((poem) => poem.theme === theme)

export function isPoemWithContent(poem: Poem | undefined): poem is Poem & { lines: string[][] } {
  return Boolean(poem?.lines)
}

export function formatPoemTitle(title: string) {
  return title
}

export function getPreviousNext(slug: string) {
  const available = getAvailablePoems()
  const index = available.findIndex((poem) => poem.slug === slug)
  return { previous: index > 0 ? available[index - 1] : undefined, next: index >= 0 ? available[index + 1] : undefined }
}
