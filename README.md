# Booking

## Mock BE alkalmazás

A FE alkalmazáshoz tartozik egy mock BE alkalmazás, ami node.js és express használatával készült el.
Ez a `backend` mappa alatt található meg.

### Függőségek telepítése

A `backend` mappa alatt szükséges kiadni:

```shell
npm i 
```

### BE alkalmazás indítása

A `backend` mappa alatt szükséges kiadni:

```shell
npm run dev
```

A parancs kiadása után elindul a BE alkalmazás a `http://localhost:3001` URL-en.

## FE alkalmazás

A FE alkalmazás Vite + React használatával készült el.
Ez a `frontend` mappa alatt található meg.

### Függőségek telepítése

A `frontend` mappa alatt szükséges kiadni:

```shell
npm i 
```

### FE alkalmazás indítása

A `frontend` mappa alatt szükséges kiadni:

```shell
npm run start
```

A parancs kiadása után elindul a FE alkalmazás a `http://localhost:3000` URL-en.

## Cypress tesztek

A FE alkalmazáshoz tartoznak e2e cypress tesztek, amelyek a `test/cypress` mappa alatt érhetőek el.

### Függőségek telepítése

A `test/cypress` mappa alatt szükséges kiadni:

```shell
npm i 
```

### Cypress tesztek indítása

A `test/cypress` mappa alatt szükséges kiadni:

```shell
npm run cy:open
```

A parancs kiadása után elindul a Cypress alkalmazás, amelyben az `E2E Testing` kiválasztása után adott böngészőn elindíthatóak az E2E tesztek.

### Cypress tesztek futtatása terminálból chrome-on

A `test/cypress` mappa alatt szükséges kiadni:

```shell
npm run cy:run:chrome
```

A parancs kiadása után lefutnak a terminálban a Cypress tesztek chrome böngészőt használva.