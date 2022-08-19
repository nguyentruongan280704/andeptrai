// Loop - vòng lặp

// javascript -> ES6 (advancsd JS) -> typescript 
// -> nodeJS (MongoDB , MySQL) -> nestJS (node typescript)
// -> react

// console.log("hello wold");
// vòng lặp có tác dụng lặp đi lặp lại 1  đoạn code nào đó
// với só lần biết trc hoặc k biết trc

// For loop - vòng lặp for
// lặp với số lầm biết trc

// for(let i = 0; i <4; i = i + 1){
//     console.log(i,"helo wold");
// }
// sử dụng if else là sử dụng theo yêu cầu của bài toán

// counter - biến đếm
// lần lặp đầu tiên: i = 0; i < 4 (true) console.log("hello ưold");,i = 0 + 1 (1)
// lần lặp thế hai: i = 1; i < 4 (true) console.log("helo wold");i = 1 + 1(2)
// lần lặp thứ ba : i = 2; i < 4 (true) console.log("hello wold");i = 2 + 1(3)
// lần thứ tư : i = 3 ; i < 4 (true) console.log("hello wold");i = 3 + 1(4)
//  lần thứ năm : i = 4 : i < 4 (false)//câu lệnh bị dừng thực hiện




// lặp theo chiều ngược lại
// vẫn lặp 4 lần nhưng theo chiều 4 - 0

// for(let i = 4; i > 0; i = i - 1){
//     console.log(i,"helo wold");
// }
// sử dụng if else là sử dụng theo yêu cầu của bài toán

// counter - biến đếm
// lần lặp đầu tiên: i = 0; i < 4 (true) console.log("hello ưold");,i = 0 + 1 (1)
// lần lặp thế hai: i = 1; i < 4 (true) console.log("helo wold");i = 1 + 1(2)
// lần lặp thứ ba : i = 2; i < 4 (true) console.log("hello wold");i = 2 + 1(3)
// lần thứ tư : i = 3 ; i < 4 (true) console.log("hello wold");i = 3 + 1(4)
//  lần thứ năm : i = 4 : i < 4 (false)//câu lệnh bị dừng thực hiện




 // Exercise 1:
// Tính tổng của biểu thức A = 1 + 2 + 3 + ... + 10

// Ex2:
// Cho người dùng nhập vào n
// Tính tổng của biểu thức B = 1 + 2 + 3 + ... + n

// Ex3:
// Cho người dùng nhập vào số n
// Tính tổng của biểu thức C = 1^2 + 2^2 + 3^2 + ... + n^2

// Ex4:
// Cho người dùng nhập vào số n
// Tính tích của biểu thức D = 1 * 2 * 3 * ... * n

// Ex5:
// Cho người dùng nhập vào số n
// Tính tổng của biểu thức E = 1/1 + 1/2 + 1/3 + ... + 1/n


1
// let tong = 0
// for (let i = 1 ; i <= 10; i = i + 1){
//     tong = tong + i;
// }
// console.log(`tong = ${tong}`);


// 2
// let tong = 0
// let n = Number(prompt("nhap so n"));
// for (let i = 1 ; i <= n  ; i = i + 1){
//     tong = tong + i;
// }
// console.log(`tong = ${tong}`);

// 3
// let tong = 0;
// let n = Number(prompt("nhap so n"));
// for  (i = 1 ; i <= n ; i = i + 1 ){
//     tong = tong + tong ** i;

// }
// console.log(`tong = ${tong}`);

// bai 4
// let tong = 1;
// let n = Number(prompt("nhap so n "));
// for (let i = 1; i <= n ; i = i + 1){
//      tong = tong * i ;
// }
// console.log(`tong = ${tong}`);

// bai 5
// let tong = 0
// let n = Number(prompt("nhap so n"));
// for (let i = 1; i <= n ; i = i + 1){
//     tong =  tong + 1 / i
// }
// console.log(`tong ${tong}`);

// string (chuỗi)
// let str = 'hello world';
// index(chỉ số)
// 0 ----> length - 1
// 0 ---> 10
// length = 11
// length (độ dài của chuỗi)
// console.log(str.length);


// truy cập vào từng phần tử trong chuỗi
// thông qua index (chỉ số)

// console.log(str[0]);
// console.log(str[10]);
// console.log(str[20]);
// let lastIndex = str.length - 1;
// console.log(str[lastIndex]);

// thao tac voi toan bo phan tu co trong chuoi
// for(let i = 0; i <= str.length - 1 ; i = i + 1){
//     console.log(i, str[i]);
// }

// Ex6:
// Cho người dùng nhập vào một chuỗi bất kỳ
// In ra chuỗi ngược lại


// Ex7:
// Cho người dùng nhập vào một chuỗi bất kỳ
// In ra chuỗi mới với mỗi ký tự của chuỗi cũ được biến thành dạng <ký tu>
     
// bai 6
// let a = String(prompt("nhap chuoi"));
// let b = String();
// for(i = a.length - 1; i >= 0; i = i - 1){
//     b = b + a[i]
// }console.log(b);

// bai 7
// let a = Number(prompt("nhap vao"));
// let b = String();
// for (i = 0 ; i <= a.length - 1; i = i + 1){
//     b = b + `<a ${[i]}>`;
// }console.log(b);


// while loop
// lặp đi lặp lại mọt đoạn code với số lần
// for (let i = 0; i <= 10; i = i + 1){
//     console.log(i,"hello world");
// }

// let i = 0;
// while (i <= 10){
//     // block code
//     console.log(i,"hello world");
//     i = i + 2;
// }

// // lặp lại với số lần không biết trc
// // while ; miễn là vòng lặp đúng thì lặp lại mãi


// while (hathihoai) {
//     // block code


//     // In the future
//     if(hathihoai){
//         hathihoai = false;

    // }

// }



// example
// let i = 0;
// let state = true;
// while (state){
//     i = i + 3;
//     console.log(i);
//     if (i === 30){
//         state = false
//     }
// } 

// let state = true
// while (state) {
//     let userInputn = prompt("Please input anythinh");
//     console.log(userInputn)
//     if (userInputn === "E"){
//         state = false;
//         // hoặc nhập chữ break;
//     }
// }


// Ex8:
// let cart = `vanilla, chocolate, cookies, sting, redbull`;
// Cho sẵn một chuỗi cart tương tự như giỏ hàng của bạn
// Điều hướng người dùng chỉ nhập vào 5 chữ cái C/R/U/D/E
// -- C: Hỏi người dùng item muốn thêm vào cart
// ----- Tiến hành thêm item vào cart và in ra màn hình
// Ví dụ: input: thit cho
//        output: `vanilla, chocolate, cookies, sting, redbull, thit cho`
// -- R: In ra toàn bộ những item trong cart
//        output: `vanilla, chocolate, cookies, sting, redbull, thit cho`
// -- U: Hỏi người dùng muốn update item nào trong cart
// ----- Cho người dùng nhập vào item muốn thay thế trong cart
// ----- Tiến hành thay và in ra màn hình các item trong cart
// -- D: Hỏi người dùng muốn xoá item nào trong cart
// ----- Tiến hành xoá và in ra màn hình các item trong cart
// -- E: Biến chương trình thay vòng lặp vĩnh cửu cho đến khi
// ----- người dùng nhập vào E thì in ra màn hình thank you

// let cart = `vanilla, chocolate, cookies, sting, redbull`;
// let state = true
// while (state) {
//     let userInput = prompt("Nhap C/R/U/D/E");
//     if (userInput === "C"){
//         //Them san pham moi vao cart = câu lệnh prompt
//         let item = prompt("may muon gi");
//         //Noi chuoi, noi item vừa thêm vào string cart
//         cart = cart + `${item}`;
//         //In ra man hinh console strnig cart
//         console.log(cart);
//     }else if (userInput === "R"){
//         // B1: In ra màn hình console string cart
//         console.log(cart);
//     }else if (userInput === "U"){
//         // B1: Sử dụng câu lệnh promt cho người dùng nhập vào item muốn update
//         let A = prompt("may muon updeta cai gi");
//         // B2: Sử dụng câu lệnh promtp cho ng dùng nhập vào item mới thay thế cho item trên (google)
//         let B = prompt("MAY MUON THAY THE ITEM NAO");
//         // B3: tiến hành update và in ra màn hình console string cart khi được update
//         console.log(cart.replace(A,B));
//     }else if (userInput === "D"){
//         // B1: Sử dụng câu lệnh promt cho người dùng nhập vào item muốn xoa
//         let c = prompt("m muon xoa cai nao");
//         // B2: TIến hành xóa và in ra màn hình console string cart sau khi dc xóa item đó đi
//         console.log(cart.replace("c"));

//     }else if (userInput === "E"){
//         // Dừng chương trình
//         console.log("Thank kiu you for shooping");
//         state = false
    // }
// }