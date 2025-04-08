# Developer API

CrestReferrals provides a comprehensive API for developers who want to integrate with the plugin. This allows you to access player referral data, manage referrals, work with the leaderboard, and listen for referral-related events.

## Adding as a Dependency

To use the CrestReferrals API in your plugin, you need to add the plugin JAR to your development environment:

### Manual JAR Dependency

1. Download the CrestReferrals.jar
2. Add it to your project's libraries

#### For Maven:
```xml
<dependencies>
    <dependency>
        <groupId>me.levitate</groupId>
        <artifactId>CrestReferrals</artifactId>
        <version>1.0.0</version>
        <scope>system</scope>
        <systemPath>${project.basedir}/libs/CrestReferrals.jar</systemPath>
    </dependency>
</dependencies>
```

#### For Gradle:
```kotlin
dependencies {
    compileOnly(files("libs/CrestReferrals.jar"))
}
```

### Server Setup
Make sure CrestReferrals is installed on your server and loaded before your plugin. Add it to your plugin.yml dependencies:

```yaml
depend: [CrestReferrals]
# or for soft dependency
softdepend: [CrestReferrals]
```

## API Usage

The main API class is `CrestReferralsAPI`. You'll need to get the API instance from the plugin.

### Getting the API Instance

```java
import me.levitate.crestReferrals.api.CrestReferralsAPI;
import org.bukkit.Bukkit;
import org.bukkit.plugin.Plugin;

public class YourPlugin extends JavaPlugin {
    private CrestReferralsAPI api;
    
    @Override
    public void onEnable() {
        Plugin crestReferrals = Bukkit.getPluginManager().getPlugin("CrestReferrals");
        
        if (crestReferrals != null) {
            api = ((me.levitate.crestReferrals.CrestReferrals) crestReferrals).getApi();
            getLogger().info("Successfully hooked into CrestReferrals API!");
        }
    }
}
```

### Basic Examples

#### Get Player Referral Data
```java
import me.levitate.crestReferrals.api.CrestReferralsAPI;
import me.levitate.crestReferrals.models.PlayerData;
import org.bukkit.entity.Player;

public void checkReferrals(Player player) {
    PlayerData data = api.getPlayerData(player.getUniqueId());
    
    if (data != null) {
        int referralCount = data.referrals();
        String referrerName = data.referrer();
        String referralCode = data.referralCode();
        
        player.sendMessage("You have " + referralCount + " referrals!");
        player.sendMessage("Your referral code is: " + (referralCode != null ? referralCode : "Not set"));
        
        if (referrerName != null) {
            player.sendMessage("You were referred by: " + referrerName);
        }
    }
}
```

#### Check if a Player Can Add a Referral
```java
import me.levitate.crestReferrals.api.CrestReferralsAPI;
import org.bukkit.entity.Player;

public boolean canAddReferral(Player player) {
    return api.canAddReferral(player.getUniqueId());
}
```

#### Add a Referral Programmatically
```java
import me.levitate.crestReferrals.api.CrestReferralsAPI;
import org.bukkit.OfflinePlayer;
import org.bukkit.entity.Player;

public void addReferral(Player player, OfflinePlayer referrer) {
    boolean success = api.addReferral(player, referrer);
    
    if (success) {
        player.sendMessage("You have successfully added " + referrer.getName() + " as your referrer!");
    } else {
        player.sendMessage("Unable to add referral. You may be out of time or already have a referrer.");
    }
}
```

#### Get the Referral Leaderboard
```java
import me.levitate.crestReferrals.api.CrestReferralsAPI;
import me.levitate.crestReferrals.models.LeaderboardEntry;

import java.util.List;

public void displayTopReferrers(Player player) {
    List<LeaderboardEntry> leaderboard = api.getLeaderboard();
    
    player.sendMessage("§6§lTop Referrers:");
    
    for (int i = 0; i < Math.min(10, leaderboard.size()); i++) {
        LeaderboardEntry entry = leaderboard.get(i);
        player.sendMessage("§e#" + (i + 1) + " §f" + entry.playerName() + " §7- §f" + entry.referrals() + " referrals");
    }
}
```

#### Get Player by Referral Code
```java
import me.levitate.crestReferrals.api.CrestReferralsAPI;

import java.util.UUID;

public UUID getPlayerByCode(String code) {
    return api.getPlayerByCode(code);
}
```

## Available API Methods

### Referral Data Methods
- `PlayerData getPlayerData(UUID uuid)` - Get a player's referral data
- `int getReferralCount(UUID uuid)` - Get the number of referrals a player has
- `String getReferralCode(UUID uuid)` - Get a player's referral code
- `String getReferrer(UUID uuid)` - Get the name of the player who referred this player
- `UUID getPlayerByCode(String code)` - Get a player UUID by referral code

### Referral Management Methods
- `boolean canAddReferral(UUID uuid)` - Check if a player can add a referral
- `boolean addReferral(Player player, OfflinePlayer referrer)` - Add a referral

### Leaderboard Methods
- `List<LeaderboardEntry> getLeaderboard()` - Get the current referral leaderboard
- `CompletableFuture<List<LeaderboardEntry>> getTopReferrersAsync(int limit)` - Get the top referrers asynchronously

## API Events

CrestReferrals provides several events that you can listen for in your plugin:

### PlayerReferralEvent
- Called when a player is referred

```java
import me.levitate.crestReferrals.api.events.PlayerReferralEvent;
import org.bukkit.Bukkit;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;

@EventHandler
public void onPlayerReferral(PlayerReferralEvent event) {
    UUID playerUUID = event.getPlayerUUID();
    UUID referrerUUID = event.getReferrerUUID();
    
    String playerName = Bukkit.getOfflinePlayer(playerUUID).getName();
    String referrerName = Bukkit.getOfflinePlayer(referrerUUID).getName();
    
    getLogger().info(playerName + " was referred by " + referrerName);
    
    // Your custom code here
}
```

### MilestoneReachedEvent
- Called when a player reaches a referral milestone
- Cancellable event - can prevent milestone rewards

```java
import me.levitate.crestReferrals.api.events.MilestoneReachedEvent;
import me.levitate.crestReferrals.models.Milestone;
import org.bukkit.Bukkit;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;

@EventHandler
public void onMilestoneReached(MilestoneReachedEvent event) {
    UUID playerUUID = event.getPlayerUUID();
    Milestone milestone = event.getMilestone();
    
    String playerName = Bukkit.getOfflinePlayer(playerUUID).getName();
    int threshold = milestone.threshold();
    
    getLogger().info(playerName + " has reached the milestone of " + threshold + " referrals!");
    
    // Optional: Check for specific milestone and add custom rewards
    if (threshold == 50) {
        // Give some special reward for 50 referrals milestone
        // You could cancel the default rewards if you want
        // event.setCancelled(true);
    }
}
```

## Model Classes

The API provides access to various model classes:

### PlayerData
```java
public class PlayerData {
    int referrals();                       // Number of referrals
    String referrer();                     // Referrer's name
    Long firstLogin();                     // First login timestamp
    String ipAddress();                    // Player's IP address
    int pendingReferrals();                // Pending referrals count
    String referralCode();                 // Player's referral code
    List<String> referredPlayers();        // UUIDs of referred players
    Map<Integer, Boolean> completedMilestones(); // Completed milestone map
}
```

### LeaderboardEntry
```java
public class LeaderboardEntry {
    UUID uuid();                           // Player UUID
    String playerName();                   // Player name
    int referrals();                       // Number of referrals
}
```

### Milestone
```java
public class Milestone {
    int threshold();                       // Milestone threshold
    List<String> rewards();                // Reward commands
    String message();                      // Message to send
    int currentReferrals();                // Current referral count
}
```
