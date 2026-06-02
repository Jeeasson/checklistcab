
const items=[
'Carta de solicitud (doble ejemplar)',
'Título en Provisión Nacional',
'Diploma Académico',
'Cédula de Identidad',
'Acta de Defensa',
'Fotografía JPG 300x300',
'Depósito Bs 1400',
'Depósito Bs 700',
'Comprobantes',
'Pago Bs 150',
'Pago Bs 236',
'Pago Bs 20',
'Memoria Proyecto',
'Curriculum Vitae',
'Entrega ordenada'
];

const box=document.getElementById('tasks');

function draw(){
 let done=0;
 box.innerHTML='';

 items.forEach((t,i)=>{
   const check=localStorage.getItem('cdap_'+i)==='1';
   if(check) done++;

   const row=document.createElement('label');
   row.className='task';
   row.innerHTML=`<input type="checkbox" ${check?'checked':''}> ${t}`;

   row.querySelector('input').onchange=e=>{
      localStorage.setItem('cdap_'+i,e.target.checked?'1':'0');
      draw();
   };

   box.appendChild(row);
 });

 document.getElementById('status').textContent=`${done}/${items.length} completados`;
 document.getElementById('bar').style.width=(done/items.length*100)+'%';
}

document.getElementById('reset').onclick=()=>{
 localStorage.clear();
 draw();
};

if('serviceWorker' in navigator){
 navigator.serviceWorker.register('./sw.js');
}

draw();
