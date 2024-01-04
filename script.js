var lastName; //camelCase
// console.log(lastName);
var lastNameString = "Ban da dang nhap thanh cong!";
// console.log(lastNameString);

// toan tu so hoc
/**
 * Phep Cong
 * Phep Tru
 * Phep nhan
 * Phep chia
 * Luy thua
 * Chia lay du
 * Tang 1 don don vi
 * Giam 1 don vi
 */

// toan tu gan

var mathGan = 15;
// console.log(mathGan);

// toan tu so sanh

var a = 2; // number
var b = "2"; // string tu dong ep kieu loai bo "" -> 2
var c;
// console.log(b == a); // chi so sanh ve gia tri cua 2 bien da luu tru -> true
true / false;
c === b;
// b = number; // c undefined
true / false;
// console.log(a === b);

var d = 5;

var e = d++; // 5

// console.log(e);

// Cac kieu du lieu nguyen thuy: number , boolean, string, undefined, NaN, null, symbol

//- 1 -- Number
var f = -2.14 / 1 / 0.002 / 1.6;
// undefined
var c;
// string
var lastNameString = "asdfasdasdasdasdasdadasdsad";
// console.log(lastNameString);

//boolean -> true / false

var bool = 5 === "5";
// console.log(bool);

// null
var checkNull = null;

// console.log(checkNull);

//NaN

var notNumber = "nana" / 2;
// console.log(notNumber); // NaN

//Cac kieu du lieu phuc tap: array, object, function

var arr = [1, 2, 3, 4, 5, 100]; // mang -> array [ 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 ]
// console.log(arr[arr.length - 1]); // length la do dai arr.length = 6 - 1

// array method

// object

var dog = {
     name: "mickey",
     age: 10,
     footer: 4,
     wife: true,
};

var result = dog.name;
// console.log(result);
// document.write(result);

// tạo ra môt mảng có 5 phần tử là 2, 5,7, 9, 10 sau đó lấy ra số 7 và sô 10

var arrList = [2, 5, 7, 9, 10];

// console.log("so bay: ", arrList[2], "so cuoi: ", arrList[arrList.length - 1]);

// tạo ra môt đối tượng là con mèo ; sau đó lấy ra toàn bộ dữ liệu của con mèo in ra màn hình // viet ra màn hình

var cat = {
     name: "kitty",
     footer: 4,
     age: 12,
};

// document.write(cat.name + " " + cat.footer + " " + cat.age);

// tạo ra biến a có giá trị là 5 và biến b có giá trị là 7 , sau đó sử phép so sánh để so sánh kiểu và giá trị của nó in ra màn hình
var a1 = 5;
var b1 = 7;

// console.log(a1 === b1);
// console.log(a1 == b1);

// tien to

// console.log(++d); //gia tri = 6
// toan tu tien to

// var e = d++; // copy gia tri vao bien e

// console.log(e); // tra ra ket qua da copy

// console.log(d++); // thuc hien phep toan hau to va -> tra ra ket qua

// var _Name = "123";

// console.log() console.error() / console.warn()

// alert(lastNameString);

// alert()

// confirm("Ban bao nhieu tuoi?");

// confirm()

// prompt("Do you want to continue?");

// prompt()

// setTimeout(() => {
//      console.log(lastNameString);
// }, 1000);

// settimeout()

// setInterval(() => {
//      console.log(lastNameString);
// }, 1000);
/* 
 
 lorem
 abc 



*/

/**
 * Cach dat bien
 * Comment trong js
 *
 *
 *
 *
 *
 *
 *
 *
 */

var condition = 10;
var condition2 = 7;

// && thì cả 2 vế đều phải thảo mãn điều kiện
// || thì chỉ cần 1 trong 2 thỏa mãn điều kiện
//  (!) điều kiện not phủ định

// console.log(str);

// Làm việc với chuỗi

// -> length đếm độ dài của chuỗi
// -> trim() loại bỏ các khoảng trống ở 2 đầu của chuỗi đó.
// -> search("kí tự bạn cần tìm") trả ra index bắt đầu tìm thấy kí tự bạn muốn tìm và trả về -1 khi kí tự không tìm thấy
// -> toUpperCase() Chuyển toàn bộ các kí tự trong chuỗi thành in hoa
// -> toLowerCase() Chuyển toàn bộ các kí tự trong chuỗi thành in thường
// -> split() khi option chỉ là "" chuỗi rỗng thì sẽ trả về kết quả là mảng chứa từng kí tự một, khi option là "," nó sẽ tìm trong chuỗi xem có , thì sẽ tách ra các phần tử ngăn cách bởi dấu phẩy. lưu ý:  có thể trong chuổi là các dấu khác thì có thể thay đổi tùy ý.
// -> replace('từ muốn thay đổi', 'từ sẽ thay đổi')
// -> slice(index1,index2) dùng để cắt bắt từ a -> b
// -> charAt(index) lấy kí tự mình muốn thông qua index của nó trong chuỗi

/**
 * bài 1: Tạo ra 1 biến có 10 từ, sau đó tách ra từng từ 1 và in ra màn hình. split.
 * bài 2: Cho một biến str = "Xin chào Các bạn!", hãy sửa để in ra màn hình thành "xin chào các bạn!"
 * bài 3: Cho một biến = "Alo, chào bạn" hãy tìm ra từ Alo nếu tìm thấy thì in ra "Tìm thấy" ngược lại "Không tìm thấy"
 * bài 4: Yêu cầu người dùng nhập số năm sinh vào prompt , sau đó check xem đã đủ 18 hay chưa nếu rồi hiện popup thông báo "bạn đã đủ 18 tuổi", ngược lại thì "bạn chưa đủ 18 tuổi"
 */

// bài 1:

// var str1 = "Hello world!";
// str1.split("");

// // bài 2:

// var str2 = "Xin chào Các bạn!";
// //c1:
// str2.toLowerCase();

// // c2:
// var editStr = str2.replace("X", "x");
// editStr = editStr.replace("C", "c");

// bài 3:
// let chuoi = "Alo, chào bạn";
// let Str = chuoi.split("Alo");

// if (Str == "Alo") {
//      let phanConLai = Str[0];
//      console.log(phanConLai);
// } else {
//      console.log("Không tìm thấy từ 'Alo' trong chuỗi.");
// }

// //bài 4
// var yearValue = prompt("Hãy nhập năm sinh để xác nhận!");
// if (yearValue > 1900) {
//      console.log(`Bạn đã đủ 18 tuổi, tuổi của bạn là : ${2023 - yearValue}`);
// } else {
//      console.log("năm sinh không hợp lệ!");
// }

//Làm việc với number

// cách ép string -> number => Number() , parseInt(), parseFloat()
// cách cơ bản tạo ra number -> new Number()
// làm tròn number -> toFixed()
var age = 1.24; // >5<

var roundNum = age.toFixed(1);

// console.log(roundNum);

// Làm việc với mảng:

// c1: +join: có thể biến mảng thành chuỗi và cho kí tự vào các khoảng cách giữa các từ.
// c2: +push: dùng để thêm 1 phần tử vào cuối mảng và không tạo ra mảng mới
// c3: +shift: dùng để loại bỏ phần tử đầu tiên trong mảng
// c4: +unshift: dùng để thêm phần tử đầu tiên vào trong mảng
/**
 *  c5: +splice : TÍNH NĂNG
 *  +) thứ nhất: có 2 options:
 *   - option1: index muốn xóa
 *   - option2: số lượng cần xóa .
 *  +) thứ hai: thêm các phần tử vào dựa trên index.
 *  +) thứ ba : Sử dụng để thay thế dựa trên index.
 *  */
// c6: +concat: hợp nhất các mảng lại với nhau.
// c7: +slice : sử dụng để cắt và trả ra một mảng bản sao chỉ chứa các phần tử nó cắt và không ảnh hưởng tới mảng cũ.
// spread es6: toán tử rải
var num = [1, 2, 3, 4, 5, 6, 7, 100, 8, 9, 10]; // nắm gạo -> [1, 2, 3, 4, 5, 6, 7, 100] -> ...num -> 1,2,3,4,5,6,7,100
// console.log("Số lớn nhất: ", Math.max(...num)); //số lớn nhất
// console.log("Số lớn nhất: ", Math.min(1, 2, 3, 4, 5, -1, 6, 7, 8, 9, 10)); // số bé nhất

// console.log(Math.round(Math.abs(-2.6))); // 3 // round làm tròn như toFixed() và abs là tuyệt đối
Math.floor(-2.4); // -3 // làm tròn dưới
Math.random(); // tạo ra một số ngẫu nhiên từ 0 -> 1

// var x = 6;
// var v;
// for (var i = 0; i < x; ++i) {
//      v = i;
// }
// console.log(v);
// switch (x) {
//      case 1:
//           console.log("case 1");
//           break;
//      case 2:
//           console.log("case 2");
//           break;
//      case 3:
//           console.log("case 3");
//           break;
//      case 4:
//           console.log("case 4");
//           break;
//      case 5:
//           console.log("case 5");
//           break;
//      default:
//           console.log("không tìm thấy");
// }

// spread

// var arrSP = [1, 2, 3];

// var arrSP2 = { key3: "value3" };

// console.log(arrSP2);

//rest

// function learnRest(...rest) {
//      console.log(rest);
// }

// // learnRest(...arrSP, 5, 6);
// learnRest(...arrSP, 5, 6);

// có 3 loại function
// function learnRest() {
//      console.log("đã gọi");
// }

// learnRest();
// var aaa;
// // aaa();

// function learnRest() {
//      console.log("đã gọi");
// } // declaration function
// var aaa = function () {
//      console.log("đã gọi");
// }; //expression function
// const aaa1 = () => {
//      console.log("đã gọi");
// }; // arrow function

// aaa();
// aaa1();

//hoisting : khi nhắc đến hoisting thì hiểu ngay là nhấc bổng lên đầu nó

// var , let const -> var có hoisting ,

// console.log(a8); // báo lỗi reference error (vùng không thể truy cập được)

// tham trị: nguyên thủy ->  ngoại trừ object, array

//tham chiếu: phức tạp: object, array, function,

//Hàm là một khối mã nó dùng để làm 1 công việc cụ thể.
//Hàm không thực thi khi định nghĩa, nó sẽ thực thi khi được gọi, nó có thể nhân các tham số, và trả về 1 giá trị.

//method mang
// foreach -> lặp qua các phần tử trong mảng
// map -> render mã html ra giao diện, và trả về kết quả khi return
// filter -> dùng để lọc một ddieuf kiện nào đó và trả về 1 mảng mới chứa kết quả khớp với điều kiện
// find -> dùng để tìm giá trị phù hợp với điều kiện và nó sẽ chỉ lấy thằng đầu tiên mà nó tìm thấy.
// every -> tất cả các phần tử trong mảng phải thỏa mãn điều kiện thì mới trả về là true, chỉ cần 1 phần tử không thỏa mãn đk thì nó sẽ false
// some -> chỉ cần 1 phần tử thỏa mãn điều kiện thì nó sẽ trả về kết quả là true
// reduce -> sử dụng reduce khi tính toán và trả về kết quả .
// includes -> có thể sử dụng để tìm xem có phần đấy trong mảng hoặc object hay chuỗi không, nếu có trả về true và ngược lại là false, chú ý: khi có object thì phải lặp qua hoặc trỏ vào key để lấy value.

//DOM
// cần biết về element = <input type="text" name="" id="input"> và attribute = VD: id, class, href, onclick,...

// getElementsById()
// getElementsByClassName()
// getElementsByTagName()
// querySelector()
// querySelectorAll()
// createElement()
var elPr = document.querySelector(".form-group");
var el = document.createElement("p");
console.log(el);
// xử lí element
// innerHTML , innerText, textContent, classList-> add,remove, contains  |, append, appendChild.

/**
 * click
 * dblclick
 * mousedown
 * mouseup
 * mousemove
 * keydown
 * keyup
 * keypress
 * load
 * unload
 * resize -> xảy ra khi sự kiện thay đổi kích thước
 * submit
 * change
 * input
 * play
 * pause
 * scroll
 * DOMContentLoaded
 * dragover
 * dragout
 * dragdown
 */

// click

// dblclick
// mousedown
// mouseup
// keydown -> event.key, event.keyCode, event.which.
// keyup
// keypress
// resize -> event.target.innerHeight, event.target.innerWidth

// btn.addEventListener("click", function (event) {
//      event.preventDefault();

// });
//scroll -> innerHeight, innerWidth, offsetHeight, offsetWidth, offsetX, offsetY,...

/**  
 * bai 1:  - Tạo một trang HTML với một đoạn văn bản bất kỳ.
   - Sử dụng `querySelector` để chọn phần tử đó và in ra console nội dung của nó.

bai 2: - Tạo một trang HTML với nhiều thẻ `<p>` chứa văn bản khác nhau.
   - Sử dụng `querySelectorAll` để chọn tất cả các phần tử `<p>` và in ra console nội dung của chúng.
bai 3 :    - Tạo một trang HTML với một đoạn văn bản bất kỳ.
   - Sử dụng `querySelector` để chọn phần tử đó và thay đổi nội dung của nó khi người dùng nhập vào một input.
bai 4: - Tạo một trang HTML với một phần tử bất kỳ.
   - Sử dụng `querySelector` để chọn phần tử đó và thêm sự kiện click để in ra console một thông báo khi người dùng click vào nó.
bai 5 : **Xử Lý Sự Kiện Keydown:**
    - Tạo một trang HTML với một input.
    - Sử dụng `querySelector` để chọn input và thêm sự kiện `keydown` để in ra console ra value cua input khi người dùng nhap vao va nhấn một phím bất kỳ. de log ra

 */

// bai1:
var btnPlay = document.querySelector(".play");
console.log(btnPlay.textContent);

// bai2:
var elP = document.querySelectorAll("p");
elP.forEach((item, index) => {
     console.log(`The p thu ${index} co noi dung la: ${item.textContent}`);
});

// bai 3:
var formTest = document.querySelector(".form-test");
var inputTest = document.querySelector(".input-test");

inputTest.addEventListener("change", (event) => {
     formTest.innerText = event.target.value;
});

// bai 4:
formTest.onclick = function () {
     alert(formTest.textContent);
};

// bai 5:

inputTest.onkeydown = function (event) {
     if (event.keyCode === 13) {
          console.log("Gia tri cua input:", event.target.value);
     }
};
