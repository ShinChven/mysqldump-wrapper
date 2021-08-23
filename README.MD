# Nodejs mysqldump Wrapper

> Call mysqldump in nodejs through child_process.exec.

[![npm version](http://img.shields.io/npm/v/mysqldump-wrapper.svg)](https://npmjs.org/package/mysqldump-wrapper)
[![npm download](https://img.shields.io/npm/dy/mysqldump-wrapper)](https://npmjs.org/package/mysqldump-wrapper)

## Requirement

`mysqldump` must be installed on your OS separately.

You can install it along with [mysql-community-client](https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/);

`gzip` must be installed on your OS separately, if your want to compress the result file.

## Usage

```TypeScript
import mysqldump from 'mysqldump-wrapper';
import path from 'path';

mysqldump({
    database: 'schema_name',
    host: '127.0.0.1',
    password: 'your_database_password',
    port: 3306,
    resultFile: '/output/path/dump.sql',
    user: 'username',
    // compress: true, // gzip the result file, gzip must be installed on your system.
    // runDry: true,   // test, print mysqldump command only, will not dump
    // log: true       // show log
}).then(() => {
    console.log('done');
});
```

## Arguments and Options 

Please see comment for type [MySQLDumpFunc](src/index.ts).

