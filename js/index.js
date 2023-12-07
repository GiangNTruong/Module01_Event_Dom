// //Lấy theo id
// let headingEmlement = document.getElementById("heading");
// // console.log(headingEmlement);


// //Lấy theo class
// // let itemElement = document.getElementsByClassName("item");
// // console.log(itemElement);

// //Lấy theo querySelector
// // let itemElement =document.querySelector("heading");
let itemElement =document.querySelector(".item");
console.log(itemElement);

let inputTextElement = document.querySelector('input[type="text"]');
console.log(inputTextElement);

const getItem1 = () => {
    console.log("Gọi hàm");
}
const getItem2 = () => {
    console.log("gọi hàm 2")
}
//Lấy ra phần tử button submit
// let btnSubmit = document.querySelector("#btnSubmit");
// btnSubmit.addEventListener("click", (event) => {
//     console.log("event : ", event);
// });

// //Lấy ra phần tử input
// let emailInput = document.querySelector("#emailInput");
// emailInput.addEventListener("input", (e) =>{
//     console.log("Event :" , e.target.value);
// });

//Tạo 1 mảng rỗng và lưu trữ các tên 
//Tạo nút button và input để lấy dữ liệu .Khi click và nút push tên lấy từ input vào trong mảng
const names = [];
//Lấy element của input và button
let inputElement = document.querySelector("#inputValue");
let btnSubmit = document.querySelector("#btnSubmit");
let onepieceOption= document.querySelector("#onepiece");
const radioElement = document.querySelectorAll('input[type="radio"]');
const checkboxElements = document.querySelectorAll('input[type="checkbox"]');

let genderValue ="Nam";

const hobbies  = [];

//Lấy giá trị trong checkbox
checkboxElements.forEach(element=> {
    // console.log(element.checked);
    element.addEventListener("change",(event)=>{
        //Kiểm tra nhưng ô checkbox nào được checked
        if(event.target.checked){
            hobbies.push(event.target.value);
        }
            else{
                //Tìm kiếm phần tử trong mảng
                let index=hobbies.indexOf(event.target.value);
                //xóa phần tử không tìm thấy khỏi mảng
                if(index !== -1){
                    hobbies.splice(index,1);
                }
        
        }
    });

});
/**
 * Thêm dữ liệu vào mảng
 * @param {*} value Giá trị lấy từ input
 * @param {*} arr mảng chứa dữ liệu
 */
const handleaddName = (value , arr) => {
    arr.push(value);

};
/**
 * hiển thị danh sách tên
 */
const loadData = () =>{
    console.log(names);
    console.log(genderValue);
    console.log(onepieceOption.value);
    console.log(hobbies);

};

btnSubmit.addEventListener('click', ()=>{
    const inputValue=inputElement.value.trim();

    handleaddName(inputValue,names);
//Lấy giá trị từ radio
radioElement.forEach((element) => {
    //Kiểm tra radio nào được checked thì sẽ lấy giá trị của nó
    if (element.checked){

        genderValue = element.value;
    }
});

    //Sau khi submit thì focus vào input
    inputElement.focus();

        inputElement.value="";//Reset giá trị trong ô input
        loadData();
} );
//Lắng nghe sự kiện thay đổi trong select option
onepieceOption.addEventListener("change",(event)=>{
console.log(event.target.value);
});


