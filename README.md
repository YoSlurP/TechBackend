# Tech Support Backend

Ez a backend a Tech Support weboldalnak, amely JavaScript nyelven készült. A projekt célja, hogy alapvető backend szolgáltatásokat biztosítson, mint például adatkezelés, API útvonalak és middleware-k.

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
