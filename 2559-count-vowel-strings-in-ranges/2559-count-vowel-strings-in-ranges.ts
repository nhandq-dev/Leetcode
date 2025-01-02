function vowelStrings(words: string[], queries: number[][]): number[] {
    // Set of vowels for quick lookup
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);

    // Prefix sum array to store cumulative counts of "vowel strings"
    const prefixSum: number[] = [0];

    // Build the prefix sum array
    for (const word of words) {
        const isVowelString = vowelSet.has(word[0]) && vowelSet.has(word[word.length - 1]);
        prefixSum.push(prefixSum[prefixSum.length - 1] + (isVowelString ? 1 : 0));
    }

    // Compute results for each query using the prefix sum array
    return queries.map(([start, end]) => prefixSum[end + 1] - prefixSum[start]);
};