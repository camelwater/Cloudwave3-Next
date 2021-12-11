import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

export const getMdContent = (pageName) => {
    let fileName = pageName + '.md';
    const fullPath = path.join(contentDir, fileName);
    const mdContent =  fs.readFileSync(fullPath, 'utf-8');
    return mdContent;
}

export const getBlockContent = (category: string) => {
    const serviceContentPath = path.join(contentDir, category);
    let files = fs.readdirSync(serviceContentPath);
    const servicesContent = files
        .map((fileName) => {
            // const fileName = file.replace('/\.md/', '');
            const fileContent = fs.readFileSync(path.join(serviceContentPath, fileName), 'utf-8');
            const fileMatter = matter(fileContent);
            const content = fileMatter.content;
            return {
                content, 
                ...fileMatter.data,
            };
        });
    return servicesContent;
}

