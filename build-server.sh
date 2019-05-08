#!/bin/bash

REPODIR=~/dev/modern-fullstack-subproj/minimal-express-server

DESTDIR=~/dev/modern-fullstack-subproj/app


if [ -d "$DESTDIR" ]; then
  rm -rf $DESTDIR
fi

mkdir $DESTDIR

npm run build
mv $REPODIR/dist/* $DESTDIR
# mv /home/klequis/dev/modern-fullstack-subproj/minimal-express-server/dist/* ../../app/
