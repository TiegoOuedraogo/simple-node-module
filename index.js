// const rect = {
//       perimeter:(x,y)=>(2*(x+y)),
//       area: (x,y)=>(x*y)
// }
const rect = require('./rectangle')
const solveRectangle = (l,w) =>{
      console.log('solving for the rectangle with length is: '+ l + ' and width is: ' + w);

      if(l <=  0 || w <= 0){
            console.log('the dimensions of the rectangle have to be greater than zero length is ' + l+ 'and width is: '+ w);
      } else{
            console.log('the area of the rectangle is: ' + rect.area(l,w));
            console.log('the perimeter of the rectangle is: ' + rect.perimeter(l,w));
      }
      
}
solveRectangle(4,5);
solveRectangle(6,4);
solveRectangle(0,9);
solveRectangle(4,3);
solveRectangle(-7,6)