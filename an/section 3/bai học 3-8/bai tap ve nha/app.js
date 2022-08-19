//  1
// Viết một đoạn mã JS cho người dùng nhập vào một chuỗi số ngăn cách nhau bởi dấu phẩy. 
// Tính tổng của các số đó và in ra ngoài màn hình console (hoặc alert)

// Cho người dùng nhập vào 1 dãy số
// let numbers = prompt("nhap");

// // Tách dãy số string đó thành 1 mảng gồm các string số
// let arr = numbers.split("")
// // Tạo một biến sum = 0 để cộng dồn
// let sum = 0;

// // Dùng vòng lặp for để duyệt qua toàn bộ phần tử có trong mảng string số ở trên
// for(let i = 0; i <= arr.length - 1; i = i + 1){
//     // Tiến hành tính tổng
//     sum = sum + Number(arr[i]);
// }
// // In ra màn hình console
// console.log(sum);

// 2
// Viết một đoạn mã JS cho người dùng nhập vào một chuỗi số được ngăn cách nhau bởi dấu phẩy.
//  Tìm số nhỏ nhất và in số đó ra màn hình console (hoặc alert)

let numbers = prompt("nhap");
let arr = numbers.split(",");
let min = arr[0];
for (let i = 0; i <= arr.length - 1; i = i + 1) {
   if(arr[i]<min){
    min=arr[i]
   }
}
console.log(min);


