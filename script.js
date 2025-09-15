document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('year').textContent=new Date().getFullYear();
  const btn=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.nav');
  btn&&btn.addEventListener('click',()=>{
    if(nav.style.display==='flex'){nav.style.display='';}
    else{nav.style.display='flex';nav.style.flexDirection='column';nav.style.position='absolute';nav.style.right='16px';nav.style.top='64px';nav.style.background='#fff';nav.style.padding='12px';nav.style.boxShadow='0 8px 20px rgba(0,0,0,0.08)';nav.style.borderRadius='8px';}
  });
});