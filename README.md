# bluesky-emoji-bot

This is a simple bot that posts a few lines of emojis to represent what's happening in the big blue sky. Here's an example of a post:

![](images/output_screenshot.jpeg)

# Installation

This is a Typescript project. Install necessary packages with `npm install`.

To run this bot locally, create a `.env` file to set your username and password. Use the `.env.example` file as a guide.

Compile your Typescript `index.ts` file with `tsc -p .`. To run `index.js`, use `npm run start` or `node index.js`.

The main function `printRandomEmojis()` will run once and the script will kick off a cron job that runs every three hours. You can adjust the frequency.

## Credit

Thank you to [aliceisjustplaying](https://github.com/aliceisjustplaying) for the [helpful template](https://github.com/aliceisjustplaying/atproto-starter-kit/)! 

Read Bluesky's documentation [here](https://github.com/bluesky-social/atproto/tree/main/packages/api).