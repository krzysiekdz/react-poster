Poster
==============

Aplikacja napisana przy pomocy bibliotek React i Redux (sierpień 2016, niestety nie dokumentowałem wtedy pracy w git). 

Wyświetla nowości filmowe, umożliwia przeszukiwanie bazy filmów (tmdb) oraz dodawanie i usuwanie filmów do listy filmów do obejrzenia. Kod umieszczony tutaj jest w calosci napisany przeze mnie, aczkolwiek wzorowałem się na identycznym projekcie (https://github.com/kushalpandya/poster). Projekt do działania wymaga uruchomionego serwera (https://github.com/kushalpandya/poster-server). Serwer korzystajac z tmdb API (https://www.themoviedb.org/documentation/api) udostępnia aplikacji Poster wymienione wyżej uslugi. Aplikacja ta stanowi więc wygodny (i ładny :) ) interfejs do oferowanych przez serwer usług.


Widok glowny aplikacji
![Homepage](http://i.imgur.com/LxkHPLY.png "homepage")

Animacja podczas oczekiwania na nadchodzące dane (wpisano haslo "guardians")
![Animation](http://i.imgur.com/lMzeUwg.png)

Lista wyszukanych wyników dla hasla "guardians". Na obrazek można kliknąć i zostaniemy przekierowani do szczegółów na temat klikniętego filmu (obrazek później).
![serach](http://i.imgur.com/Jk8kB8M.png)

Liczba oddanych głosów na film (po najechaniu na pole z gwiazdką wyświetla się "tooltip" z liczbą głosów)
![](http://i.imgur.com/ql4T0e5.png)

Lista nowości filmowych (zakładka "Upcoming")
![](http://i.imgur.com/Y19tp09.png)

Lista filmów do obejrzenia (zakładka "Watchlist")
![](http://i.imgur.com/M7mr7mC.png)

Dodanie filmu do listy filmów do obejrzenia (kliknięcie w przycisk "add movie")
![](http://i.imgur.com/x5qkTBy.png)

Film dodany do listy - przycisk zmienił wygląd ("ptaszek")
![](http://i.imgur.com/90LKwGS.png)

Film przed chwilą dodany, jest teraz na liście filmów do obejrzenia.
![](http://i.imgur.com/6Rw7mu2.png)

Szczegóły filmu (strona nie została dokończona przeze mnie - stwierdziłem że wszystko już wiem :) )
![](http://i.imgur.com/0ZjNytt.png)

Szczegóły filmu - w wyniku kliknięcia na zdjecie zostało ono powiekszone. Kliknięcie obok znowu przywoła normalny widok.
![](http://i.imgur.com/Duo79j1.png)


### Uruchamianie:
serwer (https://github.com/kushalpandya/poster-server):
node index.js

następnie public/index.html - aplikacja Poster (wymaga połączenia z serwerem powyżej)

