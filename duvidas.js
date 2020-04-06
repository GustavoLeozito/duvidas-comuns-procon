$(window).on('load', async () => {
    loadTableData('duvidas');
    // btnArea();
})

$('#escolha').on('click', (e) => {
    $('#escolhaInfo').toggleClass('hide');
})
class Item {
    constructor(perguntas, respostas) {
        this.perguntas = pergunta;
        this.resposta = resposta;
        
       
    }
}

async function loadTableData(query) {
    var url = ``;
    
    let i = 0;
    return await $.getJSON(url, (data) => {
        const duvidas = {}
        
        
