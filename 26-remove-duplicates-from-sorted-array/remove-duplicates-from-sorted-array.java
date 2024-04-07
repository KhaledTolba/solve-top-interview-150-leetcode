class Solution {
    public int removeDuplicates(int[] nums) {
        int j = nums[0];
        int k = 1;
        for(int i = 1; i < nums.length; i++)
        {
            if (j != nums[i])
            {
                j = nums[i];
                k++;
                nums[k-1] = nums[i];
            }   
        }
        return k;
    }
}