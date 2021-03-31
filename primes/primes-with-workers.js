'use strict';

const { isMainThread, parentPort, workerData } = require('worker_threads');
const generatePrimes = require('./generate-primes');
const getThreads = require('./get-threads');

const min = 2;
const max = 1e7;

if (isMainThread) {
    const threadCount = +process.argv[2] || 2;
    console.log(`Running with ${threadCount} threads...`);
    const threads = getThreads(threadCount, min, max);

    let primes = [];

    for (let worker of threads) {
        worker.on('error', (err) => { throw err; });
        worker.on('exit', () => {
            threads.delete(worker);
            console.log(`Thread exiting, ${threads.size} running...`);
            if (threads.size === 0) {
                console.log(primes.join('\n'));
            }
        })
        worker.on('message', (msg) => {
            primes = primes.concat(msg);
        });
    }
} else {
    const primes = generatePrimes(workerData.start, workerData.range);
    parentPort.postMessage(primes);
}
