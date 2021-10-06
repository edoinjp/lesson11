let cars = ["audi", "bmw", "lexus", "volkswagen", "porsche", "toyota"];
function getCars() {
  for (let i = 1; i < cars.length; i++) {
    console.log(cars[i]);
  }
}
getCars();

// 2
let names = ["ana", "giorgi", "nino", "teona", "irakli", "eduard"];

// for (let i of names) {
//   if (i > 3) {
//     console.log(i);
//   }
// }

for(let i=0 ;i<names.length;i++){
	if(names[i].length>3) console.log(names[i]);

}



//
