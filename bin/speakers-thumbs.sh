#!/bin/sh

SOURCE='img/speakers'
SOURCE_DIR='orig'
DEST_DIR='150'
CD=`pwd`

for file in `ls $SOURCE/$SOURCE_DIR`; do
  convert $SOURCE/$SOURCE_DIR/$file -thumbnail 150x150^ -gravity center -extent 150x150 -format jpg -quality 85 $SOURCE/$DEST_DIR/$file
done;