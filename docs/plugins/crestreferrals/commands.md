# Commands and Permissions

CrestReferrals uses a simple command structure to manage the referral system.

## Commands

| Command | Description | Permission |
|---------|-------------|------------|
| `/crestreferrals` or `/referrals` or `/referral` | Shows help message | `crestreferrals.use` |
| `/referral <player/code>` | Add a referral using a player name or referral code | `crestreferrals.use` |
| `/referral info [player]` | View your referral information or another player's | `crestreferrals.use` |
| `/referral code` | View your referral code | `crestreferrals.use` |
| `/referral code <code>` | Set your referral code to a custom code | `crestreferrals.use` |
| `/referral leaderboard` or `/referral top` | View the referral leaderboard | `crestreferrals.leaderboard` |
| `/referral reload` | Reloads the plugin configuration | `crestreferrals.reload` |

## Notes

- `/referral <player/code>` will fail if:
  - The time limit has passed (default: 30 minutes after first join)
  - The player tries to refer themselves
  - The player and the referrer have the same IP address (if IP checking is enabled)
  - The player has already added a referral

## Permission Nodes

| Permission | Description |
|------------|-------------|
| `crestreferrals.use` | Allows basic usage of the plugin |
| `crestreferrals.leaderboard` | Allows access to the referral leaderboard |
| `crestreferrals.reload` | Allows reloading the plugin configuration |

## Command Aliases

The main command has several aliases for convenience:
- `/crestreferrals`
- `/referrals`
- `/referral`

Players can use any of these interchangeably.
