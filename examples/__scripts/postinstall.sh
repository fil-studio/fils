#!/bin/sh
packages=(ani gen gfx io math phy scroller utils)

for i in "${packages[@]}"
do
   :
   echo "Installing ${i}..."
   yarn --cwd ../${i}
done