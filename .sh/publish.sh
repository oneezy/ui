#!/bin/bash

# Bump npm version and create git tag with the new version
npm version

# Add all changes to git
git add .

# Commit the changes with the message "Updated version"
git commit -m "Updated version"

# Push the changes to the remote repository
# git push

# Change directory to package
cd package

# Publish the package to npm with public accesss
# npm publish --access public

# Change directory to root
cd ..