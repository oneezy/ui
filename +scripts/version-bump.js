import fs from 'fs';
import { execSync } from 'child_process';

// Function to read and update the package.json file
function updatePackageVersion() {
    const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

    // Extract version information
    const versionParts = pkg.version.split('-');
    const [mainVersion, preRelease] = versionParts;

    // Determine the current pre-release number
    let nextPreRelease = 0;
    if (preRelease) {
        const [label, num] = preRelease.split('.');
        if (label === 'next') {
            nextPreRelease = parseInt(num) + 1;
        }
    }

    // Set the new version
    pkg.version = `${mainVersion}-next.${nextPreRelease}`;

    // Write the modified package.json back to disk
    fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2));

    return pkg.version;
}

// Update the package version and get the new version string
const newVersion = updatePackageVersion();

// Check if we're on the `next` branch and switch if needed
execSync('git checkout next');

// Commit changes
execSync(`git add package.json`);
execSync(`git commit -m "Bump version to ${newVersion}"`);

// Create a git tag and push it
execSync(`git tag -a v${newVersion} -m "Pre-release v${newVersion}"`);

// Push changes to GitHub
execSync(`git push origin next`); 