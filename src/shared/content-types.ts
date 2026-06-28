export interface SocialLink {
  label: string
  url: string
}

export interface NavLink {
  label: string
  href: string
}

export interface Project {
  title: string
  description: string
  url?: string
}

export interface SiteContent {
  name: string
  title: string
  navLinks: NavLink[]
  bio?: string
  projects?: Project[]
  socialLinks: SocialLink[]
}
