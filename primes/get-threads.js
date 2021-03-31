const { Worker } = require('worker_threads');

module.exports = (threadCount, min, max) => {
    const threads = new Set();
    const range = Math.ceil((max - min) / threadCount);

    let start = min;
    for (let i = 1; i <= threadCount; i++) {
        const threadStart = start;
        if (i === threadCount) {
            const rangeToReachMax = range + ((max - min + 1) % threadCount);
            threads.add(new Worker('./primes-with-workers.js', {workerData: {start: threadStart, range: rangeToReachMax}}));
        } else {
            threads.add(new Worker('./primes-with-workers.js', {workerData: {start: threadStart, range}}));
            start += range;
        }
    }

    return threads;
}
