// // bai 2
// let userInput = prompt("nhap");
// console.log(userInput);
// let arr = userInput.split(",");   
// console.log(arr);
// let min = arr[0]
// for (let i = 0; i <= arr.length - 1; i = i + 1){
//     let item = arr[i]
//     item =  Number(item)  
//     if (min > arr[i]){
//         min = arr[i]
//         }
// }console.log(min);

// bai 4
let  todoList = ["Do to bed at 11pm", "Do homework at 8pm"];
let a = prompt("C,R,U,D");
while(state)
if (a === "C"){
    let newTodo = prompt("Nhapaj vao todo moi:")
    todoList.push(newTodo);
    console.log(todoList);
    for (let i = 0; i <= todoList.length -1; i++){
        console.log(i+1 ,todoList[i]);
    }
}
if (a === "R"){
      console.log(todoList);

}
if (a === "U"){
    let todo2 = prompt("vi tri muon thay the");
    let todo3 = prompt("noi dung moi");
    todoList[todo2] = todo3
    console.log(todoList);
}
if (a === "D"){
    let todo3 = prompt("vi tri muon xoa");
    todoList.splice(index.number);
    console.log(todoList);
}
       
    