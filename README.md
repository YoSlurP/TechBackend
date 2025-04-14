# Tech Support - Fejlesztés alatt

Ez a backend a Tech Support weboldalnak, amely JavaScript nyelven készült. A projekt célja, hogy alapvető backend szolgáltatásokat biztosítson, mint például adatkezelés, API útvonalak és middleware-k.

## Célja, funkciója

Főbb célja hogy a Tech Support frontendel kommunikáljon. Ticketek nyitása, menedzselése és zárásával foglalkozik legfőkébb. Emellett a Tech Support adminokat is feljegyzi, egy új ticketkor random adja oda az egyik Adminnak a kérdést. Az adminok erre válaszolni tudnak. Ezek mind API kéréseken keresztül történnek. A rendszer támogatja a ticketek állapotának frissítését, valamint lehetőséget biztosít a kérdések és válaszok könnyed kezelésére API kérés segítségével.

## Telepítés

1. Klónozd a repót:
    ```bash
    git clone https://github.com/YoSlurP/TechBackend.git
    ```

2. Lépj be a mappába:
    ```bash
    cd TechBackend
    ```

3. Telepítsd a szükséges függőségeket:
    ```bash
    npm install
    ```

## Fájlstruktúra

- **controllers/**: Az alkalmazás vezérlői, amelyek az üzleti logikát kezelik.
- **errors/**: Hibakezelő funkciók.
- **middlewares/**: Köztes rétegek, például autentikáció vagy naplózás.
- **routes/**: Az alkalmazás API útvonalai.
- **services/**: Az üzleti logikát támogató szolgáltatások.

## Futatás

Az alkalmazás futtatásához használd a következő parancsot:

```bash
npm start
```
