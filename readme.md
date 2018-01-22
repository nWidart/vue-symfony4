# Demo application: VueJS UI with Symfony API

This is an exercise to use symfony 4 as an api only and have a separate application for the UI, built with VueJS.

## Setup

### API

```
composer install
./bin/console server:run
```

On first usage you will have to generate private and public keys following the documentation on [lexik/LexikJWTAuthenticationBundle](https://github.com/lexik/LexikJWTAuthenticationBundle/blob/master/Resources/doc/index.md#installation).

```
$ mkdir var/jwt
$ openssl genrsa -out var/jwt/private.pem -aes256 4096
$ openssl rsa -pubout -in var/jwt/private.pem -out var/jwt/public.pem
```

### UI

```
yarn install
npm run dev-server
```

Browser to `http://localhost:8080/`
