(function(){
function go(){
var b=document.body;if(!b||b.getAttribute('data-uz'))return;b.setAttribute('data-uz','1');
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;
var lk=document.createElement('link');lk.rel='stylesheet';lk.href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap';document.head.appendChild(lk);
var g1=document.createElement('div');g1.className='uz-grid-bg';b.insertBefore(g1,b.firstChild);
var gl=document.createElement('div');gl.className='uz-glow';b.insertBefore(gl,b.firstChild);
var pg=document.createElement('div');pg.className='uz-prog';b.appendChild(pg);
function prog(){var h=document.documentElement;var m=h.scrollHeight-h.clientHeight;pg.style.width=(m>0?(window.pageYOffset/m*100):0)+'%';}
window.addEventListener('scroll',prog,{passive:true});prog();
var CY={'А':'A','Б':'B','В':'V','Г':'G','Д':'D','Ђ':'Đ','Е':'E','Ж':'Ž','З':'Z','И':'I','Ј':'J','К':'K','Л':'L','Љ':'Lj','М':'M','Н':'N','Њ':'Nj','О':'O','П':'P','Р':'R','С':'S','Т':'T','Ћ':'Ć','У':'U','Ф':'F','Х':'H','Ц':'C','Ч':'Č','Џ':'Dž','Ш':'Š','а':'a','б':'b','в':'v','г':'g','д':'d','ђ':'đ','е':'e','ж':'ž','з':'z','и':'i','ј':'j','к':'k','л':'l','љ':'lj','м':'m','н':'n','њ':'nj','о':'o','п':'p','р':'r','с':'s','т':'t','ћ':'ć','у':'u','ф':'f','х':'h','ц':'c','ч':'č','џ':'dž','ш':'š'};
function lat(s){return s.replace(/[Ѐ-ӿ]/g,function(c){return CY[c]!==undefined?CY[c]:c;});}
function fix(){
var sel='.date-header,.post-timestamp,.published,time,.post-footer,.comment-link,.blog-pager,.widget h3,.jump-link,.read-more,.post-labels,.post-share-buttons,.uz-xbox,.uz-cform,.uz-search,.Profile,.BlogSearch';
document.querySelectorAll(sel).forEach(function(root){
var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null);var n;
while((n=w.nextNode())){var t=n.nodeValue;if(!t||!t.trim())continue;var o=t;
t=lat(t);
t=t.replace(/read more\s*»?/i,'Pročitaj više →').replace(/Postavi komentar/i,'Komentari').replace(/Novije objave|Noviji postovi/i,'Novije').replace(/Starije objave|Stariji postovi/i,'Starije');
t=t.replace(/^\s*(\S+)\s+(\d{1,2}),\s*(\d{4})\s*$/,function(m,mo,d,y){return (+d)+'. '+mo.toLowerCase()+' '+y+'.';});
if(t!==o)n.nodeValue=t;}
});
document.querySelectorAll('.uz-cform input,.uz-cform textarea,.uz-cform button,.uz-xbox input,.BlogSearch input').forEach(function(i){['value','placeholder','aria-label','title'].forEach(function(a){var x=i.getAttribute(a);if(x&&/[Ѐ-ӿ]/.test(x))i.setAttribute(a,lat(x));});});
document.querySelectorAll('a.jump-link,.jump-link a').forEach(function(a){if(/read more/i.test(a.textContent))a.textContent='Pročitaj više →';});
}
fix();setTimeout(fix,700);setTimeout(fix,2000);
/* faze puta */
var S=[
['Kuvar','Od petog razreda osnovne','Od petog razreda osnovne znao sam da hoću da budem kuvar. Taj put sam i ostvario.'],
['Ugostitelj','Ugostiteljstvo i Emirati','Rad u ugostiteljstvu i u inostranstvu. Razlog odlaska u Emirate ispunio sam kada sam otvorio svoju prvu radnju.'],
['Vlasnik, jedan čovek','2018.','Prva preduzetnička radnja. Sa 24 godine ulazim u posao sam i nespreman, bez razumevanja konkurencije i ciljne grupe.'],
['Organizacija događaja','Prvi događaji','Posao se širi na proslave i događaje: Cheers to 27, Gastro avantura, Gastro business networking.'],
['Konsalting','Pomažem drugima','Savetujem firme i brendove u industriji događaja.'],
['Edukacija','2019.','Postajem nastavnik i predavač: kuvarstvo i praktična nastava, kasnije i na visokoj školi.'],
['Širenje firme','Od radnje do društva','Duma prerasta u Duma F&B, a zatim u društvo sa ograničenom odgovornošću, uz disciplinu i organizaciju.'],
['Ketering menadžment','Ketering i salaš','Duma ketering i, od 2026, vođenje Dedinog salaša sa porodicom.'],
['Marketing','Gradim brendove','Kreiramo brendove i marketing za sebe i za druge.'],
['Menadžment firmi','Upravljanje firmama','Tim od više od 30 ljudi i 167 događaja u 2026. Vodim firmu kao menadžment i marketing agenciju.'],
['Tehnologija i AI','Danas','Sopstvene aplikacije i tim AI agenata. Cilj je da firma preraste u tehnološku.']];
var PAL=['#7A2431','#7A2431','#7A2431','#8A6A1F','#8A6A1F','#8A6A1F','#A87E2A','#A87E2A','#A87E2A','#B8902E','#B8902E'];function col(i){return PAL[i];}
function hex(i){return parseInt(PAL[i].slice(1),16);}
var home=window.__UZ_HOME||(!/\.html$/.test(location.pathname)&&!/\/search/.test(location.pathname));
var hd=document.querySelector('header');
if(home&&hd){
var w=document.createElement('div');
var rail='';for(var i=0;i<S.length;i++)rail+='<span style="--c:'+col(i)+'"></span>';
w.innerHTML=
'<section class="uz-hero"><div class="uz-wrap"><div><p class="uz-kick uz-rv">Osnivač · Duma Enterprise</p><h2 class="uz-rv">Uroš Zavarko</h2><p class="uz-motto uz-rv">Uvek radi ono što zamisliš</p><p class="uz-txt uz-rv">Od petog razreda osnovne želeo sam da budem kuvar i taj put sam ostvario. Kroz rad i greške stigao sam do firme koja danas ima više od 30 ljudi, a sada ulazim u tehnologiju i AI. Ovde pišem o poslu, mladim preduzetnicima i o tome da je u Srbiji moguće uspeti pošteno i mlad. Oslonac mi je porodica.</p></div><div class="uz-scene uz-rv" id="uzscene"><span class="uz-tag" id="uztag"><b>01</b>Kuvar</span><div class="uz-ava"><img src="https://dumaenterprise.com/blog-assets/img/uros.jpg" alt="Uroš Zavarko"></div></div></div><div class="uz-rail"><div id="uzrail">'+rail+'</div></div></section>'+
'<section class="uz-core"><div class="uz-wrap"><div class="uz-c uz-rv"><b>Disciplina</b><span>Rad svaki dan</span></div><div class="uz-c uz-rv"><b>Samopouzdanje</b><span>Vera u ono što radim</span></div><div class="uz-c uz-rv"><b>Znanje</b><span>Učenje bez prestanka</span></div><div class="uz-c fam uz-rv"><b>Porodica</b><span>Otac, majka i supruga</span></div></div></section>'+
'<div class="uz-h uz-rv">Najnoviji tekstovi</div>';
var anchor=hd.nextSibling;while(w.firstChild){hd.parentNode.insertBefore(w.firstChild,anchor);}
}
if(home){var af=document.createElement('div');af.className='uz-after';
var tl='';for(var j=0;j<S.length;j++)tl+='<div class="uz-ti uz-rv" data-i="'+j+'" style="--c:'+col(j)+'"><i>'+S[j][1]+'</i><b>'+S[j][0]+'</b><span>'+S[j][2]+'</span></div>';
af.innerHTML='<section class="uz-sec"><div class="uz-wrap"><div class="uz-h2 uz-rv">Moj put</div><p class="uz-sub uz-rv">Od kuhinje do tehnologije, u jedanaest koraka.</p><div class="uz-tl" id="uztl"><div class="uz-fill" id="uzfill"></div>'+tl+'</div></div></section>'+
'<section class="uz-sec"><div class="uz-wrap"><div class="uz-h2 uz-rv">Čime se bavimo</div><div class="uz-grid" style="margin-top:14px">'+
'<div class="uz-box uz-rv"><b>Događaji i ketering</b><span>Duma ketering za firme, svadbe, rođendane i proslave, uz kompletnu organizaciju.</span></div>'+
'<div class="uz-box uz-rv"><b>Dedin salaš</b><span>Event centar na Čeneju koji od 2026. sa porodicom vodimo.</span></div>'+
'<div class="uz-box uz-rv"><b>Menadžment i marketing</b><span>Kreiramo brendove i vodimo druge firme u industriji događaja i konsaltinga.</span></div>'+
'<div class="uz-box uz-rv"><b>Gastro akademija</b><span>Gastronomske radionice i obuke za firme i pojedince, u partnerstvu.</span></div>'+
'<div class="uz-box uz-rv"><b>Gotovi događaji</b><span>Cheers to 27, Gastro avantura, Gastro business networking i Dan za decu.</span></div>'+
'<div class="uz-box uz-rv"><b>AI i digitalni proizvodi</b><span>Sopstvene aplikacije i tim AI agenata.</span></div>'+
'</div></div></section>'+
'<section class="uz-sec"><div class="uz-wrap"><div class="uz-h2 uz-rv">Iz naše kuhinje</div><p class="uz-sub uz-rv">Pravi stolovi sa naših događaja.</p><div class="uz-gal"><figure class="uz-rv"><img loading="lazy" src="https://dumaenterprise.com/blog-assets/img/ketering-1.jpg" alt="Kanapei na drvenom stalku sa cvetnim aranžmanom"><figcaption>Kanapei i aranžman</figcaption></figure><figure class="uz-rv"><img loading="lazy" src="https://dumaenterprise.com/blog-assets/img/ketering-2.jpg" alt="Svečani sto sa kanapeima u zlatnim ramovima"><figcaption>Svečani sto</figcaption></figure><figure class="uz-rv"><img loading="lazy" src="https://dumaenterprise.com/blog-assets/img/detalj-1.jpg" alt="Detalj dekoracije stola"><figcaption>Detalj dekoracije</figcaption></figure></div></div></section>'+
'<section class="uz-sec" id="uzistrazi"><div class="uz-wrap"><div class="uz-h2 uz-rv">Istraži blog</div><form class="uz-search uz-rv" action="/search" method="get"><input name="q" type="search" placeholder="Pretraži tekstove"><button type="submit">Traži</button></form><div class="uz-xgrid" id="uzx"></div></div></section>';b.appendChild(af);
var xg=document.getElementById('uzx');
['PopularPosts2','Label1','BlogArchive1','Subscribe1','Followers1','Stats1'].forEach(function(id){var e=document.getElementById(id);if(e&&xg){var c=document.createElement('div');c.className='uz-xbox uz-rv';c.appendChild(e);xg.appendChild(c);}});
}
var f=document.createElement('div');f.className='uz-foot';
f.innerHTML='<div class="uz-wrap uz-rv"><h4>Javi mi se</h4><p>Ako ti treba pomoć ili samo želiš da me pitaš nešto o poslu, piši mi ili me pozovi.</p><div class="ct"><a href="mailto:uroszavarkoduma@gmail.com">uroszavarkoduma@gmail.com</a><a href="tel:+381604855001">060 485 5001</a></div><div class="lk"><a href="https://dumaenterprise.com/magazin/">Magazin</a><a href="https://dumaenterprise.com/">Sajt</a><a href="https://www.linkedin.com/in/uro%C5%A1-zavarko-808b0b31a/">LinkedIn</a><a href="https://www.instagram.com/marketing_consulting_duma/">Instagram</a><a href="https://urosduma.github.io/Atelje/">Atelje</a></div></div>';
var cf=document.getElementById('ContactForm1');if(cf&&home){var cw=document.createElement('div');cw.className='uz-cform';cw.appendChild(cf);f.querySelector('.uz-wrap').appendChild(cw);}
b.appendChild(f);
document.querySelectorAll('.post-outer-container').forEach(function(e){e.classList.add('uz-rv');});
var rv=document.querySelectorAll('.uz-rv');
if('IntersectionObserver' in window&&!reduce){
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('uz-in');io.unobserve(e.target);}});},{threshold:.12});
rv.forEach(function(e){io.observe(e);});
setTimeout(function(){document.querySelectorAll('.uz-rv:not(.uz-in)').forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight)e.classList.add('uz-in');});},400);
}else{rv.forEach(function(e){e.classList.add('uz-in');});}
/* linija koja se puni pri skrolu */
var tlE=document.getElementById('uztl'),fl=document.getElementById('uzfill');
function fillTl(){if(!tlE||!fl)return;var r=tlE.getBoundingClientRect();var p=(innerHeight*.6-r.top)/r.height;p=Math.max(0,Math.min(1,p));fl.style.height=(p*(r.height-12))+'px';}
window.addEventListener('scroll',fillTl,{passive:true});fillTl();
/* 3D scena: faze */
var sc=document.getElementById('uzscene');
function scene(){
if(!sc||!window.THREE)return;var T=window.THREE;
try{
var cv=document.createElement('canvas');sc.insertBefore(cv,sc.firstChild);
var rd=new T.WebGLRenderer({canvas:cv,antialias:true,alpha:true});rd.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
var scn=new T.Scene();var cam=new T.PerspectiveCamera(45,1,.1,100);cam.position.z=6.2;
var grp=new T.Group();scn.add(grp);
var ico=new T.Mesh(new T.IcosahedronGeometry(1.7,0),new T.MeshBasicMaterial({color:0x8B2A3A,wireframe:true,transparent:true,opacity:.95}));grp.add(ico);
var core=new T.Mesh(new T.IcosahedronGeometry(1.0,0),new T.MeshStandardMaterial({color:0x8B2A3A,emissive:0x8B2A3A,emissiveIntensity:.18,roughness:.35,metalness:.6,flatShading:true}));grp.add(core);
var ring=new T.Mesh(new T.TorusGeometry(2.5,.014,8,160),new T.MeshBasicMaterial({color:0xA87E2A,transparent:true,opacity:.9}));ring.rotation.x=1.2;grp.add(ring);
var ring2=new T.Mesh(new T.TorusGeometry(2.95,.01,8,160),new T.MeshBasicMaterial({color:0x7A6A55,transparent:true,opacity:.55}));ring2.rotation.x=1.9;ring2.rotation.y=.5;grp.add(ring2);
var nodes=[];for(var i=0;i<11;i++){var m=new T.Mesh(new T.SphereGeometry(.09,12,12),new T.MeshBasicMaterial({color:i%2?0xB8902E:0x7A2431}));grp.add(m);nodes.push(m);}
var N=220,pos=new Float32Array(N*3);for(var j=0;j<N;j++){var r=3+Math.random()*2.5,th=Math.random()*6.283,ph=Math.acos(2*Math.random()-1);pos[j*3]=r*Math.sin(ph)*Math.cos(th);pos[j*3+1]=r*Math.sin(ph)*Math.sin(th);pos[j*3+2]=r*Math.cos(ph);}
var pgm=new T.BufferGeometry();pgm.setAttribute('position',new T.BufferAttribute(pos,3));
var pm=new T.PointsMaterial({color:0xA87E2A,size:.05,transparent:true,opacity:.7});var pts=new T.Points(pgm,pm);scn.add(pts);
scn.add(new T.AmbientLight(0xfff4dc,.85));var dl=new T.DirectionalLight(0xffffff,1.3);dl.position.set(3,3,5);scn.add(dl);
function size(){var w=sc.clientWidth,h=sc.clientHeight;rd.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix();}
size();window.addEventListener('resize',size);
var tx=0,ty=0,cx=0,cy=0,vis=true,t=0;
sc.addEventListener('mousemove',function(e){var r=sc.getBoundingClientRect();tx=((e.clientX-r.left)/r.width-.5)*1.2;ty=((e.clientY-r.top)/r.height-.5)*1.2;});
sc.addEventListener('mouseleave',function(){tx=0;ty=0;});
if('IntersectionObserver' in window){new IntersectionObserver(function(es){vis=es[0].isIntersecting;},{threshold:0}).observe(sc);}
var sp=1;
function frame(){requestAnimationFrame(frame);if(!vis)return;t+=.01*sp;
cx+=(tx-cx)*.06;cy+=(ty-cy)*.06;var sy=window.pageYOffset*.0016;
grp.rotation.y=t*.35+cx+sy;grp.rotation.x=cy*.8+Math.sin(t*.5)*.12;
ico.rotation.z=t*.2;core.rotation.x=-t*.5;core.rotation.y=t*.4;
ring.rotation.z=t*.4;ring2.rotation.z=-t*.3;pts.rotation.y=-t*.05;
for(var k=0;k<nodes.length;k++){var a=t*.8+k*.571,rr=2.5;nodes[k].position.set(Math.cos(a)*rr,Math.sin(a)*rr*Math.cos(1.2),Math.sin(a)*rr*Math.sin(1.2));}
rd.render(scn,cam);}
var si=0,tg=document.getElementById('uztag'),rl=document.querySelectorAll('#uzrail span');
function setStage(s){var c=hex(s);
if(tg){tg.style.opacity=0;setTimeout(function(){tg.innerHTML='<b>'+(s<9?'0':'')+(s+1)+'</b>'+S[s][0];tg.style.opacity=1;},160);}
ico.geometry.dispose();ico.geometry=new T.IcosahedronGeometry(1.7,s<3?0:(s<7?1:2));
ico.material.color.setHex(0x7A2431);core.material.color.setHex(s<6?0x7A2431:0xB8902E);core.material.emissive.setHex(s<6?0x7A2431:0xB8902E);
core.scale.setScalar(.7+s*.05);ring.visible=s>=2;ring2.visible=s>=6;
for(var q=0;q<nodes.length;q++){nodes[q].visible=q<=s;}
pgm.setDrawRange(0,Math.round(N*(s+1)/S.length));

for(var z=0;z<rl.length;z++){rl[z].classList.toggle('on',z===s);}
}
if(tg){tg.style.transition='opacity .16s';}
if(reduce){setStage(S.length-1);rd.render(scn,cam);}else{setStage(0);setInterval(function(){si=(si+1)%S.length;setStage(si);},2400);frame();}
}catch(e){}
}
if(sc){if(window.THREE){scene();}else{var s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';s.onload=scene;document.head.appendChild(s);}}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();})();
(function(){var M={'sta-svi-pocetnici-u-keteringu-trebaju':['ketering-1.jpg','Kanapei na drvenom stalku sa cvetnim aranžmanom'],'kako-se-pravilno-konzumira-svedski-sto':['ketering-2.jpg','Svečani sto sa kanapeima u zlatnim ramovima']};
var m=location.pathname.match(/\/([^\/]+)\.html$/);if(!m||!M[m[1]])return;function go(){var pb=document.querySelector('.post-body');if(!pb||pb.querySelector('.uz-cover'))return;var f=document.createElement('p');f.style.textAlign='center';f.innerHTML='<img class="uz-cover" src="https://dumaenterprise.com/blog-assets/img/'+M[m[1]][0]+'" alt="'+M[m[1]][1]+'">';pb.insertBefore(f,pb.firstChild)}
if(document.readyState!=='loading')go();else document.addEventListener('DOMContentLoaded',go)})();
