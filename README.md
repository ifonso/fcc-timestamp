
# Timestamp Microservice

A microservice project for **freeCodeCamp** Back End Development certificate.

## Instalation
---

Install dependencies
```bash
$ npm install
```

Build and run
```bash
$ npm run build:start
```

## API Usage
---

#### Get current time

```http
  GET /api/
```

```json
{
    "unix": 1673540133491,
    "utc": "Thu, 12 Jan 2023 16:15:33 GMT"
}
```

#### Get UTC and UNIX time

```http
  GET /api/${date}
```

#### Passing UTC

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `date`      | `string` : "yyyy-mm-dd" | Date parameter that you want to get in unix. |

```http
  GET /api/2015-12-25
```

```json
{
    "unix": 1451001600000,
    "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

#### Passing UNIX

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `date`      | `number` | Date parameter that you want to get in utc. |

```http
  GET /api/1451001600000
```

```json
{
    "unix": 1451001600000,
    "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```



## Authors

- [@unchainedDavid](https://www.github.com/unchainedDavid)

