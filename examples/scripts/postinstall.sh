#!/bin/sh
packages=(ani gen gfx io math phy utils)

for i in "${packages[@]}"
do
   :
   echo "Installing ${i}..."
   yarn --cwd ../${i}
done