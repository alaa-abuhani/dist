// //select itemcontainer
// var itemContainer = document.querySelectorAll('.wrapper-item-slide div.item .product ');
// // ajax request
// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             let obj = JSON.parse(this.responseText);
//             let productNum = obj.length;

//             for (let i = 0; i < itemContainer.length; i++) {
//                 //check number of item 
//                 if (itemContainer.length <= productNum) {
//                     creatProduct(itemContainer[i], obj[i]);
//                 }
//             }
//         }

//     };
//     xhttp.open("GET", "pro.json", true);
//     xhttp.send();
// }
// loadDoc();

// //creat product
// function creatProduct(selectContainer, obj) {

//     //creat item
//     let parent = document.createElement("div");
//     parent.className = "card";
//     selectContainer.appendChild(parent);

//     //appeed img
//     let child1 = document.createElement("img");
//     let chdAtt1 = document.createAttribute("src");
//     chdAtt1.value = obj["product-img"];
//     child1.setAttributeNode(chdAtt1);
//     let chdAtt2 = document.createAttribute("alt");
//     chdAtt2.value = ("Card image cap");
//     child1.setAttributeNode(chdAtt2);
//     child1.className = "img";
//     parent.appendChild(child1);

//     //append card body
//     let child2 = document.createElement("div");
//     child2.className = "card-body";
//     parent.appendChild(child2);
//     //append product name
//     let first = document.createElement("h5");
//     let firstAtt = document.createTextNode(obj["product-name"]);
//     first.appendChild(firstAtt);
//     child2.appendChild(first);
//     //append separator
//     let sept = document.createElement("div");
//     sept.className = "separator";
//     child2.appendChild(sept);
//     //append product brand
//     let two = document.createElement("p");
//     let twoAtt = document.createTextNode(obj["product-brand"]);
//     two.appendChild(twoAtt);
//     child2.appendChild(two);
//     //append product line
//     let three = document.createElement("h6");
//     let threeAtt = document.createTextNode(obj["product-line"]);
//     three.appendChild(threeAtt);
//     child2.appendChild(three);

//     console.log(selectContainer);
// }
$(document).ready(function () {

    $('.wrapper-item-slide ').slick({
        infinite: false,
        slidesToShow: 4.5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        // centerMode: true,
        // centerPadding: '20%',
        // rtl: true,

        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // infinite: true,
                }
            },

            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 300,
                settings: {
                    settings: "unslick"
                }
            }

        ]

    });


});
// $(document).ready(function () {



//     function logResults(json) {
//         console.log(json)
//     }

//     $.ajax({
//         url: "https://raw.githubusercontent.com/cben/sandbox/master/json/index.json",
//         dataType: "json"
//     }).done(function (result) {
//         console.log(result);
//     });


// });


// find elements
// var dataContainer = $("#data-container");
// var btn = $(".btn1");

// // handle click and add class
// btn.on("click", function (e) {

//     $.ajax({
//         url: "https://raw.githubusercontent.com/alv2017/DataSets/master/Europe/europe-capital-cities.json",
//         dataType: "json"
//     }).done(function (result) {
//         console.log("hi");
//     });

// });


// $(document).ready(function () {

//     $.ajax({

//         url: "https://raw.githubusercontent.com/alv2017/DataSets/master/Europe/europe-capital-cities.json",
//         dataType: 'json',
//         cache: false,
//         success: function (data, status) {
//             // $.each(data ,function(index){
//             //     $("#data").append('<div>'+ data[index].username + '</div>');
//             // });
//             console.log("hi");

//         },
//         error: function (xhr, textstatus, err) {
//             console.log(xhr);
//             console.log(textstatus);
//             console.log(err);


//         }


//     });
// })
$(document).ready(function () {
    $("button").click(function () {
        $.ajax({
            url: "https://github.com/alaa-abuhani/a/blob/master/pro.json",
            success: function (result) {
                console.log("hi");
            }
        });
    });
});