export type Category = "Betjent" | "Selvbetjent" | "Ubetjent"

export type Cabin = {
    id: string
    name: string
    kind: Category
    beds: number
    region: string
    description: string
}

export const categories: Category[] = ["Betjent", "Selvbetjent", "Ubetjent"]

// Samme områder som turene bruker, slik at hytte -> turer i nærheten treffer
export const regions = ["Nordfjell", "Grønnmark", "Høyfjellet"]
