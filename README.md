# Sao generator prototypes

Based on https://github.com/egoist/poi/tree/master/create-poi-app

Uses [SAO v1.6](https://github.com/saojs/sao) to generate a project

Install dependencies
```bash
yarn
```

Create a project
```bash
node ./bin/cli.js my-app
```

The folder `generator` contains the project generator. It uses one base template and update the files based on the
selected options.

The folder `generator-two-templates` contains another project generator that uses two base templates. One for javascript
and one for typescript. To use it, update the generator parameter of sao in `bin/cli.js`.

Explore some other usage examples in the `generator-example` folder
