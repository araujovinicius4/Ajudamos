export type PublicationType = 'Preciso de ajuda' | 'Posso ajudar'
export type PublicationVisibility = 'protected' | 'identified'

export interface Publication {
  id: number
  type: PublicationType
  title: string
  description: string
  category: string
  unit: string
  author: string
  /** Vínculo interno, nunca apresentado nas interfaces públicas. */
  authorId: string
  visibility: PublicationVisibility
  hideUnit: boolean
  date: string
  resource: string
  urgency: string
  tags: string[]
  status: string
}
