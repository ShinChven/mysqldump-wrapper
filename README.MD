

# mysqldump-wrapper

A Node.js program to call `mysqldump` for exporting MySQL databases.

[![npm version](http://img.shields.io/npm/v/mysqldump-wrapper.svg)](https://npmjs.org/package/mysqldump-wrapper)
[![npm download](https://img.shields.io/npm/dy/mysqldump-wrapper)](https://npmjs.org/package/mysqldump-wrapper)

## Table of Contents

- [mysqldump-wrapper](#mysqldump-wrapper)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Options](#options)
  - [Examples](#examples)
    - [Basic Usage](#basic-usage)
    - [Custom Options](#custom-options)
  - [License](#license)

## Installation

Before using this package, make sure you have the MySQL client (`mysql-client`) installed on your operating system.

Then, install this package using npm:

```bash
npm install mysqldump-wrapper
```

## Usage

```TypeScript
import mysqldump from 'mysqldump-wrapper';

const args = {
  database: 'your_database_name',
  resultFile: 'dump.sql',
  host: 'localhost',
  port: 3306,
  user: 'your_username',
  password: 'your_password',
  // ...other options
};

(async () => {
  try {
    await mysqldump(args);
    console.log('Database dumped successfully.');
  } catch (error) {
    console.error('Error dumping the database:', error);
  }
})();
```

## Options

When using the `mysqldump` function in your Node.js program, you can specify various options to customize the behavior of the MySQL database dump. Here's an explanation of each available option:

- `database` (string, required): The name of the database you want to dump.

- `resultFile` (string, required): The path where the SQL dump will be saved.

- `host` (string, required): The MySQL host where your database is located.

- `port` (number, required): The MySQL port to use for the connection.

- `user` (string, required): Your MySQL username for authentication.

- `password` (string, required): Your MySQL password for authentication.

- `skipExtendedInsert` (boolean, optional): If set to `true`, multi-row inserts are disabled. This can be useful for creating more human-readable SQL dumps. The default is `false`.

- `skipCreateOptions` (boolean, optional): If set to `true`, it skips adding MySQL create table options in the SQL dump. The default is `true`.

- `skipAddDropTable` (boolean, optional): If set to `true`, it skips adding the "DROP TABLE" statements to the SQL dump. The default is `true`.

- `skipLockTables` (boolean, optional): If set to `true`, it skips locking tables during the dump. The default behavior depends on your MySQL configuration.

- `skipDisableKeys` (boolean, optional): If set to `true`, it skips disabling keys during the dump. The default behavior depends on your MySQL configuration.

- `skipAddLocks` (boolean, optional): If set to `true`, it skips adding lock statements during the dump. The default behavior depends on your MySQL configuration.

- `delayedInsert` (boolean, optional): If set to `true`, it uses delayed inserts in the SQL dump. The default is `false`.

- `addDropTrigger` (boolean, optional): If set to `true`, it includes "DROP TRIGGER" statements in the SQL dump. The default is `false`.

- `completeInsert` (boolean, optional): If set to `true`, it inserts data line by line, which can make the SQL dump more human-readable. The default is `false`.

- `compress` (boolean, optional): If set to `true`, the resulting SQL file is compressed using Gzip. This can save disk space. The default is `false`.

- `runDry` (boolean, optional): If set to `true`, the command will not be executed, but instead, it will be printed to the console. Useful for debugging. The default is `false`.

- `log` (boolean, optional): If set to `true`, the standard output and error streams of the `mysqldump` process will be logged to the console. The default is `false`.

- `tables` (string[], optional): An array of table names to be included in the dump. If not specified, all tables in the database are included.

- `noData` (boolean, optional): If set to `true`, it only dumps the table structure without the data. The default is `false`.

- `routines` (boolean, optional): If set to `true`, it includes stored routines (procedures and functions) in the SQL dump. The default is `false`.

- `triggers` (boolean, optional): If set to `true`, it includes triggers in the SQL dump. The default is `false`.

- `events` (boolean, optional): If set to `true`, it includes events in the SQL dump. The default is `false`.

- `where` (string, optional): Allows you to specify a WHERE clause to filter rows during the dump.

- `singleTransaction` (boolean, optional): If set to `true`, it dumps all tables in a single transaction, ensuring data consistency. The default is `false`.

- `hexBlob` (boolean, optional): If set to `true`, it dumps binary strings in hexadecimal format. The default is `false`.

- `ignoreTable` (string[], optional): An array of table names to be ignored during the dump. Tables specified here will not be included in the SQL dump.

- `compact` (boolean, optional): If set to `true`, it generates a less verbose SQL output. The default is `false`.

- `skipComments` (boolean, optional): If set to `true`, it skips adding comments in the output SQL file. The default is `false`.

Feel free to customize these options according to your specific database dump requirements when using the `mysqldump` function in your Node.js application.

## Examples

### Basic Usage

Dump a MySQL database with default options:

```TypeScript
const args = {
  database: 'mydb',
  resultFile: 'dump.sql',
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
};

await mysqldump(args);
```

### Custom Options

Dump a database with custom options:

```TypeScript
const args = {
  database: 'mydb',
  resultFile: 'dump.sql',
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  skipCreateOptions: true,
  skipAddDropTable: false,
  completeInsert: true,
  compress: true,
};

await mysqldump(args);
```

For more advanced usage and available options, refer to the official `mysqldump` documentation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
