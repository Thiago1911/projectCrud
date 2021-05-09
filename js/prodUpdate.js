
const inpCod = document.getElementById('inpCod');
const inpNome = document.getElementById('inpNome');
const inpDesc = document.getElementById('inpDesc');
const inpQtda = document.getElementById('inpQtda');
const inpFab = document.getElementById('inpFab');

const btnUpdate = document.getElementById('btnUpdate');

let data;

const api =  axios.create({
    baseURL: 'http://18.224.8.119:3334/'
})

btnUpdate.onclick = ()=>{
    let codPro = inpCod.value;
    let nome = inpNome.value;
    let desc = inpDesc.value;
    let qtda = inpQtda.value;
    let fab = inpFab.value;

    data = {
        'nome': nome,
        'descri': desc,
        'qtda': qtda,
        'fabricante': fab 
    };



    api.put('produto/'+ codPro, data).then(resp=>{
        console.log('Alteração realizada!')
    }).catch(err => console.log('Erro ao realizar a alteração"'));

}