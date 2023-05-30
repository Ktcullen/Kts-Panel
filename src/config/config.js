import {dashboardData} from "./dashboard-data";
import {KillKane} from "./features/kill-kane";
import {KillKaneAction} from "./actions/Killkane";

/**
 * @type ConfigType
 */
export const config = {
    name: "DiscordShield",
    footer: [
        {
            name: {zh: "支持", en: "Support"},
            url: "https://github.com/SonMooSans"
        }
    ],
    settings: detail => [
        {
            id: "say",
            name: "Test",
            type: "string",
            value: detail["say"]
        }
    ],
    actions: {
        "kill_kane": KillKaneAction
    },
    features: {
        "auto_kill_kane": KillKane
    },
    tutorialUrl: "https://github.com/SonMooSans/discord-bot-dashboard",
    serverUrl: "http://localhost:8080",
    inviteUrl: "https://discord.com/api/oauth2/authorize?client_id=1112899579675951145&permissions=8&redirect_uri=http%3A%2F%2Flocalhost%3A8080&response_type=code&scope=bot",
    data: {
        dashboard: dashboardData,
    },
}