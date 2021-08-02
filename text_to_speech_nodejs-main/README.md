## Como Utilizar

### Passo 1
Você precisará instalar o [Node.js](https://nodejs.org/en/) e o [MySQL](https://www.mysql.com/) .


### Passo 2
O arquivo configuration.json pode ser alterado da seguinte forma:

```bash
  {
    "user": "text2speech", 
    "password": "text2speech"
  }
```

por padrão pode-se utilizar desta forma: 
```bash
  {
    "user": "<usuário>", 
    "password": "<senha>"
  }
```


Pode ser necessário executar o seguinte comando no terminal MySQL:
OBS: este comando deve ser alterado caso o arquivo "configuration.json" seja alterado
para que a aplicação funcione. 

```sh
  ALTER USER 'text2speech'@'localhost' IDENTIFIED WITH mysql_native_password BY 'text2speech'
```



No terminal, navegue até a pasta raiz do projeto e utilize o seguinte comando:

```sh
npm install
```


### Passo 3
Ao finalizar o comando anterior, execute seu servidor MySQL, e em seguida execute:

```sh
npm start
```

Após executado, uma página no navegador será aberta automaticamente com o endereço ip "localhost:8080".

