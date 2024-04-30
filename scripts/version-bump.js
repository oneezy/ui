// publish-next.js
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

// Create a git tag for the new version
execSync(`git tag -a v${newVersion} -m "Pre-release v${newVersion}"`);

// Push the tag to the repository
// execSync(`git push origin v${newVersion}`);

// Publish to npm with the "next" tag
// execSync('npm publish --tag next');
