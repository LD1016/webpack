x: Babel module and its' purpose

1. babel-loader: Teaches babel how to work with webpack
2. babel-core: Knows how to take in code, parse it, and generate some output files
3. babel-preset-env: Ruleset for telling babel exactly what pieces of ES2015/6/7
   syntac to look for, and how to turn it into ES5 code

x: CSS

1. css-loader: Knows how to deal with CSS imports
2. style-loader: Takes CSS imports and adds them to the HTML document

3. mini-css-extract-plugin: Create all CSS in a separate file instead of bundle.js

x: IMAGE workflow

1. Image --> (resize the image)
2. image-webpack-loader --> (is the image small?)
3. url-loader -->
   a. (is the image small?) --> include the image in bundle.js as raw
   b. (is the image big?) --> include the raw image in the output directory

X: Work flow of code splitting

1. button clicked (client)
2. System.import call (client)
3. Fetch image_viewer module (sever)
4. Reply with image_viewer (server)
5. Execute image_viewer (client)
