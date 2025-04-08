# CrestPayouts

CrestPayouts is a powerful and flexible plugin that allows server owners to set up automated payouts for top-performing players based on various statistics tracked through PlaceholderAPI.

## Features

- **Flexible Scheduling**: Configure payouts to occur daily, weekly, or monthly
- **PlaceholderAPI Integration**: Track any metric available through PlaceholderAPI
- **Multiple Payout Types**: Run different payout categories simultaneously (e.g., top balance, top kills)
- **Customizable Rewards**: Define commands to be executed for each rank
- **Discord Webhook Support**: Send detailed and customizable notifications to Discord
- **In-Game Broadcasts**: Announce payout results to all online players
- **Offline Player Support**: Store rewards for players who are offline during the payout
- **Performance Optimized**: Designed to work efficiently even on large servers

## How It Works

The plugin schedules and automates payouts for your server's top-performing players:

1. When a player joins or leaves the server, their statistics for configured placeholders are saved
2. The plugin periodically checks if a scheduled payout should trigger
3. When a payout is triggered, the plugin:
   - Gets the latest statistics for online players
   - Builds a leaderboard using stored statistics
   - Executes reward commands for top-ranked players
   - Stores rewards for offline players
   - Broadcasts results to all online players (if enabled)
   - Sends a webhook notification to Discord (if enabled)
4. When a player joins, any pending rewards are distributed automatically

## Default Configuration

CrestPayouts comes with two default payout types:

- **Balance Top**: Rewards players with the highest account balances
  - Scheduled weekly
  - Rewards for top 3 positions

- **Kills Top**: Rewards players with the most player kills
  - Scheduled monthly
  - Rewards for top 3 positions

These default configurations can be customized or replaced entirely according to your server's needs.

## PlaceholderAPI Compatibility

CrestPayouts can track any numerical value provided by PlaceholderAPI. Some commonly used placeholders include:

- `%vault_eco_balance%` - Player's money balance
- `%statistic_player_kills%` - Player kill count
- `%statistic_mob_kills%` - Mob kill count
- `%playtime_days%` - Playtime in days
- `%tokens_tokens%` - TokenManager tokens
- `%playerpoints_points%` - PlayerPoints points
