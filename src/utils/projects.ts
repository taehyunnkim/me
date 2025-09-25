import { getCollection, type CollectionEntry } from 'astro:content';
import type { Project } from '@/types/project';

export async function getAllProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  
  return projects.map((project: CollectionEntry<'projects'>) => ({
    id: project.slug,
    title: project.data.title,
    slug: project.slug,
    thumbnail: project.data.thumbnail,
    shortDescription: project.data.description,
    tags: project.data.tags,
    skills: project.data.skills,
    featured: project.data.featured || false,
  }));
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getAllProjects();
  return projects.filter(project => project.featured);
}
