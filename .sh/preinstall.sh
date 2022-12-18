#!/usr/bin/env sh

# if this script doesn't work you'll
# need to add the following line command
# in your terminal:

# chmod +x ./.sh/preinstall.sh

if [ -z "$SKIP_PREINSTALL" ]; then
  export SKIP_PREINSTALL=1
  pnpm install
fi