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