// // function getEmployeeDetails() {
// //   let name = 'John Doe';
// //   let varFunc = function getEmployeeName() {
// //     console.log(name);
// //   };
// //   //   --------
// //   //   --------
// //   varFunc();
// //   console.log(varFunc());
// //   //   getEmployeeName();
// // }
// // getEmployeeDetails();

// function getMyName(callBackFunction) {
//   callBackFunction();
// }

// getMyName(function () {
//   console.log('I am a callback function.');
// });

// function getEmployeeDetails() {
//   let name = 'John Doe';
//   return function getEmployeeName() {
//     console.log(name);
//   };
// }

// let employeeName = getEmployeeDetails();
// employeeName();

function getId() {
  let id = 0;
  return function idIncrement() {
    id++;
    console.log(`The current ID of the user is ${id}`);
  };
}

const incrementId = getId();

incrementId();
incrementId();
incrementId();
