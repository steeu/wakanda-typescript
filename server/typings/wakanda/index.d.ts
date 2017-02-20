/// <reference path="./api/directory.d.ts" />
/// <reference path="./api/datastore.d.ts" />
/// <reference path="./api/httpServer.d.ts" />
/// <reference path="./api/permissions.d.ts" />
/// <reference path="./api/solution.d.ts" />
/// <reference path="./api/user.d.ts" />
/// <reference path="./api/binarystream.d.ts" />
/// <reference path="./api/socket.d.ts" />
/// <reference path="./api/socketsync.d.ts" />
/// <reference path="./api/filesystemsync.d.ts" />
/// <reference path="./api/folder.d.ts" />
/// <reference path="./api/file.d.ts" />
/// <reference path="./api/connectionsession.d.ts" />
/// <reference path="./api/jobmanager.d.ts" />
/// <reference path="./api/progressindicator.d.ts" />
/// <reference path="./api/image.d.ts" />
/// <reference path="./api/textstream.d.ts" />
/// <reference path="./api/module.d.ts" />
/// <reference path="./api/entrysync.d.ts" />
/// <reference path="./api/sharedworker.d.ts" />
/// <reference path="./api/systemworker.d.ts" />
/// <reference path="./api/worker.d.ts" />
/// <reference path="./api/xmlhttprequest.d.ts" />
/// <reference path="./api/keyvaluestorage.d.ts" />
/// <reference path="./api/process.d.ts" />
/// <reference path="./api/os.d.ts" />
/// <reference path="./api/connectionsessioninfo.d.ts" />

declare var application: Application;

// declare var ds: Datastore; // TODO: how to add user data classes?
declare var ds: any;

// declare var model: Model; // TODO: how to add user data classes?
declare var model: any;

/**
 *True if the current application is defined as the solution's administration application
 */
declare var administrator: boolean;
/**
 *Console of the application
 */
declare var console: any;
/**
 *Reference to the solution's directory
 */
declare var directory: Directory;
/**
 *Reference to the application's default datastore
 */
declare var ds: any;
// declare var ds: Datastore; // TODO: how to add user data classes?
/**
 *HTTP server for the current application
 */
declare var httpServer: HttpServer;
/**
 *Name of the current application
 */
declare var name: string;
/**
 *Operating System object
 */
declare var os: OS;
/**
 *Defined permissions for the project
 */
declare var permissions: Permissions;
/**
 *Wakanda information
 */
declare var process: Process;
/**
 *HTTP session storage for the application
 */
declare var sessionStorage: KeyValueStorage;
/**
 *Current project settings
 */
declare var settings: any;
/**
 *Solution running on the server
 */
declare var solution: Solution;
/**
 *Project storage for the application
 */
declare var storage: KeyValueStorage;
/**
 *Wildcard character to use in queries (*)
 */
declare var wildchar: string;
declare var BinaryStream: BinaryStream;
declare var Blob: Blob;
declare var Buffer: Buffer;
declare var File: File;
declare var FileSystemSync: FileSystemSync;
declare var Folder: Folder;
declare var SharedWorker: SharedWorker;
declare var SystemWorker: SystemWorker;
declare var TextStream: TextStream;
declare var Worker: Worker;
declare var XMLHttpRequest: XMLHttpRequest;
/**
 *installs a request handler function on the server
 * @deprecated use httpServer.addRequestHandler()
 */
declare function addHttpRequestHandler(pattern: string, filePath: string, functionName: string): void;
/**
 *adds the remote datastore defined by params to the current project and maintains a global reference to it
 */
declare function addRemoteStore(storeName: string, params: Object): Datastore;
/**
 *starts the backup of the closed datastore defined by model and data
 */
declare function backupDataStore(model: File, data: File, settings: Object, options?: Object): File;
/**
 *cancels the timerID scheduler previously set by the setInterval( ) method
 */
declare function clearInterval(timerID: number): void;
/**
 *cancels the timerID timeout previously set by the setTimeout( ) method
 */
declare function clearTimeout(timerID: number): void;
/**
 *ends the thread from which it is called
 */
declare function close(): void;
/**
 *compacts the datastore's data file designated by model and data, and generates the compactedData data file.
 */
declare function compactDataStore(model: File, data: File, options?: Object, compactedData?: File): void;
/**
 *opens a new user session on the server with the properties you passed in sessionObj and sets it as the current session
 */
declare function createUserSession(sessionObj: ConnectionSessionInfo, keepPreviousSession?: boolean): void;
/**
 *returns an object identifying the current session under which the current user is actually running on the server
 * @deprecated use directory.currentSession
 */
declare function currentSession(): ConnectionSession;
/**
 *returns the user who opened the current user session on the server
 * @deprecated use directory.currentUser
 */
declare function currentUser(): User;
/**
 *converts the JavaScript date object you passed in the dateObject parameter into an ISO format string
 */
declare function dateToIso(dateObject: Date): string;
/**
 *allows you to display a system notification window on the server machine
 */
declare function displayNotification(message: string, title?: string, critical?: boolean): void;
/**
 *stops all pending wait( ) loops in the thread from which it is called
 */
declare function exitWait(): void;
/**
 *launches the garbage collector on all sleeping contexts
 */
declare function garbageCollect(): void;
/**
 *returns a valid UUID string (32 chars) that you can use for your application needs
 */
declare function generateUUID(): string;
/**
 *returns an array that lists the 20 most recent backup manifests recorded in the specified backup registry
 */
declare function getBackupRegistry(registryFolder: Folder): Array<Object>;
/**
 *returns an Object containing the default backup settings for the solution
 */
declare function getBackupSettings(): Object;
/**
 *returns the folder containing the application file (i.e., the project file with the .waProject extension)
 */
declare function getFolder(kind: string, format?: boolean): Folder;
/**
 *returns the folder containing the application file (i.e., the project file with the .waProject extension)
 */
declare function getFolder(kind: string, format?: string): Folder;
/**
 *returns the item associated with the role you passed as a parameter
 */
declare function getItemsWithRole(role: string): File;
/**
 *returns the Job Manager interface available for the application
 */
declare function getJobManager(): JobManager;
/**
 *returns information about the journal of the datastore whose data file you passed in dataFile
 */
declare function getJournalInfo(dataFile: File, options?: Object): Object;
/**
 *returns information about the journal of the datastore whose data file you passed in dataFile
 */
declare function getJournalInfo(dataFile: string, options?: Object): Object;
/**
 *returns an array that lists the 20 most recent backup manifests recorded in the backup registry default folder of the application
 */
declare function getLastBackups(): Array<Object>;
/**
 *returns the ProgressIndicator type object whose name you passed in the name parameter
 */
declare function getProgressIndicator(name: string): ProgressIndicator;
/**
 *returns the active ConnectionSession object whose ID property matches the sessionID passed in parameter
 */
declare function getSession(sessionID: string): ConnectionSession;
/**
 *returns a reference or the path to the file containing the application setting whose ID you passed in settingID
 */
declare function getSettingFile(settingID: string, kind: string, format?: boolean): File;
/**
 *returns a reference or the path to the file containing the application setting whose ID you passed in settingID
 */
declare function getSettingFile(settingID: string, kind: string, format?: string): File;
/**
 *returns the current application URL for a given protocol
 */
declare function getURL(protocol: string, secured?: boolean): string;
/**
 *returns the url passed in the parameter as an array of strings
 */
declare function getURLPath(url: string): Array<string>;
/**
 *returns in an object the contents of the url's "query string", which was passed as a parameter
 */
declare function getURLQuery(url: string): Object;
/**
 *returns an array of user sessions running on the server for the current application
 */
declare function getUserSessions(user?: User): Array<ConnectionSession>;
/**
 *returns an array of user sessions running on the server for the current application
 */
declare function getUserSessions(user?: string): Array<ConnectionSession>;
/**
 *returns Wakanda Server's "walib" folder, containing the libraries and services available client-side
 */
declare function getWalibFolder(kind: string, format?: boolean): Folder;
/**
 *returns Wakanda Server's "walib" folder, containing the libraries and services available client-side
 */
declare function getWalibFolder(kind: string, format?: string): Folder;
/**
 *import and execute any JavaScript file(s) in the current JavaScript context
 */
declare function importScripts(scriptPath: string): void;
/**
 *references a JavaScript file from a parent JavaScript file
 */
declare function include(file: File, relativePath?: string, refresh?: string): void;
/**
 *references a JavaScript file from a parent JavaScript file
 */
declare function include(file: File, relativePath?: string, refresh?: boolean): void;
/**
 *references a JavaScript file from a parent JavaScript file
 */
declare function include(file: string, relativePath?: string, refresh?: string): void;
/**
 *references a JavaScript file from a parent JavaScript file
 */
declare function include(file: string, relativePath?: string, refresh?: boolean): void;
/**
 *allows you to partially or fully integrate a journal file into a datastore
 */
declare function integrateDataStoreJournal(model: File, data: File, journal: File, options?: Object): Object;
/**
 *converts the ISO date string passed in the isoDate parameter into a standard JavaScript format
 */
declare function isoToDate(isoDate: string): Date;
/**
 *returns a JSON string converted into an XML string
 */
declare function JSONToXml(jsonText: string, jsonFormat: string, rootElement: string): string;
/**
 *loads the image stored in a file referenced by the file parameter and returns an image object
 */
declare function loadImage(file: File): Image;
/**
 *loads the image stored in a file referenced by the file parameter and returns an image object
 */
declare function loadImage(file: string): Image;
/**
 *loads the text stored in a file referenced by the file parameter and returns a string containing this text
 */
declare function loadText(file: File, charset?: number): string;
/**
 *loads the text stored in a file referenced by the file parameter and returns a string containing this text
 */
declare function loadText(file: string, charset?: number): string;
/**
 *authenticates a user by their name and key and, in case of success, opens a new user Session on the server
 */
declare function loginByKey(name: string, key: string, timeOut?: number): boolean;
/**
 *authenticates a user by their name and password and, in case of success, opens a new user session on the server
 */
declare function loginByPassword(name: string, password: string, timeOut?: number): boolean;
/**
 *logs out the user running the current session on the Wakanda server
 */
declare function logout(): boolean;
/**
 *opens the remote datastore defined by params in the current solution and returns a reference to it
 */
declare function openRemoteStore(params: Object): Datastore;
/**
 *creates a new object of type ProgressIndicator on the server and specifies its properties
 */
declare function ProgressIndicator(numElements: number, sessionName?: string, stoppable?: boolean, unused?: string, name?: string): ProgressIndicator;
/**
 *creates a new object of type ProgressIndicator on the server and specifies its properties
 */
declare function ProgressIndicator(numElements: number, sessionName?: string, stoppable?: string, unused?: string, name?: string): ProgressIndicator;
/**
 *uninstalls an existing HTTP request handler function running on the server
 * @deprecated use httpServer.removeRequestHandler()
 */
declare function removeHttpRequestHandler(pattern: string, filePath: string, functionName: string): void;
/**
 *repairs the datastore's data file defined by model and data, and generates the repairedData data file.
 */
declare function repairDataStore(model: File, data: File, options?: Object, repairedData?: File): void;
/**
 *requests a FileSystemSync object referencing a sandboxed folder or file where application data can be stored
 */
declare function requestFileSystemSync(type: number, size?: number): FileSystemSync;
/**
 *requests a FileSystemSync object referencing a sandboxed folder or file where application data can be stored
 */
declare function requestFileSystemSync(type: string, size?: number): FileSystemSync;
/**
 *returns the exported API of a CommonJS compliant Module whose identifier you pass in id
 */
declare function require(id: string): Module;
/**
 *resets the current journal of the datastore whose data file you passed in dataFile
 */
declare function resetDataStoreJournal(dataFile: File): Object;
/**
 *resets the current journal of the datastore whose data file you passed in dataFile
 */
declare function resetDataStoreJournal(dataFile: string): Object;
/**
 *allows the user to look up the filesystem for a file or directory referred to by a local url
 */
declare function resolveLocalFileSystemSyncURL(url: string): EntrySync;
/**
 *allows you to restore a data folder previously archived
 */
declare function restoreDataStore(manifest: File, restoreFolder: Folder, options?: Object): Object;
/**
 *allows you to restore a data folder previously archived
 */
declare function restoreDataStore(config: Object, options?: Object): Object;
/**
 *saves the text you passed to the textToSave parameter in the file parameter
 */
declare function saveText(textToSave: string, file: File, charset?: number): void;
/**
 *saves the text you passed to the textToSave parameter in the file parameter
 */
declare function saveText(textToSave: string, file: string, charset?: number): void;
/**
 *sets the session whose UUID is passed in sessionID as the new current session of the running thread
 */
declare function setCurrentSession(sessionID: string, forceExpire?: boolean): void;
/**
 *schedules JavaScript code to be run every timeout milliseconds
 */
declare function setInterval(handler: Function, timeout: number, ...args: any[]): number;
/**
 *to schedule JavaScript code to be executed after a given delay
 */
declare function setTimeout(handler: Function, timeout: number, ...args: any[]): number;
/**
 *verifies the internal structure of the objects contained in the datastore designated by model and data.
 */
declare function verifyDataStore(model: File, data: File, options: Object): void;
/**
 *allows a thread to handle events and to continue to exist after the complete code executes
 */
declare function wait(timeout?: number): boolean;
/**
 *returns an XML string converted into a JSON string
 */
declare function XmlToJSON(xmlText: string, jsonFormat?: string, rootElement?: string): string;