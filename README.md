# RunTimeTerrorGame

## Documentație tehnică pentru jocul RunTimeTerrorGame

### Despre proiect
Acest repository conține proiectul echipei RunTimeTerror în cadrul materiei Proiect Colectiv 2021-2022 a Facultății de Matematică și Informatică a Universității Babeș-Bolyai împreună cu Evozon.  
Proiectul constă într-un joc 2D client (ReactJS)-server (Java) în care dorim să prezentăm într-un mod interactiv și distractiv viața de student în cadrul facultății noastre, văzută din perspectiva noastră.  

### Echipa RunTimeTerror
Acest joc a fost dezvoltat de:
- Gane Alexandru - project manager & frontend dev
- Mateaș Andrei - developer
- Irimiciuc Andreea - backend dev
- Măduță Adrian - frontend dev
- Șapcă Cătălina - backend dev
- Cocora Lorena - grafician
- Ștefănescu Petru - frontend dev & arhitect
- Chiorean Raul - developer
- Marinica Paul - developer & tester
- Chis Ionel - developer

#### Tehnologii folosite
- React, împreună cu HTML, CSS și TypeScript
- REST
- Java, împreună cu Spring Boot, Hibernate, MySQL

### Frontend
#### Premise:
- npm
- Git
#### Cum se instalează proiectul frontend:
1. Creează un director nou (ex: RunTimeTerrorGame)
2. Intră în acel director și deschide un terminal
3. Folosește comanda <code>git clone https://github.com/iByster/RunTimeTerrorGame</code>
4. După ce se descarcă proiectul în folderul tău creat, folosește comanda <code>npm install</code>
5. Gata! Ești pregătit să contribui la acest proiect.
#### Cum se rulează proiectul frontend:
##### Folosind linia de comandă
1. Se deschide o consolă în folderul **frontend** din repository.
2. Se execută comanda <code>npm run start</code>
##### Folosind un IDE pentru web-dev de la JetBrains (PHPStorm/WebStorm)
În această situație, proiectul ar trebui să fie configurat să ruleze automat proiectul. Dacă nu este, adaugă o configurație pentru React, astfel:
1. Intră în meniul **Run/Debug Configurations**
2. Apasă pe butonul **+** (Add New Configuration)
3. Alege configurația "npm"
4. Setează următorii parametri astfel:
- package.json - aici setezi calea către fișierul package.json aflat în folderul **frontend**
- command - run
- scripts - start
Asigură-te că ai selectat corect și interpretorul pentru Node.
#### Cum se face deploy la proiectul frontend:
##### Folosind linia de comandă
1. Se deschide o consolă în folderul **frontend** din repository.
2. Se execută comanda <code>npm run build</code>.
3. După ce s-a finalizat execuția pasului 2, rezultatul îl vei găsi în folderul **build**.
4. Pentru a încărca site-ul pe un server web, pur și simplu copiază fișierele rezultate în build în același loc în care ai pune un site web obișnuit.
  
### Backend  
#### Premise:  
- Gradle >=4.10
- MySQL
#### Cum se instalează proiectul backend:  
1. Dacă nu ai descărcat proiectul frontend, urmează pașii 1-3 de mai sus.  

#### Cum se face deploy la proiectul backend:
##### Folosind comanda gradle
**Atenție!** Spring necesită o versiune >=4.10 pentru gradle pentru a putea compila proiectul. Dacă nu îndeplinești această condiție, încearcă metoda descrisă mai jos.
1. Deschide o consolă în directorul rădăcină al proiectului backend (nume-repo-github/backend)
2. Rulează comanda gradle bootJar (comenzile implicite ale Gradle de build **nu** funcționează)
3. Rezultatul comenzii este un fișier .jar pe care-l găsești la următoarea cale relativă: build/libs
##### Folosind IntelliJ
1. Deschide proiectul backend folosind IntelliJ
2. După ce s-a încărcat proiectul, deschide tabul Gradle care se află în partea din dreapta sus a interfeței grafice (dacă nu apare, apasă pe tabul View -> Tool Windows -> Gradle)
3. Asigură-te că ai deschis următoarea ierarhie: backend > Tasks > build
4. Apasă dublu-click pe bootJar
5. La fel ca mai sus, fișierul .jar rezultat se va găsi în /build/libs

#### Cum se rulează proiectul backend:
**Asigură-te că ai făcut build la ultima versiune de jar!**
**Asigură-te că serverul MySQL este pornit și are un utilizator cu credențialele din application.properties**
Folosește comanda <code>java -jar *path/relativ/către/jar*</code>  

### Screenshots  
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



### Arhitectura aplicației:  
Se vor încărca diagramele sub formă de fotografii de îndată ce acestea sunt actualizate pentru a reprezenta starea curentă a aplicației.

#### Componente folosite:  
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

#### Evoluția acestui repository  
![image](https://user-images.githubusercontent.com/23705132/149385268-c11927f6-17e0-43b1-ae8b-a9c746394955.png)
![image](https://user-images.githubusercontent.com/23705132/149385500-a401b6ba-d337-479e-945c-858f08becc75.png)
![image](https://user-images.githubusercontent.com/23705132/149385577-de60c7ed-293a-4cdc-bc0c-8a66aa2bdb9f.png)
