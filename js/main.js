//selector
//Task1
let colorArr=["red","green","blue"];
let colorArr2=["cyan","pink","orange"];
$("div").each(function(index){
    $(this).css("backgroundColor",colorArr[index]);
    $("p").css("color",colorArr2[index]);
})
//Task2
$(".container2 a").each(function(){
    if($(this).attr("href").includes("http://www.google.com")) this.textContent="GOOGLE";
    if($(this).attr("href").endsWith("org")) this.textContent="IEEE";
    if($(this).attr("href").startsWith("https")) this.textContent="Facebook";
    if($(this).attr("href").startsWith("https")) this.append("Official Website");  
});
//Task3
    $('figure:nth-child(3)>img').attr("src","img/orange.png");
    $('figure:nth-child(3)>figcaption').text("fig.3 - Orange Juice");
// Task4
$(".container4 .my-name").attr("style","color:blue");
$(".container4 td:odd").css("backgroundColor","pink");
$(".container4 tr:last td:nth-child(2)").css("fontWeight","bold");
//Task5
$(".container5 ul li:nth-child(2)").css("fontStyle","italic");
$(".container5 ol li:nth-child(2)").next().css("color","red");
///////////////////////////////////////////////////////////////////////////
// manipulation
// Task1
$(".container1").append('<div class="black"></div>');
$(".container1").prepend('<div class="White"></div>');
$(".container1 .blue").prepend('<p class="yellow"></p>')
//Task2
    $(".container2 p:nth-child(1)").replaceWith('<a href="http://www.google.com">www.google.com</a>');
    $(".container2 p:nth-child(2)").replaceWith('<a href="http://www.ieee.org">www.ieee.org</a>');
    $(".container2 p:nth-child(3)").replaceWith('<a href="http://www.facebook.com">www.facebook.com</a>');
//Task3
$(".container3 img").wrap('<figure></figure>');
$(".container3 figure").append('<figcaption>Coffee</figcaption>');
//Task4
$('.col-age').text('');
$('.row1 td:nth-child(1)').addClass('man');
$('td').addClass('your-email');
$('.row3 td:nth-child(2)').removeClass('your-email');
//Task5
console.log($('.container5').filter('li:nth-child(3)','li:nth-child(odd)'));
//Task6
$('.container6 #username').val('yourname');
$('.container6 #remember').prop('checked',true);