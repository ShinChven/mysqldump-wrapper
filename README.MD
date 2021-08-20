# Nodejs mysqldump Wrapper

> Call mysqldump in nodejs through child_process.exec.

## Requirement

`mysqldump` must be installed on your OS separately.

You can install it along with [mysql-community-client](https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/);

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
    // debug: true,
    // log: true,
}).then(() => {
    console.log('done');
});
```

## Arguments and Options 

Please see comment for type [MySQLDumpFunc](src/index.ts).

