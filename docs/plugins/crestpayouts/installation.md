# Installation

Follow these steps to install CrestPayouts on your Minecraft server.

## Requirements
- Minecraft version: 1.13+ (Recommended 1.19+)
- Server type: Paper, Pufferfish, Purpur (May also work on other forks of Paper)
- Required Dependencies: PlaceholderAPI (for tracking statistics)

## Installation Steps

1. Download the latest version of CrestPayouts from [SpigotMC](https://www.spigotmc.org) or [BuiltByBit](https://www.builtbybit.com)
2. Download and install [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) if you don't already have it
3. Place both .jar files in your server's `plugins` folder
4. Restart your server or use a plugin manager to load the plugins
5. The plugin will automatically create its configuration files

## First Run Setup

Upon first run, the plugin will create the following configuration files:

- `config.yml` - Main configuration settings
- `messages.yml` - Customizable messages
- `payouts.yml` - Payout type configurations and rewards
- `webhook.yml` - Discord webhook configuration
- `stats.json` - Player statistics storage (do not edit manually)
- `pending.json` - Pending rewards storage (do not edit manually)

## Plugin Dependencies

### Required Dependencies
- **PlaceholderAPI**: Essential for tracking statistics across your server.

### Optional Integrations
The plugin can work with any placeholder provided by PlaceholderAPI expansion plugins. Here are some useful ones:

- **Vault**: For economy-based rewards and tracking balance
- **PlayerPoints**: For points-based statistics
- **TokenManager**: For token-based statistics
- **Stats**: For detailed gameplay statistics

## Post-Installation Verification

After installation, verify the plugin is working correctly:

1. Check your server console for any error messages from CrestPayouts
2. Run the command `/payouts` to see available payout types
3. Check that the default configuration files have been created in your plugins/CrestPayouts folder

Your CrestPayouts plugin should now be installed and ready to use on your server. You can proceed to configure payout types and rewards to match your server's needs.
