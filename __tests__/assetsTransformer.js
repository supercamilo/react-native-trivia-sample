// @flow

import path from 'path';

// eslint-disable-next-line no-unused-vars, import/prefer-default-export
export function process(src, filename, config, options): any {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
}
