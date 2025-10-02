import { existsSync } from 'fs';
import { join } from 'path';

/**
 * Resolves thumbnail path for a project
 * @param projectId - The project ID (folder name)
 * @param frontmatterThumbnail - Optional thumbnail path from frontmatter
 * @returns Resolved thumbnail path or undefined if no thumbnail found
 */
export function resolveThumbnailPath(
  projectId: string, 
  frontmatterThumbnail?: string
): string | undefined {
  // Use frontmatter thumbnail if specified
  if (frontmatterThumbnail) {
    return frontmatterThumbnail;
  }

  // Check for existing thumbnail files
  const extensions = ['jpg', 'jpeg', 'png', 'webp'];
  const publicDir = join(process.cwd(), 'public', 'projects', projectId);
  
  for (const ext of extensions) {
    const thumbnailFile = join(publicDir, `thumbnail.${ext}`);
    if (existsSync(thumbnailFile)) {
      return `/projects/${projectId}/thumbnail.${ext}`;
    }
  }

  // No thumbnail found
  return undefined;
}
