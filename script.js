jQuery.fn.toggleText = function(a,b) {
    return this.html(this.html().replace(new RegExp("("+a+"|"+b+")"),function(x){return(x==a)?b:a;}));
    }
    
    $(document).ready(function(){
        $('.box').before('<span><img src="titulo/story000.png"></span>');
        $('.box').css('display', 'none')
        $('span', '#box_geral').click(function() {
            $(this).next().slideToggle('slow')
            .siblings('.tgl:visible').slideToggle('fast');
    // aqui começa o funcionamento do plugin
            $(this).toggleText('Mostrar','Esconder')
            .siblings('span').next('.tgl:visible').prev()
            .toggleText('Mostrar','Esconder')
    });
    })



    $(document).ready(function(){
        $('.box2').before('<span><img src="titulo/story00.png"></span>');
        $('.box2').css('display', 'none')
        $('span', '#box_geral2').click(function() {
            $(this).next().slideToggle('slow')
            .siblings('.tgl:visible').slideToggle('fast');
    // aqui começa o funcionamento do plugin
            $(this).toggleText('Mostrar','Esconder')
            .siblings('span').next('.tgl:visible').prev()
            .toggleText('Mostrar','Esconder')
    });
    })


    $(document).ready(function(){
        $('.box3').before('<span><img src="titulo/story1.png"></span>');
        $('.box3').css('display', 'none')
        $('span', '#box_geral3').click(function() {
            $(this).next().slideToggle('slow')
            .siblings('.tgl:visible').slideToggle('fast');
    // aqui começa o funcionamento do plugin
            $(this).toggleText('Mostrar','Esconder')
            .siblings('span').next('.tgl:visible').prev()
            .toggleText('Mostrar','Esconder')
    });
    })
	
	$(document).ready(function(){
        $('.box4').before('<span><img src="titulo/story2.png"></span>');
        $('.box4').css('display', 'none')
        $('span', '#box_geral4').click(function() {
            $(this).next().slideToggle('slow')
            .siblings('.tgl:visible').slideToggle('fast');
    // aqui começa o funcionamento do plugin
            $(this).toggleText('Mostrar','Esconder')
            .siblings('span').next('.tgl:visible').prev()
            .toggleText('Mostrar','Esconder')
    });
    })
	
	$(document).ready(function(){
        $('.box5').before('<span><img src="titulo/story3.png"></span>');
        $('.box5').css('display', 'none')
        $('span', '#box_geral5').click(function() {
            $(this).next().slideToggle('slow')
            .siblings('.tgl:visible').slideToggle('fast');
    // aqui começa o funcionamento do plugin
            $(this).toggleText('Mostrar','Esconder')
            .siblings('span').next('.tgl:visible').prev()
            .toggleText('Mostrar','Esconder')
    });
    })

    $(document).ready(function(){
        $('.box6').before('<span><img src="titulo/story4.png"></span>');
        $('.box6').css('display', 'none')
        $('span', '#box_geral6').click(function() {
            $(this).next().slideToggle('slow')
            .siblings('.tgl:visible').slideToggle('fast');
    // aqui começa o funcionamento do plugin
            $(this).toggleText('Mostrar','Esconder')
            .siblings('span').next('.tgl:visible').prev()
            .toggleText('Mostrar','Esconder')
    });
    })

    $(document).ready(function(){
        $('.box7').before('<span><img src="titulo/breve.png"></span>');
        $('.box7').css('display', 'none')
        $('span', '#box_geral7').click(function() {
            $(this).next().slideToggle('slow')
            .siblings('.tgl:visible').slideToggle('fast');
    // aqui começa o funcionamento do plugin
            $(this).toggleText('Mostrar','Esconder')
            .siblings('span').next('.tgl:visible').prev()
            .toggleText('Mostrar','Esconder')
    });
    })

    $(document).ready(function(){
        $('.box8').before('<span><img src="titulo/breve.png"></span>');
        $('.box8').css('display', 'none')
        $('span', '#box_geral8').click(function() {
            $(this).next().slideToggle('slow')
            .siblings('.tgl:visible').slideToggle('fast');
    // aqui começa o funcionamento do plugin
            $(this).toggleText('Mostrar','Esconder')
            .siblings('span').next('.tgl:visible').prev()
            .toggleText('Mostrar','Esconder')
    });
    })    

    // Toggle menu on click
// const nav = document.querySelector('#header nav')
// const toggle = document.querySelectorAll('nav .toggle');

// for(const element of toggle){
//     element.addEventListener('click', function(){
//         nav.classList.toggle('show')
//     })
// }