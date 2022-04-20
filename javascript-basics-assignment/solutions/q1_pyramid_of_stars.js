/* Write a program to build a `Pyramid of stars` of given height */
const buildPyramid = (num) => {
     // Write your code here
     var size = num;
     var r = '';
     for (var i=1; i<=size; i++){
         for(var k=1; (k<=size-i); k++){
             r += ' ';
         }
         for(var j=1; j<=i; j++ ){
             r += ' *';
         }
         r += "  \n";
     }
     console.log(r);
     return r;
};
/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *
*/

module.exports = buildPyramid;