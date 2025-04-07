# Developer API

CrestPvPToggle provides a comprehensive API for developers who want to integrate with the plugin. This allows you to check and modify players' PvP states, work with combat timers, and listen for PvP-related events.

## Adding as a Dependency

To use the CrestPvPToggle API in your plugin, you need to add the plugin JAR to your development environment:

### Manual JAR Dependency

1. Download the CrestPvPToggle.jar
2. Add it to your project's libraries

#### For Maven:
```xml
<dependencies>
    <dependency>
        <groupId>me.levitate</groupId>
        <artifactId>CrestPvPToggle</artifactId>
        <version>1.0.0</version>
        <scope>system</scope>
        <systemPath>${project.basedir}/libs/CrestPvPToggle.jar</systemPath>
    </dependency>
</dependencies>
```

#### For Gradle:
```kotlin
dependencies {
    compileOnly(files("libs/CrestPvPToggle.jar"))
}
```

### Server Setup
Make sure CrestPvPToggle is installed on your server and loaded before your plugin. Add it to your plugin.yml dependencies:

```yaml
depend: [CrestPvPToggle]
# or for soft dependency
softdepend: [CrestPvPToggle]
```

## API Usage

The main API class is `CrestPvPToggleAPI`. All methods are static, so you can access them directly without needing to get an instance.

### Basic Examples

#### Check if PvP is Enabled for a Player
```java
import me.levitate.crestPvPToggle.api.CrestPvPToggleAPI;
import org.bukkit.entity.Player;

public boolean checkPvP(Player player) {
    // Check if PvP is enabled for the player
    return CrestPvPToggleAPI.isPvPEnabled(player);
}
```

#### Toggle a Player's PvP State
```java
import me.levitate.crestPvPToggle.api.CrestPvPToggleAPI;
import org.bukkit.entity.Player;

public void togglePlayerPvP(Player player) {
    // Toggle the player's PvP state
    boolean newState = CrestPvPToggleAPI.togglePvP(player);
    
    // Inform the player of their new state
    player.sendMessage("Your PvP state is now: " + (newState ? "Enabled" : "Disabled"));
}
```

#### Put a Player in Combat Mode
```java
import me.levitate.crestPvPToggle.api.CrestPvPToggleAPI;
import org.bukkit.entity.Player;

public void enterCombat(Player player) {
    // Put the player in combat mode (prevents toggling PvP for 60 seconds)
    CrestPvPToggleAPI.setInCombat(player, true);
    
    // You could also check if a player is in combat
    if (CrestPvPToggleAPI.isInCombat(player)) {
        player.sendMessage("You are currently in combat!");
    }
}
```

## Available API Methods

### PvP State Methods
- `boolean isPvPEnabled(Player player)` - Check if PvP is enabled for a player
- `boolean isPvPEnabled(UUID uuid)` - Check if PvP is enabled for a UUID
- `void setPvPEnabled(Player player, boolean enabled)` - Set a player's PvP state
- `void setPvPEnabled(UUID uuid, boolean enabled)` - Set a player's PvP state by UUID
- `boolean togglePvP(Player player)` - Toggle a player's PvP state
- `boolean togglePvP(UUID uuid)` - Toggle a player's PvP state by UUID

### Combat Methods
- `boolean isInCombat(Player player)` - Check if a player is in combat
- `boolean isInCombat(UUID uuid)` - Check if a player is in combat by UUID
- `void setInCombat(Player player, boolean inCombat)` - Set a player's combat state
- `void setInCombat(UUID uuid, boolean inCombat)` - Set a player's combat state by UUID

### Advanced Methods
- `PvPManager getPvPManager()` - Get the PvP manager instance (for advanced usage)

## API Events

CrestPvPToggle provides several events that you can listen for in your plugin:

### PvPTogglePreEvent
- Called before a player's PvP state is changed
- Cancellable event - can prevent the PvP state from changing

```java
import me.levitate.crestPvPToggle.api.PvPTogglePreEvent;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;

@EventHandler
public void onPvPTogglePre(PvPTogglePreEvent event) {
    // Check which player is changing their PvP state
    Player player = event.getPlayer();
    
    // Check what the new state would be
    boolean newState = event.getNewPvPState();
    
    // Prevent players in a specific region from disabling PvP
    if (!newState && isInPvPRegion(player)) {
        event.setCancelled(true);
        player.sendMessage("You cannot disable PvP in this region!");
    }
}
```

### PvPTogglePostEvent
- Called after a player's PvP state has been changed

```java
import me.levitate.crestPvPToggle.api.PvPTogglePostEvent;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;

@EventHandler
public void onPvPTogglePost(PvPTogglePostEvent event) {
    // Get the player who changed their PvP state
    Player player = event.getPlayer();
    
    // Get the new PvP state
    boolean newState = event.getNewPvPState();
    
    // Broadcast to staff that a player changed their PvP status
    broadcastToStaff(player.getName() + " has " + (newState ? "enabled" : "disabled") + " PvP");
}
```

### CombatStateChangeEvent
- Called when a player enters or leaves combat

```java
import me.levitate.crestPvPToggle.api.CombatStateChangeEvent;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;

@EventHandler
public void onCombatStateChange(CombatStateChangeEvent event) {
    // Get the player whose combat state changed
    Player player = event.getPlayer();
    
    // Check if they're entering or leaving combat
    boolean inCombat = event.isInCombat();
    
    if (inCombat) {
        player.sendMessage("§cYou are now in combat! Don't log out!");
    } else {
        player.sendMessage("§aYou are no longer in combat.");
    }
}
```
