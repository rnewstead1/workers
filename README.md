# Worker thread examples in Node.js

Run with node 12

## Simple example
From the project root run:
```bash
node index.js
```

## Prime number generation
For an example generating prime numbers between two and ten million:

Pre-requisites: install gnutime via Homebrew:
```bash
brew install gnutime
```

Run the primes with a different number of threads to see the performance for each.

From the `primes` directory:

Without workers:
```bash
gtime -p node primes-no-workers.js
```

With workers:
```
gtime -p node primes-with-workers.js N
```

Where `N` is the number of threads to use (will default to 2 if you don't pass anything).

For a better test of time, replace the printing of all the primes to the console with `console.log('done')` as the printing to the console is expensive with these fine margins!
