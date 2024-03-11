// Ví dụ 1: Tính tổng các số chẵn của mảng. Mảng như sau:
// var mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const tongsoChan = (array) => {
//     let tong =0;
//     for(let i=0;i<array.length;i++){
//         if(array[i]%2==0) tong +=array[i];
//     }
//     return tong;
// }
// const result = tongsoChan(mang);
// console.log(result);

// Ví dụ 2: Viết chương trình cho người dùng nhập vào số n lớn hơn 0, sau đó dựa vào n tính giá trị của 
// biểu thức:
// bieuThuc = 1/n + 2/n + 3/n + ... + n/n

var n; 
n=prompt("Nhập vào n : ");
var bieuThuc=0;
for(let i=1;i<=n;i++){
    bieuThuc+=i/n;
}
console.log(bieuThuc);