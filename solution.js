// ==========================================
// Problem 1: Staircase
// ==========================================
var staircase = function (n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    result.push(" ".repeat(n - i) + "#".repeat(i));
  }

  return result.join("\n");
};

// ==========================================
// Problem 2: Grading Students
// ==========================================
var gradingStudents = function (grades) {
  return grades.map((grade) => {
    if (grade < 38) return grade;

    const nextMultiple = Math.ceil(grade / 5) * 5;

    return nextMultiple - grade < 3 ? nextMultiple : grade;
  });
};

// ==========================================
// Problem 3: Time Conversion
// ==========================================
var timeConversion = function (s) {
  let [time, period] = [s.slice(0, 8), s.slice(8)];
  let [hours, minutes, seconds] = time.split(":");

  let hour = Number(hours);

  if (period === "AM") {
    if (hour === 12) hour = 0;
  } else {
    if (hour !== 12) hour += 12;
  }

  return `${String(hour).padStart(2, "0")}:${minutes}:${seconds}`;
};

// ==========================================
// Problem 4: String Repeat
// ==========================================
var repeatStr = function (n, s) {
  return s.repeat(n);
};

// ==========================================
// Problem 5: Reversed Strings
// ==========================================
var solution = function (str) {
  return str.split("").reverse().join("");
};

// ==========================================
// Problem 6: Sum of Positive
// ==========================================
var positiveSum = function (arr) {
  return arr.reduce((sum, num) => {
    return num > 0 ? sum + num : sum;
  }, 0);
};

// ==========================================
// Problem 7: Grasshopper — Summation
// ==========================================
var summation = function (num) {
  return (num * (num + 1)) / 2;
};

// ==========================================
// Problem 8: Convert a Boolean to a String
// ==========================================
var booleanToString = function (b) {
  return String(b);
};

// ==========================================
// Problem 9: Fizz Buzz
// ==========================================
var fizzBuzz = function (n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(String(i));
    }
  }

  return result;
};

// ==========================================
// Problem 10: Running Sum of 1D Array
// ==========================================
var runningSum = function (nums) {
  let sum = 0;

  return nums.map((num) => {
    sum += num;
    return sum;
  });
};

// ==========================================
// Problem 11: Richest Customer Wealth
// ==========================================
var maximumWealth = function (accounts) {
  let maxWealth = 0;

  for (const account of accounts) {
    const totalWealth = account.reduce((sum, money) => sum + money, 0);

    maxWealth = Math.max(maxWealth, totalWealth);
  }

  return maxWealth;
};

// ==========================================
// Problem 12: Remove Duplicates from Sorted Array
// ==========================================
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let uniqueIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[uniqueIndex]) {
      uniqueIndex++;
      nums[uniqueIndex] = nums[i];
    }
  }

  return uniqueIndex + 1;
};

// ==========================================
// Problem 13: Contains Duplicate
// ==========================================
var containsDuplicate = function (nums) {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
  }

  return false;
};

// ==========================================
// Problem 14: Move Zeroes
// ==========================================
var moveZeroes = function (nums) {
  let position = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[position] = nums[i];
      position++;
    }
  }

  while (position < nums.length) {
    nums[position] = 0;
    position++;
  }
};

// ==========================================
// Problem 15: Merge Sorted Array
// ==========================================
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }

    k--;
  }
};

// ==========================================
// Problem 16: 3Sum
// ==========================================
var threeSum = function (nums) {
  const arr = [...nums].sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    if (arr[i] > 0) break;

    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (sum === 0) {
        result.push([arr[i], arr[left], arr[right]]);

        left++;
        right--;

        while (left < right && arr[left] === arr[left - 1]) {
          left++;
        }

        while (left < right && arr[right] === arr[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

// ==========================================
// Problem 17: Plus One
// ==========================================
var plusOne = function (digits) {
  const result = [...digits];

  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] < 9) {
      result[i]++;
      return result;
    }

    result[i] = 0;
  }

  result.unshift(1);

  return result;
};

// ==========================================
// Problem 18: Reverse String
// ==========================================
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];

    left++;
    right--;
  }
};

// ==========================================
// Problem 19: Length of Last Word
// ==========================================
var lengthOfLastWord = function (s) {
  let i = s.length - 1;
  let length = 0;

  while (i >= 0 && s[i] === " ") {
    i--;
  }

  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }

  return length;
};

// ==========================================
// Problem 20: Longest Common Prefix
// ==========================================
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);

      if (prefix === "") {
        return "";
      }
    }
  }

  return prefix;
};
