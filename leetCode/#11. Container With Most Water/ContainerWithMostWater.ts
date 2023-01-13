function maxArea(height: number[]): number {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  let area = 0;

  while (left < right) {
    let width = right - left;
    if (height[left] < height[right]) {
      area = height[left] * width;
      left++;
    } else {
      area = height[right] * width;
      right--;
    }

    if (area > maxArea) {
      maxArea = area;
    }
  }

  return maxArea;
}

