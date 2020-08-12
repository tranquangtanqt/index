# Edit angular.json

edit `"outputPath": "docs/"`

# Deploy
`git pull origin master --allow-unrelated-histories`

`git remote add origin https://github.com/tranquangtanqt/index.git`

`ng build --prod --baseHref="https://tranquangtanqt.github.io/index/"`

`git add`

`git commit -m "commit"`

`git push -u origin master`