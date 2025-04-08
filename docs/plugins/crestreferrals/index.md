# CrestReferrals

CrestReferrals is a lightweight and powerful plugin that allows players to refer others who invited them to your server, with both parties earning rewards in the process.

## Features

- **Time-Limited Referrals**: New players have a configurable time window to submit their referral
- **Referral Codes**: Players can use either usernames or unique referral codes to refer others
- **Milestone Rewards**: Players earn special rewards as they reach referral milestones
- **Leaderboard System**: A GUI-based, paginated leaderboard showing top referrers
- **IP Verification**: Optional IP checking to prevent self-referrals and system abuse
- **PlaceholderAPI Integration**: Display referral statistics on scoreboards, holograms, or other plugins
- **Discord Webhooks**: Send notifications to Discord when referrals occur or milestones are reached
- **Developer API**: Events and API for other plugins to integrate with
- **Configurable Rewards**: Define exactly what players receive for referrals

## How It Works

When a new player joins, they have a configurable time window to submit who referred them. Players can add a referral using either the referrer's username or their unique referral code.

Upon adding a referral, both the referrer and the referred player receive rewards as configured in the settings.

As referrers accumulate referrals, they unlock special milestone rewards that can be customized in the configuration.

Players can view the top referrers on the server via an intuitive leaderboard GUI, and server administrators can track referral activity through optional Discord webhook notifications.

## Default Behavior

- New players have 30 minutes (configurable) to add a referral after first joining
- IP checking is enabled by default to prevent abuse
- Referral codes are enabled by default
- Both referrers and referred players receive rewards when a referral is added
- Milestone rewards are available at 5, 10, 25, 50, and 100 referrals (configurable)
