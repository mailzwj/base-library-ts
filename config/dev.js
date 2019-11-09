const path = require('path');
const base = require('./base');

base.mode = 'development'; // production
base.entry = {
    'index': path.join(__dirname, '../src/index.tsx')
};
base.output.library = 'LibraryName';
base.output.libraryTarget = 'umd';

module.exports = base;
