#!/bin/bash

source create_talk.sh $2
mkdir $2/images
python to_markdown.py $1 > $2/slides.mkd

mkdir `dirname $1`/temp
cp $1 `dirname $1`/temp/temp.zip
pushd `dirname $1`/temp
unzip temp.zip
cp ppt/media/* ../../$2/images/
cd ..
rm -r temp
cd ..
