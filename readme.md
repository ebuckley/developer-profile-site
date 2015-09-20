#CV module

#Usage

To build the project you will need NodeJS and Gulp installed. The entire thing is static so you will need some way of serving the built artifacts. All the artifacts are built into the `./dist` folder.

```
npm install -g gulp
npm install
gulp build

cd dist && python3 -m http.server
```

#Implementing your own CV

Take a look at cv.js
this is the location where