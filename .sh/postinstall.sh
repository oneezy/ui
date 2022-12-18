#!/usr/bin/env sh


# package.json
#########################################################
# "preinstall": "pnpm exec ./.sh/preinstall.sh",
# "install": "pnpm package:build",
# "postinstall": "pnpm exec ./.sh/postinstall.sh",


# terminal
#########################################################
# if this script doesn't work you'll
# need to add the following line command
# in your terminal:

# chmod +x ./.sh/postinstall.sh

if [ -z "$SKIP_POSTINSTALL" ]; then
  export SKIP_POSTINSTALL=1
  pnpm install
fi