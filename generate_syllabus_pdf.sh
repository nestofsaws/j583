#!/bin/bash

# Combine linked wiki md files into syllabus where they are referenced
cat Syllabus.md | sed '/j583\/wiki\//{
    /j583\/wiki\/Instructor/r Instructor.md
    /j583\/wiki\/Instructor/d
    /j583\/wiki\/Grading-Policy/r Grading-Policy.md
    /j583\/wiki\/Grading-Policy/d
    /j583\/wiki\/Environment-Setup/r Environment-Setup.md
    /j583\/wiki\/Environment-Setup/d
}' >> temp.md

# Remove images
sed -i '/\!\[*.*\]/d' temp.md

# Generate the PDF using pandoc
pandoc temp.md -s -o full_syllabus.pdf

# Remove temp md file
rm temp.md
