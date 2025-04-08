# Configuration Guide

CrestReferrals provides comprehensive configuration options to customize the plugin to your server's needs.

## Configuration Files

The plugin creates five configuration files when first started:

1. `config.yml` - Main configuration settings
2. `messages.yml` - Customizable messages
3. `milestones.yml` - Milestone rewards configuration
4. `leaderboard.yml` - Leaderboard GUI configuration
5. `webhook.yml` - Discord webhook configuration

## config.yml

This file contains the main plugin configuration settings.

```yaml
# The amount of time the player has to add a referral. (in minutes)
referralTime: 30

# Checks if both of the players have the same IP, avoiding abuse.
# Note: This feature may not work when using a proxy.
ipCheck: true

# The commands that run when the person that got referred adds a referral.
referredCommands:
  - "give %player% diamond 1"

# The commands that run when the person that referred the other player, gets a referral.
referrerCommands:
  - "give %player% emerald 1"

# Whether referral codes are enabled
enableReferralCodes: true

# Maximum number of referrals to display in leaderboard (-1 for all)
maxReferralsInLeaderboard: 100
```

### Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `referralTime` | Time window in minutes that players have to add a referral after first join | `30` |
| `ipCheck` | Check if players have the same IP (prevents abuse) | `true` |
| `referredCommands` | Commands to execute for the player who was referred | `["give %player% diamond 1"]` |
| `referrerCommands` | Commands to execute for the player who referred someone | `["give %player% emerald 1"]` |
| `enableReferralCodes` | Whether players can use personal referral codes | `true` |
| `maxReferralsInLeaderboard` | Maximum number of referrals to display (-1 for unlimited) | `100` |

## messages.yml

This file contains all the messages that the plugin sends to players.

```yaml
reload: "<#D643FF><bold>CrestReferrals</bold> <dark_gray>» <gray>Plugin reloaded."
timePassed: "<#D643FF><bold>CrestReferrals</bold> <dark_gray>» <gray>The time limit has passed to add a referral."
invalidPlayer: "<#D643FF><bold>CrestReferrals</bold> <dark_gray>» <gray>That player does not exist."
unknownError: "<#D643FF><bold>CrestReferrals</bold> <dark_gray>» <gray>An unknown error has happened, please contact a staff member."
sameIPAddress: "<#D643FF><bold>CrestReferrals</bold> <dark_gray>» <gray>You cannot add a referral to a player that has the same IP address as you. If you believe this is a mistake contact a staff member."
invalidData: "<#D643FF><bold>CrestReferrals</bold> <dark_gray>» <gray>Unable to find information on that player."
addedReferral: "<#D643FF><bold>CrestReferrals</bold> <dark_gray>» <gray>You have added a referral to {player}."
receivedReferral: "<#D643FF><bold>CrestReferrals</bold> <dark_gray>» <gray>You have received {amount} referral(s)."
cannotReferYourself: "<#D643FF><bold>CrestReferrals</bold> <dark_gray>» <gray>You cannot refer yourself."
# ...more messages...
```

### Available Placeholders

| Message | Available Placeholders |
|---------|-------------------------|
| `addedReferral` | `{player}` - The player's name who was referred |
| `receivedReferral` | `{amount}` - The number of referrals received |
| `playerInformation` | `{referrals}` - Number of referrals, `{referrer}` - Player's referrer, `{code}` - Referral code |

### Message Formatting

Messages support color and formatting codes:
- Hex color codes (e.g., `<#D643FF>`)
- MiniMessage formatting codes (e.g., `<bold>`, `<italic>`)
- Standard color codes (e.g., `<gray>`, `<dark_gray>`)

## milestones.yml

This file configures milestone rewards for players who reach certain numbers of referrals.

```yaml
milestones:
  5:
    rewards:
      - "give %player% diamond 5"
      - "eco give %player% 500"
    message: "<#D643FF><bold>CrestReferrals</bold> <dark_gray>» <gray>You've reached the milestone of 5 referrals! You've received 5 diamonds and $500."
    broadcast: true
    broadcastMessage: "<#D643FF><bold>CrestReferrals</bold> <dark_gray>» <#B3FF5A>{player} <gray>has reached <#B3FF5A>5 referrals<gray>!"
  # More milestones...
```

### Milestone Configuration

Each milestone has the following options:

| Option | Description |
|--------|-------------|
| `rewards` | List of commands to execute when the milestone is reached |
| `message` | Message to send to the player who reached the milestone |
| `broadcast` | Whether to broadcast when a player reaches this milestone |
| `broadcastMessage` | The message to broadcast (if broadcast is true) |

## leaderboard.yml

This file configures the leaderboard GUI.

```yaml
# Title of the leaderboard GUI
guiTitle: "Referral Leaderboard"

# Number of rows in the GUI (3-6)
rows: 4

# Number of entries per page
entriesPerPage: 21

# Background item material
backgroundMaterial: "BLACK_STAINED_GLASS_PANE"

# Material for leaderboard entry items
entryMaterial: "PLAYER_HEAD"

# Display formats
entryNameFormat: "<white>#{position} <#B3FF5A>{player_name}"
entryLoreFormat: "<white>{referrals} referrals"
# ...more settings...
```

## webhook.yml

This file configures Discord webhook notifications.

```yaml
# Whether to enable Discord webhook notifications
enabled: false

# Discord webhook URL
url: "https://discord.com/api/webhooks/your-webhook-url"

# Whether to use embed message (true) or regular message (false)
useEmbed: true

# Enable webhook for referral added events
referralAddedEnabled: true

# Enable webhook for milestone reached events
milestoneReachedEnabled: true

# Embed configurations
embed:
  referralColor: "5865F2"
  milestoneColor: "E67E22"
  # ...more embed settings...
```

## PlaceholderAPI Integration

If PlaceholderAPI is installed, the plugin provides the following placeholders:

| Placeholder | Description |
|-------------|-------------|
| `%referrals_count%` | The number of referrals a player has |
| `%referrals_referrer%` | The name of the player who referred this player |
| `%referrals_code%` | The player's referral code |
| `%referrals_referred_players%` | The number of players this player has referred |
| `%referrals_has_referrer%` | Whether the player was referred (true/false) |
| `%referrals_position%` | The player's position in the leaderboard |
