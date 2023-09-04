## Getting started
The following is an example project using PERN Stack, to support this development several libraries are used: bcryptjs, cookie-parser, express-validator, jsonwebtoken, passport-jwt.
<br>

### Installation
```bash
$ cd ./server
$ npm install
$ cd ../client
$ npm install
```

### Use Database
<br>
On database, create database and import this database.sql file on 'Query Tool'.
<br>

### Username for Login
```json
{
  "email" : "mail@mail.com",
  "password" : "123456"
}
```
### Use .env configuration
```env
#DATABASE_INFO
PGDATABASE={YOUR_DATABASE}
PGUSER={YOUR_USERPG}
PGPASSWORD=[YOUR_PASSWORD}
PGHOST=localhost
PGPORT=5432

#SERVER_INFO
PORT=9000
CLIENT_URL=http://localhost:5173
SERVER_URL=http://localhost:9000
SECRET_KEY=thisissecret
```
