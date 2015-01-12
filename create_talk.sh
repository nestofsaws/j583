#!/bin/bash

if [ -z $1 ]; then
    echo "Usage: Must provide a single argument for the title of the talk directory"
    exit 1
fi

mkdir $1 || {
    echo "A talk with that name exists. Stopping here"
    exit 2
}

cp assets/template.html $1/index.html
sed -i 's/<title><\/title>/<title>'$1'<\/title>/' $1/index.html
touch $1/slides.mkd
echo "Created new talk at $1"
