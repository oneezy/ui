// publish.js
import fs from 'fs';
import { execSync } from 'child_process';

// Function to read and update the package.json file
function updatePackageVersion() {
  const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

  // Parse the current version
  const versionParts = pkg.version.split('.');
  const [major, minor, patch] = versionParts.map(v => parseInt(v));

  // Increment patch version for regular releases
  pkg.version = `${major}.${minor}.${patch + 1}`;

  // Write the modified package.json back to disk
  fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2));

  return pkg.version;
}

// Update the package version and get the new version string
const newVersion = updatePackageVersion();

// Ensure we're on the main branch
execSync('git checkout main');

// Commit changes
execSync(`git add package.json`);
execSync(`git commit -m "Bump version to ${newVersion}"`);

// Create a git tag and push it
execSync(`git tag -a v${newVersion} -m "Release v${newVersion}"`);
execSync(`git push origin main`);
execSync(`git push origin v${newVersion}`);

// Publish to npm with the latest tag (default)
execSync('npm publish');