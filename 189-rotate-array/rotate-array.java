class Solution {
    public void rotate(int[] nums, int k) {
        if (k > nums.length)
            k %= nums.length;
        int s = 0;
        int[] nums2 = nums.clone();
        for (int i = 0; i < k; i++,s++)
            nums[s] = (nums2[nums2.length - k + i]);
        for (int i = 0; i < nums2.length - k; i++,s++)
            nums[s] = (nums2[i]);
    }
}