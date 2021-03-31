const { workerData, parentPort } = require('worker_threads');

// You can do any CPU-heavy stuff here, in a synchronous way
// without blocking the "main thread"
parentPort.postMessage({ hello: workerData });
