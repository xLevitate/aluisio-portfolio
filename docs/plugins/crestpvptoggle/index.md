# CrestPvPToggle

CrestPvPToggle is a lightweight and powerful plugin that allows players to toggle their PvP status on or off. This gives players control over whether they want to participate in player versus player combat.

## Features

- **Simple PvP Toggle**: Players can easily enable or disable PvP with a simple command
- **Combat Timer**: Players who are in combat cannot disable PvP for 60 seconds
- **World Restriction**: Server administrators can specify worlds where PvP toggling is not allowed
- **API Support**: Full API for developers to integrate with the PvP toggle system
- **Permissions-Based**: Command access is controlled through configurable permissions
- **Configurable Messages**: All messages can be customized in the configuration

## How It Works

When a player has PvP disabled, they cannot deal damage to other players, nor can they be damaged by players who have PvP enabled. This creates a safe environment for players who don't want to engage in PvP combat.

The plugin includes a combat timer to prevent players from toggling PvP mid-fight. Once a player enters combat (by attacking or being attacked by another player), they cannot disable PvP for 60 seconds.

## Default Behavior

- PvP is enabled by default for all players
- Players in combat cannot toggle PvP for 60 seconds
- PvP toggle can be restricted in specific worlds (configured in `config.yml`)
