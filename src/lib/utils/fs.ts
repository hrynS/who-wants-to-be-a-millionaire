import fs from "fs/promises";
import path from "path";

async function loadJsonFile(filePath: string) {
    try {
        const jsonData = await fs.readFile(
            path.resolve(process.cwd(), filePath),
            'utf-8',
        );
        return JSON.parse(jsonData);
    } catch (error) {
        console.error('Failed to read JSON file:', error);
        throw error;
    }
}

export default loadJsonFile;