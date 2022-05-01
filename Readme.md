Aufbau einer elcetron + React App:

1. In das gewünschte Verzeichnis navigieren, in dem das Projekt angelegt werden soll.
2. VS Code öffnen und das gewünschte Verzeichnis öffnen.
3. "npm init -y" im Terminal ausführen.
4. main.js erstellen. Danach in der package.json unter der Eigenschaft "main" den Wert index.js in main.js ändern.
5. "npm insatll --save electron" im Terminal ausführen.
6. In der package.json unter der Eigenschaft "scripts" die Option "start" mit dem Wert "electron ." anlegen. 


npm install --save react react-dom
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader style-loader sass-loader sass webpack webpack-cli 