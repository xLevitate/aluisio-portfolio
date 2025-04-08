# Configuration Guide

CrestPayouts provides extensive configuration options to customize the plugin to your server's needs.

## Configuration Files

The plugin creates four configuration files when first started:

1. `config.yml` - Main configuration settings
2. `messages.yml` - Customizable messages
3. `payouts.yml` - Payout type configurations and rewards
4. `webhook.yml` - Discord webhook configuration

## config.yml

This file contains the main plugin configuration settings.

```yaml
# Debug mode - enables additional logging
debug: false

# Whether to broadcast payout results to all online players
broadcastPayouts: true

# Whether to save stats for offline players
saveOfflineStats: true

# How often to save stats (in seconds)
saveInterval: 600
```

### Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `debug` | Enables detailed logging for troubleshooting | `false` |
| `broadcastPayouts` | Whether to broadcast payout results to all online players | `true` |
| `saveOfflineStats` | Whether to save statistics for offline players | `true` |
| `saveInterval` | How often to save statistics data (in seconds) | `600` |

## messages.yml

This file contains all the messages that the plugin sends to players.

```yaml
reload: "<#D643FF><bold>CrestPayouts</bold> <dark_gray>» <gray>Plugin reloaded."
invalidPayoutType: "<#D643FF><bold>CrestPayouts</bold> <dark_gray>» <gray>Invalid payout type: {payout_type}"
payoutTriggered: "<#D643FF><bold>CrestPayouts</bold> <dark_gray>» <gray>Manually triggered payout for {payout_type}."
payoutError: "<#D643FF><bold>CrestPayouts</bold> <dark_gray>» <gray>An error occurred while executing payout for {payout_type}."
noPayoutsConfigured: "<#D643FF><bold>CrestPayouts</bold> <dark_gray>» <gray>No payouts have been configured yet."
availablePayoutTypes: "<#D643FF><bold>CrestPayouts</bold> <gray>- <white>Available payout types:"
payoutTypeEntry: "<#B3FF5A>{payout_id} <gray>- <white>{payout_name}"
adminReloadCommand: "<gray>Use <white>/payouts reload <gray>to reload the configuration"
adminTriggerCommand: "<gray>Use <white>/payouts trigger <type> <gray>to manually trigger a payout"
```

### Available Placeholders

| Message | Available Placeholders |
|---------|-------------------------|
| `invalidPayoutType` | `{payout_type}` - The invalid payout type ID |
| `payoutTriggered` | `{payout_type}` - The display name of the triggered payout |
| `payoutError` | `{payout_type}` - The payout type ID that caused the error |
| `payoutTypeEntry` | `{payout_id}` - The payout type ID, `{payout_name}` - The display name |

### Message Formatting

Messages support color and formatting codes:
- Hex color codes (e.g., `<#D643FF>`)
- MiniMessage formatting codes (e.g., `<bold>`, `<italic>`)
- Standard color codes (e.g., `<gray>`, `<dark_gray>`)

## payouts.yml

This file configures different payout types, their schedules, and rewards.

```yaml
payouts:
  balance_top:
    displayName: "Balance Top"
    placeholder: "vault_eco_balance"
    showValues: true
    intervalType: "WEEKLY"
    dayOfWeek: 1
    dayOfMonth: 1
    hourOfDay: 12
    minuteOfHour: 0
    rewards:
      1:
        commands:
          - "eco give %player% 1000"
        onlyWhenOnline: false
        message: "Congratulations! You ranked #1 in {payout_name} and received $1000!"
        rewardSummary: "$1000"
      2:
        commands:
          - "eco give %player% 500"
        onlyWhenOnline: false
        message: "Congratulations! You ranked #2 in {payout_name} and received $500!"
        rewardSummary: "$500"
      3:
        commands:
          - "eco give %player% 250"
        onlyWhenOnline: false
        message: "Congratulations! You ranked #3 in {payout_name} and received $250!"
        rewardSummary: "$250"
  kills_top:
    # Similar configuration for kills top payout
    # ...

broadcast:
  enabled: true
  header:
    - "<dark_gray>━━━━━━━━━━━ <#D643FF><bold>PAYOUT RESULTS</bold> <dark_gray>━━━━━━━━━━━"
    - "<white>The <gradient:#B3FF5A:#82D91C>{payout_name}</gradient> payout has been distributed!"
  winnerFormat: "<white>#{rank} <#B3FF5A>{player_name} <dark_gray>- <white>{reward_summary}"
  footer:
    - "<dark_gray>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  maxWinners: 5
```

### Payout Configuration Options

| Option | Description | Values |
|--------|-------------|--------|
| `displayName` | User-friendly name for the payout | Any string |
| `placeholder` | The PlaceholderAPI placeholder to track (without % symbols) | Any valid PlaceholderAPI placeholder |
| `showValues` | Whether to show values in broadcasts and leaderboards | `true` or `false` |
| `intervalType` | How often to execute the payout | `DAILY`, `WEEKLY`, or `MONTHLY` |
| `dayOfWeek` | Day of week for weekly payouts | 1-7 (1 = Monday) |
| `dayOfMonth` | Day of month for monthly payouts | 1-31 |
| `hourOfDay` | Hour of day to execute payout | 0-23 |
| `minuteOfHour` | Minute of hour to execute payout | 0-59 |

### Reward Configuration Options

For each reward rank (1, 2, 3, etc.):

| Option | Description | Values |
|--------|-------------|--------|
| `commands` | Commands to execute as rewards | List of command strings |
| `onlyWhenOnline` | Whether to only give rewards when player is online | `true` or `false` |
| `message` | Message to send to the player | String with placeholders |
| `rewardSummary` | Short summary for broadcasts | Any string |

### Broadcast Configuration Options

| Option | Description | Values |
|--------|-------------|--------|
| `enabled` | Whether to broadcast payout results | `true` or `false` |
| `header` | Header message(s) for broadcasts | List of strings |
| `winnerFormat` | Format for displaying each winner | String with placeholders |
| `footer` | Footer message(s) for broadcasts | List of strings |
| `maxWinners` | Maximum number of winners to include | Integer |

### Payout Interval Types

- **DAILY**: Executes once per day at the specified hour and minute
- **WEEKLY**: Executes once per week on the specified day of week, hour, and minute
- **MONTHLY**: Executes once per month on the specified day of month, hour, and minute

## webhook.yml

This file configures Discord webhook notifications.

```yaml
# Whether to enable Discord webhook notifications
enabled: false

# Discord webhook URL
url: "https://discord.com/api/webhooks/your-webhook-url"

# Whether to use embed message (true) or regular message (false)
useEmbed: true

# Configuration for embed messages (only used if useEmbed is true)
embed:
  color: "5865F2"
  title: "{payout_name} Payout Results"
  description:
    - "The weekly {payout_name} payout has been distributed!"
    - "Congratulations to all the winners!"
  authorName: "CrestPayouts"
  authorIconUrl: ""
  thumbnailUrl: ""
  addTimestamp: true
  footerText: "Next payout: {next_payout_time}"
  footerIconUrl: ""
  winnerFormat:
    title: "#{rank}: {player_name}"
    value:
      - "**Score:** {value}"
      - "**Reward:** {reward_summary}"
    inline: true
    maxWinners: 5

# Configuration for regular messages (only used if useEmbed is false)
regularMessage:
  header:
    - "**🏆 {payout_name} Payout Results 🏆**"
    - ""
    - "The following players have received rewards:"
  winnerFormat: "**#{rank}** {player_name} - {value} → {reward_summary}"
  footer:
    - ""
    - "Next payout: {next_payout_time}"
  maxWinners: 5
```

### Webhook Configuration Options

| Option | Description | Values |
|--------|-------------|--------|
| `enabled` | Whether to enable webhook notifications | `true` or `false` |
| `url` | Discord webhook URL | Valid Discord webhook URL |
| `useEmbed` | Whether to use embed messages (rich format) | `true` or `false` |

### Embed Configuration Options

| Option | Description | Values |
|--------|-------------|--------|
| `color` | Color for the embed sidebar | Hex color code without # |
| `title` | Title of the embed | String with placeholders |
| `description` | Description text | List of strings with placeholders |
| `authorName` | Name shown in the author field | Any string |
| `authorIconUrl` | URL to an icon for the author | Valid image URL |
| `thumbnailUrl` | URL to a thumbnail image | Valid image URL |
| `addTimestamp` | Whether to add a timestamp | `true` or `false` |
| `footerText` | Text for the footer | String with placeholders |
| `footerIconUrl` | URL to an icon for the footer | Valid image URL |

### Winner Format Options (Embed)

| Option | Description | Values |
|--------|-------------|--------|
| `title` | Format for the field title | String with placeholders |
| `value` | Format for the field value | List of strings with placeholders |
| `inline` | Whether fields should be inline | `true` or `false` |
| `maxWinners` | Maximum number of winners to include | Integer |

### Regular Message Configuration Options

| Option | Description | Values |
|--------|-------------|--------|
| `header` | Header message(s) | List of strings with placeholders |
| `winnerFormat` | Format for displaying each winner | String with placeholders |
| `footer` | Footer message(s) | List of strings with placeholders |
| `maxWinners` | Maximum number of winners to include | Integer |

### Available Placeholders in Webhook Messages

| Placeholder | Description |
|-------------|-------------|
| `{payout_name}` | The display name of the payout |
| `{rank}` | The player's rank |
| `{player_name}` | The player's name |
| `{value}` | The player's value for the measured statistic |
| `{reward_summary}` | Short summary of the reward |
| `{next_payout_time}` | The time of the next scheduled payout |
