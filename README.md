# mvp-buggy-lib-schematics

This is a repo with an example schematics based on NX workspace schematics that demonstrates an error happening when the schematics is installed in `node_modules`.

Clone the Custom NX Starterkit based on the NX workspace:
```
git clone https://github.com/adrianbarwicki/mvp-buggy-starterkit
```

This starterkit already contains a buggy schematics, that only extends the default NX one. You can find its code here:
```
https://github.com/adrianbarwicki/mvp-buggy-lib-schematics
```

Install npm packages:
```
cd mvp-buggy-lib-schematics
npm i
```

Then, run the schematics with
```
ng g mvp-buggy-lib-schematics:mvp-buggy-lib
```

After filling out the required params for the schematics (="name"), you will see the following error:
```
Cannot read property 'schematics' of undefined
```

Further debugging shows that the problems lie exactly here:
https://github.com/adrianbarwicki/mvp-buggy-lib-schematics/blob/master/mvp-buggy-lib-schematics/index.js#L16

which is `@nrwl/schematics`.
