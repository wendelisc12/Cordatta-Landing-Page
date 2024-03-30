$("document").ready(()=> {
    $(".card").on("click", function(e){
        var card = $(this).closest(".card").find("h5.card-title").text()
        $("#modelo").val(card)
    })

    $("#encomendar").validate({
        rules:{
            email:{required:true},
            descricao:{required:true}
        },messages:{
            email: "Insira um E-mail",
            descricao: "Insira uma descrição"
        }, submitHandler: function(){
            alert("Pedido feito com sucesso!")
        }
    })
})