import { execSync } from 'child_process';
import fs from 'fs';

function removeTag(tagName) {
  console.log(`Removing tag '${tagName}' locally and remotely...`);

  // Delete the local tag
  execSync(`git tag -d ${tagName}`);
  console.log(`Local tag '${tagName}' removed.`);

  // Check if the tag exists on the remote
  const remoteTags = execSync('git ls-remote --tags origin').toString();

  if (remoteTags.includes(`refs/tags/${tagName}`)) {
    // Delete the remote tag
    execSync(`git push origin --delete ${tagName}`);
    console.log(`Remote tag '${tagName}' removed.`);
  } else {
    console.log(`Tag '${tagName}' not found on the remote repository.`);
  }

  // Revert the `package.json` to its previous state
  execSync(`git checkout HEAD~1 package.json`);
  console.log(`Reverted package.json to the previous version.`);
}

// Check for a tag name argument
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Please provide a tag name to remove.");
  process.exit(1);
}

// Call the removeTag function with the provided tag name
removeTag(args[0]);
