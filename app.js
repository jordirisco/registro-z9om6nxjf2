/* Correo al que se envían los registros (el de contacto público de la web). Cámbialo aquí si hace falta. */
var DOCTOR_EMAIL = "jordi@jordiriscopsiquiatria.com";
/* Envío directo con un toque: pega aquí la URL del script (ver apps-script.gs). Vacío = se abre el correo del paciente. */
var K = "v_zs-X4a3wOtCFoclzukyh-ROgzmi5cy"; /* clave compartida con el script: frena a los robots genéricos */
var PRIV_VER = "v1-2026-11";
/* Datos del responsable para el aviso de privacidad. Rellena nif y address cuando los confirmes: solo se muestran si no están vacíos. */
var RESP = {name:"Dr. Jordi Risco Cabezos", colegiado:"COMG 6388", nif:"", address:"", policy:"https://jordiriscopsiquiatria.com/aviso-legal-y-politica-de-privacidad/"};
var ENDPOINT = "https://script.google.com/macros/s/AKfycby8Fe07VD9TWwqtHDMdmXLbHzBBl09TdTi7ipABRer3pRz05nF-35n1T-qAewI4ovmpgQ/exec";

var T = {
 es:{
  eyebrow:"Antes de tu primera sesión", title:"Registro de situaciones",
  howTitle:"Cómo funciona",
  s1:"Cada vez que aparezca lo que te preocupa, pulsa «Nuevo registro».",
  s2:"Rellena lo que puedas, en pocos segundos. Basta con tocar las opciones.",
  s3:"Antes de la cita, pulsa «Enviar» y manda el resumen a tu psiquiatra.",
  priv:"Lo que escribes se guarda solo en este móvil, en este navegador. Nadie más lo ve hasta que tú lo envías. No cambies nada de lo que haces: solo observa y anota.",
  gotit:"Entendido", help:"Cómo funciona",
  newBtn:"Nuevo registro", send:"Enviar",
  stN:"registros", stAvg:"intensidad media", stMax:"máxima",
  spark:"Intensidad de tus últimos registros",
  emptyTitle:"Aún no hay registros", emptyTxt:"Así se verá cada registro cuando guardes el primero:",
  example:"Ejemplo ficticio",
  ex:{place:"Supermercado",who:"Solo/a",emo:"Miedo, mareo",thoughts:"Si me mareo y no puedo pedir ayuda…",did:"Salí de la tienda"},
  edit:"Editar", del:"Eliminar", delAsk:"¿Eliminar este registro?", delYes:"Sí, eliminar", cancel:"Cancelar",
  kWhere:"Dónde", kWho:"Con quién", kEmo:"Emoción", kPhys:"Cuerpo", kTh:"Pensamientos", kDid:"Qué hice",
  fNew:"Nuevo registro", fEdit:"Editar registro", close:"Cerrar",
  fWhen:"Cuándo", fWhere:"Dónde estabas", fWho:"Con quién", fEmo:"Qué sentiste", fPhys:"Qué notaste en el cuerpo",
  fTh:"Qué pensaste", fThHint:"Lo primero que se te pasó por la cabeza, con tus palabras.",
  fDid:"Qué hiciste para manejarlo", fInt:"Intensidad", fIntHint:"Toca un número. 1 es muy leve, 10 es lo más intenso que has sentido.",
  other:"Otro (opcional)", thPh:"Por ejemplo: «Me va a pasar algo y nadie me ayudará»", low:"Leve", high:"Máxima",
  save:"Guardar registro", needInt:"Falta la intensidad: toca un número del 1 al 10.", saved:"Registro guardado", removed:"Registro eliminado",
  eTitle:"Enviar a tu psiquiatra", eName:"Tu nombre (opcional)", eNamePh:"Para que sepa de quién es",
  eHow:"Envía tu registro a la consulta cuando quieras. Puedes enviarlo varias veces: cada vez va el registro completo.",
  eCopy:"Copiar resumen", eCopyT:"Copiar como tabla", eMail:"Enviar por correo", eShare:"Compartir…", eDl:"Descargar archivo", eConsent:"Al enviarlo, el registro sale de tu móvil hacia la consulta. Hazlo solo si te parece bien.", eLong:"El registro ya está copiado: pégalo en el cuerpo del correo.", eSub:"Registro", eSend:"Enviar a la consulta", eMine:"Enviar desde mi correo", eSending:"Enviando…", eSent:"Enviado. Tu psiquiatra lo recibirá.", eFail:"No se pudo enviar directamente. Se abrirá tu correo.", eLast:"Último envío:", eContact:"Teléfono o correo (opcional)", eContactPh:"Para que puedan contestarte", pContact:"Contacto", rConsent:"Consentimiento (aviso de privacidad)", privLink:"Aviso de privacidad", privTitle:"Aviso de privacidad", privShort:"Responsable: Dr. Jordi Risco. Uso: tu valoración clínica. Al enviar das tu consentimiento explícito.", consent:"He leído el aviso de privacidad y consiento enviar mis datos de salud a la consulta.", consentNeed:"Marca la casilla para poder enviar.", shared:"Si compartes el móvil, otra persona podría ver tus registros.", copied:"Copiado", copyFail:"No se pudo copiar solo: selecciona el texto de abajo y cópialo.",
  eNone:"Todavía no tienes registros que enviar.", ePrev:"Vista previa",
  eAddr:"Dirección:", eWarn:"Envíalo desde aquí o por correo, no por WhatsApp: son datos de salud.",
  wipe:"Borrar todos mis registros", wipeAsk:"Se borrarán todos los registros de este dispositivo. No se puede deshacer.", wipeYes:"Sí, borrar todo", wiped:"Registros borrados",
  noStore:"Este navegador no permite guardar. Copia tu resumen antes de cerrar la página.",
  urg:"Si estás en una situación de urgencia, llama al 112. Si piensas en hacerte daño, llama al 024.",
  rec:"REGISTRO DE SITUACIONES", pName:"Nombre", rWhen:"Fecha/hora", rWhere:"Lugar", rWho:"Con quién", rEmo:"Emoción", rPhys:"Síntomas físicos", rTh:"Pensamientos", rDid:"Solución intentada", rInt:"Intensidad (1-10)", locale:"es-ES"
 },
 ca:{
  eyebrow:"Abans de la primera sessió", title:"Registre de situacions",
  howTitle:"Com funciona",
  s1:"Cada cop que aparegui allò que et preocupa, prem «Nou registre».",
  s2:"Omple el que puguis, en pocs segons. Amb tocar les opcions n’hi ha prou.",
  s3:"Abans de la cita, prem «Enviar» i envia el resum al teu psiquiatre.",
  priv:"El que escrius es guarda només en aquest mòbil, en aquest navegador. Ningú més ho veu fins que tu ho envies. No canviïs res del que fas: només observa i anota.",
  gotit:"Entès", help:"Com funciona",
  newBtn:"Nou registre", send:"Enviar",
  stN:"registres", stAvg:"intensitat mitjana", stMax:"màxima",
  spark:"Intensitat dels teus últims registres",
  emptyTitle:"Encara no hi ha registres", emptyTxt:"Així es veurà cada registre quan en desis el primer:",
  example:"Exemple fictici",
  ex:{place:"Supermercat",who:"Sol/a",emo:"Por, mareig",thoughts:"Si em marejo i no puc demanar ajuda…",did:"Vaig sortir de la botiga"},
  edit:"Editar", del:"Eliminar", delAsk:"Vols eliminar aquest registre?", delYes:"Sí, eliminar", cancel:"Cancel·lar",
  kWhere:"On", kWho:"Amb qui", kEmo:"Emoció", kPhys:"Cos", kTh:"Pensaments", kDid:"Què vaig fer",
  fNew:"Nou registre", fEdit:"Editar registre", close:"Tancar",
  fWhen:"Quan", fWhere:"On eres", fWho:"Amb qui", fEmo:"Què vas sentir", fPhys:"Què vas notar al cos",
  fTh:"Què vas pensar", fThHint:"El primer que et va passar pel cap, amb les teves paraules.",
  fDid:"Què vas fer per manejar-ho", fInt:"Intensitat", fIntHint:"Toca un número. 1 és molt lleu, 10 és el més intens que has sentit.",
  other:"Altre (opcional)", thPh:"Per exemple: «Em passarà alguna cosa i ningú m’ajudarà»", low:"Lleu", high:"Màxima",
  save:"Desar registre", needInt:"Falta la intensitat: toca un número de l’1 al 10.", saved:"Registre desat", removed:"Registre eliminat",
  eTitle:"Enviar al teu psiquiatre", eName:"El teu nom (opcional)", eNamePh:"Perquè sàpiga de qui és",
  eHow:"Envia el teu registre a la consulta quan vulguis. Pots enviar-lo diverses vegades: cada cop va el registre complet.",
  eCopy:"Copiar resum", eCopyT:"Copiar com a taula", eMail:"Enviar per correu", eShare:"Compartir…", eDl:"Descarregar arxiu", eConsent:"En enviar-lo, el registre surt del teu mòbil cap a la consulta. Fes-ho només si et sembla bé.", eLong:"El registre ja està copiat: enganxa’l al cos del correu.", eSub:"Registre", eSend:"Enviar a la consulta", eMine:"Enviar des del meu correu", eSending:"Enviant…", eSent:"Enviat. El teu psiquiatre ho rebrà.", eFail:"No s’ha pogut enviar directament. S’obrirà el teu correu.", eLast:"Últim enviament:", eContact:"Telèfon o correu (opcional)", eContactPh:"Perquè et puguin contestar", pContact:"Contacte", rConsent:"Consentiment (avís de privacitat)", privLink:"Avís de privacitat", privTitle:"Avís de privacitat", privShort:"Responsable: Dr. Jordi Risco. Ús: la teva valoració clínica. En enviar dones el teu consentiment explícit.", consent:"He llegit l’avís de privacitat i consento enviar les meves dades de salut a la consulta.", consentNeed:"Marca la casella per poder enviar.", shared:"Si comparteixes el mòbil, una altra persona podria veure els teus registres.", copied:"Copiat", copyFail:"No s’ha pogut copiar sol: selecciona el text de sota i copia’l.",
  eNone:"Encara no tens registres per enviar.", ePrev:"Vista prèvia",
  eAddr:"Adreça:", eWarn:"Envia-ho des d’aquí o per correu, no per WhatsApp: són dades de salut.",
  wipe:"Esborrar tots els meus registres", wipeAsk:"S’esborraran tots els registres d’aquest dispositiu. No es pot desfer.", wipeYes:"Sí, esborrar tot", wiped:"Registres esborrats",
  noStore:"Aquest navegador no permet desar. Copia el teu resum abans de tancar la pàgina.",
  urg:"Si ets en una situació d’urgència, truca al 112. Si penses a fer-te mal, truca al 024.",
  rec:"REGISTRE DE SITUACIONS", pName:"Nom", rWhen:"Data/hora", rWhere:"Lloc", rWho:"Amb qui", rEmo:"Emoció", rPhys:"Símptomes físics", rTh:"Pensaments", rDid:"Solució intentada", rInt:"Intensitat (1-10)", locale:"ca-ES"
 }
};
var OPT = {
 place:[["casa","Casa","Casa"],["trabajo","Trabajo","Feina"],["calle","Calle","Carrer"],["transporte","Transporte","Transport"],["tienda","Tienda o súper","Botiga o súper"],["coche","Coche","Cotxe"]],
 who:[["solo","Solo/a","Sol/a"],["pareja","Pareja","Parella"],["familia","Familia","Família"],["amigos","Amigos","Amics"],["companeros","Compañeros","Companys"],["desconocidos","Desconocidos","Desconeguts"]],
 emo:[["miedo","Miedo","Por"],["ansiedad","Ansiedad","Ansietat"],["tristeza","Tristeza","Tristesa"],["rabia","Rabia","Ràbia"],["verguenza","Vergüenza","Vergonya"],["culpa","Culpa","Culpa"],["desesperanza","Desesperanza","Desesperança"],["agobio","Agobio","Agobi"]],
 phys:[["palpitaciones","Palpitaciones","Palpitacions"],["pecho","Presión en el pecho","Pressió al pit"],["aire","Falta de aire","Falta d’aire"],["mareo","Mareo","Mareig"],["sudor","Sudor","Suor"],["temblor","Temblor","Tremolor"],["estomago","Nudo en el estómago","Nus a l’estómac"],["tension","Tensión muscular","Tensió muscular"],["hormigueo","Hormigueo","Formigueig"]],
 did:[["evite","Evité la situación","Vaig evitar la situació"],["huir","Me fui","Vaig marxar"],["ayuda","Pedí ayuda o compañía","Vaig demanar ajuda o companyia"],["medicacion","Tomé medicación","Vaig prendre medicació"],["tranquilizar","Busqué tranquilizarme","Vaig buscar tranquil·litzar-me"],["distraer","Me distraje","Em vaig distreure"],["aguante","Aguanté","Vaig aguantar"],["nada","No hice nada","No vaig fer res"]]
};
var GROUPS = [["place","fWhere","placeOther"],["who","fWho","whoOther"],["emo","fEmo","emoOther"],["phys","fPhys",null],["did","fDid","didOther"]];

var KEY="registro-situaciones-v1", mem={entries:[],name:"",introHidden:false,lang:null}, storeOK=true;
function load(){ try{ var s=localStorage.getItem(KEY); if(s){ var o=JSON.parse(s); for(var k in o) mem[k]=o[k]; } }catch(e){ storeOK=false; } }
function save(){ try{ localStorage.setItem(KEY,JSON.stringify(mem)); }catch(e){ storeOK=false; } }
load();
var lang = mem.lang || ((navigator.language||"es").slice(0,2)==="ca" ? "ca" : "es");
var openId=null, draft=null, editing=false, sheet=null, delAsk=null, wipeAsk=false, toastTimer=null;
function t(k){ return T[lang][k]; }
function esc(s){ return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];}); }
function uid(){ return Date.now().toString(36)+Math.random().toString(36).slice(2,6); }
function pad(n){ return (n<10?"0":"")+n; }
function nowLocal(){ var d=new Date(); return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate())+"T"+pad(d.getHours())+":"+pad(d.getMinutes()); }
function lvl(n){ return n<=3?"lo":(n<=6?"mid":"hi"); }
function label(group,key){ var o=OPT[group].filter(function(x){return x[0]===key;})[0]; return o? o[lang==="es"?1:2] : key; }
function labels(group,keys,other){ var a=(keys||[]).map(function(k){return label(group,k);}); if(other&&other.trim()) a.push(other.trim()); return a; }
function fmtDay(ts){ return new Intl.DateTimeFormat(t("locale"),{weekday:"long",day:"numeric",month:"long"}).format(new Date(ts)); }
function fmtTime(ts){ return new Intl.DateTimeFormat(t("locale"),{hour:"2-digit",minute:"2-digit"}).format(new Date(ts)); }
function fmtFull(ts){ return new Intl.DateTimeFormat(t("locale"),{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(ts)); }
function sorted(){ return mem.entries.slice().sort(function(a,b){ return a.ts<b.ts?1:(a.ts>b.ts?-1:0); }); }

function render(){
  document.documentElement.lang=lang;
  var es=sorted(), h="";
  h+='<header class="top"><div><div class="eyebrow">'+esc(t("eyebrow"))+'</div><h1>'+esc(t("title"))+'</h1></div>';
  h+='<div class="langs" role="group" aria-label="Idioma / Idioma"><button data-act="lang" data-v="es" aria-pressed="'+(lang==="es")+'">ES</button><button data-act="lang" data-v="ca" aria-pressed="'+(lang==="ca")+'">CA</button></div></header>';
  if(!storeOK) h+='<div class="warn">'+esc(t("noStore"))+'</div>';
  if(!mem.introHidden){
    h+='<section class="card intro"><h2>'+esc(t("howTitle"))+'</h2><ol><li>'+esc(t("s1"))+'</li><li>'+esc(t("s2"))+'</li><li>'+esc(t("s3"))+'</li></ol><div class="priv">'+esc(t("priv"))+' '+esc(t("shared"))+'</div><p class="foot" style="margin:8px 0 0">'+esc(t("privShort"))+' <button class="linkbtn" data-act="privacy">'+esc(t("privLink"))+'</button></p><div class="row" style="margin-top:12px"><button class="btn primary" data-act="hideintro">'+esc(t("gotit"))+'</button></div></section>';
  } else {
    h+='<div class="row"><button class="btn ghost small" data-act="showintro">'+esc(t("help"))+'</button></div>';
  }
  if(es.length){
    var sum=0,mx=0; es.forEach(function(e){ sum+=e.intensity; if(e.intensity>mx) mx=e.intensity; });
    var avg=(sum/es.length).toFixed(1).replace(".",lang==="es"?",":",");
    h+='<div class="stats"><div class="card stat"><b>'+es.length+'</b><span>'+esc(t("stN"))+'</span></div><div class="card stat"><b>'+avg+'</b><span>'+esc(t("stAvg"))+'</span></div><div class="card stat"><b>'+mx+'</b><span>'+esc(t("stMax"))+'</span></div></div>';
    var last=es.slice(0,14).reverse();
    h+='<div class="card"><div class="spark" aria-hidden="true">'+last.map(function(e){return '<i class="'+lvl(e.intensity)+'" style="height:'+(e.intensity*10)+'%"></i>';}).join("")+'</div><div class="sparkcap">'+esc(t("spark"))+'</div></div>';
    var cur="";
    es.forEach(function(e){
      var day=e.ts.slice(0,10);
      if(day!==cur){ cur=day; h+='<div class="day">'+esc(fmtDay(e.ts))+'</div>'; }
      var open=openId===e.id, L=lvl(e.intensity);
      var parts=labels("emo",e.emo,e.emoOther).concat(labels("place",e.place,e.placeOther));
      h+='<article class="card entry"><button class="head" data-act="toggle" data-id="'+e.id+'" aria-expanded="'+open+'"><span class="badge '+L+'">'+e.intensity+'</span><span class="meta"><span class="time">'+esc(fmtTime(e.ts))+'</span><div class="sum">'+esc(parts.join(" · ")||"—")+'</div></span></button>';
      if(open){
        h+='<div class="body"><dl class="kv" style="margin:0">';
        var rows=[["kWhere",labels("place",e.place,e.placeOther)],["kWho",labels("who",e.who,e.whoOther)],["kEmo",labels("emo",e.emo,e.emoOther)],["kPhys",labels("phys",e.phys,"")],["kTh",e.thoughts?[e.thoughts]:[]],["kDid",labels("did",e.did,e.didOther)]];
        rows.forEach(function(r){ if(r[1].length) h+='<dt>'+esc(t(r[0]))+'</dt><dd>'+esc(r[1].join(", "))+'</dd>'; });
        h+='</dl>';
        if(delAsk===e.id){
          h+='<div class="row"><span>'+esc(t("delAsk"))+'</span><button class="btn small danger" data-act="delyes" data-id="'+e.id+'">'+esc(t("delYes"))+'</button><button class="btn small" data-act="delno">'+esc(t("cancel"))+'</button></div>';
        } else {
          h+='<div class="row"><button class="btn small" data-act="edit" data-id="'+e.id+'">'+esc(t("edit"))+'</button><button class="btn small danger" data-act="delask" data-id="'+e.id+'">'+esc(t("del"))+'</button></div>';
        }
        h+='</div>';
      }
      h+='</article>';
    });
  } else {
    var x=t("ex");
    h+='<div class="empty"><h2 style="font-size:1.2rem;color:var(--ink)">'+esc(t("emptyTitle"))+'</h2><p>'+esc(t("emptyTxt"))+'</p></div>';
    h+='<article class="card entry example" aria-hidden="false"><div style="padding:14px 16px"><span class="tag">'+esc(t("example"))+'</span><div class="row" style="flex-wrap:nowrap;align-items:flex-start"><span class="badge mid">6</span><div><div class="time">18:30</div><dl class="kv" style="margin:6px 0 0;grid-template-columns:96px 1fr"><dt>'+esc(t("kWhere"))+'</dt><dd>'+esc(x.place)+'</dd><dt>'+esc(t("kWho"))+'</dt><dd>'+esc(x.who)+'</dd><dt>'+esc(t("kEmo"))+'</dt><dd>'+esc(x.emo)+'</dd><dt>'+esc(t("kTh"))+'</dt><dd>'+esc(x.thoughts)+'</dd><dt>'+esc(t("kDid"))+'</dt><dd>'+esc(x.did)+'</dd></dl></div></div></div></article>';
  }
  h+='<p class="foot">'+esc(t("urg"))+'</p><p class="foot"><button class="linkbtn" data-act="privacy">'+esc(t("privLink"))+'</button></p>';
  h+='<div class="dock"><div class="in"><button class="btn primary" data-act="new">+ '+esc(t("newBtn"))+'</button>'+(es.length?'<button class="btn" data-act="export">'+esc(t("send"))+'</button>':'')+'</div></div>';
  document.getElementById("app").innerHTML=h;
}

/* ---------- Formulario ---------- */
function chipGroup(g){
  return '<div class="chips" role="group" aria-labelledby="lg-'+g+'">'+OPT[g].map(function(o){
    var on=draft[g].indexOf(o[0])>-1;
    return '<button type="button" class="chip" data-act="chip" data-g="'+g+'" data-k="'+o[0]+'" aria-pressed="'+on+'">'+esc(o[lang==="es"?1:2])+'</button>';
  }).join("")+'</div>';
}
function renderForm(){
  var h='<div class="sheet" role="dialog" aria-modal="true" aria-label="'+esc(editing?t("fEdit"):t("fNew"))+'"><div class="in">';
  h+='<div class="bar"><h2>'+esc(editing?t("fEdit"):t("fNew"))+'</h2><button class="btn small ghost" data-act="closesheet">'+esc(t("close"))+'</button></div>';
  h+='<fieldset><legend><label for="f-ts">'+esc(t("fWhen"))+'</label></legend><input type="datetime-local" id="f-ts" data-f="ts" value="'+esc(draft.ts)+'"></fieldset>';
  GROUPS.forEach(function(G){
    var g=G[0];
    h+='<fieldset><legend id="lg-'+g+'">'+esc(t(G[1]))+'</legend>'+chipGroup(g);
    if(G[2]) h+='<input type="text" id="f-'+G[2]+'" data-f="'+G[2]+'" placeholder="'+esc(t("other"))+'" value="'+esc(draft[G[2]])+'" aria-label="'+esc(t(G[1])+" — "+t("other"))+'">';
    h+='</fieldset>';
  });
  h+='<fieldset><legend><label for="f-thoughts">'+esc(t("fTh"))+'</label></legend><p class="hint">'+esc(t("fThHint"))+'</p><textarea id="f-thoughts" data-f="thoughts" placeholder="'+esc(t("thPh"))+'">'+esc(draft.thoughts)+'</textarea></fieldset>';
  h+='<fieldset><legend id="lg-int">'+esc(t("fInt"))+'</legend><p class="hint">'+esc(t("fIntHint"))+'</p><div class="scale" role="group" aria-labelledby="lg-int">';
  for(var i=1;i<=10;i++) h+='<button type="button" class="'+lvl(i)+'" data-act="int" data-v="'+i+'" aria-pressed="'+(draft.intensity===i)+'">'+i+'</button>';
  h+='</div><div class="scalecap"><span>1 · '+esc(t("low"))+'</span><span>10 · '+esc(t("high"))+'</span></div><p class="err" id="f-err" role="alert" hidden></p></fieldset>';
  h+='</div><div class="savebar"><div class="in2"><button class="btn" data-act="closesheet">'+esc(t("cancel"))+'</button><button class="btn primary" data-act="savefm">'+esc(t("save"))+'</button></div></div></div>';
  document.getElementById("layer").innerHTML=h; sheet="form"; document.body.style.overflow="hidden";
  var s=document.querySelector(".sheet"); if(s) s.scrollTop=0;
}

/* ---------- Exportar ---------- */
function buildText(){
  var es=sorted().reverse(), L=[t("rec")];
  if(mem.name&&mem.name.trim()) L.push(t("pName")+": "+mem.name.trim());
  if(mem.contact&&mem.contact.trim()) L.push(t("pContact")+": "+mem.contact.trim());
  if(mem.consent) L.push(t("rConsent")+": "+fmtFull(mem.consent.ts)+" ("+mem.consent.ver+")");
  L.push("");
  es.forEach(function(e,i){
    L.push((i+1)+") "+fmtFull(e.ts)+" — "+t("rInt")+": "+e.intensity);
    var f=[["rWhere",labels("place",e.place,e.placeOther)],["rWho",labels("who",e.who,e.whoOther)],["rEmo",labels("emo",e.emo,e.emoOther)],["rPhys",labels("phys",e.phys,"")],["rTh",e.thoughts?[e.thoughts.replace(/\s*\n\s*/g," ")]:[]],["rDid",labels("did",e.did,e.didOther)]];
    f.forEach(function(r){ if(r[1].length) L.push("   "+t(r[0])+": "+r[1].join(", ")); });
    L.push("");
  });
  return L.join("\n").trim();
}
function buildTSV(){
  function c(s){ return String(s).replace(/[\t\r\n]+/g," "); }
  var rows=[[t("rWhen"),t("rWhere"),t("rWho"),t("rEmo"),t("rPhys"),t("rTh"),t("rDid"),t("rInt")]];
  sorted().reverse().forEach(function(e){
    rows.push([fmtFull(e.ts),labels("place",e.place,e.placeOther).join(", "),labels("who",e.who,e.whoOther).join(", "),labels("emo",e.emo,e.emoOther).join(", "),labels("phys",e.phys,"").join(", "),e.thoughts||"",labels("did",e.did,e.didOther).join(", "),e.intensity]);
  });
  return rows.map(function(r){return r.map(c).join("\t");}).join("\n");
}
function renderExport(){
  var has=mem.entries.length>0, txt=has?buildText():"";
  var h='<div class="sheet" role="dialog" aria-modal="true" aria-label="'+esc(t("eTitle"))+'"><div class="in">';
  h+='<div class="bar"><h2>'+esc(t("eTitle"))+'</h2><button class="btn small ghost" data-act="closesheet">'+esc(t("close"))+'</button></div>';
  if(!has){ h+='<p>'+esc(t("eNone"))+'</p>'; }
  else{
    h+='<p>'+esc(t("eHow"))+'</p><div class="warn">'+esc(t("eWarn"))+'</div>';
    h+='<fieldset><legend><label for="f-name">'+esc(t("eName"))+'</label></legend><input type="text" id="f-name" data-f="name" placeholder="'+esc(t("eNamePh"))+'" value="'+esc(mem.name||"")+'" autocomplete="name"></fieldset>';
    h+='<fieldset><legend><label for="f-contact">'+esc(t("eContact"))+'</label></legend><input type="text" id="f-contact" data-f="contact" placeholder="'+esc(t("eContactPh"))+'" value="'+esc(mem.contact||"")+'" autocomplete="off"></fieldset>';
    var dis=mem.consent?'':' disabled';
    h+='<div class="consent"><input type="checkbox" id="f-consent" data-f="consent"'+(mem.consent?' checked':'')+'><label for="f-consent">'+esc(t("consent"))+' <button class="linkbtn" data-act="privacy">'+esc(t("privLink"))+'</button></label></div>';
    if(ENDPOINT) h+='<button class="btn primary" id="b-send" data-act="senddirect"'+dis+' style="width:100%;min-height:54px;font-size:1.05rem">'+esc(t("eSend"))+'</button>'+(mem.lastSent?'<p class="hint">'+esc(t("eLast"))+' '+esc(fmtFull(mem.lastSent))+'</p>':'');
    h+='<div class="row"><button class="btn'+(ENDPOINT?'':' primary')+'" data-act="sendmail"'+dis+'>'+esc(ENDPOINT?t("eMine"):t("eMail"))+'</button>';
    if(navigator.share) h+='<button class="btn" data-act="share"'+dis+'>'+esc(t("eShare"))+'</button>';
    h+='<button class="btn" data-act="copytxt">'+esc(t("eCopy"))+'</button><button class="btn" data-act="dl">'+esc(t("eDl"))+'</button><button class="btn" data-act="copytsv">'+esc(t("eCopyT"))+'</button></div>';
    h+='<p class="hint">'+(ENDPOINT?'':esc(t("eAddr"))+' <b>'+esc(DOCTOR_EMAIL)+'</b><br>')+esc(t("eConsent"))+'</p>';
    h+='<fieldset><legend><label for="f-prev">'+esc(t("ePrev"))+'</label></legend><textarea id="f-prev" class="preview" readonly>'+esc(txt)+'</textarea></fieldset>';
  }
  h+='<div style="border-top:1px solid var(--line);padding-top:14px">';
  if(wipeAsk){ h+='<p>'+esc(t("wipeAsk"))+'</p><div class="row"><button class="btn small danger" data-act="wipeyes">'+esc(t("wipeYes"))+'</button><button class="btn small" data-act="wipeno">'+esc(t("cancel"))+'</button></div>'; }
  else if(has){ h+='<button class="btn small danger" data-act="wipe">'+esc(t("wipe"))+'</button>'; }
  h+='</div></div></div>';
  document.getElementById("layer").innerHTML=h; sheet="export"; document.body.style.overflow="hidden";
}

function privSections(){
  var r=RESP, es=lang==="es";
  var who=r.name+" ("+r.colegiado+")"+(r.nif?", NIF "+r.nif:"")+(r.address?", "+r.address:"")+". "+(es?"Contacto: ":"Contacte: ")+DOCTOR_EMAIL+".";
  if(es) return [
   ["Responsable",who+" Consulta de psiquiatría y psicoterapia en Figueres (Girona)."],
   ["Qué datos tratamos","Lo que escribes en tu registro (fecha, lugar, personas, emociones, síntomas, pensamientos, qué hiciste e intensidad) y, si quieres, tu nombre y un teléfono o correo. Son datos de salud."],
   ["Para qué","Preparar y realizar tu valoración y tratamiento (asistencia sanitaria) y, si lo has indicado, contactar contigo."],
   ["Base legal","Tu consentimiento explícito al marcar la casilla y pulsar Enviar (art. 6.1.a y 9.2.a RGPD) y la prestación de asistencia sanitaria (art. 9.2.h RGPD)."],
   ["En tu móvil","Hasta que lo envías, el registro se guarda solo en este navegador de tu móvil, sin cifrar. Si compartes el móvil, otra persona podría verlo. Puedes borrarlo cuando quieras con «Borrar todos mis registros»."],
   ["A quién se comunica","Al enviar, el registro viaja cifrado (HTTPS) a un servicio de Google que lo reenvía al correo de la consulta. Google actúa como encargado del tratamiento y puede tratar datos fuera del Espacio Económico Europeo con las garantías que prevé la ley. No se ceden a otros terceros salvo obligación legal."],
   ["Cuánto se conserva","Si inicias tratamiento, se incorpora a tu historia clínica y se conserva durante los plazos que fija la ley. Si no llega a iniciarse, se suprime."],
   ["Tus derechos","Puedes pedir acceso, rectificación, supresión, limitación, oposición, portabilidad y retirar tu consentimiento escribiendo a "+DOCTOR_EMAIL+". Si crees que no hemos atendido tu petición, puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es)."],
   ["Cookies y terceros","Esta aplicación no usa cookies, analítica ni servicios de terceros para mostrarse: las tipografías van incluidas en la propia app."],
   ["Menores","Si eres menor de edad, habla con tu madre, padre o tutor antes de enviar."]
  ];
  return [
   ["Responsable",who+" Consulta de psiquiatria i psicoteràpia a Figueres (Girona)."],
   ["Quines dades tractem","El que escrius al teu registre (data, lloc, persones, emocions, símptomes, pensaments, què vas fer i intensitat) i, si vols, el teu nom i un telèfon o correu. Són dades de salut."],
   ["Per a què","Preparar i fer la teva valoració i tractament (assistència sanitària) i, si ho has indicat, contactar amb tu."],
   ["Base legal","El teu consentiment explícit en marcar la casella i prémer Enviar (art. 6.1.a i 9.2.a RGPD) i la prestació d’assistència sanitària (art. 9.2.h RGPD)."],
   ["Al teu mòbil","Fins que l’envies, el registre es guarda només en aquest navegador del teu mòbil, sense xifrar. Si comparteixes el mòbil, una altra persona el podria veure. El pots esborrar quan vulguis amb «Esborrar tots els meus registres»."],
   ["A qui es comunica","En enviar, el registre viatja xifrat (HTTPS) a un servei de Google que el reenvia al correu de la consulta. Google actua com a encarregat del tractament i pot tractar dades fora de l’Espai Econòmic Europeu amb les garanties que preveu la llei. No es cedeixen a altres tercers tret d’obligació legal."],
   ["Quant es conserva","Si inicies tractament, s’incorpora a la teva història clínica i es conserva durant els terminis que fixa la llei. Si no arriba a iniciar-se, se suprimeix."],
   ["Els teus drets","Pots demanar accés, rectificació, supressió, limitació, oposició, portabilitat i retirar el consentiment escrivint a "+DOCTOR_EMAIL+". Si creus que no hem atès la teva petició, pots reclamar davant l’Agència Espanyola de Protecció de Dades (aepd.es)."],
   ["Cookies i tercers","Aquesta aplicació no fa servir cookies, analítica ni serveis de tercers per mostrar-se: les tipografies van incloses a la pròpia app."],
   ["Menors","Si ets menor d’edat, parla amb la teva mare, pare o tutor abans d’enviar."]
  ];
}
function renderPrivacy(){
  var h='<div class="sheet" role="dialog" aria-modal="true" aria-label="'+esc(t("privTitle"))+'"><div class="in priv">';
  h+='<div class="bar"><h2>'+esc(t("privTitle"))+'</h2><button class="btn small ghost" data-act="closeprivacy">'+esc(t("close"))+'</button></div>';
  privSections().forEach(function(x){ h+='<section class="priv-sec"><h3>'+esc(x[0])+'</h3><p>'+esc(x[1])+'</p></section>'; });
  h+='<section class="priv-sec"><p><a href="'+esc(RESP.policy)+'" target="_blank" rel="noopener noreferrer">'+esc(lang==="es"?"Política de privacidad de la web":"Política de privacitat del web")+'</a> · v'+esc(PRIV_VER)+'</p></section>';
  h+='</div></div>';
  document.getElementById("layer").innerHTML=h; sheet="privacy"; document.body.style.overflow="hidden";
  var sh=document.querySelector(".sheet"); if(sh) sh.scrollTop=0;
}
var backTo=null;
function closeSheet(){ document.getElementById("layer").innerHTML=""; sheet=null; draft=null; wipeAsk=false; document.body.style.overflow=""; }
function toast(msg){
  var old=document.getElementById("toast"); if(old) old.remove();
  var d=document.createElement("div"); d.id="toast"; d.className="toast"; d.setAttribute("role","status"); d.textContent=msg; document.body.appendChild(d);
  clearTimeout(toastTimer); toastTimer=setTimeout(function(){ d.remove(); },2200);
}
function copy(txt){
  var done=function(ok){ if(ok) toast(t("copied")); else { toast(t("copyFail")); var p=document.getElementById("f-prev"); if(p){ p.focus(); p.select(); } } };
  try{ navigator.clipboard.writeText(txt).then(function(){done(true);},function(){done(false);}); }catch(e){ done(false); }
}

/* ---------- Eventos ---------- */
document.addEventListener("click",function(ev){
  var b=ev.target.closest("[data-act]"); if(!b) return;
  var a=b.getAttribute("data-act"), id=b.getAttribute("data-id");
  if(a==="lang"){ lang=b.getAttribute("data-v"); mem.lang=lang; save(); render(); if(sheet==="export") renderExport(); }
  else if(a==="hideintro"){ mem.introHidden=true; save(); render(); }
  else if(a==="showintro"){ mem.introHidden=false; save(); render(); }
  else if(a==="toggle"){ openId=(openId===id?null:id); delAsk=null; render(); }
  else if(a==="new"){ editing=false; draft={id:uid(),ts:nowLocal(),place:[],placeOther:"",who:[],whoOther:"",emo:[],emoOther:"",phys:[],thoughts:"",did:[],didOther:"",intensity:0}; renderForm(); }
  else if(a==="edit"){ var e=mem.entries.filter(function(x){return x.id===id;})[0]; if(e){ editing=true; draft=JSON.parse(JSON.stringify(e)); renderForm(); } }
  else if(a==="delask"){ delAsk=id; render(); }
  else if(a==="delno"){ delAsk=null; render(); }
  else if(a==="delyes"){ mem.entries=mem.entries.filter(function(x){return x.id!==id;}); save(); delAsk=null; openId=null; render(); toast(t("removed")); }
  else if(a==="closesheet"){ closeSheet(); }
  else if(a==="privacy"){ backTo=sheet; renderPrivacy(); }
  else if(a==="closeprivacy"){ if(backTo==="export"){ backTo=null; renderExport(); } else { backTo=null; closeSheet(); } }
  else if(a==="chip"){ var g=b.getAttribute("data-g"), k=b.getAttribute("data-k"), i=draft[g].indexOf(k); if(i>-1) draft[g].splice(i,1); else draft[g].push(k); b.setAttribute("aria-pressed",String(i===-1)); }
  else if(a==="int"){ draft.intensity=parseInt(b.getAttribute("data-v"),10); document.querySelectorAll(".scale button").forEach(function(x){ x.setAttribute("aria-pressed",String(x===b)); }); var er=document.getElementById("f-err"); if(er) er.hidden=true; }
  else if(a==="savefm"){
    if(!draft.intensity){ var er2=document.getElementById("f-err"); er2.textContent=t("needInt"); er2.hidden=false; er2.scrollIntoView({block:"center"}); return; }
    if(!draft.ts) draft.ts=nowLocal();
    var ix=-1; mem.entries.forEach(function(x,j){ if(x.id===draft.id) ix=j; });
    if(ix>-1) mem.entries[ix]=draft; else mem.entries.push(draft);
    save(); openId=null; closeSheet(); render(); toast(t("saved")); window.scrollTo(0,0);
  }
  else if(a==="export"){ renderExport(); }
  else if(a==="copytxt"){ copy(buildText()); }
  else if(a==="senddirect"){
    var bt=b, txt0=buildText(), subj0=t("rec")+(mem.name&&mem.name.trim()?" — "+mem.name.trim():"");
    bt.disabled=true; bt.textContent=t("eSending");
    fetch(ENDPOINT,{method:"POST",redirect:"follow",credentials:"omit",referrerPolicy:"no-referrer",cache:"no-store",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({subject:subj0,text:txt0,count:mem.entries.length,hp:"",k:K})})
      .then(function(r){ if(!r.ok) throw new Error("http"); return r.json(); })
      .then(function(j){ if(!j||!j.ok) throw new Error("srv"); mem.lastSent=nowLocal(); save(); renderExport(); toast(t("eSent")); })
      .catch(function(){ bt.disabled=false; bt.textContent=t("eSend"); toast(t("eFail")); setTimeout(function(){ var bd=encodeURIComponent(txt0).length>1800?t("eSub")+" ("+mem.entries.length+")\n\n":txt0; if(bd!==txt0) copy(txt0); window.location.href="mailto:"+DOCTOR_EMAIL+"?subject="+encodeURIComponent(subj0)+"&body="+encodeURIComponent(bd); },1500); });
  }
  else if(a==="sendmail"){
    var txt=buildText(), subj=t("rec")+(mem.name&&mem.name.trim()?" — "+mem.name.trim():"");
    var body=txt, long=false;
    if(encodeURIComponent(txt).length>1800){ long=true; body=t("eSub")+" ("+mem.entries.length+")\n\n"; copy(txt); }
    window.location.href="mailto:"+DOCTOR_EMAIL+"?subject="+encodeURIComponent(subj)+"&body="+encodeURIComponent(body);
    if(long) toast(t("eLong"));
  }
  else if(a==="share"){ var tx=buildText(); navigator.share({title:t("rec"),text:tx}).catch(function(){}); }
  else if(a==="dl"){
    var bl=new Blob([buildText()],{type:"text/plain;charset=utf-8"}), u=URL.createObjectURL(bl), an=document.createElement("a");
    an.href=u; an.download="registro-"+nowLocal().slice(0,10)+".txt"; document.body.appendChild(an); an.click(); an.remove(); setTimeout(function(){URL.revokeObjectURL(u);},1000);
  }
  else if(a==="copytsv"){ copy(buildTSV()); }
  else if(a==="wipe"){ wipeAsk=true; renderExport(); }
  else if(a==="wipeno"){ wipeAsk=false; renderExport(); }
  else if(a==="wipeyes"){ mem.entries=[]; save(); wipeAsk=false; closeSheet(); render(); toast(t("wiped")); }
});
document.addEventListener("input",function(ev){
  var f=ev.target.getAttribute&&ev.target.getAttribute("data-f"); if(!f) return;
  if(f==="consent"){
    mem.consent=ev.target.checked?{ver:PRIV_VER,ts:nowLocal()}:null; save();
    document.querySelectorAll('[data-act="senddirect"],[data-act="sendmail"],[data-act="share"]').forEach(function(b){ b.disabled=!mem.consent; });
    var pv=document.getElementById("f-prev"); if(pv) pv.value=buildText(); return;
  }
  if(f==="name"||f==="contact"){ mem[f]=ev.target.value; save(); var p=document.getElementById("f-prev"); if(p) p.value=buildText(); }
  else if(draft){ draft[f]=ev.target.value; }
});
render();
if("serviceWorker" in navigator){ window.addEventListener("load",function(){ navigator.serviceWorker.register("sw.js").catch(function(){}); }); }
