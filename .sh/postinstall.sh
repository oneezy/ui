#!/usr/bin/env sh

# if this script doesn't work you'll
# need to add the following line command
# in your terminal:

# chmod +x ./.sh/postinstall.sh

if [ -z "$SKIP_POSTINSTALL" ]; then
  export SKIP_POSTINSTALL=1
  pnpm install
fi