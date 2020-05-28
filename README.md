# Warsztaty-NodeJS

## Krok 0 - Tworzenie aplikacji w Node JS

Upewnij się, że masz podobne wersje bibliotek / technologii.

```json
{
  "npm": "6.13.4",
  "ares": "1.15.0",
  "brotli": "1.0.7",
  "cldr": "35.1",
  "http_parser": "2.9.3",
  "icu": "64.2",
  "llhttp": "2.0.4",
  "modules": "72",
  "napi": "5",
  "nghttp2": "1.40.0",
  "node": "12.16.1",
  "openssl": "1.1.1d",
  "tz": "2019c",
  "unicode": "12.1",
  "uv": "1.34.0",
  "v8": "7.8.279.23-node.31",
  "zlib": "1.2.11"
}
```

Nastepnie otwórz Node JS command prompt bądź użyj konsoli w IDE `u mnie w Visual Studio Code - ctrl + ~`.

Wpisuj poniższe polecenia:

```js
    npm init // stworzony zostanie plik package.json, ktory potrzebny bedzie do zarzadzania zaleznosciami w projekcie. Wciskaj enter do momentu stworzenia pliku.

    // Nastepnie musimy zainstalowac potrzebne zaleznosci

    npm install --save express cors body-parser dotenv reflect-metadata

    // express - framework dorzucajacy dodatkowa warstwe abstrakcji podczas pracy z nodem - uproszczjac
    // cos jak jQuery dla JS

    // cors - libka (middleware) pozwalajaca na uproszczenie zarzadzania CORS

    // body-parser - libka (middleware) upraszczajaca odczyt danych podczas przychodzacych zapytan.
    // Dzieki niej mozemy w latwy sposob dostac sie do danych bez koniecznosci pisania wlasnych funkcji
    // do req.body - dane z zapytania

    // dotenv - libka pozwalajaca na zaladowanie zmiennych z plikow .env do obiektu process.env

    // reflect-metadata - dodaje informacje do klas podczas ich inicjalizacji za pomoca dekoratorow

    npm install --save-dev @types/body-parser @types/node tslint typescript ts-node-dev @types/express @types/dotenv @types/cors @types/express

    // Wszystkie zaleznosci ze znakiem @ to definicje typow dla poszczegolonych bibliotek
    // tslint - skladnia i jakosc kodu - weryfikacja jego jakosci za pomoca wtyczki podczas pracy
    // typescript - kompilator dla plikow z rozszerzeniem .ts - bedzie je przeksztalcal do js
    // ts-node-dev - libka pozwalajaca na restartowanie serwera za nas podczas pracy z kodem
```

Nastepnie potrzebujemy pliku konfiguracyjnego dla typescripta - tak, aby mogl przeksztalcac pliki
ze skladnia TS na JS w zdefiniowany przez nas sposob. Uzywamy do tego pliku `tsconfig.json`.

Pozniej potrzebujemy stworzyc plik startowy. Bedzie to Server.ts i plik z kodem startowym naszej aplikacji App.ts.

Aplikacje uruchamiamy poleceniami:
npm run tsc
npm run dev

Odpal przegladarke i wejdz na adres http://localhost:8080/api - zobaczysz status ok.

Przy kazdej zmianie kodu - zmiany wrzucane sa na serwer developerski dzieki czemu nie musisz tego robic
manualnie.