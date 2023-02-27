<pre>
yarn add @nestjs/config sequelize sequelize-typescript pg
yarn add -D @types/sequelize

yarn add @nestjs/swagger
yarn add dotenv

yarn add class-transformer class-validator 

yarn add @nestjs/passport @nestjs/jwt passport passport-local passport-jwt
yarn add -D @types/passport-jwt @types/passport-local

yarn add argon2

yarn add -D @types/multer

yarn add jsonwebtoken

</pre>


### Seeder
<pre>
npx sequelize-cli seed:create --name user-seeder --seeders-path ./src/database/seeders/
</pre>

<pre>
  npx sequelize-cli db:drop                           Drop database specified by configuration
  npx sequelize-cli init                              Initializes project
  npx sequelize-cli init:config                       Initializes configuration
  npx sequelize-cli init:migrations                   Initializes migrations
  npx sequelize-cli init:models                       Initializes models
  npx sequelize-cli init:seeders                      Initializes seeders
  npx sequelize-cli migration:generate                Generates a new migration file
  npx sequelize-cli migration:create                  Generates a new migration file
  npx sequelize-cli model:generate                    Generates a model and its migration
  npx sequelize-cli model:create                      Generates a model and its migration
 
  npx sequelize-cli seed:generate                     Generates a new seed file
  npx sequelize-cli seed:create                       Generates a new seed file

</pre>

##### Running Seeds
<pre>
npx sequelize-cli db:seed:all
</pre>


##### Undoing Seeds
<pre>
Seeders can be undone if they are using any storage. There are two commands available for that:

If you wish to undo the most recent seed:

  npx sequelize-cli db:seed:undo

If you wish to undo a specific seed:

  npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data

If you wish to undo all seeds:

  npx sequelize-cli db:seed:undo:all

yarn seq:db:m:undo create-indigotone-table && yarn seq:db:m:up create-indigotone-table && yarn seq:seed:up s5-indigotone-seeder
</pre>