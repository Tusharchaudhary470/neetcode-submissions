class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0, r = height.length - 1;
  let maxLeft = 0, maxRight = 0;
  let totalTrap = 0;

  while (l < r) {
    if (height[l] < height[r]) {
      // left side is shorter — it's the limiting factor
      maxLeft = Math.max(maxLeft, height[l]);
      totalTrap += maxLeft - height[l];
      l++;
    } else {
      // right side is shorter (or equal) — it's the limiting factor
      maxRight = Math.max(maxRight, height[r]);
      totalTrap += maxRight - height[r];
      r--;
    }
  }

  return totalTrap;
    }
}
