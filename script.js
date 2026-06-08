
const produtos=[
{name:'Batom Rosé',preco:'29,90'},
{name:'Perfume Floral',preco:'89,90'},
{name:'Creme Facial',preco:'49,90'},
{name:'Máscara Facial',preco:'24,90'},
{name:'Shampoo Premium',preco:'39,90'},
{name:'Condicionador',preco:'34,90'},
{name:'Base Líquida',preco:'59,90'},
{name:'Pó Compacto',preco:'44,90'},
{name:'Delineador',preco:'19,90'},
{name:'Kit Skincare',preco:'99,90'}
];

const lista=document.getElementById('produtos');

function render(filtro=''){
lista.innerHTML='';
produtos.filter(p=>p.name.toLowerCase().includes(filtro.toLowerCase()))
.forEach(p=>{
lista.innerHTML+=`
<div class="produto">
<img src="https://via.placeholder.com/250x250?text=${encodeURIComponent(p.name)}">
<h3>${p.name}</h3>
<p class="preco">R$ ${p.preco}</p>
<button>Adicionar</button>
</div>`;
});
}

document.getElementById('busca').addEventListener('input',e=>render(e.target.value));
render();
