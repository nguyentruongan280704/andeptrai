// array - mảng
// array gần giống như một danh sách 
// array chứa các phần tử có tính chất gần tương đồng

// // 1. khai báo
// let players = ["messi","ronadol","bachkaman"];

// let randomarray = ["an", 18, true, palse, [10,20],{}];

// let students = [,{},{},{}]; //json

// 2 các thao tác CRUD với mảng
// c create (tạo mới)

// phương thức tạo mới cầu thủ thêm mới phần tử mảng: biến.push()
// console.log(players);
// players.push("neymar");
// console.log(players);

// thêm vào đầu mảng
// console.log(players);
// players.push("An");
// console.log(players);

// R - read (đọc, lấy phần tử ra khỏi mảng)
// .length (độ dài)
// console.log(players.length);

// index 0 -> length - 1
// console.log(players[0]);
// console.log(players[1]);
// console.log(players[2]);


// let lastIndex = players.length - 1
// console.log(players[lastIndex]);


// read all (duyệt qua mảng)
// for(let i = 0; i <= players.length; i = i + 1){
// let player = players[i];
//     console.log(i,player);
// }

// // array (index)det qua mang

// for(let player of players){
//     console.log(player);
// }

// // for .. of la vong lap của
// // U - ắp đết ( cập nhật , làm mới ....)
// players[3]='an';
// console.log(players);
// //  D - delete ( xóa)
// // xóa chuỗi
// // .pop()
// players.pop();
// console.log(players);

// // xóa đầu
// players.shift();
// console.log(players);

// // xóa tại vị trí bất kì
// // .splice(index, number) bắt đầu từ đâu , và số lượng xóa
// players.splice(1,2);
// console.log(players);



// Ex1:
// Cho một mảng
// let todoList = ["Do homework at 8pm", "Read document at 12pm"];
// Tạo một ứng dụng todo list
// Cho người dùng nhập vào 5 chữ cái C/R/U/D/E
// Khi người dùng nhập vào
// C --- Cho người dùng nhập vào nội dung của todo mới
//   --- Thêm todo mới đó vào cuối mảng
//   --- In ra toàn bộ todo có trong mảng theo dạng 1. Do Homework...
//                                                  2. Read....
// R --- In ra toàn bộ todo có trong mảng theo dạng 1. Do Homework...
//                                                  2. Read....
// U --- Hỏi người dùng vị trí của todo muốn update
//   --- Cho người dùng nhập vào nội dung mới của todo muốn update
//   --- Tiến hành update
//   --- In ra toàn bộ todo có trong mảng theo dạng 1. Do Homework...
//                                                  2. Read....
// D --- Hỏi người dùng vị trí của todo muốn xoá
//   --- Tiến hành xoá
//   --- In ra toàn bộ todo có trong mảng theo dạng 1. Do Homework...
//                                                  2. Read....
// E --- Biến chương trình thành một vòng lặp vĩnh cửu và khi người
//       dùng nhập vào E thì thoát khỏi chương trình

// let todoList = ["di hoc", "an", "bi a", "ngu"];

// while (true) {

//     let C = prompt("C/R/U/D/E");
//     if (C === "E") {
//         state = false;
//         break;
//     } else if (C === "C") {
//         let D = prompt("nhap ");
//         todoList.push(D);
//         console.log(todoList);
//     } else if (C === "R") {
//         console.log(todoList);
//     } else if (C === "U") {
//         let x = Number(prompt("vi tri muon thay doi"));
//         let v = prompt("noi dung moi");
//         todoList[x] = v
//         console.log(todoList);
//     } else if (C === "D") {
//         let f = prompt("vi tri muon xoa");
//         todoList.pop();
//         console.log(todoList);
//     } else {
//         console.log("cút");
//     }


// }


// // Ex2:
// // Cho 2 mảng
// let store = ["Chocolate", "Candy", "Cotton Candy", "Marshmellow", "Cookies"];
// let cart = [];
// for (let i = 0; i <= store.length; i = i + 1){
//     console.log(`${i + 1}. ${store[i]}`);
// }
//   let userInput = prompt("C,R,U,D,E").toLowerCase();
//   if (userInput === "c"){
//     // logic create
//     let Item = prompt("nhap vao");
//     // check if item exist in store
//     let findindex = -1;
//     for(let i = 0; i <= store.length - 1; i = i + 1){
//         if (Item === store[i]){
//             findindex = i;
//         }
//     }
//     if (findindex === -1){
//         console.log("item is not ");
//     }else{
//     //    check if exist in cart
//     // [["chocolate", 1], ["Candy",2]]--- arr [1][1]
//     // mulli- dimensional array
//     let(findindex2 = -1);
//     for (let i = 0; i <= cart.length; i = i + 1){
//         if (Item === cart[i] [0]){
//             findindex2 = i;
//         }
//        let number = Number(prompt("please input your number"));
//        if (findindex2 === -1){
//         cart.push([Item, number]);
//        }else{
//         cart[findindex2][1] = cart[findindex2][1] + number
//        }
//        for (let i = 0; i <= cart.length - 1; i = i + 1){
//         console.log(`${i}. ${cart[i][0]} - ${cart[i][1]}`);
//        }
//     }
//     }
//   }else if (userInput === "r"){
//     // logic read
//   }else if (userInput === "u"){
//     // logicdate
//   }else if (userInput === "d"){
//     // loguc delete
//   }else if (userInput === "e"){

//   }
    

// toUpperCase(): biến chữ thành dạng viết thường
// toLwerCase (): biến chữ thành dạng viết thường

// Tạo một ứng dụng mua hàng trong store
// B1: In ra toàn bộ những những item có trong store
// Theo dạng 1. Chocolate
//           2. Candy
//           3. ....

// B2: Cho người dùng nhập vào 4 chữ cái C/R/U/D/E
// C --- Cho người dùng nhập vào Item có trong store
//   --- Tiến hành kiểm tra xem item này có trong store không?
//       --- Nếu không có thì in ra màn hình "Item is not available"
//       --- Nếu có thì tiếp tục kiểm tra trong cart
//          --- Nếu item đã có trong cart rồi
//              --- Tiến hành tăng số lượng của item lên
//          --- Nếu item chưa có trong cart
//              --- Tiến hành cho người dùng nhập vào số lượng
//              --- Thêm một mảng mới với dạng [item, number] vào trong mảng cart
//              --- VD: [["Chocolate", 1], ["Cookies", 2]];
//              --- Tiến hành in ra toàn bộ sản phẩm có trong cart theo dạng
//              --- 1. Chocolate - 1
//              --- 2. Cookies - 2

// R --- In ra toàn bộ những những item có trong store
//   --- Theo dạng
//   --- 1. Chocolate
//       2. Candy
//       3. ....
//   --- In ra toàn bộ những những item có trong cart
//   --- Theo dạng
//   --- 1. Chocolate - 1
//       2. Cookies - 2
//       3. ....

// U --- Hỏi người dùng vị trí của item muốn update số lượng
//   --- có trong cart
//   --- Tiến hành kiểm tra xem item đó đã có trong cart chưa
//   --- Nếu chưa có thì in ra "Item is not in cart"
//   --- Nếu có thì tiến hành cho người dùng nhập số lượng mới
//   --- của item vào
//   --- In ra toàn bộ những những item có trong cart
//   --- Theo dạng
//   --- 1. Chocolate - 1
//       2. Cookies - 2
//       3. ....

// D --- Hỏi người dùng vị trí của item muốn xoá khỏi cart
//   --- Tiến hành kiểm tra xem item đó đã có trong cart chưa
//   --- Nếu chưa có thì in ra "Item is not in cart"
//   --- Nếu có thì tiến hành xoá phần tử khỏi mảng cart
//   --- In ra toàn bộ những những item có trong cart
//   --- Theo dạng
//   --- 1. Chocolate - 1
//       2. Cookies - 2
//       3. ....

// E --- Biến chương trình thành một vòng lặp vĩnh cửu cho đến
//   --- khi nào người dùng nhập vào chữ cái E
//   --- In ra toàn bộ những những item có trong cart
//   --- Theo dạng
//   --- 1. Chocolate - 1
//       2. Cookies - 2
//       3. ....
//   --- Sau đó in ra câu "Thank you for purchasing" và thoát chương trình




// Ex2:
// Cho 2 mảng
let store = ["Chocolate", "Candy", "Cotton Candy", "Marshmellow", "Cookies"];
let cart = [
  ["Candy", 10],
  ["Chocolate", 10],
];

// Tạo một ứng dụng mua hàng trong store
// B1: In ra toàn bộ những những item có trong store
// Theo dạng 1. Chocolate
//           2. Candy
//           3. ....
let state = true;
while (state) {
  console.log("----------------------------");
  for (let i = 0; i <= store.length - 1; i = i + 1) {
    console.log(`${i + 1}. ${store[i]}`);
  }
  console.log("----------------------------");
  // .toUpperCase() -> convert chữ thành dạng viết hoa toàn bộ (HELLO WORLD)
  // .toLowerCase() -> convert chữ thành dạng viết thường (hello world)

  let userInput = prompt("Please input C/R/U/D/E").toLowerCase();

  if (userInput === "c") {
    // logic create
    let buyItem = prompt("Input your buying item");

    // check if buyItem exist in store
    let findIndex = -1;
    for (let i = 0; i <= store.length - 1; i = i + 1) {
      if (buyItem === store[i]) {
        findIndex = i;
      }
    }
    if (findIndex === -1) {
      console.log("Item is not available");
    } else {
      // check if exist in cart
      // multi-dimensional array
      let findIndex2 = -1;
      for (let i = 0; i <= cart.length - 1; i = i + 1) {
        if (buyItem === cart[i][0]) {
          findIndex2 = i;
        }
      }
      let number = Number(prompt("Please input your number"));
      if (findIndex2 === -1) {
        cart.push([buyItem, number]);
      } else {
        cart[findIndex2][1] = cart[findIndex2][1] + number;
      }
      for (let i = 0; i <= cart.length - 1; i = i + 1) {
        console.log(`${i + 1}. ${cart[i][0]} - ${cart[i][1]}`);
      }
    }
  } else if (userInput === "r") {
    // logic read
    // store
    for (let i = 0; i <= store.length - 1; i = i + 1) {
      console.log(`${i + 1}. ${store[i]}`);
    }
    // cart
    for (let i = 0; i <= cart.length - 1; i = i + 1) {
      console.log(`${i + 1}. ${cart[i][0]} - ${cart[i][1]}`);
    }
  } else if (userInput === "u") {
    // logic update
    let updatedItem = prompt("Please input updated item name");
    // logic search in cart
    let findIndex = -1;
    for (let i = 0; i <= cart.length - 1; i = i + 1) {
      if (updatedItem === cart[i][0]) {
        findIndex = i;
      }
    }
    if (findIndex === -1) {
      console.log("Item is not in cart");
    } else {
      let newNumber = prompt("Please input new number");
      // update
      cart[findIndex][1] = newNumber;
      for (let i = 0; i <= cart.length - 1; i = i + 1) {
        console.log(`${i + 1}. ${cart[i][0]} - ${cart[i][1]}`);
      }
    }
  } else if (userInput === "d") {
    // logic delete
    let deletedItem = prompt("Please input deleted item name");
    // logic search in cart
    let findIndex = -1;
    for (let i = 0; i <= cart.length - 1; i = i + 1) {
      if (deletedItem === cart[i][0]) {
        findIndex = i;
      }
    }
    if (findIndex === -1) {
        console.log("Item is not in cart");
      } else {
        // delete
        cart.splice(findIndex, 1);
        for (let i = 0; i <= cart.length - 1; i = i + 1) {
          console.log(`${i + 1}. ${cart[i][0]} - ${cart[i][1]}`);
        }
      }
    } else if (userInput === "e") {
      // break from loop
      console.log("Thank you for shopping");
      state = false;
    } else {
      console.log("Invalid command");
    }
  }