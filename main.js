            //   1
// function reverse(str) {
//     return str.split('').reverse();
//   }
//   console.log(reverse('Hello'));



                // 2
// function isPowerOfThree(n) {
//     if (n <= 0) {
//       return false; 
//     }
  
//     while (n % 3 === 0) {
//       n = n / 3;
//     }
  
//     return n === 1;
//   }
  
// console.log(isPowerOfThree(27)); 
// console.log(isPowerOfThree(45)); 
// console.log(isPowerOfThree(0));
// console.log(isPowerOfThree(-9));  



            //    3
// function containsDuplicate(nums) {
//     const numSet = new Set();
//     for (const num of nums) {
//       if (numSet.has(num)) {
//         return true;
//       }
//       numSet.add(num);
//     }
//     return false;
//   }
  
//   const arr = [1, 2, 3, 4, 1, 5, 6, 1];
  
//   console.log(containsDuplicate(arr)); 
 

                // 4
// function math(expression) {
//     const result = eval(expression);
//     return Array.from(String(result), Number);
//   }
//   const expression = "123+1";
//   const resultDigits = math(expression);
//   console.log(resultDigits); 
  

                //  5
// function sameElements(nums1, nums2) {
//     const set1 = new Set(nums1);
//     const commonElements = nums2.filter(num => set1.has(num));
//     return commonElements;
//   }
//   const nums1 = [1, 2, 2, 1];
//   const nums2 = [2, 2];
//   const result = sameElements(nums1, nums2);
//   console.log(result); 
  

                //    6
// function Long(strings) {
//     if (strings.length === 0) {
//       return '';
//     }
  
//     let prefix = strings[0];
//     for (let i = 1; i < strings.length; i++) {
//       while (strings[i].indexOf(prefix) !== 0) {
//         prefix = prefix.slice(0, prefix.length - 1);
//       }
//     }
  
//     return prefix;
//   }
  
//   const strings1 = ['apple', 'appetizer', 'application'];
//   const result1 = Long(strings1);
//   console.log(result1); 
  
//   const strings2 = ['dog', 'race', 'car'];
//   const result2 = Long(strings2);
//   console.log(result2); 
  


            
                        //   7
// function Number(columnTitle) {
//     return columnTitle.split('').reduce((acc, char) => acc * 26 + (char.charCodeAt(0) - 'A'.charCodeAt(0) + 1), 0);
//   }
  
  
//   const columnTitle1 = 'A';
//   const columnTitle2 = 'AB';
//   const columnTitle3 = 'ZY';
  
//   console.log(Number(columnTitle1)); 
//   console.log(Number(columnTitle2)); 
//   console.log(Number(columnTitle3)); 
  