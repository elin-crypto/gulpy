# Moment 2 : Gulp

*Detta repo är en uppgift i kursen Webbutveckling III på programmet Webbutveckling på Mittuniversitetet*

Syftet med att automatisera processen är att förenkla arbetsflödet. Det går snabbare, smidigare och färre misstag görs. Det publicerade materialet håller sig uppdaterat. 

Jag har använt följande paket:
* gulp-concat (slår samman olika js-filer med varandra samt css-filer med varandra)
* gulp-uglify-es (minifierar js-filer)
* gulp-clean-css (minifierar css-filer)
* browser-sync (uppdaterar webbläsaren automatiskt då någon förändring sker i filerna)
* gulp-imagemin (komprimerar bildfiler)
* gulp-sourcemaps (skriver ut varifrån, vilken fil och rad, en viss kodsnutt kommer ifrån. Bra vid felsökning av koden.)

### Använd min utvecklingsmiljö
För att använda sig av min utvecklingsmiljö behöver man först klona ner repot så här:

*$ git clone https://github.com/elin-crypto/gulpy.git*

Därefter skriver man *$ npm install* för att installera alla paket som behövs. En annan viktig grej är ju förstås att du redan har node js och gulp. Har du inte det så installera dessa först. 

Men hur funkar det då? Genom olika tasks utförs olika uppgifter:

* Det finns copyHTML som kopierar över html-filer till en publiceringsmapp (som också skapas om den inte redan finns). 
* jsTask som kopierar, konkatinerar och minifierar javascript-filer till publiceringsmappen.
* cssTask som kopierar, konkatinerar och minifierar css-filer till publiceringsmappen.
* imgTask som kopierar och komprimerar bildfiler (gif, jpg, png och svg) till publiceringsmappen.

Sedan har jag även en watcher som ligger och kollar om någon förändring sker i arbetsfilerna och då kör igång tasksen ovan. Browsersync startar vid förändring och laddar om webbläsaren. 

Utöver krav från uppgiften har jag använt mig imagemin som komprimerar bilder och gulp-sourcemaps för att göra felsökning lättare
