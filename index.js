import bsky from '@atproto/api';
const { BskyAgent } = bsky;
import * as dotenv from 'dotenv';
import { CronJob } from 'cron';
import * as process from 'process';
dotenv.config();
const port = process.env.PORT || "8080";
// Create a Bluesky Agent 
const agent = new BskyAgent({
    service: 'https://bsky.social',
});
await agent.login({
    identifier: process.env.BLUESKY_USERNAME,
    password: process.env.BLUESKY_PASSWORD,
});
// Define emoji arrays
const MOON_EMOJI = ['🌕', '🌖', '🌗', '🌘', '🌒', '🌓', '🌙', '🌜', '🌝', '🌚'];
const SUN_EMOJI = ['🌞', '🌅', '🌄', '🌇', '⛅️', '🌤️', '🌥️', '🌦️'];
const STORM_EMOJI = ['🌧️', '🌨️', '⛈️', '🌩️', '🌪️'];
const BIRD_EMOJI = ['🦅', '🕊️', '🦆', '🦜', '🐥', '🦉'];
const FLORA_EMOJI = ['🌱', '🌷', '🌻', '🍀', '🌹', '🌴', '🌱', '🌵', '🌳', '🍄', '🌾', '🎋'];
// Function to get random emoji from an array
function getRandomEmoji(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
// Function to print random emojis in random positions
function printRandomEmojis() {
    console.log("Running printRandomEmojis...");
    const moonOrSun = Math.random() < 0.5 ? MOON_EMOJI : SUN_EMOJI;
    const emojiArrays = [moonOrSun, STORM_EMOJI, BIRD_EMOJI];
    const emojis = emojiArrays.map((arr) => getRandomEmoji(arr));
    // Add two random flora emojis to the last line
    const flora1 = getRandomEmoji(FLORA_EMOJI);
    let flora2 = getRandomEmoji(FLORA_EMOJI);
    // Ensure the flora emojis are distinct
    while (flora1 === flora2) {
        flora2 = getRandomEmoji(FLORA_EMOJI);
    }
    // Generate random positions and repetitions for the flora emojis
    const positions = [0, 1, 2, 3].map(() => Math.floor(Math.random() * 15)).sort((a, b) => a - b);
    const repetitions = [Math.floor(Math.random() * 3) + 1, Math.floor(Math.random() * 3) + 1];
    const floraLine = positions.map((position, index) => {
        const emoji = index < repetitions[0] ? flora1 : flora2;
        return ' '.repeat(position) + emoji;
    }).join('');
    let result = '';
    emojis.forEach((emoji, index) => {
        const randomPosition = Math.floor(Math.random() * 15);
        result += ' '.repeat(randomPosition) + emoji;
        if (index < emojis.length - 1) {
            result += '\n';
        }
    });
    result += '\n' + floraLine;
    console.log(result);
    postEmojisToBluesky(result);
    return result;
}
async function postEmojisToBluesky(emojiString) {
    const response = await agent.post({
        text: emojiString
    });
}
printRandomEmojis();
// Run this on a cron job
const scheduleExpressionMinute = '* * * * *'; // Run once every minute for testing
const scheduleExpressionHourly = '0 * * * *';
const job = new CronJob(scheduleExpressionMinute, printRandomEmojis);
job.start();
