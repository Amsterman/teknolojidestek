(function(){var b=document.querySelector('.mb'),n=document.getElementById('nv');
b.onclick=function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)};
var d=document.querySelector('.ddb');d.onclick=function(){var o=d.parentNode.classList.toggle('open');d.setAttribute('aria-expanded',o)};
document.addEventListener('keydown',function(e){if(e.key==='Escape'){n.classList.remove('open');d.parentNode.classList.remove('open')}});
var f=document.getElementById('f');if(!f)return;var t=Date.now();
f.onsubmit=function(e){e.preventDefault();var s=document.getElementById('fs');
if(f.botcheck.checked||Date.now()-t<3000){s.textContent='Lütfen birkaç saniye sonra tekrar deneyin.';return}
s.textContent='Gönderiliyor...';
fetch(f.action,{method:'POST',body:new FormData(f)}).then(function(r){return r.json()}).then(function(j){
if(j.success){f.reset();s.textContent='Talebiniz alındı. En kısa sürede dönüş yapacağız.'}else{throw 0}})
.catch(function(){s.innerHTML='Gönderilemedi. Lütfen <a href="tel:+905354315062">0535 431 50 62</a> numarasını arayın.'})}})();
