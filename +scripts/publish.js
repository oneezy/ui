// publish.js
import fs from 'fs';
import { execSync } from 'child_process';

// Get current version from package.json without modifying it
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
const currentVersion = pkg.version;

console.log(`Publishing version ${currentVersion}...`);

// Ensure we're on the main branch
execSync('git checkout main');

// Publish to npm with the latest tag (default)
execSync('npm publish');