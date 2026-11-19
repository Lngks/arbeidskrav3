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

export const regions = ["Nordfjell", "Grønnmark", "Høyfjellet"]
