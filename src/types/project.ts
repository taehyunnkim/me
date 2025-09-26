export interface Project {
    id: string;
    title: string;
    slug: string; // for URL routing
    thumbnail?: string; // optional
    shortDescription: string;
    tags: ProjectTag[];
    skills: string[]; // skill names that match our skills data
    featured?: boolean;
}

export type ProjectTag = 'professional' | 'personal' | 'open-source' | 'academic' | 'freelance';
