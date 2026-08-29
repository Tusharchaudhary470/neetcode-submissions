class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let hashmap = {};
    for (let ch of t) {
        hashmap[ch] = (hashmap[ch] || 0) + 1;
    }

    let freq = {};
    let formed = 0;
    let required = Object.keys(hashmap).length;
    let l = 0;
    let minStart = 0;
    let minlen = Infinity;

    for (let r = 0; r < s.length; r++) {
        let ch = s[r];
        freq[ch] = (freq[ch] || 0) + 1;

        if (hashmap[ch] !== undefined && freq[ch] === hashmap[ch]) {
            formed++;
        }

        while (formed === required) {
            // update answer
            if (r - l + 1 < minlen) {
                minlen = r - l + 1;
                minStart = l;
            }

            // shrink from left
            let leftChar = s[l];
            freq[leftChar]--;
            if (hashmap[leftChar] !== undefined && freq[leftChar] < hashmap[leftChar]) {
                formed--;
            }
            l++;
        }
    }

    return minlen === Infinity ? "" : s.substring(minStart, minStart + minlen);

    }
}
