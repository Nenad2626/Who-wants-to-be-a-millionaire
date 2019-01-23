let iznos=document.querySelectorAll(".iznos");
let osvojeno=document.querySelector(".osvojeno");
let pitanja=document.querySelector(".pitanja");
let odgovor=document.querySelectorAll(".kviz");
let h1=document.querySelector("h1");
let zagarantovanaSuma1=document.querySelector(".zagarantovanaSuma");
let odustati2=document.querySelector("#odustati");
let pomoci=document.querySelectorAll(".pomoc");
let takmicar=document.querySelector(".takmicar");
let pomaganje=document.querySelector(".pomaganje");
let pomaganje2=document.querySelector(".pomaganje2");
let vreme=document.querySelector(".vreme1");
let prijateljOdgovara=document.querySelector(".prijateljOdgovara");
let publika=document.querySelectorAll(".Publika");
let publika2=document.querySelector(".publika2");
let izlaz1=document.querySelector(".izlaz");
let unutarPomoci1=document.querySelector(".prvaPomoc");
let unutarPomoci2=document.querySelector(".drugaPomoc");
let unutarPomoci3=document.querySelector(".trecaPomoc");

let prvi=14;
let drugi=14;
let zavrsi;
let zavrsi2;
let tacnoResenje=0;

let first1=0;
let one1=0;
let two2=0;
let three3=0;
let four4=0;
let five5=14;

let ponovo;
let opet;

let first10=0;
let one10=0;
let two20=0;
let three30=0;
let four40=0;
let tacnoResenje2=0;
let treci=14;
let cetvrti=14;
let five50=14;


// prva grupa pitanja i odgovori

let dodataPitanja=[

'Glavni grad Madjarske je ?','Koja corava zivotinja zrno ubode ?','Najveca planeta u solarnom sistemu je ?',
'Ko peva pesmu "Sinoc nisi bila tu" ?','Koji crtani lik ima cuvenu repliku "Sefe koji ti je vrag" ?',
'Koja drzava je prodala Aljasku Sjedinjenim Americkim Drzavama 30 marta 1867 ?','Koje boje je dragi kamen ametist ?',
'Koji glumac nije rodjen u Sjedinjenim Americkim Drzavama ?','Koji je latinski naziv za prst ?','Koje godine je osnovana kompanija "Gugl" ?',
'Osoba koja pati od ablutofobije, ima strah od ?','Kojoj drzavi administrativno pripada Bozicno ostrvo ?',
'Pravo ime pisca Luisa Kerola je ?','Koje drvo pripada porodici listopadnih drveca ?','Od kad do kad je ziveo starogrcki matematicar Arhimed ?'

];

let dodatiOdgovori1=[
"Budimpesta","Lisica","Merkur","Zeljko Samardzic","Paja Patak",
"Rusija","Narandzaste","Tom Kruz","Humerus","1997",
"Kupanja","Australija","Carls Farar Braun","Himalajski bor","227 p.n.e-192 p.n.e"

];


let dodatiOdgovori2=[
"Bukurest","Pacov","Venera","Zdravko Colic","Patak Daca",
"Belorusija","Roze","Dzim Keri","Capili","1998",
"Pevanja","Austrija","Carls Lamb","Aris","287 p.n.e-212 p.n.e"

];

let dodatiOdgovori3=[
"Budva","Koka","Mars","Ana Bekuta","Dusko Dugousko",
"Ukrajina","Bele","Stiven Sigal","Digitus","1999",
"Plakanja","Novi Zeland","Carls Latvidz Dodzson","Tuja","255 p.n.e-205 p.n.e"

];

let dodatiOdgovori4=[
"Beograd","Petao","Jupiter","Tina Tarner","Pera Detlic",
"Gruzija","Ljubicaste","Kevin Kostner","Collum","2000",
"Umivanja","Kanada","Robert Kroker","Betula nana","591 p.n.e-410 p.n.e"

];

let tacniOdgovori=[

"Budimpesta","Koka","Jupiter","Zdravko Colic","Dusko Dugousko",
"Rusija","Ljubicaste","Dzim Keri","Digitus","1998",
"Kupanja","Australija","Carls Latvidz Dodzson","Betula nana","287 p.n.e-212 p.n.e"

];

// druga grupa pitanja i odgovora


let dodataPitanja2=[

"Kako je glasio nadimak popularnog glumca Milorada Mandica ?",
"Ako radite trbusnjake gradite misice na kom delu tela ?",
"Koje boje je kaput Deda Mraza ?",
"Kako glasi mnozina od reci cevap ?",
"Ako se nalazimo na plazi nosimo koji deo odece ?",
"Koji broj na dresu je Majkl Dzordan nosio u Cikago Bulsima ?",
"Kojoj porodici zivotinja pripadaju slonovi ?",
"Koji je glavni grad drzave Niger ?",
"Od kad do kad je trajao Prvi punski rat ?",
"Salmaj pripada kojoj grupi instrumenata ?",
"Koje godine je preminuo poznati pevac Beni Gudmen ?",
"Koliko stepenica ima Ajfelov toranj ?",
'Ko je napisao roman "Igre prestola" ?',
"Kako je pravo ime glumice Vupi Goldberg ?",
"Koji je naziv za pretke u 16 kolenu ?"

];

let dodatiOdgovori5=[

"Manda","Noge","Plave","Cevapi","Zimsku jaknu",
"23","Elephantidoe","Najrobi","284. п. н. е. — 261. п. н. е.","Zicani",
"1985","1662","Volter Abis","Demi Dzin Gajns","Kurdjel i kurdjela"

];

let dodatiOdgovori6=[

"Panda","Ruke","Crvene","Cevapcici","Trenerku",
"24","Elephantidae","Budzumbura","274. п. н. е. — 251. п. н. е.","Duvacki",
"1986","1663","Voren Adler","Tara li Patrik","Kurdjun i kurdjuna"

];

let dodatiOdgovori7=[

"Vanda","Stomak","Zute","Cevopi","Vunenu kapu",
"25","Elephantidee","Moroni","264. п. н. е. — 241. п. н. е.","Udaracki",
"1987","1664","Tom Klenzi","Kerin Ilejn Dzonson","Sudepac i sudepaca"

];

let dodatiOdgovori8=[

"Banda","Ledja","Bele","Ceve","Sorc",
"26","Elephantidie","Nijamej","254. п. н. е. — 231. п. н. е.","Elektronski",
"1988","1665","Dzordz R.R Martin","Olivija Dzejn Kokbern","Beli orao i bela pcela"

];

let tacniOdgovori2=[

"Manda","Stomak","Crvene","Cevapi","Sorc","23","Elephantidae",
"Nijamej","264. п. н. е. — 241. п. н. е.","Duvacki","1986","1665",
"Dzordz R.R Martin","Kerin Ilejn Dzonson","Beli orao i bela pcela"

];

// treca grupa pitanja i odgovora


let dodataPitanja3=[

'Ko se smatra "kraljem rokenrola" ?',
'Sta izlazi iz vulkana ?',
'Ko upravlja avionom ?',
'Na sta mislimo ako kazemo "najbrzi cirkus na svetu" ?',
'Ko je napisao roman "Robinzon Kruso" ?',
'Encefalitis je upala kog organa ?',
'Ko je napisao pesmu "Pevam danju pevam nocu" u izvodjenju Zdravka Colica ?',
'Koliko godina je vladala kraljica Engleske i Irske-Elizabeta I Tjudor ?',
'Gde je nastao rukomet ?',
'Kako se zove peti nastavak filma o poznatom carobnjaku Hariju Poteru ?',
'Koje godine je rodjen poznati madjionicar Hari Hudini ?',
'Kako se zove devojka iz pesme "Zenidba Milica Barjaktara " ?',
'Ko je bio 21 predsednik Sjedinjenih Americkih Drzavam ?',
'Koja drzava je dvanesta na svetu po broju stanovnika ?',
'Kako se zove najbolji prijatelj Romea iz poznatog romana "Romeo i Julija" ?'

];

let dodatiOdgovori9=[

"Majkl Dzekson","Sneg","Vozovodja","Formula 1","Carls Dikens",
"Upala bubrega","Kornelije Kovac","44","Kanada","Hari Poter i Vatreni pehar",
"1874","Leposava","Cester A Artur","Meksiko","Merkucio"

];

let dodatiOdgovori10=[

"Elvis Prisli","Voda","Kapetan","Trke camaca","Mark Tven",
"Upala pluca","Branko Radicevic","45","Nemacka","Hari Poter i Red Feniksa",
"1875","Ljeposava","Herbert Huver","Etiopija","Avram"

];

let dodatiOdgovori11=[

"Dzejms Din","Lava","Kamiondzija","Moto trke","Danijel Defo",
"Upala mozga","Vasko Popa","46","Danska","Hari Poter i Polukrvni Princ",
"1876","Milica","Abraham Linkoln","Filipini","Bonvoljo"

];

let dodatiOdgovori12=[

"Doktor Alban","Zemlja","Pilot","Reli","Vilijam Sekspir",
"Upala jetre","Arsen Dedic","50","Austrija","Hari Poter i Relikvije Smrti",
"1877","Julijana","Kelvin Kulidz","Vijetnam","Tibaldo"

];

let tacniOdgovori3=[

"Elvis Prisli","Lava","Pilot","Formula 1","Danijel Defo",
"Upala mozga","Branko Radicevic","44","Danska","Hari Poter i Red Feniksa",
"1874","Ljeposava","Cester A Artur","Etiopija","Bonvoljo"

];

// cetvrta grupa pitanja i odgovora

let dodataPitanja4=[

'U decijoj pesmici mis je dobio ?',
'Sta nam je potrebno za igru "Covece ne ljuti se" ?',
'U prevodu sa engleskog sta znace reci "Good morning" ?',
'Ko je bio vodja Prvog srpskog ustanka ?',
'Koju sirovinu nazivamo "crno zlato" ?',
'U grckoj mitologiji, ko je bio bog vatre ?',
'Ko je trenutno najbogatiji covek na svetu ?',
'Koji glumac igra ulogu Gandalfa u trilogiji "Gospodar prstenova" ?',
'Koliko je visok bivsi kosarkas Sakil O Nil ?',
'Kako se zove covek koji je napravio "Koka kolu" ?',
'Koliko traje trudnoca kod slonova ?',
'Koje godine je izbila Termopilska bitka ?',
'Sa kojom drzavom se Brazil granici na severu ?',
'Koliku maksimalnu brzinu moze da razvije Ferarijev model "La Ferrari" ?',
'Sat znaci skracenica NOLIT ?'

];

let dodatiOdgovori13=[

"Grip","Trouglovi","Kako ste","Milos Obrenovic","Kamen",
"Hermes","Bil Gejts","Elajdza Vud","215cm","Dzon Pemberton",
"20 meseci","483. п. н. е.","Bolivija","300km/h","Naucna licitacija"

];

let dodatiOdgovori14=[

"Dzip","Kockice","Dobro jutro","Djuradj Brankovic","Ugalj",
"Dionis","Dzef Bezos","Son Ostin","216cm","Dzon Logi Berd",
"21 mesec","482. п. н. е.","Urugvaj","325km/h","Nova literatura"

];

let dodatiOdgovori15=[

"Cip","Patkice","Dobar apetit","Karadjordje","Guma",
"Taumant","Voren Bafet","Ijan Makelen","217cm","Dzon Goti",
"22 meseca","481. п. н. е.","Venecuela","350km/h","Naucna literatura"

];

let dodatiOdgovori16=[

"Kip","Vodeni top","Srecna nova godina","Milos Obilic","Nafta",
"Hefest","Mark Zakerberg","Son Bin","218cm","Dzon Dzonson",
"23 meseca","480. п. н. е.","Peru","375km/h","Nova licitacija"

];

let tacniOdgovori4=[

"Grip","Kockice","Dobro jutro","Karadjordje","Nafta",
"Hefest","Dzef Bezos","Ijan Makelen","216cm","Dzon Pemberton",
"22 meseca","480. п. н. е.","Venecuela","350km/h","Nova literatura"

];

// peta grupa pitanja i odgovora

let dodataPitanja5=[

'Sta jedu pande ?',
'Koja je hemijska formula soli ?',
'Sta u zargonu znaci "pranje novca" ?',
'Kog datuma se slavi Sveti Nikola ?',
'Iz koje drzave dolazi fudbaler Kristijano Ronaldo ?',
'Koje godine je osnovana drustvena mreza Fejsbuk ?',
'Koliko vremena je postojao Sovjetski savez(SSSR) ?',
'Ko se smatra pronalazacem fena za kosu ?',
'Koje su dimenzije terena u kriketu ?',
'Koji narod je doneo krompir u Evropu ?',
'Kako se zove jedini insekt koji zivi na Antarktiku ?',
'Prema Wikipediji po podacima iz 2017 godine koliko stanovnika ima Njujork ?',
'Koja muzicka grupa izvodi numeru "When a blind man cries" ?',
'Ko je bio 258 papa ?',
'U kom filmu se proslavio Frenk Sinatra ?'

];

let dodatiOdgovori17=[

"Bambus","H2SO4","Falsifikovanje novca","18 decembra","Grcka",
"2004","68 godina 11 meseci 25 dana","Aleksandar Bel","120 sa 120 metara","Holandjani",
"Portugalica Antartica","8.622.698 stanovnika","Aerosmith","Jovan Pavle I","Kazablanka"

];

let dodatiOdgovori18=[

"Eukaliptus","H2SO3","Ciscenje novca","19 decembra","Brazil",
"2005","68 godina 11 meseci 26 dana","Aleksandar Fleming","110 sa 130 metara","Italijani",
"Domestica Antartica","8.522.700 stanovnika","Queen","Jovan Pavle II","Spartak"

];

let dodatiOdgovori19=[

"Nanu","NaCl","Vezivanje novca","20 decembra","Argentina",
"2006","68 godina 11 meseci 27 dana","Aleksandar Godfoj","130 sa 110 metara","Britanci",
"Belgica Antartica","8.422.298 stanovnika","Deep purple","Benegdikt XIV","Odavde do vecnosti"

];

let dodatiOdgovori20=[

"Kamilicu","HNO3","Unistavanje novca","21 decembra","Portugal",
"2007","68 godina 11 meseci 28 dana","Aleksandar Hamilton","140 sa 140 metara","Spanci",
"Domenica Antartica","8.700.800 stanovnika","Led Zeppelin","Benegdikt XV","Muskarci vole plavuse"

];

let tacniOdgovori5=[

"Bambus","NaCl","Falsifikovanje novca","19 decembra","Portugal",
"2004","68 godina 11 meseci 26 dana","Aleksandar Godfoj","130 sa 110 metara","Spanci",
"Belgica Antartica","8.622.698 stanovnika","Deep purple","Benegdikt XV","Odavde do vecnosti"

];

// sesta grupa pitanja

let dodataPitanja6=[

'Na kom takmicenju je pobedila Marija Serifovic ?',
'Gde zivi jelen ?',
'Koji nadimak imaju navijaci Mancester Junajteda ?',
'Kakav ukus ce imati kafa ako smo stavili secer u nju ?',
'Ako je glavni grad Rim u kojoj drzavi se nalazimo ?',
'Kako se zove najvisi vodopad u Evropi ?',
'Ako je u Srbiji podne koliko sati je u Pekingu ?',
'Koje godine je otvoren Londonski metro ?',
'Pojam kvadratura kruga se koristi kao metafora za ?',
'Ako ste rodjeni 17.02.1988 koji ste horoskopski znak u kineskom horoskopu ?',
'Koji kompozitor je iskomponovao operu "Sumrak bogova" ?',
'Koju pesmu izvodi grupa ABBA ?',
'Kako se zove brat blizanac poznatog glumca Vin Dizela ?',
'Kada je izasla prva verzija igrice "The Need for Speed" ?',
'U koju vrstu vode spada Mrtvo more ?'

];

let dodatiOdgovori21=[

"Evrovizija","U pustinji","Male bebe","Gorak","Spanija",
"Vinufosen","5 ujutru","1861","SOS pomoc","Konj",
"Djuzepe Verdi","People need love","Mark Sinkler","1988","Reka"

];

let dodatiOdgovori22=[

"Dolarvizija","U sumi","Veliki medvedi","Kiseo","Nemacka",
"Tugela","7 uvece","1862","Sifru vojnih baza","Tigar",
"Rihard Vagner","Love before death","Pol Vinsent","1991","More"

];

let dodatiOdgovori23=[

"Funtavizija","Na moru","Crveni djavoli","Slan","Italija",
"Iguazu","7 ujutru","1863","Lecenje tifusa","Pacov",
"Frederik Sopen","Smile and walk","Tim Vinsent","1994","Jezero"

];

let dodatiOdgovori24=[

"Dinarvizija","Na Dedinju","Beli andjeli","Sladak","Engleska",
"Saterlend","5 uvece","1864","Neresiv problem","Zmaj",
"Kamij Sen Sans","Crying heart","Pol Sinkler","1997","Potok"

];

let tacniOdgovori6=[

"Evrovizija","U sumi","Crveni djavoli","Sladak","Italija",
"Vinufosen","7 uvece","1863","Neresiv problem","Zmaj",
"Rihard Vagner","People need love","Pol Vinsent","1994","Jezero"

];

// sedma grupa pitanja i odgovora

let dodataPitanja7=[

'"Soko zove orao prijem" je replika iz kog filma ?',
'Naucnici vrse eksperimente u ?',
'Na kom polustrvu se nalazi Srbija ?',
'Pozivni broj za policiju je ?',
'Da bi nam bilo toplo moramo da ukljucimo ?',
'Kako su Rimljani zvali Zajecar ?',
'Ko je resio Sfinginu zagonetku ?',
'Dunav protice kroz koliko drzava ?',
'U pesmi "Zenidba Dusanova" kako se zovu braca Vojinovici ?',
'Ko pozajmljuje glas Bartu Simpsonu ?',
'Kao se zove prvi model mobilnog telefona Motorola iz 1974 godine ?',
'Kom delu Afrike pripada Zimbabve ?',
'Koliko u proseku spavaju lavovi ?',
'Kako glasi latinski naziv za hajducku travu ?',
'Koliko je visoka Branderbuska kapija ?'

];

let dodatiOdgovori25=[

"Ko to tamo peva","Stali","Apeninskom","191","Mozak",
"Akuminkum","Tezej","10","Stanoje i Miloje","Dena Kastelaneta",
"DynaTAC","Severnom","8-10 sati","Matricaria recutita","126 metara"

];

let dodatiOdgovori26=[

"Balkanski spijun","Rudniku","Pirinejskom","192","Televizor",
"Neoplanta","Herkul","11","Marko i Milos","Hari Sirer",
"DynaTAC 8000x","Juznom","10-12 sati","Mentha spicata","26 metara"

];

let dodatiOdgovori27=[

"Tesna koza","Laboratoriji","Skandinavskom","193","Mobilni",
"Semendrija","Edip","12","Vukasin i Petrasin","Hank Azarija",
"PlasmaTAC","Zapadnom","15-18 sati","Achillea millefolium","260 metara"

];

let dodatiOdgovori28=[

"Zikina dinastija","Kafani","Balkanskom","194","Grejanje",
"Romulijana","Homer","13","Stefan i Sava","Nensi Kartrajt",
"MotoTAC","Istocnom","16-20 sati","Oxycoccus","126 centimetara"

];

let tacniOdgovori7=[

"Balkanski spijun","Laboratoriji","Balkanskom","192","Grejanje",
"Romulijana","Edip","10","Vukasin i Petrasin","Nensi Kartrajt",
"DynaTAC","Juznom","16-20 sati","Achillea millefolium","26 metara"

];

// osma grupa pitanja i odgovora

let dodataPitanja8=[

'Kako se zove rodno mesto Vuka Karadzica ?',
'Na celu svake vojske se nalazi ?',
'Ako zelite da studirate morate da idete na ?',
'U kom sitkomu se pojavljuju Del Boj i Rodni ?',
'Najpoznatija ulica u Beogradu je ?',
'Koja licnost se nalazi na novcanici od 5 americkih dolara ?',
'Koje godine je Brazil prvi put osvojio svetsko prvenstvo u fudbalu ?',
'U prevodu sa latinskog koje sazvezdje se zove Monoceros ?',
'Koja pesma je na 6 mestu po broju pregleda na YouTube ?',
'Koliko suglasnika spada u usnene ?',
'Za koje vrste bolesti se koristi lek heparin ?',
'Ko je odneo pobedu u bici kod Austerlica ?',
'U kom manastiru se nalazi freska "Hristovo vaskrsenje" ?',
'"Tisina je nekad naglasniji odgovor" je citat kog poglavara ?',
'Koliku povrsinu zauzima Tihi okean ?'

];

let dodatiOdgovori29=[

"Mackov kamen","Kapetan","Vasar","Alo alo","Juzni bulevar",
"Dzordz Vasington","1954","Jarac","Despacito","3",
"Srcane","Napoleon Bonaparta","Staro Nagoricane","Mahatma Gandi","179,7 milona km2"

];

let dodatiOdgovori30=[

"Trsic","Kaplar","Mesec","Mucke","Vojvode Stepe",
"Bendzamin Frenklin","1958","Jedra","Shape of You","4",
"Disajne","Aleksandar I","Nerezi","Dalaj Lama","188,7 milona km2"

];

let dodatiOdgovori31=[

"Slankamen","General","Seminar","Porodica Adams","Ljutice Bogdana",
"Abraham Linkoln","1962","Juzni krst","Uptown Funk","5",
"Stomacne","Franc II","Sveti Pantelejmon","Martin Luter King","166,7 milona km2"

];

let dodatiOdgovori32=[

"Cuprijanac","Narednik","Fakultet","Crna guja","Knez Mihajlova",
"Endru Dzekson","1970","Jednorog","Gangnam Style","6",
"Hormonske","Karl Mak","Hora","Konstantin Veliki","190,7 milona km2"

];

let tacniOdgovori8=[

"Trsic","General","Fakultet","Mucke","Knez Mihajlova",
"Abraham Linkoln","1958","Jednorog","Gangnam Style","3",
"Srcane","Napoleon Bonaparta","Hora","Dalaj Lama","179,7 milona km2"

];

// deveta grupa pitanja i odgovora

let dodataPitanja9=[

'Koja ptica ne moze da leti ?',
'Gde se nalazi sat Big Ben ?',
'Sta je po zanimanju pedijatar ?',
'"Ko visoko leti nisko" ?',
'Kada zelimo da se osisamo idemo kod ?',
'Kako se zove prvi srpski patrijarh ?',
'Koliko sati ima jedna godina ?',
'Kojem umetnickom pravcu je pripadao Salvador Dali ?',
'Ko igra glavnu zensku ulogu u filmu "Oficir i dzentlmen" ?',
'U kom programskom jeziku je napravljen "WordPress" ?',
'Koja firma proizvodi osvezivac daha Tik Tak ?',
'U kom automobilu je poginula princeza Dajana ?',
'Ko je dao gol za Partizan u finalu Kupa Sampiona protiv Real Madrida 1966 godine ?',
'Koliko kostiju ima beba ?',
'U kom gradu se odvija radnja romana "Kockar" ?'

];

let dodatiOdgovori33=[

"Pingvin","Pariz","Stolar","Vlada","Krojaca",
"Joanikije II","8500","Realizam","Debra Vinger","PHP",
"Mars","BMW","Milutin Soskic","250","Ruletenburg"

];

let dodatiOdgovori34=[

"Roda","London","Drvoseca","Nada","Bastovana",
"Sava IV","8460","Imperializam","Lori Singer","Java",
"Orbit","Rols Rojs","Mane Bajic","300","Volfsburg"

];

let dodatiOdgovori35=[

"Orao","Berlin","Lekar","Pada","Sumara",
"Jefrem","8760","Kubizam","Sigurni Viver","C++",
"Ferero","Mercedes","Milan Galic","150","Drezden"

];

let dodatiOdgovori36=[

"Golub","Rim","Advokat","Jada","Frizera",
"Danilo III","8260","Nadrealizam","Kim Katral","Rubi",
"Nestle","Jaguar","Velibor Vasovic","200","Bremen"

];

let tacniOdgovori9=[

"Pingvin","London","Lekar","Pada","Frizera",
"Joanikije II","8760","Nadrealizam","Debra Vinger","PHP",
"Ferero","Mercedes","Velibor Vasovic","300","Ruletenburg"

];

// deseta grupa pitanja

let dodataPitanja10=[

'Ko se igra sa "Barbikama" ?',
'Kapucino se sprema sa kojim sastojkom ?',
'Ko je na celu orkestra ?',
'Koju vrstu oruzja je koristio Robin Hud ?',
'Gde se nalazi Kalemegdan ?',
'U koju vrstu literature spada "Krojcerova sonata" ?',
'Koja kompanija je druga na svetu u prodaji sportske opreme ?',
'Pronadjite "uskoka" medju hajducima ?',
'Koliko dana kamila moze da izdrzi bez vode ?',
'U kom srpskom klubu je igrao kosarkas Darko Milicic ?',
'Sta znaci rec animozitet ?',
'Kako se zove lik Leonarda Dikaprija u filmu "Kosarkaski dnevnici" ?',
'Ko je podigao manastir Sopocani  ?',
'Koje godine je Mihael Sumaher presao u Ferarijev tim ?',
'Koja drzava je 1981 godine pristupila Evropskoj Uniji ?'

];

let dodatiOdgovori37=[

"Decaci","Mleko","Gitarista","Noz","U Nisu",
"Pripovetka","Najk","Pera Tunguz","10","OKK Beograd",
"Ljubav","Dzim Kerol","Stefan Decanski","1992","Svedska"

];

let dodatiOdgovori38=[

"Devojcice","Sok","Pevac","Luk i strela","U Kragujevcu",
"Bajka","Adidas","Zeka Buljubasa","9","Borac Cacak",
"Patnja","Deni Arcer","Stefan Dusan","1993","Grcka"

];

let dodatiOdgovori39=[

"Medvedi","Viski","Dirigent","Bic","U Jagodini",
"Pesma","Puma","Bajo Pivljanin","8","Vojvodina Novi Sad",
"Mrznja","Kelvin Kendi","Stefan Uros I","1996","Spanija"

];

let dodatiOdgovori40=[

"Duhovi","Sirce","Sudija","Buzdovan","U Beogradu",
"Basna","Umbro","Senjanin Ivo","7","Hemofarm Vrsac",
"Strast","Riк Dаlтоn","Stefan Nemanjic","1997","Italija"

];

let tacniOdgovori10=[

"Devojcice","Mleko","Dirigent","Luk i strela","U Beogradu",
"Pripovetka","Adidas","Senjanin Ivo","8","Hemofarm Vrsac",
"Mrznja","Dzim Kerol","Stefan Uros I","1996","Grcka"

];

let dodataPitanja11=[

'U sta udaraju bokseri ?',
'Kako se zove astronaut koji je prvi sleteo na Mesec ?',
'Na koji praznik je izbila Kosovska bitka ?',
'Koje prevozno sredstvo koriste takmicari u trci "Tur D Frans" ?',
'Na kojoj vrsti objekta tocimo gorivo ?',
'Kako se zove brod koji je potonuo 1916 godine u blizini ostrva Kea ?',
'Od kojih hemijskih elemenata se pravi plin ?',
'Kojoj pokrajini pripada Sevilja ?',
'Koliko je u proseku tezak beli medved ?',
'Pevacica Andjelina Djermanota nam je poznatija pod kojim imenom ?',
'Kojim jezikom je govorio engleski kralj Ricard Lavlje Srce kralj',
'Pronadjite zanimanje sa beneficiranim radnim stazom ?',
'Za koga se kaze da je mandzurijski kandidat ?',
'Koji dinosaurus je biljojed ?',
'U kojoj drzavi je rodjen Henri Ford osnivac Ford industrije ?'

];

let dodatiOdgovori41=[

"Kesa","Edi Marfi","Spasovdan","Camac","Kafana",
"Britanik","Metan-oktan","Aragonija","400-800 kilograma","Madona",
"Engleski","Radnik obezbedjenja","Premijera","Tiranosaur","Kalifornija"

];

let dodatiOdgovori42=[

"Dzak","Dzon Kenedi","Djurdjevdan","Balon","Pumpa",
"Kvin Meri","Propan-butan","Baleari","450-1000 kilograma","Pink",
"Francuski","Baletski igrac","Spijuna","Alosaur","Florida"

];

let dodatiOdgovori43=[

"Strunjaca","Nil Armstrong","Mitrovdan","Bicikl","Skola",
"Kvin Meri 2","Heksan-heptan","Andaluzija","500-1200 kilograma","Lejdi Gaga",
"Grcki","Elektricar","Ministra","Triceratops","Teksas"

];

let dodatiOdgovori44=[

"Solja","Boris Jeljcin","Vidovdan","Auto","Prodavnica",
"Titanik","Nonan-dekan","Kantabrija","600-1400 kilograma","Inna",
"Japanski","Avio mehanicar","Predsednika","Albertosaur","Micigen"

];

let tacniOdgovori11=[

"Dzak","Nil Armstrong","Vidovdan","Bicikl","Pumpa",
"Britanik","Propan-butan","Andaluzija","450-1000 kilograma","Lejdi Gaga",
"Francuski","Baletski igrac","Spijuna","Triceratops","Micigen"

];

let dodataPitanja12=[

'Koje boje je crna kutija ?',
'Koja ptica je pevacica ?',
'Mornar Popaj jaca misice jeduci ?',
'Kada pada kisa u ruci nosimo ?',
'Kako se zove vrh planine Kopaonik ?',
'Koje godine je Sekspir napisao delo "Hamlet" ?',
'U kom klubu je karijeru zavrsio brazilski fudbaler Rivaldo ?',
'Ko je napisao tekst za pesmu Zdravka Colica "Okano" ?',
'Sa koliko godina u Indoneziji se postaje punoletan ?',
'Koliko tacno godina je trajao stogodisnji rat izmedju Engleske i Francuske ?',
'Koji fakultet je zavrsio predsednik Rusije Vladimir Putin ?',
'U prevodu sa engleskog sta znaci rec "funnel" ?',
'Koliko trenutno epizoda ima serija "Dani nasih zivota" ?',
'Strip junak Hogar Strasni ima cerku koja se zove ?',
'Koji je pozivni broj za Gnjilane ?'

];

let dodatiOdgovori45=[

'Bela','Golub','Spanac','Pecat','Pancicev vrh',
'1600','Kruzeiro','Goran Bregovic','15','114',
'Ekonomski','Cesma','13.499','Hani','028'

];

let dodatiOdgovori46=[

'Zuta','Orao','Slaninu','Kisobran','Crni vrh',
'1601','Vasko de Gama','Marina Tucakovic','16','115',
'Pravni','Cediljka','13.500','Honi','0280'

];

let dodatiOdgovori47=[

'Crvena','Slavuj','Susam','Lezaljku','Midzor',
'1602','Mozi Mirim','Arsen Dedic','17','116',
'Rudarski','Levak','13.501','Huni','023'

];

let dodatiOdgovori48=[

'Crna','Zdral','Papriku','Cackalicu','Djeravica',
'1603','Santos','Bora Corba','18','117',
'Sumarski','Sud','13.502','Heni','0230'

];

let tacniOdgovori12=[

'Crna','Slavuj','Spanac','Kisobran','Pancicev vrh',
'1602','Mozi Mirim','Marina Tucakovic','15','116',
'Pravni','Levak','13.499','Honi','0280'

];

let dodataPitanja13=[

'Na kojoj televiziji se emituje crtani film Sundjer Bob Kockalone ?',
'Ako vas pogodi Amorova strela vi ce te biti ?',
'Po kom nasem naucniku jedna jedinica je dobila ime ?',
'U kojoj drzavi se nalaze piramide ?',
'Kako se zove stadion Crvene Zvezde ?',
'Iz koje drzave dolazi strana valuta sa oznakom "KRW" ?',
'U kom gradu je odrastao Isus Hrist ?',
'Koji insekt prenosi virusno oboljenje zutu groznicu ?',
'Bez kog organa mozemo da zivimo ?',
'Koja glumica je otkazala svoje vencanje sa Kiferom Saterlendom ?',
'Koliko dana se snimao film "Ko to tamo Peva" ?',
'Kom Srbinu je dodeljena Pulicerova nagrada 1990 godine ?',
'U kom mesecu se odrzava Praznik mimoze ?',
'Za koliko novca je prodata slika "Salvator Mundi" od Leonarda da Vincija ?',
'Kako glasi sifrovan naziv ovce Doli prvog kloniranog sisara ?'

];

let dodatiOdgovori49=[

'O2','Ruzni','Pupin','Tunis','Bora Kostic',
'Juzna Koreja','Jerusalim','Muva','Zeludac','Demi Mur',
'20','Marko Simic','Januar','400 miliona dolara','300K'

];

let dodatiOdgovori50=[

'Prva','Jaki','Tesla','Alzir','Dragan Dzajic',
'Severna Koreja','Vitlejem','Komarac','Pluca','Gvinet Paltrou',
'21','Dusan Simic','Februar','450 miliona dolara','2QII'

];

let dodatiOdgovori51=[

'RTS','Zaljubljeni','Milankovic','Egipat','Nikola Zigic',
'Nova Gvineja','Nazaret','Telesna vas','Prostata','Dzulija Roberts',
'22','Igor Simic','Mart','500 miliona dolara','5R6T'

];

let dodatiOdgovori52=[

'Pink','Brzi','Pancic','Izrael','Rajko Mitic',
'Burkina Faso','Haifa','Stidna vas','Srce','Sandra Bulok',
'23','Petar Simic','April','600 miliona dolara','6LL3'

];


let tacniOdgovori13=[

'O2','Zaljubljeni','Tesla','Egipat','Rajko Mitic',
'Juzna Koreja','Nazaret','Komarac','Zeludac','Dzulija Roberts',
'21','Dusan Simic','Februar','450 miliona dolara','6LL3'

];

let dodataPitanja14=[

'Glagoli su reci koji oznacavaju mesto,stanje i ?',
'Kako se zove najveci neprijatelj Nindza kornjaca ?',
'U kinder jajetu mozete da pronadjete ?',
'Najpoznatiji keks dolazi iz fabrike u Pozarevcu koja se zove ?',
'U restoranima goste sluze ?',
'Koja je jedina vrsta psa koji ne laje ?',
'Kojoj biljci nije potrebna sunceva svetlost ?',
'Kada je zadnji put vidjena Halejeva kometa ?',
'Koliko minuta traje film "Avatar" ?',
'Ciji ucenik je bio starogrcki filozof Platon ?',
'Gde ce se odrzati Letnje Olimpijske igre 2024 godine ?',
'Ko je napisao cuvenu knjigu za decu "Druzina sinjeg galeba" ?',
'Kako se zove drugo dete Alberta Ajnstajna ?',
'Koje godine je osnovana Narodna radikalna stranka ?',
'Od koje drzave Kipar je dobio nezavisnost 1960 godine ?'

];

let dodatiOdgovori53=[

'Zezanje','Badza','Igracku','Pepeljuga','Mesari',
'Ruski hrt','Aloe vera','1985','161','Aristotel',
'Pariz','Miroslav Krleza','Hans Albert','1879','Grcka'

];

let dodatiOdgovori54=[

'Rezanje','Sekac','Loto listic','Crvenkapa','Krojaci',
'Basenji','Paprat','1986','162','Pitagora',
'London','Rudolf Crnic','Edvard','1880','Turska'

];

let dodatiOdgovori55=[

'Zbivanje','Gargamel','Telefon','Bambi','Vozaci',
'Akita','Filendradon','1987','163','Sokrat',
'Madrid','Alija Isakovic','Herman','1881','Velika Britanija'

];

let dodatiOdgovori56=[

'Dobivanje','Plankton','Knjigu','Zvoncica','Konobari',
'Cau Cau','Srecni bambus','1988','164','Solon',
'Berlin','Tone Seliskar','Marija','1882','Francuska'

];

let tacniOdgovori14=[

'Zbivanje','Sekac','Igracku','Bambi','Konobari',
'Basenji','Filendradon','1986','161','Sokrat',
'Pariz','Tone Seliskar','Hans Albert','1881','Velika Britanija'

];

let dodataPitanja15=[

'Sta je moj sin mom tati ?',
'Kada kazemo da je neko snob onda mislimo da je ?',
'Na slomljenu nogu stavljamo ?',
'Kifle kupujemo uglavnom u ?',
'Muskarac posle brijanja stavlja ?',
'Koliko puta uzastopno je SSSR bio prvak Evrope u kosarci ?',
'Sfragistika je nauka o izradi,upotrebi i razvitku ?',
'Sta su trombociti ?',
'Ko je bio Josif Flavije ?',
'Kojoj drzavi osim Srbije je pripadalo Panonsko more ?',
'Za koga francuski matematicar Zozef Luj Lagranz da je najveci genije svih vremena ?',
'U kom srpskom filmu se pojavio pevac Toni Montano ?',
'Sa kim je u braku bio Majkl Daglas pre Ketrin Zite Dzouns ?',
'Iz koje drzave dolazi Mis Univerzuma za 2014 godinu ?',
'Koliko je dugacka natrovnija zaba na svetu ?'

];

let dodatiOdgovori57=[

'Deda','Glup','Krec','Pekari','Mast',
'8','Kljuca','Krvne celije','Jevrejski vojskovodja','Nemacka',
'Tomas Edison','Davitelj protiv davitelja','Mimi Rodzers','Peru','5 cm'

];

let dodatiOdgovori58=[

'Otac','Slep','Malter','Ribarnici','Losion',
'7','Pecata','Krvne plocice','Jevrejski svestenik','Svajcarska',
'Alfred Nobel','Kako je propao rokenrol','Meril Strip','Kolumbija','15 cm'

];

let dodatiOdgovori59=[

'Unuk','Prost','Gips','Kiosku','Lak',
'9','Novcanica','Krvna plazma','Egipatski vojskovodja','Austrija',
'Leonardo da Vinci','Decko koji obecava','Diandra Luker','Cile','3 cm'

];

let dodatiOdgovori60=[

'Stric','Arogantan','Kamen','Posti','Krema',
'11','Bedzeva','Krvni sudovi','Egipatski svestenik','Belgija',
'Isak Njutn','Vizantijsko plavo','Sara Dzesika Parker','Brazil','13 cm'

];

let tacniOdgovori15=[

'Unuk','Arogantan','Gips','Pekari','Losion',
'8','Pecata','Krvne plocice','Jevrejski vojskovodja','Austrija',
'Isak Njutn','Davitelj protiv davitelja','Diandra Luker','Kolumbija','5 cm'

];

let dodataPitanja16=[

'Svake prestupne godine februar ima ?',
'Na vencanju mladence vencava ?',
'Nakon odredjenog broja casova djaci imaju ?',
'Glumac Miodrag Petrovic Ckalja je najpoznatiji po ulozi ?',
'Za sta se koristi dzojstik ?',
'Kako glasi komparativ od reci "brz" ?',
'Koji internet domen pripada drzavi Banglades ?',
'Od Beograda do Njujorka koliko traje prosecan let avionom ?',
'Kom ciklusu pripada pesma "Zidanje Skadra" ?',
'Kog novembra 1967 godine je rodjen bivsi teniser Boris Beker ?',
'Za koju od ovih drzava nasim gradjanima nije potrebna viza ?',
'Kako se zove kompanija u kojoj se proizvode cigarete "Lucky Strike" ?',
'Koje godine je Vuk Bojovic dosao na celo "Beo Zoo Vrta" ?',
'Ko je osnivac budizma ?',
'Kojim rezultatom je Hajduk iz Splita pobedio Mancester junajted 1980 godine ?'

];

let dodatiOdgovori61=[

'28 dana','Voditelj','Sednicu','Mareta','Igranje igrica',
'Brzinski','.bs','10 sati','Pretkosovski','20',
'Gambija','Shanghai Tobacco International','1985','Temudzin Kan','1:0'

];

let dodatiOdgovori62=[

'29 dana','Portparol','Utakmicu','Dareta','Kucanje eksera',
'Ubrzano','.ba','11 sati','Kosovski','21',
'Indija','Japan Tobacco International','1986','Sudodana Gautama','2:0'

];

let dodatiOdgovori63=[

'30 dana','Maticar','Veliki odmor','Zareta','Mesanje boja',
'Brzi','.bg','12 sati','Pokosovski','22',
'Gabon','Phillip Morris International','1987','Mahatma Gandi','3:0'

];

let dodatiOdgovori64=[

'32 dana','Glumac','Popravni ispit','Jareta','Secenje voca',
'Najbrzi','.bd','13 sati','Neistorijski','23',
'Somalija','British American Tobacco','1988','Sidarta Gautama','6:0'

];

let tacniOdgovori16=[

'29 dana','Maticar','Veliki odmor','Jareta','Igranje igrica',
'Brzi','.bd','10 sati','Pretkosovski','22',
'Gambija','British American Tobacco','1986','Sidarta Gautama','6:0'

];

let dodataPitanja17=[

'Ako zelimo da prenocimo uzecemo sobu u ?',
'Otvaranje Fejsbuk profila je dozvoljeno osobama starijim od ?',
'U bioskopu mozemo da gledamo ?',
'Sa kojim povrcem se pravi sarma ?',
'Dobrovoljno davanje krvi strucno se naziva ?',
'"Pinokio" je delo napisano perom kog pisca ?',
'Za koji film Nikolas Kejdz je dobio Oskara 1995 godine ?',
'U kojim mesecima se pojavljuje Perseidi-meteorski roj ?',
'Pesma "Danas nema mleka" je numera kog poznatog benda ?',
'Komandant crnogorske vojske u Mojkovackoj bici bio je ?',
'U kom naselju je podignut spomenik vojvodi Zivojinu Misicu ?',
'Po pravilima bontona sta znaci poklanjanje "Bez ruze" ?',
'Kako se zove jedna od stranaka grcke nacionalne manjine u Srbiji ?',
'Pronadjite jednog od 12 apostola Isusa Hrista ?',
'U sta spada "Bagremara" ?'

];

let dodatiOdgovori65=[

'Luna parku','3 godine','Seriju','Persun','Difuzija',
'Dzejms Metju Bari','Leteca Tamnica','Jul-Avgust','Riblja Corba','Janko Vukotic',
'Lajkovac','Obozavanje i snaga','Gradjanska stranka Grka Srbije','Andrej','Nacionalni park'

];

let dodatiOdgovori66=[

'Kamp kucici','4 godine','Film','Blitva','Propulzija',
'Oskar Vajld','Ukradeno lice','April-Maj','Partibrejkersi','Jovo Becir',
'Osecina','Prijateljstvo','Gradjanska partija Grka Srbije','Mihajlo','Rezervat prirode'

];

let dodatiOdgovori67=[

'Hotelu','5 godina','Operu','Kupus','Transfuzija',
'Sarl Pero','Napustajuci Las Vegas','Mart-April','Delca i sklekovi','Radomir Vesovic',
'Mionica','Cistota i ljubav','Gradjanska levica Grka Srbije','Hagob','Rudnik bakra'

];

let dodatiOdgovori68=[

'Policijskoj stanici','12 godina','Predstavu','Zelena salata','Emulzija',
'Karlo Kolodi','Nestao za 60 sekundi','Maj-Jun','Elektricni orgazam','Mitar Martinovic',
'Batocina','Zudnja i opcinjenost','Gradjanska desnica Grka Srbije','Antonije','Istorijski muzej'

];

let tacniOdgovori17=[

'Hotelu','12 godina','Film','Kupus','Transfuzija',
'Karlo Kolodi','Napustajuci Las Vegas','Jul-Avgust','Riblja Corba','Janko Vukotic',
'Mionica','Prijateljstvo','Gradjanska stranka Grka Srbije','Andrej','Rezervat prirode'

];

let dodataPitanja18=[

'Pronadjite spansku seriju ?',
'Posle kise izlazi ?',
'Bebe uglavnom spavaju u ?',
'IT je skaracenica za koju struku ?',
'Vitezovi su se borili sa kojim oruzijem ?',
'Sta znaci latinska poslovica-"Veritas amara est" ?',
'Betovenova "Meseceva sonata" je klavirska sonata po rednim brojem ?',
'Koja pecurka je otrovna ?',
'U kakvu vrstu prirodnog elementa spada sneg ?',
'Ko od poznatih licnosti ima najvise pratilaca na drustvenoj mrezi Instagram ?',
'Kako se zove druid iz crtanih dela "Asteriksa i Obeliksa" ?',
'Od kog metala se prave novogodisnje prskalice ?',
'U kojoj vrsti tecnosti se nalaze kongeneri ?',
'Jacinu frekvencije nota solmizacije DO ima od koliko herca ?',
'Kristofor Kolumbo je nazivao Devicanskim ostrvima po kojoj hriscanskoj svetici ?'

];

let dodatiOdgovori69=[

'Seranovi','Oblak','Vreci za spavanje','Isti tehnicari','Kukom',
'Kocka je bacena','12','Bela slabunjavka','Mineral','Selena Gomez',
'Harmoniks','Natrijum','Voda','258','Sveta Agata'

];

let dodatiOdgovori70=[

'Mocni Rendzeri','Duga','Fotelji','Ideja tvoraca','Prackom',
'Ljubav sve pobedjuje','13','Zelena pupavka','So','Kristijano Ronaldo',
'Tandarabriks','Cink','Alkohol','260','Sveta Ljudmila'

];

let dodatiOdgovori71=[

'Uzbuna za kobru','Poplava','Krevecu','Inteligentna turbulencija','Palicom',
'Ruka ruku mije','14','Velika puhara','Baza','Bijonse',
'Panoramiks','Litijum','Antifriz','262','Sveta Marcela'

];

let dodatiOdgovori72=[

'Sasina ekipa','Meteor','Kaucu','Informacione tehnologije','Macem',
'Istina je gorka','15','Zuta trubaca','Kiselina','Dzastin Biber',
'Idefiks','Barijum','Parfem','264','Sveta Jelena'

];

let tacniOdgovori18=[

'Seranovi','Duga','Krevecu','Informacione tehnologije','Macem',
'Istina je gorka','14','Zelena pupavka','Mineral','Selena Gomez',
'Panoramiks','Cink','Alkohol','262','Sveta Jelena'

];

let dodataPitanja19=[

'Na kojoj strani sveta zalazi Sunce ?',
'Sta pritiskaju poslanici u Skupstini kada zele da glasaju ?',
'Letnja dugodnevnica pocinje ?',
'"Pijes vodu kao vo ne znas sta je" ?',
'Budilnik navijamo kada zelimo da se ?',
'Sa kojom pesmom je Jugoslavija pobedila na Evroviziji 1989 godine ?',
'Akcija finansirana zajmom se drugacije zove ?',
'Spomenik Pobednik je nastao deset godina posle kog dogadjaja ?',
'Pod kojim nazivom je poznata NASA-misija odlaska na Jupiter I Saturn ?',
'Koliko vremena je Fransoa Miteran bio predsednik Francuske ?',
'Od koje godine se proizvodi Mercedes Benc A klase ?',
'Na kojoj tv stanici se emituje NFL ?',
'Bez decimala u dinarima koliko iznosi kupovni kurs jedne funte ?',
'Magento je onlajn platforma stvorena za ?',
'Koliko je iznosila nagradu u prvoj sezoni Nemackog Velikog Brata ?'

];

let dodatiOdgovori73=[

'Istok','Prekidac','22 januara','H2O','Uspavamo',
'Hold me now','Leveridz akcija','Dan pobede nad fasizmom','Mariner','10 godina',
'1997','CBS','130','Onlajn igrice','250.000 maraka'

];

let dodatiOdgovori74=[

'Zapad','Obarac','22 marta','So','Ugojimo',
'Rock me','Leveridz faktor','Proboja Solunskog fronta','Mariner 10','11 meseci',
'1998','ABC','131','Onlajn bankarstvo','250.000 evra'

];

let dodatiOdgovori75=[

'Sever','Taster','22 juna','Zoo','Porastemo',
'Why me','Leveridz otkup','Dan dobijanja nezavisnosti','Pionir 11','14 godina',
'1999','TBD','132','Onlajn prodavnice','300.000 maraka'

];

let dodatiOdgovori76=[

'Jug','Zvono','22 decembra','To','Probudimo',
'In your eyes','Kvazinovac','Dan osnivanja AVNOJ-a','Mesindzer','13 meseci',
'2000','QVC','133','Onlajn televiziju','300.000 evra'

];

let tacniOdgovori19=[

'Zapad','Taster','22 juna','H2O','Probudimo',
'Rock me','Leveridz akcija','Proboja Solunskog fronta','Pionir 11','14 godina',
'1997','CBS','130','Onlajn prodavnice','250.000 maraka'

];

let dodataPitanja20=[

'Nastavite niz: 1,5,10,16...',
'Koja biljka je vesnik proleca ?',
'U Indiji vlada koja religija ?',
'Ko vodi ekipu na terenu u svakom sportu ?',
'Vlasnik "Maksi prodavnica" dolazi iz ?',
'Ako zelimo da otkucamo novi mejl u Dz-mejlu(Gmail) treba da kliknemo na ?',
'Drugi deo filma "Pirata sa Kariba" zove se ?',
'Koji jezik spada u afro-azijsku grupu jezika ?',
'Kako se zove prva ploca pevaca Djordja Marjanovica ?',
'Prva vrsta "jezika" sa kojom se susrecete u programiranju je ?',
'Navedite ime operacije koja se desila 1944 u Normandiji ?',
'Sta je filantropija ?',
'"Bas Celik" je napisao Vuk Karadzic u knjizi koja se zove ?',
'Ko je bio voditelj prve sezone kviza "Slagalica" ?',
'Kako se zove kiklop sa kojim se susreo Odisej ?'

];

let dodatiOdgovori77=[

'23','Ljubicica','Hriscanstvo','Sef','Poljske',
'New mail','Salazarova osveta','Svahili','Muzika za igru','XML',
'Overghost','Skupljanje markica','Srpske narodne bajke','Ivan Bauer','Kalim'

];

let dodatiOdgovori78=[

'25','Maslacak','Budizam','Kapetan','Belgije',
'Compose','Na kraju sveta','Amharski','Mustafa','XHTML',
'Overhead','Skupljanje kovanica','Srpske narodne basne','Jovan Andric','Balor'

];

let dodatiOdgovori79=[

'26','Visibaba','Hinduizam','Kapiten','Andora',
'Drop','Na cudnijim plimama','Zulu','Espres kafa','HTML',
'Overtop','Covekoljublje','Srpske narodne pripovetke','Milos Tomic','Polifem'

];

let dodatiOdgovori80=[

'24','Zumbul','Baptizam','Vodonosa','Skotska',
'Recreate','Tajna skrinje','Lingala','Igrajmo tvist','CSS',
'Overlord','Ravnodusnost','Srpske narodne umotvorine','Marko Markovic','Kron'

];

let tacniOdgovori20=[

'23','Visibaba','Hinduizam','Kapiten','Belgije',
'Compose','Tajna skrinje','Amharski','Muzika za igru','HTML',
'Overlord','Covekoljublje','Srpske narodne pripovetke','Ivan Bauer','Polifem'

];

let odgovori=document.querySelectorAll(".odgovor");

pitanja.addEventListener("click", igraPocinje);

let h6=document.querySelector("h6");

let brzoBiranje=[

"1","2","3","4","5"

];

let brzoBiranje3=[

"11","12","13","14","15"

];

function igraj() {


if(h6.textContent==="" || h6.textContent==="16" || h6.textContent==="17" || h6.textContent==="18" || h6.textContent==="19" || h6.textContent==="20")  {

h6.textContent=brzoBiranje[Math.floor(Math.random()*brzoBiranje.length)];

}
	
if(h6.textContent==="6" || h6.textContent==="7" || h6.textContent==="8" || h6.textContent==="9" || h6.textContent==="10")  {

h6.textContent=brzoBiranje3[Math.floor(Math.random()*brzoBiranje3.length)];

}

pitanjaIodgovori();

  }


function igraPocinje() {

igraj();

pitanja.removeEventListener("click", igraPocinje);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].addEventListener("click", pogodjenOdgovor);

  }

pomoci[0].addEventListener("click", prvaPomoc);
pomoci[1].addEventListener("click", drugaPomoc);
pomoci[2].addEventListener("click", trecaPomoc);

zagarantovanaSuma1.textContent="";
ponovo=setInterval(podelaProcenata, 100);

odustati2.setAttribute("onclick","izbaciPotvrdu()");
da.addEventListener("click", odustajanje);

}


function pogodjenOdgovor() {
	
for(let i=0; i < this.children.length; ++i)  {

if(this.children[i].textContent===tacniOdgovori[tacnoResenje] && h6.textContent==="1")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

 }
zavrsi=setTimeout(otpocetka, 3000);
zavrsi2=setTimeout(pitanjaIodgovori, 3000);
let sound1=new Audio();
sound1.src="Correct.mp3";
sound1.play();

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor();

odustati2.removeEventListener("click", izbaciPotvrdu);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

         }

      }

if(this.children[i].textContent===tacniOdgovori2[tacnoResenje] && h6.textContent==="2")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

 }

zavrsi=setTimeout(otpocetka, 3000);
zavrsi2=setTimeout(pitanjaIodgovori, 3000);
let sound1=new Audio();
sound1.src="Correct.mp3";
sound1.play();

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor();

odustati2.removeEventListener("click", izbaciPotvrdu);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

         }

      }

if(this.children[i].textContent===tacniOdgovori3[tacnoResenje] && h6.textContent==="3")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

 }
zavrsi=setTimeout(otpocetka, 3000);
zavrsi2=setTimeout(pitanjaIodgovori, 3000);
let sound1=new Audio();
sound1.src="Correct.mp3";
sound1.play();

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor();

odustati2.removeEventListener("click", izbaciPotvrdu);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

         }

      }


if(this.children[i].textContent===tacniOdgovori4[tacnoResenje] && h6.textContent==="4")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

 }
zavrsi=setTimeout(otpocetka, 3000);
zavrsi2=setTimeout(pitanjaIodgovori, 3000);
let sound1=new Audio();
sound1.src="Correct.mp3";
sound1.play();

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor();

odustati2.removeEventListener("click", izbaciPotvrdu);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

         }

      }

if(this.children[i].textContent===tacniOdgovori5[tacnoResenje] && h6.textContent==="5")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

 }

zavrsi=setTimeout(otpocetka, 3000);
zavrsi2=setTimeout(pitanjaIodgovori, 3000);
let sound1=new Audio();
sound1.src="Correct.mp3";
sound1.play();

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor();

odustati2.removeEventListener("click", izbaciPotvrdu);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

         }

      }

if(this.children[i].textContent===tacniOdgovori11[tacnoResenje] && h6.textContent==="11")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

 }

zavrsi=setTimeout(otpocetka, 3000);
zavrsi2=setTimeout(pitanjaIodgovori, 3000);
let sound1=new Audio();
sound1.src="Correct.mp3";
sound1.play();

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor();

odustati2.removeEventListener("click", izbaciPotvrdu);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

         }

      }

if(this.children[i].textContent===tacniOdgovori12[tacnoResenje] && h6.textContent==="12")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

 }

zavrsi=setTimeout(otpocetka, 3000);
zavrsi2=setTimeout(pitanjaIodgovori, 3000);
let sound1=new Audio();
sound1.src="Correct.mp3";
sound1.play();

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor();

odustati2.removeEventListener("click", izbaciPotvrdu);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

         }

      }

if(this.children[i].textContent===tacniOdgovori13[tacnoResenje] && h6.textContent==="13")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

 }

zavrsi=setTimeout(otpocetka, 3000);
zavrsi2=setTimeout(pitanjaIodgovori, 3000);
let sound1=new Audio();
sound1.src="Correct.mp3";
sound1.play();

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor();

odustati2.removeEventListener("click", izbaciPotvrdu);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

         }

      }

if(this.children[i].textContent===tacniOdgovori14[tacnoResenje] && h6.textContent==="14")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

 }

zavrsi=setTimeout(otpocetka, 3000);
zavrsi2=setTimeout(pitanjaIodgovori, 3000);
let sound1=new Audio();
sound1.src="Correct.mp3";
sound1.play();

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor();

odustati2.removeEventListener("click", izbaciPotvrdu);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

         }

      }

if(this.children[i].textContent===tacniOdgovori15[tacnoResenje] && h6.textContent==="15")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

 }

zavrsi=setTimeout(otpocetka, 3000);
zavrsi2=setTimeout(pitanjaIodgovori, 3000);
let sound1=new Audio();
sound1.src="Correct.mp3";
sound1.play();

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor();

odustati2.removeEventListener("click", izbaciPotvrdu);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

         }

      }

if(this.style.background==="indianred" && this.children[i].style.background==="indianred")  {

setTimeout(igramoIspocetka, 4000);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

         }

let sound2=new Audio();
sound2.src="Wrong.mp3";
sound2.play();

pomoci[0].removeEventListener("click", prvaPomoc);
pomoci[1].removeEventListener("click", drugaPomoc);
pomoci[2].removeEventListener("click", trecaPomoc);

if($(".odgovorJeTacan").length <= 4)  {

zagarantovanaSuma1.textContent="Osvojena suma: 0 dinara";  
osvojeno.value="";

     }

if($(".odgovorJeTacan").length > 4)  {

zagarantovanaSuma1.textContent="Osvojena suma: 5.000 dinara";  
osvojeno.value="";

     }

if($(".odgovorJeTacan").length > 9)  {

zagarantovanaSuma1.textContent="Osvojena suma: 150.000 dinara";  
osvojeno.value="";

         }

      }

   }

}

function pitanjaIodgovori() {


if(h6.textContent==="1")  {

pitanja.textContent=dodataPitanja[first1];
++first1;

odgovor[0].textContent=dodatiOdgovori1[one1];
++one1;
odgovor[1].textContent=dodatiOdgovori2[two2];
++two2;
odgovor[2].textContent=dodatiOdgovori3[three3];
++three3;
odgovor[3].textContent=dodatiOdgovori4[four4];
++four4;

  }
	
if(h6.textContent==="2")  {

pitanja.textContent=dodataPitanja2[first1];
++first1;

odgovor[0].textContent=dodatiOdgovori5[one1];
++one1;
odgovor[1].textContent=dodatiOdgovori6[two2];
++two2;
odgovor[2].textContent=dodatiOdgovori7[three3];
++three3;
odgovor[3].textContent=dodatiOdgovori8[four4];
++four4;

}

if(h6.textContent==="3")  {

pitanja.textContent=dodataPitanja3[first1];
++first1;

odgovor[0].textContent=dodatiOdgovori9[one1];
++one1;
odgovor[1].textContent=dodatiOdgovori10[two2];
++two2;
odgovor[2].textContent=dodatiOdgovori11[three3];
++three3;
odgovor[3].textContent=dodatiOdgovori12[four4];
++four4;

}

if(h6.textContent==="4")  {

pitanja.textContent=dodataPitanja4[first1];
++first1;

odgovor[0].textContent=dodatiOdgovori13[one1];
++one1;
odgovor[1].textContent=dodatiOdgovori14[two2];
++two2;
odgovor[2].textContent=dodatiOdgovori15[three3];
++three3;
odgovor[3].textContent=dodatiOdgovori16[four4];
++four4;

}

if(h6.textContent==="5")  {

pitanja.textContent=dodataPitanja5[first1];
++first1;

odgovor[0].textContent=dodatiOdgovori17[one1];
++one1;
odgovor[1].textContent=dodatiOdgovori18[two2];
++two2;
odgovor[2].textContent=dodatiOdgovori19[three3];
++three3;
odgovor[3].textContent=dodatiOdgovori20[four4];
++four4;

}

if(h6.textContent==="11")  {

pitanja.textContent=dodataPitanja11[first1];
++first1;

odgovor[0].textContent=dodatiOdgovori41[one1];
++one1;
odgovor[1].textContent=dodatiOdgovori42[two2];
++two2;
odgovor[2].textContent=dodatiOdgovori43[three3];
++three3;
odgovor[3].textContent=dodatiOdgovori44[four4];
++four4;

}

if(h6.textContent==="12")  {

pitanja.textContent=dodataPitanja12[first1];
++first1;

odgovor[0].textContent=dodatiOdgovori45[one1];
++one1;
odgovor[1].textContent=dodatiOdgovori46[two2];
++two2;
odgovor[2].textContent=dodatiOdgovori47[three3];
++three3;
odgovor[3].textContent=dodatiOdgovori48[four4];
++four4;

}

if(h6.textContent==="13")  {

pitanja.textContent=dodataPitanja13[first1];
++first1;

odgovor[0].textContent=dodatiOdgovori49[one1];
++one1;
odgovor[1].textContent=dodatiOdgovori50[two2];
++two2;
odgovor[2].textContent=dodatiOdgovori51[three3];
++three3;
odgovor[3].textContent=dodatiOdgovori52[four4];
++four4;

}

if(h6.textContent==="14")  {

pitanja.textContent=dodataPitanja14[first1];
++first1;

odgovor[0].textContent=dodatiOdgovori53[one1];
++one1;
odgovor[1].textContent=dodatiOdgovori54[two2];
++two2;
odgovor[2].textContent=dodatiOdgovori55[three3];
++three3;
odgovor[3].textContent=dodatiOdgovori56[four4];
++four4;

}

if(h6.textContent==="15")  {

pitanja.textContent=dodataPitanja15[first1];
++first1;

odgovor[0].textContent=dodatiOdgovori57[one1];
++one1;
odgovor[1].textContent=dodatiOdgovori58[two2];
++two2;
odgovor[2].textContent=dodatiOdgovori59[three3];
++three3;
odgovor[3].textContent=dodatiOdgovori60[four4];
++four4;

}

for(let i=0; i < odgovor.length; ++i)  {

odgovor[i].style.visibility="visible";

  }

}

function otpocetka() {

++tacnoResenje;

iznos[prvi].style.background="purple";
--prvi;

osvojeno.value=iznos[drugi].textContent+" dinara";
--drugi;

iznos[five5].classList.add("odgovorJeTacan");
--five5;

resetujOdgovore();

odustati2.style.visibility="visible";

if(osvojeno.value==="5.000 dinara")  {

zagarantovanaSuma1.textContent="Zagarantovana suma: 5.000 dinara";
iznos[10].style.background="#993333";

}

if(osvojeno.value==="150.000 dinara")  {

zagarantovanaSuma1.textContent="Zagarantovana suma: 150.000 dinara";
iznos[5].style.background="#993333";

}

if(osvojeno.value==="5.000.000 dinara")  {

iznos[0].style.background="#993333";
zagarantovanaSuma1.textContent="CESTITKE OSVOJILI STE 5.000.000 dinara";
osvojeno.value="";
setTimeout(igramoIspocetka, 4000);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

    }

  }  

}

function netacanOdgovor() {
	
for(let i=0; i < odgovor.length; ++i)  {

if(odgovor[i].textContent===tacniOdgovori[tacnoResenje])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }

if(odgovor[i].textContent===tacniOdgovori2[tacnoResenje])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }    

if(odgovor[i].textContent===tacniOdgovori3[tacnoResenje])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }

if(odgovor[i].textContent===tacniOdgovori4[tacnoResenje])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }    

if(odgovor[i].textContent===tacniOdgovori5[tacnoResenje])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }

if(odgovor[i].textContent===tacniOdgovori11[tacnoResenje])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }

if(odgovor[i].textContent===tacniOdgovori12[tacnoResenje])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }

if(odgovor[i].textContent===tacniOdgovori13[tacnoResenje])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }

if(odgovor[i].textContent===tacniOdgovori14[tacnoResenje])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }

if(odgovor[i].textContent===tacniOdgovori15[tacnoResenje])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

     }

  }

}



function resetujOdgovore() {
	
$(".odgovor").css("background","#6495ED");
$(".kviz").css("background","#6495ED");

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].addEventListener("click", pogodjenOdgovor);

    }

}


function izbaciPotvrdu() {
	
$(".potvrdaOdustajanja").css("visibility","visible");
odustati2.removeAttribute("onclick");

}

let da=document.querySelector(".da");
let ne=document.querySelector(".ne");

da.addEventListener("click", odustajanje);
ne.addEventListener("click", nastavljanje);

function odustajanje() {
	
for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

   }  

this.removeEventListener("click", odustajanje);  

$(".potvrdaOdustajanja").css("visibility","hidden");
odustati2.removeEventListener("click", izbaciPotvrdu);
zagarantovanaSuma1.textContent="Osvojena suma: "+iznos[drugi +=1].textContent+" dinara";
osvojeno.value="";

setTimeout(igramoIspocetka, 4000);

let sound3=new Audio();
sound3.src="Over.mp3";
sound3.play();

pomoci[0].removeEventListener("click", prvaPomoc);
pomoci[1].removeEventListener("click", drugaPomoc);
pomoci[2].removeEventListener("click", trecaPomoc);

}

function nastavljanje() {
	
$(".potvrdaOdustajanja").css("visibility","hidden");

}


function prvaPomoc() {
	
unutarPomoci1.textContent="X";
unutarPomoci1.style.visibility="visible";

this.removeEventListener("click", prvaPomoc);

if(odgovor[0].textContent===tacniOdgovori[tacnoResenje])  {

odgovor[1].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor);
odgovori[3].removeEventListener("click", pogodjenOdgovor);

    } 

if(odgovor[1].textContent===tacniOdgovori[tacnoResenje])  {

odgovor[0].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor);
odgovori[2].removeEventListener("click", pogodjenOdgovor);

    }

if(odgovor[2].textContent===tacniOdgovori[tacnoResenje])  {

odgovor[0].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor);
odgovori[3].removeEventListener("click", pogodjenOdgovor);

    }

if(odgovor[3].textContent===tacniOdgovori[tacnoResenje])  {

odgovor[1].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor);
odgovori[2].removeEventListener("click", pogodjenOdgovor);

    }               

if(odgovor[0].textContent===tacniOdgovori2[tacnoResenje])  {

odgovor[1].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor);
odgovori[3].removeEventListener("click", pogodjenOdgovor);

    } 

if(odgovor[1].textContent===tacniOdgovori2[tacnoResenje])  {

odgovor[0].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor);
odgovori[2].removeEventListener("click", pogodjenOdgovor);

    }

if(odgovor[2].textContent===tacniOdgovori2[tacnoResenje])  {

odgovor[0].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor);
odgovori[3].removeEventListener("click", pogodjenOdgovor);

    }

if(odgovor[3].textContent===tacniOdgovori2[tacnoResenje])  {

odgovor[1].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor);
odgovori[2].removeEventListener("click", pogodjenOdgovor);

    }         

if(odgovor[0].textContent===tacniOdgovori3[tacnoResenje])  {

odgovor[1].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor);
odgovori[3].removeEventListener("click", pogodjenOdgovor);

    } 

if(odgovor[1].textContent===tacniOdgovori3[tacnoResenje])  {

odgovor[0].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor);
odgovori[2].removeEventListener("click", pogodjenOdgovor);

    }

if(odgovor[2].textContent===tacniOdgovori3[tacnoResenje])  {

odgovor[0].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor);
odgovori[3].removeEventListener("click", pogodjenOdgovor);

    }

if(odgovor[3].textContent===tacniOdgovori3[tacnoResenje])  {

odgovor[1].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor);
odgovori[2].removeEventListener("click", pogodjenOdgovor);

    }   

if(odgovor[0].textContent===tacniOdgovori4[tacnoResenje])  {

odgovor[1].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor);
odgovori[3].removeEventListener("click", pogodjenOdgovor);

    } 

if(odgovor[1].textContent===tacniOdgovori4[tacnoResenje])  {

odgovor[0].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor);
odgovori[2].removeEventListener("click", pogodjenOdgovor);

    }

if(odgovor[2].textContent===tacniOdgovori4[tacnoResenje])  {

odgovor[0].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor);
odgovori[3].removeEventListener("click", pogodjenOdgovor);

    }

if(odgovor[3].textContent===tacniOdgovori4[tacnoResenje])  {

odgovor[1].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor);
odgovori[2].removeEventListener("click", pogodjenOdgovor);

    } 

if(odgovor[0].textContent===tacniOdgovori5[tacnoResenje])  {

odgovor[1].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor);
odgovori[3].removeEventListener("click", pogodjenOdgovor);

    } 

if(odgovor[1].textContent===tacniOdgovori5[tacnoResenje])  {

odgovor[0].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor);
odgovori[2].removeEventListener("click", pogodjenOdgovor);
    
    }

if(odgovor[2].textContent===tacniOdgovori5[tacnoResenje])  {

odgovor[0].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor);
odgovori[3].removeEventListener("click", pogodjenOdgovor);

    }

if(odgovor[3].textContent===tacniOdgovori5[tacnoResenje])  {

odgovor[1].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor);
odgovori[2].removeEventListener("click", pogodjenOdgovor);

    }                               

if(odgovor[0].textContent===tacniOdgovori11[tacnoResenje])  {

odgovor[1].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor);
odgovori[3].removeEventListener("click", pogodjenOdgovor);

    } 

if(odgovor[1].textContent===tacniOdgovori11[tacnoResenje])  {

odgovor[0].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor);
odgovori[2].removeEventListener("click", pogodjenOdgovor);

    }

if(odgovor[2].textContent===tacniOdgovori11[tacnoResenje])  {

odgovor[0].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor);
odgovori[3].removeEventListener("click", pogodjenOdgovor);
    
    }

if(odgovor[3].textContent===tacniOdgovori11[tacnoResenje])  {

odgovor[1].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor);
odgovori[2].removeEventListener("click", pogodjenOdgovor);

    }          

if(odgovor[0].textContent===tacniOdgovori12[tacnoResenje])  {

odgovor[1].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor);
odgovori[3].removeEventListener("click", pogodjenOdgovor);

    } 

if(odgovor[1].textContent===tacniOdgovori12[tacnoResenje])  {

odgovor[0].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor);
odgovori[2].removeEventListener("click", pogodjenOdgovor);

    }

if(odgovor[2].textContent===tacniOdgovori12[tacnoResenje])  {

odgovor[0].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor);
odgovori[3].removeEventListener("click", pogodjenOdgovor);

    }

if(odgovor[3].textContent===tacniOdgovori12[tacnoResenje])  {

odgovor[1].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor);
odgovori[2].removeEventListener("click", pogodjenOdgovor);

    }          

if(odgovor[0].textContent===tacniOdgovori13[tacnoResenje])  {

odgovor[1].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor);
odgovori[3].removeEventListener("click", pogodjenOdgovor);

    } 

if(odgovor[1].textContent===tacniOdgovori13[tacnoResenje])  {

odgovor[0].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor);
odgovori[2].removeEventListener("click", pogodjenOdgovor);

    }

if(odgovor[2].textContent===tacniOdgovori13[tacnoResenje])  {

odgovor[0].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor);
odgovori[3].removeEventListener("click", pogodjenOdgovor);

    }

if(odgovor[3].textContent===tacniOdgovori13[tacnoResenje])  {

odgovor[1].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor);
odgovori[2].removeEventListener("click", pogodjenOdgovor);

    }  

if(odgovor[0].textContent===tacniOdgovori14[tacnoResenje])  {

odgovor[1].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor);
odgovor[3].removeEventListener("click", pogodjenOdgovor);

    } 

if(odgovor[1].textContent===tacniOdgovori14[tacnoResenje])  {

odgovor[0].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor);
odgovori[2].removeEventListener("click", pogodjenOdgovor);

    }

if(odgovor[2].textContent===tacniOdgovori14[tacnoResenje])  {

odgovor[0].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor);
odgovori[3].removeEventListener("click", pogodjenOdgovor);

    }

if(odgovor[3].textContent===tacniOdgovori14[tacnoResenje])  {

odgovor[1].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor);
odgovori[2].removeEventListener("click", pogodjenOdgovor);

    }                      

if(odgovor[0].textContent===tacniOdgovori15[tacnoResenje])  {

odgovor[1].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor);
odgovori[3].removeEventListener("click", pogodjenOdgovor);
    
    } 

if(odgovor[1].textContent===tacniOdgovori15[tacnoResenje])  {

odgovor[0].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor);
odgovori[2].removeEventListener("click", pogodjenOdgovor);

    }

if(odgovor[2].textContent===tacniOdgovori15[tacnoResenje])  {

odgovor[0].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor);
odgovori[3].removeEventListener("click", pogodjenOdgovor);

    }

if(odgovor[3].textContent===tacniOdgovori15[tacnoResenje])  {

odgovor[1].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor);
odgovori[2].removeEventListener("click", pogodjenOdgovor);

    }  

}


let sound4;

function drugaPomoc() {
	
unutarPomoci2.textContent="X";
unutarPomoci2.style.visibility="visible";

this.removeEventListener("click", drugaPomoc);

prijateljOdgovara.style.visibility="visible";
odustati2.style.visibility="hidden";

if(h6.textContent==="1")  {

takmicar.textContent="Ja: "+ pitanja.textContent;
pomaganje.textContent="Prijatelj: "+" "+"Odgovor je: "+tacniOdgovori[tacnoResenje];

}

if(h6.textContent==="2")  {

takmicar.textContent="Ja: "+ pitanja.textContent;
pomaganje.textContent="Prijatelj: "+" "+"Odgovor je: "+tacniOdgovori2[tacnoResenje];

}

if(h6.textContent==="3")  {

takmicar.textContent="Ja: "+ pitanja.textContent;
pomaganje.textContent="Prijatelj: "+" "+"Odgovor je: "+tacniOdgovori3[tacnoResenje];

}

if(h6.textContent==="4")  {

takmicar.textContent="Ja: "+ pitanja.textContent;
pomaganje.textContent="Prijatelj: "+" "+"Odgovor je: "+tacniOdgovori4[tacnoResenje];

}

if(h6.textContent==="5")  {

takmicar.textContent="Ja: "+ pitanja.textContent;
pomaganje.textContent="Prijatelj: "+" "+"Odgovor je: "+tacniOdgovori5[tacnoResenje];

}

if(h6.textContent==="11")  {

takmicar.textContent="Ja: "+ pitanja.textContent;
pomaganje.textContent="Prijatelj: "+" "+"Odgovor je: "+tacniOdgovori11[tacnoResenje];

}

if(h6.textContent==="12")  {

takmicar.textContent="Ja: "+ pitanja.textContent;
pomaganje.textContent="Prijatelj: "+" "+"Odgovor je: "+tacniOdgovori12[tacnoResenje];

}

if(h6.textContent==="13")  {

takmicar.textContent="Ja: "+ pitanja.textContent;
pomaganje.textContent="Prijatelj: "+" "+"Odgovor je: "+tacniOdgovori13[tacnoResenje];

}

if(h6.textContent==="14")  {

takmicar.textContent="Ja: "+ pitanja.textContent;
pomaganje.textContent="Prijatelj: "+" "+"Odgovor je: "+tacniOdgovori14[tacnoResenje];

}

if(h6.textContent==="15")  {

takmicar.textContent="Ja: "+ pitanja.textContent;
pomaganje.textContent="Prijatelj: "+" "+"Odgovor je: "+tacniOdgovori15[tacnoResenje];

}

sound4=new Audio();
sound4.src="FriendCall.mp3";
sound4.play();

if($(".odgovorJeTacan").length <= 4)  {

pomaganje2.textContent="Prijatelj: 100%";

  }

if($(".odgovorJeTacan").length > 4)  {

pomaganje2.textContent="Prijatelj: 75%";

  }

if($(".odgovorJeTacan").length > 9)  {

pomaganje2.textContent="Prijatelj: 50%";

   }

start=setInterval(alarm, 1000);

}

let start;

function alarm() {
	
let tri=parseInt(vreme.textContent);

vreme.textContent=tri-1;

if (vreme.textContent < 10) {

$(vreme).prepend(0);

   }

if(vreme.textContent < 1)  {

clearInterval(start);
prijateljOdgovara.style.visibility="hidden";
odustati2.style.visibility="visible";

  }

}

izlaz1.addEventListener("click", zatvoriPomoc);

function zatvoriPomoc() {

this.removeEventListener("click", zatvoriPomoc);
	
clearInterval(start);
prijateljOdgovara.style.visibility="hidden";
odustati2.style.visibility="visible";

sound4.pause();

  }

let procenat1=["85%","70%","55%"];
let procenat2=["5%","5%","5%","5%"];
let procenat3=["10%","10%","10%","10%"];
let procenat4=["15%","15%","15%","15%"];

let izadji=document.querySelector(".izadji");

izadji.addEventListener("click", izlaz);

function izlaz() {

publika2.style.visibility="hidden";
odustati2.style.visibility="visible";

}


function trecaPomoc() {
	
unutarPomoci3.textContent="X";
unutarPomoci3.style.visibility="visible";

this.removeEventListener("click", trecaPomoc);
publika2.style.visibility="visible";
odustati2.style.visibility="hidden";
clearInterval(ponovo);
ponovo=null;

for(let i=0; i < odgovori.length; ++i)  {

if(odgovor[i].textContent===tacniOdgovori[tacnoResenje])  {

if($(".odgovorJeTacan").length <= 4)  {

publika[i].textContent=procenat1[0];

        }
if($(".odgovorJeTacan").length > 4)  {

publika[i].textContent=procenat1[1]; 

         }
if($(".odgovorJeTacan").length > 9)  {

publika[i].textContent=procenat1[2]; 

         }

      }

if(odgovor[i].textContent===tacniOdgovori2[tacnoResenje])  {

if($(".odgovorJeTacan").length <= 4)  {

publika[i].textContent=procenat1[0];

        }
if($(".odgovorJeTacan").length > 4)  {

publika[i].textContent=procenat1[1]; 

         }
if($(".odgovorJeTacan").length > 9)  {

publika[i].textContent=procenat1[2]; 

         }

      }  

if(odgovor[i].textContent===tacniOdgovori3[tacnoResenje])  {

if($(".odgovorJeTacan").length <= 4)  {

publika[i].textContent=procenat1[0];

        }
if($(".odgovorJeTacan").length > 4)  {

publika[i].textContent=procenat1[1]; 

         }
if($(".odgovorJeTacan").length > 9)  {

publika[i].textContent=procenat1[2]; 

         }

      }          

if(odgovor[i].textContent===tacniOdgovori4[tacnoResenje])  {

if($(".odgovorJeTacan").length <= 4)  {

publika[i].textContent=procenat1[0];

        }
if($(".odgovorJeTacan").length > 4)  {

publika[i].textContent=procenat1[1]; 

         }
if($(".odgovorJeTacan").length > 9)  {

publika[i].textContent=procenat1[2]; 

         }

      }

if(odgovor[i].textContent===tacniOdgovori5[tacnoResenje])  {

if($(".odgovorJeTacan").length <= 4)  {

publika[i].textContent=procenat1[0];

        }
if($(".odgovorJeTacan").length > 4)  {

publika[i].textContent=procenat1[1]; 

         }
if($(".odgovorJeTacan").length > 9)  {

publika[i].textContent=procenat1[2]; 

         }

      }
if(odgovor[i].textContent===tacniOdgovori11[tacnoResenje])  {

if($(".odgovorJeTacan").length <= 4)  {

publika[i].textContent=procenat1[0];

        }
if($(".odgovorJeTacan").length > 4)  {

publika[i].textContent=procenat1[1]; 

         }
if($(".odgovorJeTacan").length > 9)  {

publika[i].textContent=procenat1[2]; 

         }

      }

if(odgovor[i].textContent===tacniOdgovori12[tacnoResenje])  {

if($(".odgovorJeTacan").length <= 4)  {

publika[i].textContent=procenat1[0];

        }
if($(".odgovorJeTacan").length > 4)  {

publika[i].textContent=procenat1[1]; 

         }
if($(".odgovorJeTacan").length > 9)  {

publika[i].textContent=procenat1[2]; 

         }

      }

if(odgovor[i].textContent===tacniOdgovori13[tacnoResenje])  {

if($(".odgovorJeTacan").length <= 4)  {

publika[i].textContent=procenat1[0];

        }
if($(".odgovorJeTacan").length > 4)  {

publika[i].textContent=procenat1[1]; 

         }
if($(".odgovorJeTacan").length > 9)  {

publika[i].textContent=procenat1[2]; 

         }

      }

if(odgovor[i].textContent===tacniOdgovori14[tacnoResenje])  {

if($(".odgovorJeTacan").length <= 4)  {

publika[i].textContent=procenat1[0];

        }
if($(".odgovorJeTacan").length > 4)  {

publika[i].textContent=procenat1[1]; 

         }
if($(".odgovorJeTacan").length > 9)  {

publika[i].textContent=procenat1[2]; 

         }

      }      

if(odgovor[i].textContent===tacniOdgovori15[tacnoResenje])  {

if($(".odgovorJeTacan").length <= 4)  {

publika[i].textContent=procenat1[0];

        }
if($(".odgovorJeTacan").length > 4)  {

publika[i].textContent=procenat1[1]; 

         }
if($(".odgovorJeTacan").length > 9)  {

publika[i].textContent=procenat1[2]; 

         }

      }      


   }

}

let zavrsetak;

function podelaProcenata() {
	
for(let l=0; l < odgovori.length; ++l)  {

if($(".odgovorJeTacan").length <= 4)  {

publika[l].textContent=procenat2[l];

        }
if($(".odgovorJeTacan").length > 4)  {

publika[l].textContent=procenat3[l];

         }
if($(".odgovorJeTacan").length > 9)  {

publika[l].textContent=procenat4[l];

         }

      }
}


// igra se ponovo

let brzoBiranje2=[

"6","7","8","9","10"

];

let brzoBiranje4=[

"16","17","18","19","20"

];

// nova igra

function igramoIspocetka() {
	
for(let i=0; i < odgovor.length; ++i)  {

odgovor[i].textContent="";
odgovor[i].style.visibility="visible";

   }

$(".mk").html("0");
$(".mk").css("visibility","hidden");
pitanja.textContent="Klikni za novu igru";
pitanja.addEventListener("click", resetujIgru);
$(".iznos").css("background", "#34A853");
$(".iznos").removeClass("odgovorJeTacan");
$(".odgovor").css("background","#6495ED");
$(".kviz").css("background","#6495ED");

prvi=14;
drugi=14;
tacnoResenje=0;
first1=0;
one1=0;
two2=0;
three3=0;
four4=0;

first10=0;
one10=0;
two20=0;
three30=0;
four40=0;
tacnoResenje2=0;
treci=14;
cetvrti=14;
five5=14;
five50=14;

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor);

  }

}

function resetujIgru() {
	
this.removeEventListener("click", resetujIgru);

if(h6.textContent==="1" || h6.textContent==="2" || h6.textContent==="3" || h6.textContent==="4" || h6.textContent==="5") {

h6.textContent=brzoBiranje2[Math.floor(Math.random()*brzoBiranje2.length)];

}

if(h6.textContent==="11" || h6.textContent==="12" || h6.textContent==="13" || h6.textContent==="14" || h6.textContent==="15") {

h6.textContent=brzoBiranje4[Math.floor(Math.random()*brzoBiranje4.length)];

}

pitanjaIodgovori2();
odustati2.setAttribute("onclick","izbaciPotvrdu()");
da.addEventListener("click", odustajanje2);
vreme.textContent=30;
pomoci[0].addEventListener("click", prvaPomoc2);
pomoci[1].addEventListener("click", drugaPomoc2);
pomoci[2].addEventListener("click", trecaPomoc2);
ponovo=setInterval(podelaProcenata, 100);
zagarantovanaSuma1.textContent="";

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].addEventListener("click", pogodjenOdgovor2);

  }

}


function pogodjenOdgovor2() {
	
for(let i=0; i < this.children.length; ++i)  {

if(this.children[i].textContent===tacniOdgovori6[tacnoResenje2] && h6.textContent==="6")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";
setTimeout(otpocetka2, 3000);
setTimeout(pitanjaIodgovori2, 3000);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor2);

 }

let sound1=new Audio();
sound1.src="Correct.mp3";
sound1.play();

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor2();

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor2);

         }

      }

if(this.children[i].textContent===tacniOdgovori7[tacnoResenje2] && h6.textContent==="7")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";
setTimeout(otpocetka2, 3000);
setTimeout(pitanjaIodgovori2, 3000);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor2);

 }

let sound1=new Audio();
sound1.src="Correct.mp3";
sound1.play();

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor2();

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor2);

         }

      }

if(this.children[i].textContent===tacniOdgovori8[tacnoResenje2] && h6.textContent==="8")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";
setTimeout(otpocetka2, 3000);
setTimeout(pitanjaIodgovori2, 3000);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor2);

 }

let sound1=new Audio();
sound1.src="Correct.mp3";
sound1.play();

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor2();

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor2);

         }

      }

if(this.children[i].textContent===tacniOdgovori9[tacnoResenje2] && h6.textContent==="9")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";
setTimeout(otpocetka2, 3000);
setTimeout(pitanjaIodgovori2, 3000);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor2);

 }

let sound1=new Audio();
sound1.src="Correct.mp3";
sound1.play();

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor2();

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor2);

         }

      }

if(this.children[i].textContent===tacniOdgovori10[tacnoResenje2] && h6.textContent==="10")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";
setTimeout(otpocetka2, 3000);
setTimeout(pitanjaIodgovori2, 3000);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor2);

 }

let sound1=new Audio();
sound1.src="Correct.mp3";
sound1.play();

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor2();

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor2);

         }

      }

if(this.children[i].textContent===tacniOdgovori16[tacnoResenje2] && h6.textContent==="16")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";
setTimeout(otpocetka2, 3000);
setTimeout(pitanjaIodgovori2, 3000);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor2);

 }

let sound1=new Audio();
sound1.src="Correct.mp3";
sound1.play();

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor2();

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor2);

         }

      }

if(this.children[i].textContent===tacniOdgovori17[tacnoResenje2] && h6.textContent==="17")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";
setTimeout(otpocetka2, 3000);
setTimeout(pitanjaIodgovori2, 3000);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor2);

 }

let sound1=new Audio();
sound1.src="Correct.mp3";
sound1.play();

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor2();

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor2);

         }

      }

if(this.children[i].textContent===tacniOdgovori18[tacnoResenje2] && h6.textContent==="18")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";
setTimeout(otpocetka2, 3000);
setTimeout(pitanjaIodgovori2, 3000);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor2);

 }

let sound1=new Audio();
sound1.src="Correct.mp3";
sound1.play();

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor2();

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor2);

         }

      }

if(this.children[i].textContent===tacniOdgovori19[tacnoResenje2] && h6.textContent==="19")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";
setTimeout(otpocetka2, 3000);
setTimeout(pitanjaIodgovori2, 3000);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor2);

 }

let sound1=new Audio();
sound1.src="Correct.mp3";
sound1.play();

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor2();

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor2);

         }

      }

if(this.children[i].textContent===tacniOdgovori20[tacnoResenje2] && h6.textContent==="20")  {

this.style.background="olivedrab";
this.children[i].style.background="olivedrab";
setTimeout(otpocetka2, 3000);
setTimeout(pitanjaIodgovori2, 3000);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor2);

 }

let sound1=new Audio();
sound1.src="Correct.mp3";
sound1.play();

  }  else  {

this.style.background="indianred";
this.children[i].style.background="indianred";
netacanOdgovor2();

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor2);

         }

      }

if(this.style.background==="indianred" && this.children[i].style.background==="indianred")  {

setTimeout(vracanje, 4000);

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor2);

         }

let sound2=new Audio();
sound2.src="Wrong.mp3";
sound2.play();
pomoci[0].removeEventListener("click", prvaPomoc2);
pomoci[1].removeEventListener("click", drugaPomoc2);
pomoci[2].removeEventListener("click", trecaPomoc2);

if($(".odgovorJeTacan").length <= 4)  {

zagarantovanaSuma1.textContent="Osvojena suma: 0 dinara";  
osvojeno.value="";

     }

if($(".odgovorJeTacan").length > 4)  {

zagarantovanaSuma1.textContent="Osvojena suma: 5.000 dinara";  
osvojeno.value="";

     }

if($(".odgovorJeTacan").length > 9)  {

zagarantovanaSuma1.textContent="Osvojena suma: 150.000 dinara";  
osvojeno.value="";

         }

      }

   }	

}


function pitanjaIodgovori2() {
	

if(h6.textContent==="6")  {

pitanja.textContent=dodataPitanja6[first10];
++first10;

odgovor[0].textContent=dodatiOdgovori21[one10];
++one10;
odgovor[1].textContent=dodatiOdgovori22[two20];
++two20;
odgovor[2].textContent=dodatiOdgovori23[three30];
++three30;
odgovor[3].textContent=dodatiOdgovori24[four40];
++four40;

}

if(h6.textContent==="7")  {

pitanja.textContent=dodataPitanja7[first10];
++first10;

odgovor[0].textContent=dodatiOdgovori25[one10];
++one10;
odgovor[1].textContent=dodatiOdgovori26[two20];
++two20;
odgovor[2].textContent=dodatiOdgovori27[three30];
++three30;
odgovor[3].textContent=dodatiOdgovori28[four40];
++four40;

}

if(h6.textContent==="8")  {

pitanja.textContent=dodataPitanja8[first10];
++first10;

odgovor[0].textContent=dodatiOdgovori29[one10];
++one10;
odgovor[1].textContent=dodatiOdgovori30[two20];
++two20;
odgovor[2].textContent=dodatiOdgovori31[three30];
++three30;
odgovor[3].textContent=dodatiOdgovori32[four40];
++four40;

}

if(h6.textContent==="9")  {

pitanja.textContent=dodataPitanja9[first10];
++first10;

odgovor[0].textContent=dodatiOdgovori33[one10];
++one10;
odgovor[1].textContent=dodatiOdgovori34[two20];
++two20;
odgovor[2].textContent=dodatiOdgovori35[three30];
++three30;
odgovor[3].textContent=dodatiOdgovori36[four40];
++four40;

}

if(h6.textContent==="10")  {

pitanja.textContent=dodataPitanja10[first10];
++first10;

odgovor[0].textContent=dodatiOdgovori37[one10];
++one10;
odgovor[1].textContent=dodatiOdgovori38[two20];
++two20;
odgovor[2].textContent=dodatiOdgovori39[three30];
++three30;
odgovor[3].textContent=dodatiOdgovori40[four40];
++four40;

}

if(h6.textContent==="16")  {

pitanja.textContent=dodataPitanja16[first10];
++first10;

odgovor[0].textContent=dodatiOdgovori61[one10];
++one10;
odgovor[1].textContent=dodatiOdgovori62[two20];
++two20;
odgovor[2].textContent=dodatiOdgovori63[three30];
++three30;
odgovor[3].textContent=dodatiOdgovori64[four40];
++four40;

}

if(h6.textContent==="17")  {

pitanja.textContent=dodataPitanja17[first10];
++first10;

odgovor[0].textContent=dodatiOdgovori65[one10];
++one10;
odgovor[1].textContent=dodatiOdgovori66[two20];
++two20;
odgovor[2].textContent=dodatiOdgovori67[three30];
++three30;
odgovor[3].textContent=dodatiOdgovori68[four40];
++four40;

}

if(h6.textContent==="18")  {

pitanja.textContent=dodataPitanja18[first10];
++first10;

odgovor[0].textContent=dodatiOdgovori69[one10];
++one10;
odgovor[1].textContent=dodatiOdgovori70[two20];
++two20;
odgovor[2].textContent=dodatiOdgovori71[three30];
++three30;
odgovor[3].textContent=dodatiOdgovori72[four40];
++four40;

}

if(h6.textContent==="19")  {

pitanja.textContent=dodataPitanja19[first10];
++first10;

odgovor[0].textContent=dodatiOdgovori73[one10];
++one10;
odgovor[1].textContent=dodatiOdgovori74[two20];
++two20;
odgovor[2].textContent=dodatiOdgovori75[three30];
++three30;
odgovor[3].textContent=dodatiOdgovori76[four40];
++four40;

}

if(h6.textContent==="20")  {

pitanja.textContent=dodataPitanja20[first10];
++first10;

odgovor[0].textContent=dodatiOdgovori77[one10];
++one10;
odgovor[1].textContent=dodatiOdgovori78[two20];
++two20;
odgovor[2].textContent=dodatiOdgovori79[three30];
++three30;
odgovor[3].textContent=dodatiOdgovori80[four40];
++four40;

}

resetujOdgovore2();

}

function resetujOdgovore2() {

$(".odgovor").css("background","#6495ED");
$(".kviz").css("background","#6495ED");

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].addEventListener("click", pogodjenOdgovor2);

    }

}

function otpocetka2() {

++tacnoResenje2;

iznos[treci].style.background="purple";
--treci;

osvojeno.value=iznos[cetvrti].textContent+" dinara";
--cetvrti;

iznos[five50].classList.add("odgovorJeTacan");
--five50;

odustati2.style.visibility="visible";

if(osvojeno.value==="5.000 dinara")  {

zagarantovanaSuma1.textContent="Zagarantovana suma: 5.000 dinara";
iznos[10].style.background="#993333";

}

if(osvojeno.value==="150.000 dinara")  {

zagarantovanaSuma1.textContent="Zagarantovana suma: 150.000 dinara";
iznos[5].style.background="#993333";

}

if(osvojeno.value==="5.000.000 dinara")  {

iznos[0].style.background="#993333";
zagarantovanaSuma1.textContent="CESTITKE OSVOJILI STE 5.000.000 dinara";
osvojeno.value="";
setTimeout(vracanje, 4000);

 } 

for(let i=0; i < odgovor.length; ++i)  {

odgovor[i].style.visibility="visible";

   } 

}

function netacanOdgovor2() {
	
for(let i=0; i < odgovor.length; ++i)  {

if(odgovor[i].textContent===tacniOdgovori6[tacnoResenje2])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }

if(odgovor[i].textContent===tacniOdgovori7[tacnoResenje2])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }    

if(odgovor[i].textContent===tacniOdgovori8[tacnoResenje2])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }

if(odgovor[i].textContent===tacniOdgovori9[tacnoResenje2])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }

if(odgovor[i].textContent===tacniOdgovori10[tacnoResenje2])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }

if(odgovor[i].textContent===tacniOdgovori16[tacnoResenje2])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }

if(odgovor[i].textContent===tacniOdgovori17[tacnoResenje2])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }

if(odgovor[i].textContent===tacniOdgovori18[tacnoResenje2])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }

if(odgovor[i].textContent===tacniOdgovori19[tacnoResenje2])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }

if(odgovor[i].textContent===tacniOdgovori20[tacnoResenje2])  {

odgovor[i].parentElement.style.background="olivedrab";
odgovor[i].style.background="olivedrab";

    }    

  }

}

function vracanje() {
	
izlaz1.addEventListener("click", zatvoriPomoc);
$(".mk").css("visibility","hidden");
$(".mk").html("0");
vreme.textContent=30;

for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor2);

  }

for(let i=0; i < odgovor.length; ++i)  {

odgovor[i].textContent="";
odgovor[i].style.visibility="visible";

   }

$(".odgovor").css("background","#6495ED");
$(".kviz").css("background","#6495ED");

pitanja.addEventListener("click", igraPocinje);
pitanja.textContent="Klikni da nastavis igru";
$(".iznos").css("background", "#34A853");
$(".iznos").removeClass("odgovorJeTacan");

prvi=14;
drugi=14;
tacnoResenje=0;
first1=0;
one1=0;
two2=0;
three3=0;
four4=0;

first10=0;
one10=0;
two20=0;
three30=0;
four40=0;
tacnoResenje2=0;
treci=14;
cetvrti=14;
five5=14;
five50=14;

pomoci[0].addEventListener("click", prvaPomoc);
pomoci[1].addEventListener("click", drugaPomoc);
pomoci[2].addEventListener("click", trecaPomoc);


}

function odustajanje2() {
	
for(let i=0; i < odgovori.length; ++i)  {

odgovori[i].removeEventListener("click", pogodjenOdgovor2);

   }  

this.removeEventListener("click", odustajanje2);

$(".potvrdaOdustajanja").css("visibility","hidden");
odustati2.removeEventListener("click", izbaciPotvrdu);
zagarantovanaSuma1.textContent="Osvojena suma: "+iznos[cetvrti +=1].textContent+" dinara";
osvojeno.value="";

let sound3=new Audio();
sound3.src="Over.mp3";
sound3.play();

pomoci[0].removeEventListener("click", prvaPomoc2);
pomoci[1].removeEventListener("click", drugaPomoc2);
pomoci[2].removeEventListener("click", trecaPomoc2);

setTimeout(vracanje, 4000);

}

function prvaPomoc2() {
	
unutarPomoci1.textContent="X";
unutarPomoci1.style.visibility="visible";

this.removeEventListener("click", prvaPomoc);

if(odgovor[0].textContent===tacniOdgovori6[tacnoResenje2])  {

odgovor[1].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor2);
odgovori[3].removeEventListener("click", pogodjenOdgovor2);

    } 

if(odgovor[1].textContent===tacniOdgovori6[tacnoResenje2])  {

odgovor[0].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor2);
odgovori[2].removeEventListener("click", pogodjenOdgovor2);

    }

if(odgovor[2].textContent===tacniOdgovori6[tacnoResenje2])  {

odgovor[0].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor2);
odgovori[3].removeEventListener("click", pogodjenOdgovor2);

    }

if(odgovor[3].textContent===tacniOdgovori6[tacnoResenje2])  {

odgovor[1].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor2);
odgovori[2].removeEventListener("click", pogodjenOdgovor2);

    }               

if(odgovor[0].textContent===tacniOdgovori7[tacnoResenje2])  {

odgovor[1].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor2);
odgovori[3].removeEventListener("click", pogodjenOdgovor2);

    } 

if(odgovor[1].textContent===tacniOdgovori7[tacnoResenje2])  {

odgovor[0].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor2);
odgovori[2].removeEventListener("click", pogodjenOdgovor2);

    }

if(odgovor[2].textContent===tacniOdgovori7[tacnoResenje2])  {

odgovor[0].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor2);
odgovori[3].removeEventListener("click", pogodjenOdgovor2);

    }

if(odgovor[3].textContent===tacniOdgovori7[tacnoResenje2])  {

odgovor[1].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor2);
odgovori[2].removeEventListener("click", pogodjenOdgovor2);

    }         

if(odgovor[0].textContent===tacniOdgovori8[tacnoResenje2])  {

odgovor[1].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor2);
odgovori[3].removeEventListener("click", pogodjenOdgovor2);

    } 

if(odgovor[1].textContent===tacniOdgovori8[tacnoResenje2])  {

odgovor[0].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor2);
odgovori[2].removeEventListener("click", pogodjenOdgovor2);

    }

if(odgovor[2].textContent===tacniOdgovori8[tacnoResenje2])  {

odgovor[0].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor2);
odgovori[3].removeEventListener("click", pogodjenOdgovor2);

    }

if(odgovor[3].textContent===tacniOdgovori8[tacnoResenje2])  {

odgovor[1].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor2);
odgovori[2].removeEventListener("click", pogodjenOdgovor2);

    }   

if(odgovor[0].textContent===tacniOdgovori9[tacnoResenje2])  {

odgovor[1].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor2);
odgovori[3].removeEventListener("click", pogodjenOdgovor2);

    } 

if(odgovor[1].textContent===tacniOdgovori9[tacnoResenje2])  {

odgovor[0].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor2);
odgovori[2].removeEventListener("click", pogodjenOdgovor2);

    }

if(odgovor[2].textContent===tacniOdgovori9[tacnoResenje2])  {

odgovor[0].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor2);
odgovori[3].removeEventListener("click", pogodjenOdgovor2);

    }

if(odgovor[3].textContent===tacniOdgovori9[tacnoResenje2])  {

odgovor[1].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor2);
odgovori[2].removeEventListener("click", pogodjenOdgovor2);

    } 

if(odgovor[0].textContent===tacniOdgovori10[tacnoResenje2])  {

odgovor[1].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor2);
odgovori[3].removeEventListener("click", pogodjenOdgovor2);

    } 

if(odgovor[1].textContent===tacniOdgovori10[tacnoResenje2])  {

odgovor[0].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor2);
odgovori[2].removeEventListener("click", pogodjenOdgovor2);
    
    }

if(odgovor[2].textContent===tacniOdgovori10[tacnoResenje2])  {

odgovor[0].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor2);
odgovori[3].removeEventListener("click", pogodjenOdgovor2);

    }

if(odgovor[3].textContent===tacniOdgovori10[tacnoResenje2])  {

odgovor[1].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor2);
odgovori[2].removeEventListener("click", pogodjenOdgovor2);

    }                               

if(odgovor[0].textContent===tacniOdgovori16[tacnoResenje2])  {

odgovor[1].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor2);
odgovori[3].removeEventListener("click", pogodjenOdgovor2);

    } 

if(odgovor[1].textContent===tacniOdgovori16[tacnoResenje2])  {

odgovor[0].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor2);
odgovori[2].removeEventListener("click", pogodjenOdgovor2);

    }

if(odgovor[2].textContent===tacniOdgovori16[tacnoResenje2])  {

odgovor[0].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor2);
odgovori[3].removeEventListener("click", pogodjenOdgovor2);
    
    }

if(odgovor[3].textContent===tacniOdgovori16[tacnoResenje2])  {

odgovor[1].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor2);
odgovori[2].removeEventListener("click", pogodjenOdgovor2);

    }          

if(odgovor[0].textContent===tacniOdgovori17[tacnoResenje2])  {

odgovor[1].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor2);
odgovori[3].removeEventListener("click", pogodjenOdgovor2);

    } 

if(odgovor[1].textContent===tacniOdgovori17[tacnoResenje2])  {

odgovor[0].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor2);
odgovori[2].removeEventListener("click", pogodjenOdgovor2);

    }

if(odgovor[2].textContent===tacniOdgovori17[tacnoResenje2])  {

odgovor[0].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor2);
odgovori[3].removeEventListener("click", pogodjenOdgovor2);

    }

if(odgovor[3].textContent===tacniOdgovori17[tacnoResenje2])  {

odgovor[1].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor2);
odgovori[2].removeEventListener("click", pogodjenOdgovor2);

    }          

if(odgovor[0].textContent===tacniOdgovori18[tacnoResenje2])  {

odgovor[1].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor2);
odgovori[3].removeEventListener("click", pogodjenOdgovor2);

    } 

if(odgovor[1].textContent===tacniOdgovori18[tacnoResenje2])  {

odgovor[0].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor2);
odgovori[2].removeEventListener("click", pogodjenOdgovor2);

    }

if(odgovor[2].textContent===tacniOdgovori18[tacnoResenje2])  {

odgovor[0].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor2);
odgovori[3].removeEventListener("click", pogodjenOdgovor2);

    }

if(odgovor[3].textContent===tacniOdgovori18[tacnoResenje2])  {

odgovor[1].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor2);
odgovori[2].removeEventListener("click", pogodjenOdgovor2);

    }  

if(odgovor[0].textContent===tacniOdgovori19[tacnoResenje2])  {

odgovor[1].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor2);
odgovor[3].removeEventListener("click", pogodjenOdgovor2);

    } 

if(odgovor[1].textContent===tacniOdgovori19[tacnoResenje2])  {

odgovor[0].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor2);
odgovori[2].removeEventListener("click", pogodjenOdgovor2);

    }

if(odgovor[2].textContent===tacniOdgovori19[tacnoResenje2])  {

odgovor[0].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor2);
odgovori[3].removeEventListener("click", pogodjenOdgovor2);

    }

if(odgovor[3].textContent===tacniOdgovori19[tacnoResenje2])  {

odgovor[1].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor2);
odgovori[2].removeEventListener("click", pogodjenOdgovor2);

    }                      

if(odgovor[0].textContent===tacniOdgovori20[tacnoResenje2])  {

odgovor[1].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor2);
odgovori[3].removeEventListener("click", pogodjenOdgovor2);
    
    } 

if(odgovor[1].textContent===tacniOdgovori20[tacnoResenje2])  {

odgovor[0].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor2);
odgovori[2].removeEventListener("click", pogodjenOdgovor2);

    }

if(odgovor[2].textContent===tacniOdgovori20[tacnoResenje2])  {

odgovor[0].style.visibility="hidden";
odgovor[3].style.visibility="hidden";
odgovori[0].removeEventListener("click", pogodjenOdgovor2);
odgovori[3].removeEventListener("click", pogodjenOdgovor2);

    }

if(odgovor[3].textContent===tacniOdgovori20[tacnoResenje2])  {

odgovor[1].style.visibility="hidden";
odgovor[2].style.visibility="hidden";
odgovori[1].removeEventListener("click", pogodjenOdgovor2);
odgovori[2].removeEventListener("click", pogodjenOdgovor2);

    }  

}

let start2;
let sound5;

function drugaPomoc2() {
	
unutarPomoci2.textContent="X";
unutarPomoci2.style.visibility="visible";

this.removeEventListener("click", drugaPomoc2);

prijateljOdgovara.style.visibility="visible";
odustati2.style.visibility="hidden";

if(h6.textContent==="6")  {

takmicar.textContent="Ja: "+ pitanja.textContent;
pomaganje.textContent="Prijatelj: "+" "+"Odgovor je: "+tacniOdgovori6[tacnoResenje2];

}

if(h6.textContent==="7")  {

takmicar.textContent="Ja: "+ pitanja.textContent;
pomaganje.textContent="Prijatelj: "+" "+"Odgovor je: "+tacniOdgovori7[tacnoResenje2];

}

if(h6.textContent==="8")  {

takmicar.textContent="Ja: "+ pitanja.textContent;
pomaganje.textContent="Prijatelj: "+" "+"Odgovor je: "+tacniOdgovori8[tacnoResenje2];

}

if(h6.textContent==="9")  {

takmicar.textContent="Ja: "+ pitanja.textContent;
pomaganje.textContent="Prijatelj: "+" "+"Odgovor je: "+tacniOdgovori9[tacnoResenje2];

}

if(h6.textContent==="10")  {

takmicar.textContent="Ja: "+ pitanja.textContent;
pomaganje.textContent="Prijatelj: "+" "+"Odgovor je: "+tacniOdgovori10[tacnoResenje2];

}

if(h6.textContent==="16")  {

takmicar.textContent="Ja: "+ pitanja.textContent;
pomaganje.textContent="Prijatelj: "+" "+"Odgovor je: "+tacniOdgovori16[tacnoResenje2];

}

if(h6.textContent==="17")  {

takmicar.textContent="Ja: "+ pitanja.textContent;
pomaganje.textContent="Prijatelj: "+" "+"Odgovor je: "+tacniOdgovori17[tacnoResenje2];

}

if(h6.textContent==="18")  {

takmicar.textContent="Ja: "+ pitanja.textContent;
pomaganje.textContent="Prijatelj: "+" "+"Odgovor je: "+tacniOdgovori18[tacnoResenje2];

}

if(h6.textContent==="19")  {

takmicar.textContent="Ja: "+ pitanja.textContent;
pomaganje.textContent="Prijatelj: "+" "+"Odgovor je: "+tacniOdgovori19[tacnoResenje2];

}

if(h6.textContent==="20")  {

takmicar.textContent="Ja: "+ pitanja.textContent;
pomaganje.textContent="Prijatelj: "+" "+"Odgovor je: "+tacniOdgovori20[tacnoResenje2];

}

sound5=new Audio();
sound5.src="FriendCall.mp3";
sound5.play();

if($(".odgovorJeTacan").length <= 4)  {

pomaganje2.textContent="Prijatelj: 100%";

  }

if($(".odgovorJeTacan").length > 4)  {

pomaganje2.textContent="Prijatelj: 75%";

  }

if($(".odgovorJeTacan").length > 9)  {

pomaganje2.textContent="Prijatelj: 50%";

   }

start2=setInterval(alarm2, 1000);

izlaz1.addEventListener("click", zatvoriPomoc2);

}


function alarm2() {
	
let tri=parseInt(vreme.textContent);

vreme.textContent=tri-1;

if (vreme.textContent < 10) {

$(vreme).prepend(0);

   }

if(vreme.textContent < 1)  {

clearInterval(start2);
prijateljOdgovara.style.visibility="hidden";
odustati2.style.visibility="visible";

  }

}


function zatvoriPomoc2() {

this.removeEventListener("click", zatvoriPomoc2);
	
clearInterval(start2);
prijateljOdgovara.style.visibility="hidden";
odustati2.style.visibility="visible";

sound5.pause();

  }


function trecaPomoc2() {
	
unutarPomoci3.textContent="X";
unutarPomoci3.style.visibility="visible";

this.removeEventListener("click", trecaPomoc2);
publika2.style.visibility="visible";
odustati2.style.visibility="hidden";
clearInterval(ponovo);
ponovo=null;

for(let i=0; i < odgovori.length; ++i)  {

if(odgovor[i].textContent===tacniOdgovori6[tacnoResenje2])  {

if($(".odgovorJeTacan").length <= 4)  {

publika[i].textContent=procenat1[0];

        }
if($(".odgovorJeTacan").length > 4)  {

publika[i].textContent=procenat1[1]; 

         }
if($(".odgovorJeTacan").length > 9)  {

publika[i].textContent=procenat1[2]; 

         }

      }

if(odgovor[i].textContent===tacniOdgovori7[tacnoResenje2])  {

if($(".odgovorJeTacan").length <= 4)  {

publika[i].textContent=procenat1[0];

        }
if($(".odgovorJeTacan").length > 4)  {

publika[i].textContent=procenat1[1]; 

         }
if($(".odgovorJeTacan").length > 9)  {

publika[i].textContent=procenat1[2]; 

         }

      }  

if(odgovor[i].textContent===tacniOdgovori8[tacnoResenje2])  {

if($(".odgovorJeTacan").length <= 4)  {

publika[i].textContent=procenat1[0];

        }
if($(".odgovorJeTacan").length > 4)  {

publika[i].textContent=procenat1[1]; 

         }
if($(".odgovorJeTacan").length > 9)  {

publika[i].textContent=procenat1[2]; 

         }

      }          

if(odgovor[i].textContent===tacniOdgovori9[tacnoResenje2])  {

if($(".odgovorJeTacan").length <= 4)  {

publika[i].textContent=procenat1[0];

        }
if($(".odgovorJeTacan").length > 4)  {

publika[i].textContent=procenat1[1]; 

         }
if($(".odgovorJeTacan").length > 9)  {

publika[i].textContent=procenat1[2]; 

         }

      }

if(odgovor[i].textContent===tacniOdgovori10[tacnoResenje2])  {

if($(".odgovorJeTacan").length <= 4)  {

publika[i].textContent=procenat1[0];

        }
if($(".odgovorJeTacan").length > 4)  {

publika[i].textContent=procenat1[1]; 

         }
if($(".odgovorJeTacan").length > 9)  {

publika[i].textContent=procenat1[2]; 

         }

      }

if(odgovor[i].textContent===tacniOdgovori16[tacnoResenje2])  {

if($(".odgovorJeTacan").length <= 4)  {

publika[i].textContent=procenat1[0];

        }
if($(".odgovorJeTacan").length > 4)  {

publika[i].textContent=procenat1[1]; 

         }
if($(".odgovorJeTacan").length > 9)  {

publika[i].textContent=procenat1[2]; 

         }

      }

if(odgovor[i].textContent===tacniOdgovori17[tacnoResenje2])  {

if($(".odgovorJeTacan").length <= 4)  {

publika[i].textContent=procenat1[0];

        }
if($(".odgovorJeTacan").length > 4)  {

publika[i].textContent=procenat1[1]; 

         }
if($(".odgovorJeTacan").length > 9)  {

publika[i].textContent=procenat1[2]; 

         }

      }

if(odgovor[i].textContent===tacniOdgovori18[tacnoResenje2])  {

if($(".odgovorJeTacan").length <= 4)  {

publika[i].textContent=procenat1[0];

        }
if($(".odgovorJeTacan").length > 4)  {

publika[i].textContent=procenat1[1]; 

         }
if($(".odgovorJeTacan").length > 9)  {

publika[i].textContent=procenat1[2]; 

         }

      }

if(odgovor[i].textContent===tacniOdgovori19[tacnoResenje2])  {

if($(".odgovorJeTacan").length <= 4)  {

publika[i].textContent=procenat1[0];

        }
if($(".odgovorJeTacan").length > 4)  {

publika[i].textContent=procenat1[1]; 

         }
if($(".odgovorJeTacan").length > 9)  {

publika[i].textContent=procenat1[2]; 

         }

      }

if(odgovor[i].textContent===tacniOdgovori20[tacnoResenje2])  {

if($(".odgovorJeTacan").length <= 4)  {

publika[i].textContent=procenat1[0];

        }
if($(".odgovorJeTacan").length > 4)  {

publika[i].textContent=procenat1[1]; 

         }
if($(".odgovorJeTacan").length > 9)  {

publika[i].textContent=procenat1[2]; 

         }

      }      

   }

}  