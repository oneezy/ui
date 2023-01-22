#!/bin/bash

# Bump npm version and create git tag with the new version
npm version patch

# Add all changes to git
git add .

# Commit the changes with the message "Updated version"
git commit -m "Updated version"

# Push the changes to the remote repository
git push

# Build package.
pnpm package

# Change directory to packagez
cd package

# Publish the package to npm with public accesss
npm publish --access public

# Change directory to root
cd ..

# STEPS
###################################################
# - pnpm version patch
# - pnpm package
# - cd package
# - pnpm publish --access public
# - cd ..
# - git add .
# - git commit -m "chore: updated package"
# - git push