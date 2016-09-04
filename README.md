# lcg
Fast and simple Pseudo Random Number Generator

This PRNG is based on the Linear Congruential Generator algorithm, using parameters from the Numerical Recipes book. 

Reference: 

https://en.wikipedia.org/wiki/Linear_congruential_generator

Be aware that it is not a high quality PRNG and is not cryptographically safe. It was written for educational purposes.

See:

https://www.youtube.com/user/codingmath

That said, if you understand its limitations, it's perfectly usable. In fact, the Java `Random` class is based on this same algorithm with different parameters.

https://docs.oracle.com/javase/7/docs/api/java/util/Random.html

