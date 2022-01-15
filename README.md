# RunTimeTerrorGame

## Documentație tehnică pentru jocul RunTimeTerrorGame

### Cuprins
1. [Despre proiect](despre-proiect)
2. [Echipa RunTimeTerror](team)
3. [Prezentarea proiectului](presentation)
4. [Tehnologii folosite](tech-stack)
5. [Frontend](frontend)  
    1. [Premise](frontend-prerequisites)
    2. [Cum se instalează proiectul frontend](frontend-install)
    3. [Cum se rulează proiectul frontend](frontend-run)  
           1. [Folosind linia de comandă](frontend-run-cli)  
           2. [Folosind un IDE pentru web-dev de la JetBrains (PHPStorm/WebStorm)](frontend-run-ide)
    4. [Cum se face deploy la proiectul frontend](frontend-deploy)  
           1. [Folosind linia de comandă](frontend-deploy-cli)
6. [Backend](backend)
    1. [Premise](backend-prerequisite)
    2. [Cum se instalează proiectul backend](backend-install)
    3. [Cum se face deploy la proiectul backend](backend-deploy)  
           1. [Folosind comanda gradle](backend-deploy-cli)  
           2. [Folosind IntelliJ](backend-deploy-ide)
    4. [Cum se rulează proiectul backend](backend-run)
7. [Screenshots](screenshots)
8. [Arhitectura aplicației](architecture)
    1. [Diagramele de clase](architecture-class-diagrams)
    2. [Componente folosite](components)
    3. [Evoluția acestui repository](repo-history)

### Despre proiect<a name="despre-proiect"/>
Acest repository conține proiectul echipei RunTimeTerror în cadrul materiei Proiect Colectiv 2021-2022 a Facultății de Matematică și Informatică a Universității Babeș-Bolyai împreună cu Evozon.  
Proiectul constă într-un joc 2D client (ReactJS)-server (Java) în care dorim să prezentăm într-un mod interactiv și distractiv viața de student în cadrul facultății noastre, văzută din perspectiva noastră.  

### Echipa RunTimeTerror<a name="team"/>
Acest joc a fost dezvoltat de:
- Gane Alexandru - project manager & frontend dev
- Mateaș Andrei - developer
- Irimiciuc Andreea - backend dev
- Măduța Adrian - frontend dev
- Șapcă Cătălina - backend dev
- Cocora Lorena - grafician
- Ștefănescu Petru - frontend dev & arhitect
- Chiorean Raul - developer
- Marinica Paul - developer & tester
- Chis Ionel - developer

### Prezentarea proiectului<a name="presentation"/>
Proiectul <b>RunTimeTerrorGame</b> poate fi vizionat urmând [acest](https://prezi.com/view/sjRHP5mx3aXjUpJEYDk7/) link.

#### Tehnologii folosite<a name="tech-stack"/>
- React, împreună cu HTML, CSS și TypeScript
- REST
- Java, împreună cu Spring Boot, Hibernate, MySQL

### Frontend<a name="frontend"/>
#### Premise <a name="frontend-prerequisites"/>
- npm
- Git
#### Cum se instalează proiectul frontend<a name="frontend-install"/>
1. Creează un director nou (ex: RunTimeTerrorGame)
2. Intră în acel director și deschide un terminal
3. Folosește comanda <code>git clone https://github.com/iByster/RunTimeTerrorGame</code>
4. După ce se descarcă proiectul în folderul tău creat, folosește comanda <code>npm install</code>
5. Gata! Ești pregătit să contribui la acest proiect.
#### Cum se rulează proiectul frontend<a name="frontend-run"/>
##### Folosind linia de comandă<a name="frontend-run-cli"/>
1. Se deschide o consolă în folderul **frontend** din repository.
2. Se execută comanda <code>npm run start</code>
##### Folosind un IDE pentru web-dev de la JetBrains (PHPStorm/WebStorm)<a name="frontend-run-ide"/>
În această situație, proiectul ar trebui să fie configurat să ruleze automat proiectul. Dacă nu este, adaugă o configurație pentru React, astfel:
1. Intră în meniul **Run/Debug Configurations**
2. Apasă pe butonul **+** (Add New Configuration)
3. Alege configurația "npm"
4. Setează următorii parametri astfel:
- package.json - aici setezi calea către fișierul package.json aflat în folderul **frontend**
- command - run
- scripts - start
Asigură-te că ai selectat corect și interpretorul pentru Node.
#### Cum se face deploy la proiectul frontend<a name="frontend-deploy"/>
##### Folosind linia de comandă<a name="frontend-deploy-cli"/>
1. Se deschide o consolă în folderul **frontend** din repository.
2. Se execută comanda <code>npm run build</code>.
3. După ce s-a finalizat execuția pasului 2, rezultatul îl vei găsi în folderul **build**.
4. Pentru a încărca site-ul pe un server web, pur și simplu copiază fișierele rezultate în build în același loc în care ai pune un site web obișnuit.
  
### Backend<a name="backend"/>  
#### Premise<a name="backend-prerequisite"/>  
- Gradle >=4.10
- MySQL
#### Cum se instalează proiectul backend<a name="backend-install"/>  
1. Dacă nu ai descărcat proiectul frontend, urmează pașii 1-3 de mai sus.  

#### Cum se face deploy la proiectul backend<a name="backend-deploy"/>
##### Folosind comanda gradle<a name="backend-deploy-cli"/>
**Atenție!** Spring necesită o versiune >=4.10 pentru gradle pentru a putea compila proiectul. Dacă nu îndeplinești această condiție, încearcă metoda descrisă mai jos.
1. Deschide o consolă în directorul rădăcină al proiectului backend (nume-repo-github/backend)
2. Rulează comanda gradle bootJar (comenzile implicite ale Gradle de build **nu** funcționează)
3. Rezultatul comenzii este un fișier .jar pe care-l găsești la următoarea cale relativă: build/libs
##### Folosind IntelliJ<a name="backend-deploy-ide"/>
1. Deschide proiectul backend folosind IntelliJ
2. După ce s-a încărcat proiectul, deschide tabul Gradle care se află în partea din dreapta sus a interfeței grafice (dacă nu apare, apasă pe tabul View -> Tool Windows -> Gradle)
3. Asigură-te că ai deschis următoarea ierarhie backend > Tasks > build
4. Apasă dublu-click pe bootJar
5. La fel ca mai sus, fișierul .jar rezultat se va găsi în /build/libs

#### Cum se rulează proiectul backend<a name="backend-run"/>
**Asigură-te că ai făcut build la ultima versiune de jar!**
**Asigură-te că serverul MySQL este pornit și are un utilizator cu credențialele din application.properties**
Folosește comanda <code>java -jar *path/relativ/către/jar*</code>  

### Screenshots<a name="screenshots"/>  
Aici vedeți câteva capturi de ecran din aplicație.
- Login  
![image](https://user-images.githubusercontent.com/23705132/149385873-8246b614-3c94-4eaf-811e-d14cbd00cf7b.png)
- Register
![image](https://user-images.githubusercontent.com/23705132/149385892-3997f960-3eed-4996-9818-61120ac2db87.png)
- Leaderboard
![image](https://user-images.githubusercontent.com/23705132/149385914-fcee2ac6-188d-4d10-98e1-651899e463f0.png)
- Meniu nivele
![image](https://user-images.githubusercontent.com/23705132/149385949-d2d18748-5e24-4004-8ca4-3a26d3adff27.png)
- Primul nivel
![image](https://user-images.githubusercontent.com/23705132/149385970-0d09d16e-3f3c-41ff-8747-f11be77cc481.png)



### Arhitectura aplicației<a name="architecture"/>  
Diagramele UML care descriu comportamentul aplicației se află aici.
#### Diagramele de clase<a name="architecture-class-diagrams"/>
- Domain
![image](https://user-images.githubusercontent.com/23705132/149391465-971c11c7-fd61-4a62-98e8-4641311a0f0f.png)
- Infrastructure
![image](https://user-images.githubusercontent.com/23705132/149391507-b7d4751f-4472-4d11-a67b-5449b36cab18.png)
- Business
![image](https://user-images.githubusercontent.com/23705132/149391632-4c296002-4ed8-48c6-958b-95d2646d0b02.png)




#### Componente folosite<a name="components"/>  
- Login  
Este prima componentă care apare în aplicație, și este folosită pentru a autentifica un utilizator în aplicație.  
- Register  
Această componentă permite unui utilizator să creeze un cont în această aplicație.  
- LeaderBoard  
În LeaderBoard se află clasamentul pe scor și nivel al tuturor jucătorilor.  
  - LeaderBoardHeader este antetul listei în care apar recordurile jucătorilor.  
  - LeaderBoardItem reprezintă fiecare record care se afișează în LeaderBoard.  
- NavBar
Componenta NavBar permite utilizatorului să navigheze prin aplicație odată ce acesta s-a autentificat.  
- Level 
Conține o listă a tuturor nivelelor din joc.  
  - LevelItem reprezintă un element din lista nivelelor.    
- Projectile - reprezintă proiectilul pe care jucătorul trebuie să-l evite
- Player - componenta Player conține un sprite care reprezintă caracterul principal din joc
- GameOne - conține primul nivel din joc  

#### Evoluția acestui repository<a name="repo-history"/>  
![image](https://user-images.githubusercontent.com/23705132/149385268-c11927f6-17e0-43b1-ae8b-a9c746394955.png)
![image](https://user-images.githubusercontent.com/23705132/149385500-a401b6ba-d337-479e-945c-858f08becc75.png)
![image](https://user-images.githubusercontent.com/23705132/149385577-de60c7ed-293a-4cdc-bc0c-8a66aa2bdb9f.png)
