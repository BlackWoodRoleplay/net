
$(function(){
        //Corpo da função
        //Todo conteúdo deve ficar aqui
        $("#content div:nth-child(1)").show();
        $(".abas li:first div").addClass("selecionada");

        $(".aba").hover(
        function(){$(this).addClass("ativa")},
        function(){$(this).removeClass("ativa")}
        );

        $(".aba").append("<img src='close.png'>");

        $(".aba").click(function(){
        $(".aba").removeClass("selecionada");
        $(this).addClass("selecionada");
        var indice = $(this).parent().index();
        indice++;
        $("#content div").hide();
        $("#content div:nth-child("+indice+")").show();

        $(".aba > img").click(function(){
                var aba = $(this).parent().parent();            
                var indice = aba.index() + 1;
                aba.remove();
                $("#content div:nth-child("+indice.toString()+")").remove();
                $(".aba").removeClass("selecionada");
                $("#content div").hide();
                if(indice>1){
                    var id = indice - 1;                
                    $("#content div:nth-child("+id.toString()+")").show();                
                    $(".abas  li:nth-child("+id+") .aba").addClass("selecionada");
                }else{                
                    $("#content div:nth-child("+indice.toString()+")").show();                
                    $(".abas  li:nth-child("+indice+") .aba").addClass("selecionada");
                }
            });
    });
    });
    


