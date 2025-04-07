# Configuration Guide

CrestPvPToggle provides simple configuration options to customize the plugin to your server's needs.

## Configuration Files

The plugin creates two configuration files when first started:

1. `config.yml` - Main configuration settings
2. `messages.yml` - Customizable messages

## config.yml

This file contains the main plugin configuration settings.

```yaml
# Worlds where PvP toggling is disabled
# Players in these worlds cannot toggle their PvP status
disabledWorlds:
- arena
```

### Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `disabledWorlds` | List of worlds where PvP toggling is disabled | `["arena"]` |

## messages.yml

This file contains all the messages that the plugin sends to players.

```yaml
reload: "<#D643FF><bold>CrestReferrals</bold> <dark_gray>» <gray>Plugin reloaded."
pvpIsDisabled: "<#D643FF><bold>CrestReferrals</bold> <dark_gray>» <gray>Either you or the target has pvp disabled. <gray>(/pvptoggle)"
toggleStatus: "<#D643FF><bold>CrestReferrals</bold> <dark_gray>» <gray>You currently have pvp {status}."
enabledPvP: "<#D643FF><bold>CrestReferrals</bold> <dark_gray>» <gray>You have enabled pvp."
disabledPvP: "<#D643FF><bold>CrestReferrals</bold> <dark_gray>» <gray>You have disabled pvp."
cannotEnableWorld: "<#D643FF><bold>CrestReferrals</bold> <dark_gray>» <gray>You cannot toggle pvp in this world."
cannotToggle: "<#D643FF><bold>CrestReferrals</bold> <dark_gray>» <gray>You cannot toggle pvp while in combat."
```

### Available Placeholders

| Message | Available Placeholders |
|---------|-------------------------|
| `toggleStatus` | `{status}` - Current PvP status (enabled/disabled) |

### Message Formatting

Messages support color and formatting codes:
- Hex color codes (e.g., `<#D643FF>`)
- Minecraft formatting codes (e.g., `<bold>`, `<italic>`)
- Standard color codes (e.g., `<gray>`, `<dark_gray>`)

## Combat Timer

The plugin includes a combat timer that prevents players from toggling PvP while in combat:

- Combat timer duration: 60 seconds
- Combat is triggered when a player attacks or is attacked by another player
- Players will be notified if they try to toggle PvP while in combat
