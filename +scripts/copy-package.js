import fs from 'fs';

// read file into JSON
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

// adjust pkg json for dist context - remove './dist/' prefix from exports
if (pkg.exports) {
  for (const [key, value] of Object.entries(pkg.exports)) {
    if (typeof value === 'string') {
      pkg.exports[key] = value.replace('./dist/', './');
    } else if (typeof value === 'object') {
      for (const [subKey, subValue] of Object.entries(value)) {
        if (typeof subValue === 'string') {
          value[subKey] = subValue.replace('./dist/', './');
        }
      }
      // Add default export condition for Node.js compatibility
      if (key === '.' && !value.default) {
        value.default = value.svelte || value.types;
      }
    }
  }
}

// write it to your output directory
fs.writeFileSync(
  './dist/package.json', // path to your output directory may vary
  JSON.stringify(pkg, null, 2)
);