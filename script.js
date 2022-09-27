
window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
});

// jQuery.fn.toggleText = function(a,b) {
//     return this.html(this.html().replace(new RegExp("("+a+"|"+b+")"),function(x){return(x==a)?b:a;}));
//     }
    
//     $(document).ready(function(){
//         $('.box').before('<span><img src="titulo/breve.png"></span>');
//         $('.box').css('display', 'none')
//         $('span', '#box_geral').click(function() {
//             $(this).next().slideToggle('slow')
//             .siblings('.tgl:visible').slideToggle('fast');
//     // aqui começa o funcionamento do plugin
//             $(this).toggleText('Mostrar','Esconder')
//             .siblings('span').next('.tgl:visible').prev()
//             .toggleText('Mostrar','Esconder')
//     });
//     })

//     $(document).ready(function(){
//         $('.box2').before('<span><img src="titulo/breve.png"></span>');
//         $('.box2').css('display', 'none')
//         $('span', '#box_geral2').click(function() {
//             $(this).next().slideToggle('slow')
//             .siblings('.tgl:visible').slideToggle('fast');
//     // aqui começa o funcionamento do plugin
//             $(this).toggleText('Mostrar','Esconder')
//             .siblings('span').next('.tgl:visible').prev()
//             .toggleText('Mostrar','Esconder')
//     });
//     })


//     $(document).ready(function(){
//         $('.box7').before('<span><img src="titulo/breve.png"></span>');
//         $('.box7').css('display', 'none')
//         $('span', '#box_geral7').click(function() {
//             $(this).next().slideToggle('slow')
//             .siblings('.tgl:visible').slideToggle('fast');
//     // aqui começa o funcionamento do plugin
//             $(this).toggleText('Mostrar','Esconder')
//             .siblings('span').next('.tgl:visible').prev()
//             .toggleText('Mostrar','Esconder')
//     });
//     })

//     $(document).ready(function(){
//         $('.box8').before('<span><img src="titulo/breve.png"></span>');
//         $('.box8').css('display', 'none')
//         $('span', '#box_geral8').click(function() {
//             $(this).next().slideToggle('slow')
//             .siblings('.tgl:visible').slideToggle('fast');
//     // aqui começa o funcionamento do plugin
//             $(this).toggleText('Mostrar','Esconder')
//             .siblings('span').next('.tgl:visible').prev()
//             .toggleText('Mostrar','Esconder')
//     });
//     })    

