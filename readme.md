# Demo application: VueJS UI with Symfony API

This is an exercise to use symfony 4 as an api only and have a separate application for the UI, built with VueJS.

## Setup

### API

```
composer install
./dcp up
```

On first usage you will have to generate private and public keys following the documentation on [lexik/LexikJWTAuthenticationBundle](https://github.com/lexik/LexikJWTAuthenticationBundle/blob/master/Resources/doc/index.md#installation).

```
$ mkdir var/jwt
$ openssl genrsa -out var/jwt/private.pem -aes256 4096
$ openssl rsa -pubout -in var/jwt/private.pem -out var/jwt/public.pem
```

A docker-compose setup is ready to use after you've ran `./dcp up`.  This is the mysql config: `DATABASE_URL=mysql://homestead:secret@mysql:3306/vuesf4`.

Or, ou can use a mysql docker image:

```
docker run --name vuesf_db -v /your/local/path:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -d -p 3306:3306 mysql:latest
```

### UI

```
yarn install
npm run dev-server
```

Browser to `http://localhost:8080/`
