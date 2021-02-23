var store = [{
        "title": "Section 1.1",
        "excerpt":"Knuth introduces the definition of an algorithm, which apparently wasn’t a common term. Apparently it was most commonly associated with Euclid’s algorithm which is the case study for the chapter. Good quote: “An algorithm must be seen to be believed” Knuth says you have to work out an algorithm with...","categories": ["taobataocp"],
        "tags": [],
        "url": "/taobataocp/taobataocp/2020/12/08/section-1.1.html"
      },{
        "title": "Section 1.2 (induction)",
        "excerpt":"This section is mostly about proof by induction and how it can be used to prove algorithm correctness. Again, we look at Euclid’s algorithm (the extended version this time). Some highlights: Knuth formulates “proof by induction” as an algorithm which tracks with how I learned about it in my discrete...","categories": ["taobataocp"],
        "tags": [],
        "url": "/taobataocp/taobataocp/2020/12/08/section-1.2.html"
      },{
        "title": "section-1.2.2",
        "excerpt":"This section talks about real numbers, roots, and logs. Honestly it wasn’t that interesting. ","categories": ["taobataocp"],
        "tags": [],
        "url": "/taobataocp/taobataocp/2020/12/10/section-1.2.2.html"
      },{
        "title": "section-1.2.3",
        "excerpt":"This section is about how to manipulate sums. Knuth covers the standard rules: distributive law, change of variables, reordering sums, and splitting/joining the domain. A couple of highlights were a formula for changing the relations (basiaclly an implicit definition of the sum’s domain) when you reorder the summations. Basically sum_R(i)...","categories": ["taobataocp"],
        "tags": [],
        "url": "/taobataocp/taobataocp/2020/12/15/section-1.2.3.html"
      },{
        "title": "sections 1.2.4 and 5",
        "excerpt":"Section 1.2.4 is about some some basic number theory stuff. It introduces floor/ceiling functinos and the laws of modular arithmetic. The definition of modulo he uses is the one I like best where -1 % N == N - 1 which is most useful for array wraparound. The modular arithmetic...","categories": ["taobataocp"],
        "tags": [],
        "url": "/taobataocp/taobataocp/2020/12/17/sections-1.2.4-and-5.html"
      },{
        "title": "section-1.2.6",
        "excerpt":"This section is about binomial coefficients and their identities. It’s the longest section by far so far and my eyes glazed over. There was one explanation of an identity that caught my attention: r + s choose n means “choose n people from r men and s women” which is...","categories": ["taobataocp"],
        "tags": [],
        "url": "/taobataocp/taobataocp/2020/12/18/section-1.2.6.html"
      },{
        "title": "section-1.2.7",
        "excerpt":"This section is about the harmonic numbers (sum_k 1/k). There’s an interesting formula for H_n which is natural log of n + some small fudge factor terms. I remember proving that the harmonic series diverges by computing the integral of 1/x in calc class, but don’t remember hearing the connection...","categories": ["taobataocp"],
        "tags": [],
        "url": "/taobataocp/taobataocp/2020/12/29/section-1.2.7.html"
      },{
        "title": "section-1.2.8",
        "excerpt":"This section is about Fibonacci numbers. There’s a long discussion of the relationship between Fibonacci numbers and Euclid’s algorithm with a proof that gcd(F_m, F_n) = F_gcd(m_n) which is sort of interesting. Then he uses a generating function to come up with a closed form formula for F_n using phi....","categories": ["taobataocp"],
        "tags": [],
        "url": "/taobataocp/taobataocp/2020/12/30/section-1.2.8.html"
      },{
        "title": "section-1.2.9",
        "excerpt":"This section is about generating functions which take a sequence and turn it into a function. The most interesting nugget piece was talking about how it doesn’t really matter if the generating function converges. You use them as a tool to get some insight into understanding a sequence and once...","categories": ["taobataocp"],
        "tags": [],
        "url": "/taobataocp/taobataocp/2021/01/01/section-1.2.9.html"
      },{
        "title": "section-1.2.10",
        "excerpt":"This section is a doozy. The first chunk is about analyzing the running time of a simple algorithm to find the max of an array. For some reason, he iterates through the array backwards, maybe so that the termination check is k==0 which is “nice?” Also, the algorithm is written...","categories": ["taobataocp"],
        "tags": [],
        "url": "/taobataocp/taobataocp/2021/01/02/section-1.2.10.html"
      },{
        "title": "section-1.2.11",
        "excerpt":"This section is about big O notation. It’s more or less the standard intro you’d get in a ugrad algorithms class. What’s very interesting to me is that it’s marked as a “skip the first time you read this” section because “it covers a rather specialized topic that is interesting...","categories": ["taobataocp"],
        "tags": [],
        "url": "/taobataocp/taobataocp/2021/01/15/section-1.2.11.html"
      },{
        "title": "section-1.2.11.2And3",
        "excerpt":"The first subsection talks about an approximation due to Euler for computing sums using integrals. The Bernulli polynomials/coefficients make an appearance here. There’s lots of integral and summation manipulation that takes place here. I mostly skimmed this section. The one interesting piece was that at one point, we have to...","categories": ["taobataocp"],
        "tags": [],
        "url": "/taobataocp/taobataocp/2021/01/17/section-1.2.11.2And3.html"
      },{
        "title": "section-1.3.1",
        "excerpt":"Finally we get to MIX. There’s a note in my edition, which I think was from 1997, that MIX is woefully out of date and will be replaced by MMIX (2009) which will be a normal-seeming 64 bit machine. Apparently a revised volume 1 came out in 2005 which uses...","categories": ["taobataocp"],
        "tags": [],
        "url": "/taobataocp/taobataocp/2021/01/27/section-1.3.1.html"
      },{
        "title": "section-1.3.2",
        "excerpt":"This section is about MIX Assembly Language (MIXAL)… It seemed to age even worse to me than the MIX architecture. I realized through an example in this section that the call stack wasn’t a normal thing, or at least MIX doesn’t have call/ret instructions. On a jump, the PC +1...","categories": ["taobataocp"],
        "tags": [],
        "url": "/taobataocp/taobataocp/2021/01/28/section-1.3.2.html"
      },{
        "title": "section-1.3.3",
        "excerpt":"This section talks about permutations. The key parts are 2 algorithms for permutation composition (Knuth calls it multiplication). One algorithm is pretty human-like with repeated scans over the input, and the other is single pass and more “machine like.” There’s assembly code for both which has passing resemblance to modern...","categories": ["taobataocp"],
        "tags": [],
        "url": "/taobataocp/taobataocp/2021/02/23/section-1.3.3.html"
      }]
