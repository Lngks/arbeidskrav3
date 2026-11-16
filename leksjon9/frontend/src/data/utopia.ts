export type Difficulty = "Enkel" | "Middels" | "Krevende"

export type Hike = {
  id: string
  name: string
  region: string
  difficulty: Difficulty
  duration: string
  distance: string
  season: string
  description: string
  image: string
  alt: string
}

// /api/hikes/:id gir i tillegg disse feltene
export type HikeDetails = Hike & {
  longDescription: string
  start: string
  elevation: string
  highlights: string[]
  tips: string
}

export type Destination = {
  id: string
  name: string
  region: string
  description: string
  highlights: string
  image: string
  alt: string
}
