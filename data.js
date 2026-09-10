window.PATTERN_DATA = {
  "techniques": [
    "BINARY SEARCH",
    "SORTING & GREEDY",
    "TWO POINTERS",
    "PREFIX SUMS & DIFFERENCE ARRAYS",
    "HASH TABLES & MAPS",
    "HEAPS & PRIORITY QUEUES",
    "DYNAMIC PROGRAMMING",
    "GRAPHS - BFS & DFS",
    "DISJOINT SET UNION",
    "FENWICK TREE",
    "SEGMENT TREE & LAZY PROPAGATION"
  ],
  "metadata": {
    "BINARY SEARCH": {
      "summary": "Recognize sorted/search-space problems and boundary or answer-search patterns.",
      "signals": [
        "Sorted array",
        "Find minimum/maximum feasible value",
        "Monotonic answer space",
        "First/last valid position"
      ],
      "complexity": "Usually O(log n) per search"
    },
    "SORTING": {
      "summary": "Use ordering to expose greedy choices, intervals, duplicates, or structural relationships.",
      "signals": [
        "Ordering matters",
        "Intervals overlap",
        "Need smallest/largest next",
        "Greedy after sorting"
      ],
      "complexity": "Usually O(n log n) for sorting"
    },
    "TWO POINTERS": {
      "summary": "Move two indices through an ordered or constrained sequence instead of nested loops.",
      "signals": [
        "Pair/triplet",
        "Sorted input",
        "Opposite ends",
        "Slow/fast traversal"
      ],
      "complexity": "Often O(n)"
    },
    "PREFIX SUM": {
      "summary": "Precompute cumulative information so repeated range queries become constant-time.",
      "signals": [
        "Many range sums",
        "Subarray sum",
        "Cumulative frequency",
        "Rectangle/grid ranges"
      ],
      "complexity": "O(n) preprocessing, often O(1) query"
    },
    "HASH TABLES": {
      "summary": "Trade memory for fast lookup, counting, grouping, and complement detection.",
      "signals": [
        "Frequency",
        "Seen before",
        "Complement",
        "Grouping by key"
      ],
      "complexity": "Average O(1) lookup"
    },
    "HEAPS / PRIORITY QUEUES": {
      "summary": "Maintain the current minimum/maximum while repeatedly selecting the next best item.",
      "signals": [
        "Top K",
        "Repeated min/max",
        "Scheduling",
        "Streaming median"
      ],
      "complexity": "Typically O(log n) per heap update"
    },
    "DYNAMIC PROGRAMMING": {
      "summary": "Break optimization/counting problems into overlapping subproblems with reusable states.",
      "signals": [
        "Choose/take or skip",
        "Minimum/maximum",
        "Count ways",
        "Overlapping subproblems"
      ],
      "complexity": "Depends on state count and transition"
    },
    "GRAPHS - BFS & DFS": {
      "summary": "Model relationships, connectivity, reachability, shortest unweighted paths, and traversal.",
      "signals": [
        "Nodes/edges",
        "Reachability",
        "Connected components",
        "Shortest unweighted path"
      ],
      "complexity": "Usually O(V + E)"
    },
    "DISJOINT SET UNION": {
      "summary": "Maintain dynamic connectivity and merge components efficiently.",
      "signals": [
        "Merge groups",
        "Connected components",
        "Cycle detection",
        "Connectivity after unions"
      ],
      "complexity": "Near O(1) amortized per union/find"
    },
    "FENWICK TREE": {
      "summary": "Support point updates and prefix/range aggregate queries efficiently.",
      "signals": [
        "Dynamic prefix sums",
        "Rank/count queries",
        "Inversions",
        "Point update + range query"
      ],
      "complexity": "O(log n) update/query"
    },
    "SEGMENT TREE & LAZY PROPAGATION": {
      "summary": "Handle dynamic range queries and range updates when prefix structures are insufficient.",
      "signals": [
        "Range query",
        "Range update",
        "Dynamic intervals",
        "Need associative aggregate"
      ],
      "complexity": "Typically O(log n) query/update"
    },
    "DIJKSTRA & WEIGHTED GRAPHS": {
      "summary": "Find shortest paths when graph edges have non-negative weights or related path costs.",
      "signals": [
        "Weighted edges",
        "Minimum cost",
        "Shortest path",
        "Path probability/effort variants"
      ],
      "complexity": "Typically O((V + E) log V) with a heap"
    },
    "SORTING & GREEDY": {
      "summary": "Practice and recognize patterns in Sorting & Greedy.",
      "signals": [],
      "complexity": "See individual pattern/problem"
    },
    "PREFIX SUMS & DIFFERENCE ARRAYS": {
      "summary": "Practice and recognize patterns in Prefix Sums & Difference Arrays.",
      "signals": [],
      "complexity": "See individual pattern/problem"
    },
    "HASH TABLES & MAPS": {
      "summary": "Practice and recognize patterns in Hash Tables & Maps.",
      "signals": [],
      "complexity": "See individual pattern/problem"
    },
    "HEAPS & PRIORITY QUEUES": {
      "summary": "Practice and recognize patterns in Heaps & Priority Queues.",
      "signals": [],
      "complexity": "See individual pattern/problem"
    }
  },
  "problems": [
    {
      "id": 704,
      "title": "Binary Search",
      "difficulty": "Easy",
      "pattern": "Find target in sorted array",
      "link": "https://leetcode.com/problems/binary-search/description/",
      "technique": "BINARY SEARCH"
    },
    {
      "id": 35,
      "title": "Search Insert Position",
      "difficulty": "Easy",
      "pattern": "Find insert position in sorted array",
      "link": "https://leetcode.com/problems/search-insert-position/description/",
      "technique": "BINARY SEARCH"
    },
    {
      "id": 278,
      "title": "First Bad Version",
      "difficulty": "Easy",
      "pattern": "Binary search on answer (find boundary)",
      "link": "https://leetcode.com/problems/first-bad-version/description/",
      "technique": "BINARY SEARCH"
    },
    {
      "id": 34,
      "title": "Find First and Last Position",
      "difficulty": "Medium",
      "pattern": "Find range in sorted array",
      "link": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/",
      "technique": "BINARY SEARCH"
    },
    {
      "id": 74,
      "title": "Search a 2D Matrix",
      "difficulty": "Medium",
      "pattern": "Binary search in 2D (treat as 1D)",
      "link": "https://leetcode.com/problems/search-a-2d-matrix/",
      "technique": "BINARY SEARCH"
    },
    {
      "id": 875,
      "title": "Koko Eating Bananas",
      "difficulty": "Medium",
      "pattern": "Minimize eating speed → binary search on answer",
      "link": "https://leetcode.com/problems/koko-eating-bananas/",
      "technique": "BINARY SEARCH"
    },
    {
      "id": 1011,
      "title": "Capacity to Ship in D Days",
      "difficulty": "Medium",
      "pattern": "Minimize capacity → binary search on answer",
      "link": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
      "technique": "BINARY SEARCH"
    },
    {
      "id": 1870,
      "title": "Minimum Speed to Arrive",
      "difficulty": "Medium",
      "pattern": "Minimize speed → binary search on answer",
      "link": "https://leetcode.com/problems/minimum-speed-to-arrive-on-time/",
      "technique": "BINARY SEARCH"
    },
    {
      "id": 33,
      "title": "Search in Rotated Sorted Array",
      "difficulty": "Medium",
      "pattern": "Binary search with rotation",
      "link": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      "technique": "BINARY SEARCH"
    },
    {
      "id": 162,
      "title": "Find Peak Element",
      "difficulty": "Medium",
      "pattern": "Binary search on modified condition",
      "link": "https://leetcode.com/problems/find-peak-element/",
      "technique": "BINARY SEARCH"
    },
    {
      "id": 1891,
      "title": "Cutting Ribbons",
      "difficulty": "Hard",
      "pattern": "Binary search on answer with multiple constraints",
      "link": "https://leetcode.com/problems/cutting-ribbons/",
      "technique": "BINARY SEARCH"
    },
    {
      "id": 410,
      "title": "Split Array Largest Sum",
      "difficulty": "Hard",
      "pattern": "Minimize maximum → binary search on answer",
      "link": "https://leetcode.com/problems/split-array-largest-sum/",
      "technique": "BINARY SEARCH"
    },
    {
      "id": 435,
      "title": "Non-overlapping Intervals",
      "difficulty": "Medium",
      "pattern": "Sort by end time → greedy select",
      "link": "https://leetcode.com/problems/non-overlapping-intervals/",
      "technique": "SORTING & GREEDY"
    },
    {
      "id": 452,
      "title": "Minimum Arrows to Burst Balloons",
      "difficulty": "Medium",
      "pattern": "Similar to interval, sort & greedy",
      "link": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
      "technique": "SORTING & GREEDY"
    },
    {
      "id": 55,
      "title": "Jump Game",
      "difficulty": "Medium",
      "pattern": "Greedy, maintain max reach",
      "link": "https://leetcode.com/problems/jump-game/",
      "technique": "SORTING & GREEDY"
    },
    {
      "id": 45,
      "title": "Jump Game II",
      "difficulty": "Medium",
      "pattern": "Greedy, find minimum jumps",
      "link": "https://leetcode.com/problems/jump-game-ii/",
      "technique": "SORTING & GREEDY"
    },
    {
      "id": 56,
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "pattern": "Sort then merge overlapping",
      "link": "https://leetcode.com/problems/merge-intervals/",
      "technique": "SORTING & GREEDY"
    },
    {
      "id": 179,
      "title": "Largest Number",
      "difficulty": "Medium",
      "pattern": "Custom comparator (compare concatenations)",
      "link": "https://leetcode.com/problems/largest-number/",
      "technique": "SORTING & GREEDY"
    },
    {
      "id": 881,
      "title": "Boats to Save People",
      "difficulty": "Medium",
      "pattern": "Sort two pointers + greedy",
      "link": "https://leetcode.com/problems/boats-to-save-people/",
      "technique": "SORTING & GREEDY"
    },
    {
      "id": 1247,
      "title": "Minimum Swaps to Make Strings Equal",
      "difficulty": "Medium",
      "pattern": "Greedy string swaps",
      "link": "https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/",
      "technique": "SORTING & GREEDY"
    },
    {
      "id": 53,
      "title": "Maximum Subarray",
      "difficulty": "Easy",
      "pattern": "Kadane's algorithm (greedy optimization)",
      "link": "https://leetcode.com/problems/maximum-subarray/",
      "technique": "SORTING & GREEDY"
    },
    {
      "id": 1834,
      "title": "Single-Threaded CPU",
      "difficulty": "Medium",
      "pattern": "Sort by priority + greedy scheduling",
      "link": "https://leetcode.com/problems/single-threaded-cpu/",
      "technique": "SORTING & GREEDY"
    },
    {
      "id": 1353,
      "title": "Maximum Meetings in One Room",
      "difficulty": "Medium",
      "pattern": "Sort by end time → greedy select",
      "link": "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/",
      "technique": "SORTING & GREEDY"
    },
    {
      "id": 1648,
      "title": "Sell Diminishing-Value Colored Balls",
      "difficulty": "Hard",
      "pattern": "Greedy with clever sorting",
      "link": "https://leetcode.com/problems/sell-diminishing-valued-colored-balls/",
      "technique": "SORTING & GREEDY"
    },
    {
      "id": 167,
      "title": "Two Sum II Input Array Sorted",
      "difficulty": "Easy",
      "pattern": "Classic two pointers from edges",
      "link": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
      "technique": "TWO POINTERS"
    },
    {
      "id": 125,
      "title": "Valid Palindrome",
      "difficulty": "Easy",
      "pattern": "Two pointers converging",
      "link": "https://leetcode.com/problems/valid-palindrome/",
      "technique": "TWO POINTERS"
    },
    {
      "id": 345,
      "title": "Reverse String",
      "difficulty": "Easy",
      "pattern": "Two pointers swap",
      "link": "https://leetcode.com/problems/reverse-string/",
      "technique": "TWO POINTERS"
    },
    {
      "id": 11,
      "title": "Container With Most Water",
      "difficulty": "Medium",
      "pattern": "Greedy pointer movement",
      "link": "https://leetcode.com/problems/container-with-most-water/",
      "technique": "TWO POINTERS"
    },
    {
      "id": 15,
      "title": "3Sum",
      "difficulty": "Medium",
      "pattern": "Sort + two pointers for each element",
      "link": "https://leetcode.com/problems/3sum/",
      "technique": "TWO POINTERS"
    },
    {
      "id": 16,
      "title": "3Sum Closest",
      "difficulty": "Medium",
      "pattern": "Similar to 3Sum, track closest",
      "link": "https://leetcode.com/problems/3sum-closest/",
      "technique": "TWO POINTERS"
    },
    {
      "id": 26,
      "title": "Remove Duplicates",
      "difficulty": "Easy",
      "pattern": "Write pointer technique",
      "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
      "technique": "TWO POINTERS"
    },
    {
      "id": 27,
      "title": "Remove Element",
      "difficulty": "Easy",
      "pattern": "Write pointer for elements != target",
      "link": "https://leetcode.com/problems/remove-element/",
      "technique": "TWO POINTERS"
    },
    {
      "id": 80,
      "title": "Remove Duplicates II",
      "difficulty": "Medium",
      "pattern": "Write pointer with condition",
      "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
      "technique": "TWO POINTERS"
    },
    {
      "id": 42,
      "title": "Trapping Rain Water",
      "difficulty": "Hard",
      "pattern": "Two pointers with height tracking",
      "link": "https://leetcode.com/problems/trapping-rain-water/",
      "technique": "TWO POINTERS"
    },
    {
      "id": 1679,
      "title": "Max Sum of K-Length Pairs",
      "difficulty": "Medium",
      "pattern": "Two pointers on sorted array",
      "link": "https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/",
      "technique": "TWO POINTERS"
    },
    {
      "id": 303,
      "title": "Range Sum Query",
      "difficulty": "Easy",
      "pattern": "Build prefix sum, query O(1)",
      "link": "https://leetcode.com/problems/range-sum-query-immutable/",
      "technique": "PREFIX SUMS & DIFFERENCE ARRAYS"
    },
    {
      "id": 1480,
      "title": "Running Sum of 1D Array",
      "difficulty": "Easy",
      "pattern": "Simple prefix sum calculation",
      "link": "https://leetcode.com/problems/running-sum-of-1d-array/",
      "technique": "PREFIX SUMS & DIFFERENCE ARRAYS"
    },
    {
      "id": 238,
      "title": "Product of Array Except Self",
      "difficulty": "Medium",
      "pattern": "Prefix + suffix products",
      "link": "https://leetcode.com/problems/product-of-array-except-self/",
      "technique": "PREFIX SUMS & DIFFERENCE ARRAYS"
    },
    {
      "id": 560,
      "title": "Subarray Sum Equals K",
      "difficulty": "Medium",
      "pattern": "Hash map + prefix sum",
      "link": "https://leetcode.com/problems/subarray-sum-equals-k/",
      "technique": "PREFIX SUMS & DIFFERENCE ARRAYS"
    },
    {
      "id": 1658,
      "title": "Minimum Operations",
      "difficulty": "Medium",
      "pattern": "Prefix sum for range updates simulation",
      "link": "https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/",
      "technique": "PREFIX SUMS & DIFFERENCE ARRAYS"
    },
    {
      "id": 1109,
      "title": "Corporate Flight Bookings",
      "difficulty": "Medium",
      "pattern": "Difference array for range updates",
      "link": "https://leetcode.com/problems/corporate-flight-bookings/",
      "technique": "PREFIX SUMS & DIFFERENCE ARRAYS"
    },
    {
      "id": 370,
      "title": "Range Addition",
      "difficulty": "Medium",
      "pattern": "Classic difference array problem",
      "link": "https://leetcode.com/problems/range-addition/",
      "technique": "PREFIX SUMS & DIFFERENCE ARRAYS"
    },
    {
      "id": 1621,
      "title": "Number of Sets",
      "difficulty": "Medium",
      "pattern": "Difference array 2D",
      "link": "https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/",
      "technique": "PREFIX SUMS & DIFFERENCE ARRAYS"
    },
    {
      "id": 304,
      "title": "Range Sum Query 2D",
      "difficulty": "Medium",
      "pattern": "2D prefix sum for region queries",
      "link": "https://leetcode.com/problems/range-sum-query-2d-immutable/",
      "technique": "PREFIX SUMS & DIFFERENCE ARRAYS"
    },
    {
      "id": 1314,
      "title": "Matrix Block Sum",
      "difficulty": "Easy",
      "pattern": "2D prefix sum",
      "link": "https://leetcode.com/problems/matrix-block-sum/",
      "technique": "PREFIX SUMS & DIFFERENCE ARRAYS"
    },
    {
      "id": 1352,
      "title": "Product of Last K Numbers",
      "difficulty": "Medium",
      "pattern": "Prefix products",
      "link": "https://leetcode.com/problems/product-of-the-last-k-numbers/",
      "technique": "PREFIX SUMS & DIFFERENCE ARRAYS"
    },
    {
      "id": 1,
      "title": "Two Sum",
      "difficulty": "Easy",
      "pattern": "Hash map for complement",
      "link": "https://leetcode.com/problems/two-sum/",
      "technique": "HASH TABLES & MAPS"
    },
    {
      "id": 217,
      "title": "Contains Duplicate",
      "difficulty": "Easy",
      "pattern": "Hash set for uniqueness",
      "link": "https://leetcode.com/problems/contains-duplicate/",
      "technique": "HASH TABLES & MAPS"
    },
    {
      "id": 242,
      "title": "Valid Anagram",
      "difficulty": "Easy",
      "pattern": "Hash map for character counts",
      "link": "https://leetcode.com/problems/valid-anagram/",
      "technique": "HASH TABLES & MAPS"
    },
    {
      "id": 49,
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "pattern": "Hash map with sorted key",
      "link": "https://leetcode.com/problems/group-anagrams/",
      "technique": "HASH TABLES & MAPS"
    },
    {
      "id": 347,
      "title": "Top K Frequent Elements",
      "difficulty": "Medium",
      "pattern": "Hash map + heap/sorting",
      "link": "https://leetcode.com/problems/top-k-frequent-elements/",
      "technique": "HASH TABLES & MAPS"
    },
    {
      "id": 3,
      "title": "Longest Substring Without Repeating",
      "difficulty": "Medium",
      "pattern": "Sliding window + hash map",
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      "technique": "HASH TABLES & MAPS"
    },
    {
      "id": 76,
      "title": "Minimum Window Substring",
      "difficulty": "Hard",
      "pattern": "Sliding window with frequency",
      "link": "https://leetcode.com/problems/minimum-window-substring/",
      "technique": "HASH TABLES & MAPS"
    },
    {
      "id": 438,
      "title": "Find Anagram in String",
      "difficulty": "Medium",
      "pattern": "Sliding window pattern matching",
      "link": "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
      "technique": "HASH TABLES & MAPS"
    },
    {
      "id": 146,
      "title": "LRU Cache",
      "difficulty": "Medium",
      "pattern": "Hash map + doubly linked list",
      "link": "https://leetcode.com/problems/lru-cache/",
      "technique": "HASH TABLES & MAPS"
    },
    {
      "id": 1396,
      "title": "Design Underground System",
      "difficulty": "Medium",
      "pattern": "Hash map for stations and times",
      "link": "https://leetcode.com/problems/design-underground-system/",
      "technique": "HASH TABLES & MAPS"
    },
    {
      "id": 1865,
      "title": "Finding Pairs With Certain Sum",
      "difficulty": "Hard",
      "pattern": "Two pointer + hash map",
      "link": "https://leetcode.com/problems/finding-pairs-with-a-certain-sum/",
      "technique": "HASH TABLES & MAPS"
    },
    {
      "id": 128,
      "title": "Longest Consecutive Sequence",
      "difficulty": "Medium",
      "pattern": "Hash set smart iteration",
      "link": "https://leetcode.com/problems/longest-consecutive-sequence/",
      "technique": "HASH TABLES & MAPS"
    },
    {
      "id": 215,
      "title": "Kth Largest Element",
      "difficulty": "Medium",
      "pattern": "Min heap of size k",
      "link": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      "technique": "HEAPS & PRIORITY QUEUES"
    },
    {
      "id": 703,
      "title": "Kth Largest in Stream",
      "difficulty": "Easy",
      "pattern": "Min heap for streaming",
      "link": "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
      "technique": "HEAPS & PRIORITY QUEUES"
    },
    {
      "id": 295,
      "title": "Find Median from Data Stream",
      "difficulty": "Hard",
      "pattern": "Max heap + min heap",
      "link": "https://leetcode.com/problems/find-median-from-data-stream/",
      "technique": "HEAPS & PRIORITY QUEUES"
    },
    {
      "id": 1046,
      "title": "Last Stone Weight",
      "difficulty": "Easy",
      "pattern": "Max heap simulation",
      "link": "https://leetcode.com/problems/last-stone-weight/",
      "technique": "HEAPS & PRIORITY QUEUES"
    },
    {
      "id": 1753,
      "title": "Maximum Score From Stones",
      "difficulty": "Hard",
      "pattern": "Max heap game theory",
      "link": "https://leetcode.com/problems/maximum-score-from-removing-stones/",
      "technique": "HEAPS & PRIORITY QUEUES"
    },
    {
      "id": 23,
      "title": "Merge K Sorted Lists",
      "difficulty": "Hard",
      "pattern": "Min heap for k-way merge",
      "link": "https://leetcode.com/problems/merge-k-sorted-lists/",
      "technique": "HEAPS & PRIORITY QUEUES"
    },
    {
      "id": 1167,
      "title": "Minimum Cost to Connect Sticks",
      "difficulty": "Medium",
      "pattern": "Min heap greedy",
      "link": "https://leetcode.com/problems/minimum-cost-to-connect-sticks/",
      "technique": "HEAPS & PRIORITY QUEUES"
    },
    {
      "id": 692,
      "title": "Top K Frequent Words",
      "difficulty": "Medium",
      "pattern": "Heap with custom comparator",
      "link": "https://leetcode.com/problems/top-k-frequent-words/",
      "technique": "HEAPS & PRIORITY QUEUES"
    },
    {
      "id": 1337,
      "title": "K Weakest Rows",
      "difficulty": "Easy",
      "pattern": "Heap / sorting",
      "link": "https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/",
      "technique": "HEAPS & PRIORITY QUEUES"
    },
    {
      "id": 1882,
      "title": "Process Tasks Using Servers",
      "difficulty": "Hard",
      "pattern": "Multiple heaps management",
      "link": "https://leetcode.com/problems/process-tasks-using-servers/",
      "technique": "HEAPS & PRIORITY QUEUES"
    },
    {
      "id": 621,
      "title": "Task Scheduler",
      "difficulty": "Medium",
      "pattern": "Heap for task scheduling",
      "link": "https://leetcode.com/problems/task-scheduler/",
      "technique": "HEAPS & PRIORITY QUEUES"
    },
    {
      "id": 70,
      "title": "Climbing Stairs",
      "difficulty": "Easy",
      "pattern": "f(n) = f(n-1) + f(n-2)",
      "link": "https://leetcode.com/problems/climbing-stairs/",
      "technique": "DYNAMIC PROGRAMMING"
    },
    {
      "id": 198,
      "title": "House Robber",
      "difficulty": "Easy",
      "pattern": "max loot = max(rob[i] + dp[i-2], dp[i-1])",
      "link": "https://leetcode.com/problems/house-robber/",
      "technique": "DYNAMIC PROGRAMMING"
    },
    {
      "id": 746,
      "title": "Min Cost Climbing Stairs",
      "difficulty": "Easy",
      "pattern": "dp[i] = min(dp[i-1], dp[i-2]) + cost[i]",
      "link": "https://leetcode.com/problems/min-cost-climbing-stairs/",
      "technique": "DYNAMIC PROGRAMMING"
    },
    {
      "id": 322,
      "title": "Coin Change",
      "difficulty": "Medium",
      "pattern": "Min coins for amount",
      "link": "https://leetcode.com/problems/coin-change/",
      "technique": "DYNAMIC PROGRAMMING"
    },
    {
      "id": 518,
      "title": "Coin Change II",
      "difficulty": "Medium",
      "pattern": "Count ways for amount",
      "link": "https://leetcode.com/problems/coin-change-2/",
      "technique": "DYNAMIC PROGRAMMING"
    },
    {
      "id": 416,
      "title": "Partition Equal Subset Sum",
      "difficulty": "Medium",
      "pattern": "0/1 Knapsack",
      "link": "https://leetcode.com/problems/partition-equal-subset-sum/",
      "technique": "DYNAMIC PROGRAMMING"
    },
    {
      "id": 300,
      "title": "Longest Increasing Subsequence",
      "difficulty": "Medium",
      "pattern": "dp[i] = max(dp[j] + 1) where j < i and arr[j] < arr[i]",
      "link": "https://leetcode.com/problems/longest-increasing-subsequence/",
      "technique": "DYNAMIC PROGRAMMING"
    },
    {
      "id": 673,
      "title": "Number of Longest Increasing Subsequence",
      "difficulty": "Medium",
      "pattern": "Count LIS",
      "link": "https://leetcode.com/problems/number-of-longest-increasing-subsequence/",
      "technique": "DYNAMIC PROGRAMMING"
    },
    {
      "id": 72,
      "title": "Edit Distance",
      "difficulty": "Medium",
      "pattern": "min of (insert, delete, replace, match)",
      "link": "https://leetcode.com/problems/edit-distance/",
      "technique": "DYNAMIC PROGRAMMING"
    },
    {
      "id": 1143,
      "title": "Longest Common Subsequence",
      "difficulty": "Medium",
      "pattern": "LCS DP",
      "link": "https://leetcode.com/problems/longest-common-subsequence/",
      "technique": "DYNAMIC PROGRAMMING"
    },
    {
      "id": 62,
      "title": "Unique Paths",
      "difficulty": "Medium",
      "pattern": "Grid DP",
      "link": "https://leetcode.com/problems/unique-paths/",
      "technique": "DYNAMIC PROGRAMMING"
    },
    {
      "id": 64,
      "title": "Minimum Path Sum",
      "difficulty": "Medium",
      "pattern": "Grid path cost",
      "link": "https://leetcode.com/problems/minimum-path-sum/",
      "technique": "DYNAMIC PROGRAMMING"
    },
    {
      "id": 97,
      "title": "Interleaving String",
      "difficulty": "Medium",
      "pattern": "String matching DP",
      "link": "https://leetcode.com/problems/interleaving-string/",
      "technique": "DYNAMIC PROGRAMMING"
    },
    {
      "id": 131,
      "title": "Palindrome Partitioning",
      "difficulty": "Medium",
      "pattern": "DP + backtracking",
      "link": "https://leetcode.com/problems/palindrome-partitioning/",
      "technique": "DYNAMIC PROGRAMMING"
    },
    {
      "id": 115,
      "title": "Distinct Subsequences",
      "difficulty": "Hard",
      "pattern": "Count pattern matching",
      "link": "https://leetcode.com/problems/distinct-subsequences/",
      "technique": "DYNAMIC PROGRAMMING"
    },
    {
      "id": 127,
      "title": "Word Ladder",
      "difficulty": "Medium",
      "pattern": "BFS to find shortest path",
      "link": "https://leetcode.com/problems/word-ladder/",
      "technique": "GRAPHS - BFS & DFS"
    },
    {
      "id": 637,
      "title": "Average of Levels",
      "difficulty": "Easy",
      "pattern": "Level order traversal",
      "link": "https://leetcode.com/problems/average-of-levels-in-binary-tree/",
      "technique": "GRAPHS - BFS & DFS"
    },
    {
      "id": 993,
      "title": "Cousins in Binary Tree",
      "difficulty": "Easy",
      "pattern": "BFS to find nodes at same level",
      "link": "https://leetcode.com/problems/cousins-in-binary-tree/",
      "technique": "GRAPHS - BFS & DFS"
    },
    {
      "id": 102,
      "title": "Binary Tree Level Order",
      "difficulty": "Easy",
      "pattern": "Classic level order",
      "link": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      "technique": "GRAPHS - BFS & DFS"
    },
    {
      "id": 1293,
      "title": "Shortest Path in Grid with Obstacles",
      "difficulty": "Hard",
      "pattern": "BFS on grid",
      "link": "https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/",
      "technique": "GRAPHS - BFS & DFS"
    },
    {
      "id": 200,
      "title": "Number of Islands",
      "difficulty": "Medium",
      "pattern": "DFS/BFS to count components",
      "link": "https://leetcode.com/problems/number-of-islands/",
      "technique": "GRAPHS - BFS & DFS"
    },
    {
      "id": 733,
      "title": "Flood Fill",
      "difficulty": "Easy",
      "pattern": "DFS on grid",
      "link": "https://leetcode.com/problems/flood-fill/",
      "technique": "GRAPHS - BFS & DFS"
    },
    {
      "id": 1020,
      "title": "Number of Enclaves",
      "difficulty": "Medium",
      "pattern": "DFS to mark connected regions",
      "link": "https://leetcode.com/problems/number-of-enclaves/",
      "technique": "GRAPHS - BFS & DFS"
    },
    {
      "id": 797,
      "title": "All Paths in DAG",
      "difficulty": "Medium",
      "pattern": "DFS path finding",
      "link": "https://leetcode.com/problems/all-paths-from-source-to-target/",
      "technique": "GRAPHS - BFS & DFS"
    },
    {
      "id": 332,
      "title": "Reconstruct Itinerary",
      "difficulty": "Hard",
      "pattern": "DFS Eulerian path",
      "link": "https://leetcode.com/problems/reconstruct-itinerary/",
      "technique": "GRAPHS - BFS & DFS"
    },
    {
      "id": 207,
      "title": "Course Schedule",
      "difficulty": "Medium",
      "pattern": "Cycle detection with DFS",
      "link": "https://leetcode.com/problems/course-schedule/",
      "technique": "GRAPHS - BFS & DFS"
    },
    {
      "id": 210,
      "title": "Course Schedule II",
      "difficulty": "Medium",
      "pattern": "Topological sort",
      "link": "https://leetcode.com/problems/course-schedule-ii/",
      "technique": "GRAPHS - BFS & DFS"
    },
    {
      "id": 547,
      "title": "Friend Circles",
      "difficulty": "Medium",
      "pattern": "Connected components",
      "link": "https://leetcode.com/problems/number-of-provinces/",
      "technique": "GRAPHS - BFS & DFS"
    },
    {
      "id": 1591,
      "title": "Strange Printer II",
      "difficulty": "Hard",
      "pattern": "Topological sort on constraints",
      "link": "https://leetcode.com/problems/strange-printer-ii/",
      "technique": "GRAPHS - BFS & DFS"
    },
    {
      "id": 261,
      "title": "Graph Valid Tree",
      "difficulty": "Medium",
      "pattern": "DFS cycle detection",
      "link": "https://leetcode.com/problems/graph-valid-tree/",
      "technique": "GRAPHS - BFS & DFS"
    },
    {
      "id": 323,
      "title": "Number of Connected Components",
      "difficulty": "Medium",
      "pattern": "Count components with DSU",
      "link": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
      "technique": "DISJOINT SET UNION"
    },
    {
      "id": 684,
      "title": "Redundant Connection",
      "difficulty": "Medium",
      "pattern": "Find extra edge in tree",
      "link": "https://leetcode.com/problems/redundant-connection/",
      "technique": "DISJOINT SET UNION"
    },
    {
      "id": 685,
      "title": "Redundant Connection II",
      "difficulty": "Hard",
      "pattern": "Find extra edge in directed tree",
      "link": "https://leetcode.com/problems/redundant-connection-ii/",
      "technique": "DISJOINT SET UNION"
    },
    {
      "id": 1202,
      "title": "Smallest String With Swaps",
      "difficulty": "Hard",
      "pattern": "Group by connected components, sort",
      "link": "https://leetcode.com/problems/smallest-string-with-swaps/",
      "technique": "DISJOINT SET UNION"
    },
    {
      "id": 1061,
      "title": "Lexicographically Smallest Equivalent String",
      "difficulty": "Medium",
      "pattern": "Union characters, map via DSU",
      "link": "https://leetcode.com/problems/lexicographically-smallest-equivalent-string/",
      "technique": "DISJOINT SET UNION"
    },
    {
      "id": 1319,
      "title": "Number of Operations to Make Network Connected",
      "difficulty": "Medium",
      "pattern": "Find components, check if connected",
      "link": "https://leetcode.com/problems/number-of-operations-to-make-network-connected/",
      "technique": "DISJOINT SET UNION"
    },
    {
      "id": 765,
      "title": "Couples Holding Hands",
      "difficulty": "Hard",
      "pattern": "DSU for partner swapping",
      "link": "https://leetcode.com/problems/couples-holding-hands/",
      "technique": "DISJOINT SET UNION"
    },
    {
      "id": 721,
      "title": "Accounts Merge",
      "difficulty": "Medium",
      "pattern": "Group emails by person using DSU",
      "link": "https://leetcode.com/problems/accounts-merge/",
      "technique": "DISJOINT SET UNION"
    },
    {
      "id": 1258,
      "title": "Synonymous Sentences",
      "difficulty": "Hard",
      "pattern": "DSU to group synonyms",
      "link": "https://leetcode.com/problems/synonymous-sentences/",
      "technique": "DISJOINT SET UNION"
    },
    {
      "id": 307,
      "title": "Range Sum Query Mutable",
      "difficulty": "Medium",
      "pattern": "Point update, range query",
      "link": "https://leetcode.com/problems/range-sum-query-mutable/",
      "technique": "FENWICK TREE"
    },
    {
      "id": 1157,
      "title": "Online Majority Element In Subarray",
      "difficulty": "Hard",
      "pattern": "Fenwick with binary search",
      "link": "https://leetcode.com/problems/online-majority-element-in-subarray/",
      "technique": "FENWICK TREE"
    },
    {
      "id": 1649,
      "title": "Create Sorted Array via Instructions",
      "difficulty": "Hard",
      "pattern": "Fenwick for inversions/rank queries",
      "link": "https://leetcode.com/problems/create-sorted-array-through-instructions/",
      "technique": "FENWICK TREE"
    },
    {
      "id": 315,
      "title": "Count of Smaller Numbers After Self",
      "difficulty": "Hard",
      "pattern": "Fenwick for inversion count",
      "link": "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
      "technique": "FENWICK TREE"
    },
    {
      "id": 493,
      "title": "Reverse Pairs",
      "difficulty": "Hard",
      "pattern": "Fenwick + coordinate compression",
      "link": "https://leetcode.com/problems/reverse-pairs/",
      "technique": "FENWICK TREE"
    },
    {
      "id": 1626,
      "title": "Best Team With No Conflicts",
      "difficulty": "Medium",
      "pattern": "DP + Fenwick for range max",
      "link": "https://leetcode.com/problems/best-team-with-no-conflicts/",
      "technique": "FENWICK TREE"
    },
    {
      "id": 327,
      "title": "Count of Range Sum",
      "difficulty": "Hard",
      "pattern": "Fenwick for prefix sum queries",
      "link": "https://leetcode.com/problems/count-of-range-sum/",
      "technique": "FENWICK TREE"
    },
    {
      "id": 1782,
      "title": "Count Pairs Of Nodes",
      "difficulty": "Hard",
      "pattern": "Fenwick for edge queries",
      "link": "https://leetcode.com/problems/count-pairs-of-nodes/",
      "technique": "FENWICK TREE"
    },
    {
      "id": 2426,
      "title": "Number of Pairs Satisfying Inequality",
      "difficulty": "Hard",
      "pattern": "Fenwick for counting pairs",
      "link": "https://leetcode.com/problems/number-of-pairs-satisfying-inequality/",
      "technique": "FENWICK TREE"
    },
    {
      "id": 308,
      "title": "Range Sum Query 2D Mutable",
      "difficulty": "Hard",
      "pattern": "2D segment tree",
      "link": "https://leetcode.com/problems/range-sum-query-2d-mutable/",
      "technique": "SEGMENT TREE & LAZY PROPAGATION"
    },
    {
      "id": 699,
      "title": "Falling Squares",
      "difficulty": "Hard",
      "pattern": "Segment tree coordinate compression",
      "link": "https://leetcode.com/problems/falling-squares/",
      "technique": "SEGMENT TREE & LAZY PROPAGATION"
    },
    {
      "id": 715,
      "title": "Range Module",
      "difficulty": "Hard",
      "pattern": "Segment tree for interval tracking",
      "link": "https://leetcode.com/problems/range-module/",
      "technique": "SEGMENT TREE & LAZY PROPAGATION"
    },
    {
      "id": 850,
      "title": "Rectangle Area II",
      "difficulty": "Hard",
      "pattern": "Segment tree for area calculation",
      "link": "https://leetcode.com/problems/rectangle-area-ii/",
      "technique": "SEGMENT TREE & LAZY PROPAGATION"
    },
    {
      "id": 1157,
      "title": "Online Majority Element",
      "difficulty": "Hard",
      "pattern": "Segment tree + binary search",
      "link": "https://leetcode.com/problems/online-majority-element-in-subarray/",
      "technique": "SEGMENT TREE & LAZY PROPAGATION"
    },
    {
      "id": 1521,
      "title": "Find a Value of Mystery Number",
      "difficulty": "Medium",
      "pattern": "Segment tree queries",
      "link": "https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/",
      "technique": "SEGMENT TREE & LAZY PROPAGATION"
    },
    {
      "id": 1923,
      "title": "Longest Common Subpath",
      "difficulty": "Hard",
      "pattern": "Segment tree + hash",
      "link": "https://leetcode.com/problems/longest-common-subpath/",
      "technique": "SEGMENT TREE & LAZY PROPAGATION"
    },
    {
      "id": 2276,
      "title": "Count Integers in Rectangles",
      "difficulty": "Hard",
      "pattern": "2D segment tree / 2D coordinate compression",
      "link": "https://leetcode.com/problems/count-integers-in-rectangles/",
      "technique": "SEGMENT TREE & LAZY PROPAGATION"
    },
    {
      "id": 2407,
      "title": "Longest Increasing Subsequence II",
      "difficulty": "Hard",
      "pattern": "Segment tree for DP optimization",
      "link": "https://leetcode.com/problems/longest-increasing-subsequence-ii/",
      "technique": "SEGMENT TREE & LAZY PROPAGATION"
    },
    {
      "id": 743,
      "title": "Network Delay Time",
      "difficulty": "Medium",
      "pattern": "Dijkstra from single source",
      "link": "https://leetcode.com/problems/network-delay-time/",
      "technique": "SEGMENT TREE & LAZY PROPAGATION"
    },
    {
      "id": 1514,
      "title": "Path With Maximum Probability",
      "difficulty": "Medium",
      "pattern": "Dijkstra maximizing probability",
      "link": "https://leetcode.com/problems/path-with-maximum-probability/",
      "technique": "SEGMENT TREE & LAZY PROPAGATION"
    },
    {
      "id": 882,
      "title": "Reachable Nodes In Subdivided Graph",
      "difficulty": "Hard",
      "pattern": "Dijkstra with subdivisions",
      "link": "https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/",
      "technique": "SEGMENT TREE & LAZY PROPAGATION"
    },
    {
      "id": 1631,
      "title": "Path With Minimum Effort",
      "difficulty": "Medium",
      "pattern": "Dijkstra minimizing max weight",
      "link": "https://leetcode.com/problems/path-with-minimum-effort/",
      "technique": "SEGMENT TREE & LAZY PROPAGATION"
    },
    {
      "id": 1786,
      "title": "Number of Restricted Paths",
      "difficulty": "Hard",
      "pattern": "Dijkstra + DP",
      "link": "https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/",
      "technique": "SEGMENT TREE & LAZY PROPAGATION"
    },
    {
      "id": 1976,
      "title": "Number of Ways to Arrive",
      "difficulty": "Medium",
      "pattern": "Dijkstra counting paths",
      "link": "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/",
      "technique": "SEGMENT TREE & LAZY PROPAGATION"
    },
    {
      "id": 2090,
      "title": "K Radius Subarray Averages",
      "difficulty": "Easy",
      "pattern": "Sliding window (simpler alternative)",
      "link": "https://leetcode.com/problems/k-radius-subarray-averages/",
      "technique": "SEGMENT TREE & LAZY PROPAGATION"
    },
    {
      "id": 1293,
      "title": "Shortest Path in Grid",
      "difficulty": "Hard",
      "pattern": "Dijkstra on grid",
      "link": "https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/",
      "technique": "SEGMENT TREE & LAZY PROPAGATION"
    },
    {
      "id": 2194,
      "title": "Cells in a Range",
      "difficulty": "Easy",
      "pattern": "String processing (not Dijkstra)",
      "link": "https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/",
      "technique": "SEGMENT TREE & LAZY PROPAGATION"
    },
    {
      "id": 2203,
      "title": "Minimum Weighted Subgraph",
      "difficulty": "Hard",
      "pattern": "MST / Dijkstra variant",
      "link": "https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-degrees/",
      "technique": "SEGMENT TREE & LAZY PROPAGATION"
    }
  ],
  "sourceLines": 1433
};
