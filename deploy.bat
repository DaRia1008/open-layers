cd ./dist
echo "" > .nojekyll 
git init
git checkout -B master 
git add -A 
git commit -m "latest site deloy"
git push -f https://github.com/DaRia1008/open-layers.git master:ghpages
cd ..