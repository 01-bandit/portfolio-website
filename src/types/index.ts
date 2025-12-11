// Common types used across the portfolio

export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  github?: string
  demo?: string
  category: 'academic' | 'personal'
}

export interface Education {
  id: number
  degree: string
  institution: string
  period: string
  details?: string[]
  gpa?: string
}

export interface Experience {
  id: number
  title: string
  company: string
  period: string
  description: string[]
  technologies?: string[]
}

export interface Certification {
  id: number
  title: string
  issuer: string
  date: string
  credential?: string
  image?: string
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'tools' | 'other'
}

export interface ContactForm {
  name: string
  email: string
  message: string
}

export type Theme = 'light' | 'dark'

export type ProjectCategory = 'all' | 'academic' | 'personal'
