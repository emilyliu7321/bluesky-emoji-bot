# How to make your own bot on Bluesky

This tutorial will use Bluesky's official protocol implementation [atproto](https://www.npmjs.com/package/@atproto/api) in Typescript, but other implementations are listed [here](https://github.com/bluesky-social/atproto-ecosystem).

Steps:

1. Pick a username and create an account for your bot. For this emoji bot, I created an account with the handle `skies.bsky.social`. 
2. Clone this repo and run `npm install`. set your username and password in a `.env` file in the root directory. If you don't have Typescript installed, run `npm install -g typescript`. You can read more about Typescript [here](https://www.typescriptlang.org/download). 
3. You'll be working mostly in the `index.ts` file. Think of this file as a script that your bot will constantly be running. For this emoji bot, I used a cron job to run the main function every three hours.
4. To test this script locally, compile your Typescript with `tsc -p .` and run with `node index.js`. 
5. Once the output of your bot looks good to you, you're ready to deploy it! You can use services like Heroku or Fly.io – I'll provide basic instructions for both and link out to their own docs. , and for Fly.io [here](https://fly.io/docs/apps/launch/). 
- Heroku: This repo includes a Procfile already. Push your code to a Github repo and follow [these instructions](https://devcenter.heroku.com/articles/github-integration) to deploy.
- Fly.io: You can deploy your project directly from your Terminal with these [steps](https://fly.io/docs/reference/fly-launch/), which will handle making the Dockerfile for you.
