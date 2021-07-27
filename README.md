# Demo for Jest tests on node files

To run the tests, do:


```
npm install
```

```
npm test -- --coverage

> node-comparisons@1.0.0 test
> jest "--coverage"

 PASS  __tests__/index.test.js
  ✓ compare 1 (1 ms)
  ✓ compare Hello
  ✓ compare Jello

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |                   
 index.js |     100 |      100 |     100 |     100 |                   
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.267 s, estimated 1 s
Ran all test suites.
```
