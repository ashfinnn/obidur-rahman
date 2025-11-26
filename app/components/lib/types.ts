// lib/types.ts

/**
 * Represents a single statistic for a project, like 'Accuracy' or 'Framework'.
 */
export interface ProjectStat {
  label: string;
  value: string;
}

/**
 * Represents a single project, certification, or piece of work.
 */
export interface Project {
  label: string;        // A short label, e.g., 'DEEP LEARNING'
  title: string;        // The main title of the project
  subtitle: string;     // A longer description
  tags: string[];       // An array of technologies or skills used
  stats?: ProjectStat[];// Optional array of key-value statistics
  link?: string | null;  // Optional link to the project or certificate
}

/**
 * Represents a category of projects, e.g., 'Data Science Projects'.
 */
export interface ProjectCategory {
  title: string;
  items: Project[];
}

/**
 * Defines the structure for the entire collection of project data,
 * organized by category keys.
 */
export interface AllProjectsData {
  'data-science': ProjectCategory;
  'web-development': ProjectCategory;
  'programming'?: ProjectCategory;
  'certifications': ProjectCategory;
}