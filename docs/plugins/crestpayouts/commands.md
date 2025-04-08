# Commands and Permissions

CrestPayouts uses a simple command structure to manage the payout system.

## Commands

| Command | Description | Permission |
|---------|-------------|------------|
| `/crestpayouts` or `/payouts` | Shows information about available payout types | `crestpayouts.use` |
| `/payouts trigger <type>` | Manually triggers a specified payout | `crestpayouts.admin` |
| `/payouts reload` | Reloads the plugin configuration | `crestpayouts.admin` |

## Notes

- When using `/payouts trigger <type>`, the `<type>` parameter refers to the ID of the payout type as defined in `payouts.yml` (e.g., `balance_top` or `kills_top`).
- When triggered manually, a payout will process immediately and then reschedule for its next regular execution time.
- The `/payouts` command shows all available payout types and their display names to help players understand what metrics are being rewarded.

## Permission Nodes

| Permission | Description |
|------------|-------------|
| `crestpayouts.use` | Allows basic usage of the plugin (viewing payout information) |
| `crestpayouts.admin` | Allows administrative actions like manually triggering payouts and reloading the configuration |

## Command Aliases

The main command has several aliases for convenience:
- `/crestpayouts`
- `/payouts`

Players can use either of these interchangeably.

## Command Examples

### Check available payout types
```
/payouts
```
This command shows all configured payout types, displaying:
```
CrestPayouts - Available payout types:
balance_top - Balance Top
kills_top - Kills Top
```

### Manually trigger a payout
```
/payouts trigger balance_top
```
This command will immediately execute the "Balance Top" payout, distributing rewards to the top players.

### Reload the configuration
```
/payouts reload
```
This command reloads all configuration files, allowing you to make changes without restarting the server.
