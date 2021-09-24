# SubQuery - kusama-indexing

This is a kusama indexer project, that indexes the councillor votes 

## Preparation
To run this project locally follow the steps below
#### Environment

- [Typescript](https://www.typescriptlang.org/) are required to compile project and define types.  

- Both SubQuery CLI and generated Project have dependencies and require [Node](https://nodejs.org/en/).
     
#### Install the SubQuery CLI

Install SubQuery CLI globally on your terminal by using NPM:

```
npm install -g @subql/cli
```

Now go inside the project using
```
cd kusama-indexing
```

Last, under the project directory, run following command to install all the dependency.
```
yarn install
```
## Build the project

In order to deploy your SubQuery project to our hosted service, it is mandatory to pack your configuration before upload.
Run pack command from root directory of your project will automatically generate a `your-project-name.tgz` file.

```
yarn build
```

## Indexing and Query

#### Run required systems in docker


Under the project directory run following command:

```
docker-compose pull && docker-compose up
```
#### Query the project

Open your browser and head to `http://localhost:3000`.

Finally, you should see a GraphQL playground is showing in the explorer and the schemas that ready to query.

For the `subql-starter` project, you can try to query with the following code to get a taste of how it works.

````graphql
{
  query{
    starterEntities(first: 10, orderBy: NUMBER_VOTED_NO_DESC){
      nodes {
      id
      account
      voted
      numberVotedNo
      numberVotedYes
      }
    }
  }
}
````

#### Querying in SubQuery explorer
You can also query the deployed version to play with the project using the link below
```
https://explorer.subquery.network/subquery/mshankarrao/kusama-indexing?stage=true
```
