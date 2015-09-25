#Data driven developer profile
This is a simple site intended to showcase developer experience by presenting the organizations and projects that you have worked on. The idea is that the whole thing is driven by data and anyone who wants to provide their own content can fork this and implement their own version.

#Usage

To build the project you will need NodeJS and Gulp installed. The entire thing is static so you will need some way of serving the built artifacts. All the artifacts are built into the `./dist` folder.

```
npm install -g gulp
npm install
gulp build

cd dist && python3 -m http.server
```

#Implementing your own CV

Take a look at cv.js, extend this with your own projects, organization and experience. The only template here is index.html, extend it as neccesary. Styles are under the less directory they will be compiled into `dist/css`. All of the JS assets will be concatted, uglified based on the require dependency graph from `index.js` as the root file.

#Tests
Yea, they exist, checkout karma.conf.js if you want to add a more generic glob for having more test files, currently coz the scope of this is so small I have decided to just implement everything in tests.js.

```
#From any sub directory  of the project run the following
$ npm test
```
