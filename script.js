jQuery.fn.toggleText = function(a,b) {
    return this.html(this.html().replace(new RegExp("("+a+"|"+b+")"),function(x){return(x==a)?b:a;}));
    }
    
    $(document).ready(function(){
        $('.box').before('<span>O Começo</span>');
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
        $('.box2').before('<span>Em Breve</span>');
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
        $('.box3').before('<span>Em Breve</span>');
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