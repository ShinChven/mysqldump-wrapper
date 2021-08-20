import {exec} from 'child_process';

type MySQLDumpFunc = (args: {
    /**
     * mysqldump bin path or command name, use "mysqldump" command by default.
     */
    mysqldumpPath?: string;
    /**
     * database or schema name to dump
     */
    database: string;
    /**
     * Output file path
     */
    resultFile: string;
    /**
     * MySQL connection host
     */
    host: string;
    /**
     * MySQL connection port
     */
    port: number;
    /**
     * MySQL connection user
     */
    user: string;
    /**
     * MySQL connection password
     */
    password: string;

    /**
     * disable multi-row insert
     * --skip-extended-insert
     */
    skipExtendedInsert?: boolean;
    /**
     * MySQL create table options
     * --skip-create-options
     */
    skipCreateOptions?: boolean;
    /**
     * Add drop table to script.
     * --skip-add-drop-table
     */
    skipAddDropTable?: boolean;
    /**
     * Skip lock tables
     * --skip-lock-tables
     */
    skipLockTables?: boolean;
    /**
     * Skip disable keys
     * --skip-disable-keys
     */
    skipDisableKeys?: boolean;
    /**
     * Skip add locks
     * --skip-add-locks
     */
    skipAddLocks?: boolean;
    /**
     * Delayed insert
     * --delayed-insert
     */
    delayedInsert?: boolean;
    /**
     * Add drop trigger
     * --add-drop-trigger
     */
    addDropTrigger?: boolean; //
    /**
     * Insert data line by line.
     * --complete-insert
     */
    completeInsert?: boolean;
    /**
     * Debug the command.
     */
    runDry?: boolean;
    /**
     * Print child_process.exec 's stdout and stderr
     */
    log?: boolean;
}) => Promise<void>;

/**
 * Call `mysqldump` from JavaScript.
 * @param args
 */
const mysqldump: MySQLDumpFunc = (args) => {
    const {
        mysqldumpPath = 'mysqldump',
        database,
        resultFile,
        host,
        port,
        user,
        password,
        skipExtendedInsert,
        skipCreateOptions = true,
        skipAddDropTable = true,
        skipLockTables,
        skipDisableKeys,
        skipAddLocks,
        delayedInsert,
        addDropTrigger,
        completeInsert,
        runDry,
        log,
    } = args
    const commands: Array<string> = [
        mysqldumpPath,
        `"${database}"`,
        `--result-file="${resultFile}"`,
        `--host="${host}"`,
        `--port=${port}`,
        `--user="${user}"`,
        `--password="${password}"`,
    ];

    if (skipExtendedInsert) {
        commands.push('--skip-extended-insert');
    }

    if (skipCreateOptions) {
        commands.push('--skip-create-options');
    } else {
        commands.push('--create-options');
    }

    if (skipAddDropTable) {
        commands.push('--skip-add-drop-table');
    } else {
        commands.push('--add-drop-table');
    }

    if (skipLockTables) {
        commands.push('--skip-lock-tables');
    }

    if (skipDisableKeys) {
        commands.push('--skip-disable-keys');
    }

    if (skipAddLocks) {
        commands.push('--skip-add-locks');
    }

    if (delayedInsert) {
        commands.push('--delayed-insert');
    }

    if (addDropTrigger) {
        commands.push('--add-drop-trigger');
    }

    if (completeInsert) {
        commands.push('--complete-insert');
    }

    return new Promise((resolve, reject) => {
        const command = commands.join(' ');
        if (runDry) {
            console.log(command);
            resolve();
        } else {
            const child = exec(command, (err, stdout, stderr) => {
                if (err) {
                    reject(err);
                    if (log) {
                        console.error(stderr);
                    }
                    return;
                }
                if (log) {
                    console.log(stdout);
                }
                resolve();
            });
            child?.stdin?.write(password);
        }
    });
}

export default mysqldump;
