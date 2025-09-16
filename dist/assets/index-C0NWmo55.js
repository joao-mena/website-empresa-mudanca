(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();function m(e){return e=e.replace(/\D/g,""),e.length<=2?e:e.length<=7?`(${e.slice(0,2)}) ${e.slice(2)}`:`(${e.slice(0,2)}) ${e.slice(2,7)}-${e.slice(7,11)}`}function f(e){e.preventDefault();const o=document.getElementById("name").value,r=document.getElementById("phone").value,a=document.getElementById("email").value,t=document.getElementById("origin").value,n=document.getElementById("destination").value,s=document.getElementById("service").value,i=document.getElementById("date").value,d=document.getElementById("details").value;if(!o||!r||!a||!t||!n||!s||!i){c("error","Por favor, preencha todos os campos obrigatórios.");return}if(!/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/.test(r)){c("error","Por favor, insira um número de telefone válido (ex: (XX) XXXXX-XXXX).");return}if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(a)){c("error","Por favor, insira um endereço de e-mail válido.");return}const l=`🚛 *NOVA SOLICITAÇÃO DE ORÇAMENTO* 🚛

📋 *DADOS DO CLIENTE*
👤 Nome: ${o}
📞 Telefone: ${r}
📧 E-mail: ${a}

📋 *DETALHES DA MUDANÇA:*
📍 Origem: ${t}
🏁 Destino: ${n}

🚚 *SERVIÇO SOLICITADO*
📦 Tipo: ${{"mudanca-residencial":"Mudança Residencial","mudanca-comercial":"Mudança Comercial","carreto-frete":"Carreto e Frete","mudanca-interestadual":"Mudança Interestadual"}[s]}
🗓️ Data Preferencial: ${new Date(i).toLocaleDateString("pt-BR")}

${d?`📝 *DETALHES ADICIONAIS*
${d}

`:""}
Aguardo retorno com o orçamento. Obrigado!`,u=`https://wa.me/5511999999999?text=${encodeURIComponent(l)}`;window.open(u,"_blank"),c("success","Orçamento enviado com sucesso! Redirecionando para o WhatsApp..."),e.target.reset()}function c(e,o){const r=document.getElementById("formFeedback");r.textContent=o,r.className=`form-feedback ${e}`,r.style.display="block",setTimeout(()=>{r.style.display="none"},5e3)}function p(){document.querySelector(".nav-menu").classList.toggle("active")}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("phone");e&&e.addEventListener("input",function(o){o.target.value=m(o.target.value)}),document.querySelectorAll('a[href^="#"]').forEach(o=>{o.addEventListener("click",function(r){r.preventDefault();const a=document.querySelector(this.getAttribute("href"));a&&a.scrollIntoView({behavior:"smooth",block:"start"})})}),window.sendToWhatsApp=f,window.toggleMenu=p});
