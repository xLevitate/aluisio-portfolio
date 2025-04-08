# Developer API

CrestPayouts provides a comprehensive API that allows developers to interact with the payout system. This enables you to trigger payouts programmatically, access player statistics, and integrate with the plugin's functionality.

## Adding as a Dependency

To use the CrestPayouts API in your plugin, you need to add the plugin JAR to your development environment:

### Manual JAR Dependency

1. Download the CrestPayouts.jar
2. Add it to your project's libraries

#### For Maven:
```xml
<dependencies>
    <dependency>
        <groupId>me.levitate</groupId>
        <artifactId>CrestPayouts</artifactId>
        <version>1.0.0</version>
        <scope>system</scope>
        <systemPath>${project.basedir}/libs/CrestPayouts.jar</systemPath>
    </dependency>
</dependencies>
```

#### For Gradle:
```kotlin
dependencies {
    compileOnly(files("libs/CrestPayouts.jar"))
}
```

### Server Setup
Make sure CrestPayouts is installed on your server and loaded before your plugin. Add it to your plugin.yml dependencies:

```yaml
depend: [CrestPayouts]
# or for soft dependency
softdepend: [CrestPayouts]
```

## API Structure

The CrestPayouts API is divided into two main classes:

1. **CrestPayoutsAPI** - Main API class that provides access to core functionality
2. **PayoutAPI** - Specialized API for working directly with payouts

## Accessing the API

```java
import me.levitate.crestPayouts.api.CrestPayoutsAPI;
import me.levitate.crestPayouts.api.PayoutAPI;

public class YourPlugin extends JavaPlugin {
    
    @Override
    public void onEnable() {
        // Get the CrestPayoutsAPI instance
        CrestPayoutsAPI api = CrestPayoutsAPI.getInstance();
        
        // Or get the PayoutAPI for payout-specific operations
        PayoutAPI payoutAPI = api.getPayoutAPI();
        
        // Now you can use the API
    }
}
```

## Basic Examples

### Triggering a Payout

```java
import me.levitate.crestPayouts.api.CrestPayoutsAPI;
import me.levitate.crestPayouts.api.PayoutAPI;
import me.levitate.crestPayouts.api.models.PayoutResult;

public boolean triggerPayout(String payoutType) {
    // Get the API
    PayoutAPI payoutAPI = CrestPayoutsAPI.getInstance().getPayoutAPI();
    
    // Check if the payout type exists
    if (!payoutAPI.isValidPayoutType(payoutType)) {
        return false;
    }
    
    // Execute the payout
    PayoutResult result = payoutAPI.executePayout(payoutType);
    
    return result.isSuccess();
}
```

### Asynchronous Payout Execution

```java
import me.levitate.crestPayouts.api.CrestPayoutsAPI;
import me.levitate.crestPayouts.api.PayoutAPI;
import me.levitate.crestPayouts.api.models.PayoutResult;

public void triggerPayoutAsync(String payoutType, Consumer<PayoutResult> callback) {
    // Get the API
    PayoutAPI payoutAPI = CrestPayoutsAPI.getInstance().getPayoutAPI();
    
    // Execute the payout asynchronously
    payoutAPI.executePayoutAsync(payoutType).thenAccept(result -> {
        if (result.isSuccess()) {
            getLogger().info("Payout executed successfully with " + 
                             result.getPlayerCount() + " winners");
        } else {
            getLogger().warning("Payout failed: " + result.getMessage());
        }
        
        // Call the callback with the result
        callback.accept(result);
    });
}
```

### Working with Player Statistics

```java
import me.levitate.crestPayouts.api.CrestPayoutsAPI;
import org.bukkit.entity.Player;

import java.util.Map;

public void showPlayerStats(Player player) {
    // Get the API
    CrestPayoutsAPI api = CrestPayoutsAPI.getInstance();
    
    // Get a specific statistic
    Double balance = api.getPlayerPlaceholderValue(player.getUniqueId(), "vault_eco_balance");
    if (balance != null) {
        player.sendMessage("Your current balance: $" + balance);
    }
    
    // Get all tracked statistics
    Map<String, Double> allStats = api.getPlayerStats(player.getUniqueId());
    player.sendMessage("Your tracked statistics:");
    
    for (Map.Entry<String, Double> entry : allStats.entrySet()) {
        player.sendMessage(" - " + entry.getKey() + ": " + entry.getValue());
    }
}
```

### Modifying Player Statistics

```java
import me.levitate.crestPayouts.api.CrestPayoutsAPI;
import org.bukkit.entity.Player;

public void setCustomStatistic(Player player, String placeholder, double value) {
    // Get the API
    CrestPayoutsAPI api = CrestPayoutsAPI.getInstance();
    
    // Set the value
    api.setPlayerPlaceholderValue(player.getUniqueId(), placeholder, value);
    
    player.sendMessage("Your " + placeholder + " statistic has been set to " + value);
}
```

### Working with Leaderboards

```java
import me.levitate.crestPayouts.api.CrestPayoutsAPI;
import me.levitate.crestPayouts.models.LeaderboardEntry;
import org.bukkit.entity.Player;

import java.util.List;

public void showLeaderboard(Player player, String payoutType, int limit) {
    // Get the API
    CrestPayoutsAPI api = CrestPayoutsAPI.getInstance();
    
    // Get the leaderboard
    List<LeaderboardEntry> leaderboard = api.getLeaderboard(payoutType, limit);
    
    // Show the leaderboard to the player
    player.sendMessage("Top " + limit + " players for " + payoutType + ":");
    
    for (int i = 0; i < leaderboard.size(); i++) {
        LeaderboardEntry entry = leaderboard.get(i);
        player.sendMessage((i+1) + ". " + entry.playerName() + " - " + entry.value());
    }
}
```

### Getting Next Payout Time

```java
import me.levitate.crestPayouts.api.CrestPayoutsAPI;
import org.bukkit.entity.Player;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public void showNextPayoutTime(Player player, String payoutType) {
    // Get the API
    CrestPayoutsAPI api = CrestPayoutsAPI.getInstance();
    
    // Get the next payout time
    LocalDateTime nextTime = api.getNextPayoutTime(payoutType);
    
    if (nextTime != null) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMM dd, yyyy 'at' HH:mm");
        player.sendMessage("Next " + payoutType + " payout: " + nextTime.format(formatter));
    } else {
        player.sendMessage("No scheduled payout found for " + payoutType);
    }
}
```

### Handling Pending Rewards

```java
import me.levitate.crestPayouts.api.CrestPayoutsAPI;
import me.levitate.crestPayouts.api.PayoutAPI;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerJoinEvent;

public class RewardListener implements Listener {
    
    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent event) {
        Player player = event.getPlayer();
        
        // Get the API
        PayoutAPI payoutAPI = CrestPayoutsAPI.getInstance().getPayoutAPI();
        
        // Process any pending rewards for the player
        int rewardsGiven = payoutAPI.givePendingRewards(player);
        
        if (rewardsGiven > 0) {
            player.sendMessage("You received " + rewardsGiven + " pending rewards while you were offline!");
        }
    }
}
```

## Available API Methods

### CrestPayoutsAPI Methods

```java
// Get a player's value for a specific placeholder
Double getPlayerPlaceholderValue(UUID uuid, String placeholder);

// Set a player's value for a specific placeholder
void setPlayerPlaceholderValue(UUID uuid, String placeholder, double value);

// Get the player's current statistics for all tracked placeholders
Map<String, Double> getPlayerStats(UUID uuid);

// Get all payout types configured in the plugin
Map<String, PayoutsConfig.PayoutEntry> getConfiguredPayouts();

// Get the leaderboard for a specific payout type
List<LeaderboardEntry> getLeaderboard(String payoutType, int limit);

// Get the time of the next scheduled payout for a specific payout type
LocalDateTime getNextPayoutTime(String payoutType);

// Get the PayoutAPI instance
PayoutAPI getPayoutAPI();
```

### PayoutAPI Methods

```java
// Triggers a payout for a specific payout type
PayoutResult executePayout(String payoutType);

// Asynchronously triggers a payout for a specific payout type
CompletableFuture<PayoutResult> executePayoutAsync(String payoutType);

// Gives all pending rewards to a player
int givePendingRewards(Player player);

// Checks if a payout type exists
boolean isValidPayoutType(String payoutType);

// Schedules a one-time refresh of a player's stats after a delay
void scheduleStatsRefresh(Player player, long delayTicks);
```

## API Events

CrestPayouts provides several events that you can listen for in your plugin:

### PayoutEvent

Called before a payout is executed. This event is cancellable.

```java
import me.levitate.crestPayouts.api.events.PayoutEvent;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;

public class PayoutEventListener implements Listener {
    
    @EventHandler
    public void onPayout(PayoutEvent event) {
        // Get the payout type and display name
        String payoutType = event.getPayoutType();
        String displayName = event.getPayoutDisplayName();
        
        // Log the event
        getLogger().info("Payout triggered: " + displayName + " (" + payoutType + ")");
        
        // Optionally cancel the event
        if (shouldCancel(payoutType)) {
            event.setCancelled(true);
            getLogger().info("Cancelled payout: " + payoutType);
        }
    }
    
    private boolean shouldCancel(String payoutType) {
        // Your logic to determine if the payout should be cancelled
        return false;
    }
}
```

### PayoutLeaderboardGenerateEvent

Called when a leaderboard is generated for a payout. Allows modification of the leaderboard before rewards are processed.

```java
import me.levitate.crestPayouts.api.events.PayoutLeaderboardGenerateEvent;
import me.levitate.crestPayouts.models.LeaderboardEntry;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;

public class LeaderboardListener implements Listener {
    
    @EventHandler
    public void onLeaderboardGenerate(PayoutLeaderboardGenerateEvent event) {
        // Get the payout type
        String payoutType = event.getPayoutType();
        
        // Get the leaderboard
        List<LeaderboardEntry> leaderboard = event.getLeaderboard();
        
        // Modify the leaderboard
        // For example, add bonus points for VIP players
        for (int i = 0; i < leaderboard.size(); i++) {
            LeaderboardEntry entry = leaderboard.get(i);
            
            // Check if the player is a VIP and add bonus points
            if (isVipPlayer(entry.uuid())) {
                double newValue = entry.value() * 1.1; // 10% bonus
                LeaderboardEntry newEntry = new LeaderboardEntry(
                    entry.uuid(), 
                    entry.playerName(),
                    newValue
                );
                
                // Replace the entry with the modified one
                leaderboard.set(i, newEntry);
            }
        }
        
        // Update the leaderboard
        event.setLeaderboard(leaderboard);
    }
    
    private boolean isVipPlayer(UUID uuid) {
        // Your logic to check if a player is VIP
        return false;
    }
}
```

### PayoutRewardEvent

Called before a player receives a payout reward. This event is cancellable and allows modification of the reward.

```java
import me.levitate.crestPayouts.api.events.PayoutRewardEvent;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;

import java.util.List;
import java.util.UUID;

public class RewardListener implements Listener {
    
    @EventHandler
    public void onPayoutReward(PayoutRewardEvent event) {
        // Get event information
        String payoutType = event.getPayoutType();
        String displayName = event.getPayoutDisplayName();
        UUID playerUUID = event.getPlayerUUID();
        String playerName = event.getPlayerName();
        int rank = event.getRank();
        double value = event.getPlayerValue();
        String rewardSummary = event.getRewardSummary();
        
        // Get the reward commands (can be modified)
        List<String> commands = event.getCommands();
        
        // Example: Add an extra reward for first place
        if (rank == 1) {
            commands.add("broadcast &6" + playerName + " just received the #1 " + displayName + " reward!");
            commands.add("give " + playerName + " diamond 10");
        }
        
        // Example: Modify the message
        String message = event.getMessage();
        message = message + " &aYou ranked #" + rank + " out of all players!";
        event.setMessage(message);
        
        // Example: Cancel the reward for a specific player
        if (playerName.equals("BadPlayer")) {
            event.setCancelled(true);
        }
    }
}
```

## API Models

The CrestPayouts API includes several model classes that represent data structures used by the plugin:

### LeaderboardEntry

Represents an entry in a payout leaderboard.

```java
public class LeaderboardEntry {
    private final UUID uuid;         // Player UUID
    private final String playerName; // Player name
    private final double value;      // Player's value for the statistic
    
    // Methods (using Lombok @Accessors(fluent = true))
    public UUID uuid() { ... }
    public String playerName() { ... }
    public double value() { ... }
}
```

### PayoutResult

Represents the result of a payout operation.

```java
public class PayoutResult {
    private final boolean success;                  // Whether the payout was successful
    private final List<LeaderboardEntry> leaderboard; // The leaderboard for the payout
    private final String message;                   // A message describing the result
    
    // Methods
    public boolean isSuccess() { ... }
    public List<LeaderboardEntry> getLeaderboard() { ... }
    public String getMessage() { ... }
    public int getPlayerCount() { ... } // Number of players that received rewards
}
```

### PendingReward

Represents a reward that is pending delivery to a player.

```java
public class PendingReward {
    private String payoutType;         // The ID of the payout type
    private String payoutDisplayName;  // The display name of the payout
    private int rank;                  // The player's rank
    private List<String> commands;     // The commands to execute
    private String message;            // The message to send to the player
    
    // Methods (using Lombok @Accessors(fluent = true))
    public String payoutType() { ... }
    public String payoutDisplayName() { ... }
    public int rank() { ... }
    public List<String> commands() { ... }
    public String message() { ... }
}
```

### PlayerStats

Represents a player's statistics for tracked placeholders.

```java
public class PlayerStats {
    private long lastUpdate;                      // Last update timestamp
    private Map<String, Double> placeholderValues; // Map of placeholder to value
    
    // Methods (using Lombok @Accessors(fluent = true))
    public long lastUpdate() { ... }
    public Map<String, Double> placeholderValues() { ... }
}
```

## Best Practices

1. **Error Handling**: Always check for null values and handle exceptions when working with the API
2. **Asynchronous Operations**: Use asynchronous methods when possible to avoid blocking the main thread
3. **Resource Management**: Clean up any resources you create (like event listeners)
4. **Permission Checks**: Ensure players have appropriate permissions before using API methods
5. **Configuration Validation**: Validate any custom payout configurations you create

## Example Plugin Integration

Here's a complete example of a plugin that integrates with CrestPayouts:

```java
import me.levitate.crestPayouts.api.CrestPayoutsAPI;
import me.levitate.crestPayouts.api.PayoutAPI;
import me.levitate.crestPayouts.api.events.PayoutEvent;
import me.levitate.crestPayouts.api.models.PayoutResult;
import me.levitate.crestPayouts.models.LeaderboardEntry;
import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.plugin.java.JavaPlugin;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

public class MyPlugin extends JavaPlugin implements Listener {
    
    private CrestPayoutsAPI payoutsAPI;
    
    @Override
    public void onEnable() {
        // Check if CrestPayouts is available
        if (getServer().getPluginManager().getPlugin("CrestPayouts") == null) {
            getLogger().warning("CrestPayouts not found! Some features will be disabled.");
            return;
        }
        
        // Get the API
        this.payoutsAPI = CrestPayoutsAPI.getInstance();
        
        // Register event listener
        getServer().getPluginManager().registerEvents(this, this);
        
        getLogger().info("Successfully hooked into CrestPayouts API!");
    }
    
    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (label.equalsIgnoreCase("myplugin")) {
            if (!(sender instanceof Player)) {
                sender.sendMessage("This command can only be used by players.");
                return true;
            }
            
            Player player = (Player) sender;
            
            if (args.length == 0) {
                // Show help message
                sender.sendMessage("§6§lMyPlugin Commands:");
                sender.sendMessage("§e/myplugin stats §7- Show your payout statistics");
                sender.sendMessage("§e/myplugin leaderboard <type> §7- Show a leaderboard");
                sender.sendMessage("§e/myplugin next <type> §7- Show next payout time");
                return true;
            }
            
            // Handle command arguments
            switch (args[0].toLowerCase()) {
                case "stats":
                    showPlayerStats(player);
                    break;
                    
                case "leaderboard":
                    if (args.length < 2) {
                        player.sendMessage("§cUsage: /myplugin leaderboard <type>");
                        return true;
                    }
                    showLeaderboard(player, args[1]);
                    break;
                    
                case "next":
                    if (args.length < 2) {
                        player.sendMessage("§cUsage: /myplugin next <type>");
                        return true;
                    }
                    showNextPayout(player, args[1]);
                    break;
                    
                default:
                    player.sendMessage("§cUnknown command. Use /myplugin for help.");
            }
            
            return true;
        }
        
        return false;
    }
    
    private void showPlayerStats(Player player) {
        if (payoutsAPI == null) {
            player.sendMessage("§cCrestPayouts not available!");
            return;
        }
        
        player.sendMessage("§6§lYour Statistics:");
        
        payoutsAPI.getConfiguredPayouts().forEach((id, config) -> {
            Double value = payoutsAPI.getPlayerPlaceholderValue(player.getUniqueId(), config.placeholder);
            player.sendMessage("§e" + config.displayName + ": §f" + (value != null ? value : "Not tracked"));
        });
    }
    
    private void showLeaderboard(Player player, String payoutType) {
        if (payoutsAPI == null) {
            player.sendMessage("§cCrestPayouts not available!");
            return;
        }
        
        PayoutAPI payoutAPI = payoutsAPI.getPayoutAPI();
        
        if (!payoutAPI.isValidPayoutType(payoutType)) {
            player.sendMessage("§cInvalid payout type: " + payoutType);
            return;
        }
        
        String displayName = payoutsAPI.getConfiguredPayouts().get(payoutType).displayName;
        List<LeaderboardEntry> leaderboard = payoutsAPI.getLeaderboard(payoutType, 10);
        
        player.sendMessage("§6§lTop 10 - " + displayName);
        
        if (leaderboard.isEmpty()) {
            player.sendMessage("§cNo data available for this leaderboard.");
            return;
        }
        
        for (int i = 0; i < leaderboard.size(); i++) {
            LeaderboardEntry entry = leaderboard.get(i);
            player.sendMessage("§e#" + (i+1) + " §f" + entry.playerName() + " §7- §f" + entry.value());
        }
    }
    
    private void showNextPayout(Player player, String payoutType) {
        if (payoutsAPI == null) {
            player.sendMessage("§cCrestPayouts not available!");
            return;
        }
        
        PayoutAPI payoutAPI = payoutsAPI.getPayoutAPI();
        
        if (!payoutAPI.isValidPayoutType(payoutType)) {
            player.sendMessage("§cInvalid payout type: " + payoutType);
            return;
        }
        
        String displayName = payoutsAPI.getConfiguredPayouts().get(payoutType).displayName;
        LocalDateTime nextTime = payoutsAPI.getNextPayoutTime(payoutType);
        
        if (nextTime == null) {
            player.sendMessage("§cNo scheduled payout found for " + displayName);
            return;
        }
        
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMM dd, yyyy 'at' HH:mm");
        player.sendMessage("§6Next " + displayName + " payout: §f" + nextTime.format(formatter));
    }
    
    @EventHandler
    public void onPayout(PayoutEvent event) {
        // Log payout events
        getLogger().info("Payout triggered: " + event.getPayoutDisplayName());
    }
}
```
