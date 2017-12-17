Programmer who inspires you>? aaron swartz - reddit founder. M. Zuckerberg facebook, 

1st
Given an array of ints, find the largest positive difference- investing
 
 function maxDiff(arr1){
        max_diff = arr1[1] - arr1[0];
        for (i = 0; i < arr1.length; i++) {
            for (j = i + 1; j < arr1.length; j++) {
                if (arr1[j] - arr1[i] > max_diff) {
                    max_diff = arr1[j] - arr1[i];
            }     
        }
    }
    return max_diff;
 }
    

 maxDiff([50,1, 2, 3, 4, 50]); // 49

2nd
Implement a check sum- first 5 most frequent in abc order

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;

Favorite and least favorite things about python, JavaScript

3rd
How would you design a Pac-Man game?

Most proud, least proud project

4th
Return true if a pair repeats
Return true if a letter repeats with one letter in between


//
