export type Note<T extends object = object> = T & { id: number }

const notes: Note[] = []

export default notes
