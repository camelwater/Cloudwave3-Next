import * as fs from 'fs';
import * as path from 'path';


const contentDir = path.join(process.cwd(), 'content');

export const getMdContent = (pageName) => {
    let fileName = pageName + 'Content.md';
    const fullPath = path.join(contentDir, fileName);
    const mdContent =  fs.readFileSync(fullPath, 'utf-8');
    return mdContent;
}