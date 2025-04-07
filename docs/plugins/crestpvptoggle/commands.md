# Commands and Permissions

CrestPvPToggle uses a simple command structure to manage PvP toggling.

## Commands

| Command | Description | Permission |
|---------|-------------|------------|
| `/pvptoggle` or `/togglepvp` | Shows your current PvP status | `crestpvptoggle.use` |
| `/pvptoggle toggle` | Toggles your PvP status on or off | `crestpvptoggle.use` |
| `/pvptoggle reload` | Reloads the plugin configuration | `crestpvptoggle.reload` |

## Notes

- `/pvptoggle toggle` will fail if:
- The player is in combat (last 60 seconds)
- The player is in a world where PvP toggling is disabled

## Permission Nodes

| Permission | Description |
|------------|-------------|
| `crestpvptoggle.use` | Allows basic usage of the plugin |
| `crestpvptoggle.reload` | Allows reloading the plugin configuration |
