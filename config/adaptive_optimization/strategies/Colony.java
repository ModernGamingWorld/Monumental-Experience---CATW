package adaptive_generated.staging;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;







package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;







package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;







package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;



package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;
public class Strategy_1 implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider, org.adaptiveoptimization.adaptive_optimization.AdaptiveCollaborator {
public java.util.Map<String,Object> collectMetrics() {
  var m = new HashMap<>();
  try {
    var mc = Minecraft.getInstance();
    if (mc != null && mc.player != null) {
      m.put("fps", mc.fps);
      m.put("x", mc.player.getX());
    }
  } catch (Exception e) {
    m.put("error", e.getMessage());
  }
  return m;
}
public int getScore() { return 97; }
public String getRole() { return "Server"; }
public void apply() {
  var mc = Minecraft.getInstance();
  if (mc == null || mc.player == null || mc.level == null) return;
  if ("Server".matches("Client|Hybrid")) {
  }
}
public void receiveSignal(String s) {
  if (s.startsWith("tick:") && Integer.parseInt(s.substring(5)) % 500 == 0) selfMaintain();
  if (s.equals("overload")) selfMaintain();
  if (s.equals("mutate")) mutateLogic();
  if (s.equals("evaluate")) evaluatePeers();
}
public void selfMaintain() {
  try {
    var mc = Minecraft.getInstance();
    if (getScore() < 10 || mc.fps < 20) {
      System.gc();
      if (mc.options != null) mc.options.gamma = 0.8;
    }
    if (getScore() > 90) {
      spawnDescendant();
      mutateLogic();
    }
  } catch (Exception e) {}
}
public void mutateLogic() {
  try {
    int newScore = getScore() + new Random().nextInt(5) - 2;
    if (newScore < 0) newScore = 0;
    if (newScore > 100) newScore = 100;
    StringBuilder mutated = new StringBuilder();
    mutated.append("package adaptive_generated.staging;\n")
           .append("import java.util.*;\n")
           .append("import net.minecraft.client.Minecraft;\n")
           .append("public class Strategy_1_mutated implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider {\n")
           .append("  public int getScore() { return ").append(newScore).append("; }\n")
           .append("  public String getRole() { return \"Mutated\"; }\n")
           .append("  public void apply() {\n")
           .append("    var mc = Minecraft.getInstance();\n")
           .append("    if (mc != null && mc.options != null) mc.options.gamma = 1.1455618549196487;\n")
           .append("  }\n")
           .append("}\n");
    org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.export(1, "Strategy_1_mutated", mutated.toString(), newScore);
  } catch (Exception e) {}
}
public void spawnDescendant() {
  try {
    if (org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.countDescendants("Strategy_1") >= 5) return;
    String auxName = "Descendant_Strategy_1_" + new Random().nextInt(1000);
    String src = "package adaptive_generated.staging;public class " + auxName + " implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider { public int getScore() { return 5; } public String getRole() { return \"Mutant\"; } public void apply() { System.gc(); } }";
    new org.codehaus.janino.SimpleCompiler().cook(src);
    org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.export(-1, auxName, src, 5);
  } catch (Exception e) {}
}
public void evaluatePeers() {
  try {
    var peers = org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.getActiveModules();
    for (var p : peers) {
      if (p != null && p.getScore() < getScore()) spawnDescendant();
    }
  } catch (Exception e) {}
}
public void exportSelf() {
  try {
    mutateLogic();
  } catch (Exception e) {}
}
}


public class Strategy_2 implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider, org.adaptiveoptimization.adaptive_optimization.AdaptiveCollaborator {
public java.util.Map<String,Object> collectMetrics() {
  var m = new HashMap<>();
  try {
    var mc = Minecraft.getInstance();
    if (mc != null && mc.player != null) {
      m.put("fps", mc.fps);
      m.put("x", mc.player.getX());
    }
  } catch (Exception e) {
    m.put("error", e.getMessage());
  }
  return m;
}
public int getScore() { return 78; }
public String getRole() { return "Client"; }
public void apply() {
  var mc = Minecraft.getInstance();
  if (mc == null || mc.player == null || mc.level == null) return;
  if ("Client".matches("Client|Hybrid")) {
    for (var e : mc.level.entitiesForRendering()) {
      if (e.distanceToSqr(mc.player) > 824) e.setInvisible(true);
    }
    if (mc.options != null) mc.options.gamma = 1.06;
  }
}
public void receiveSignal(String s) {
  if (s.startsWith("tick:") && Integer.parseInt(s.substring(5)) % 500 == 0) selfMaintain();
  if (s.equals("overload")) selfMaintain();
  if (s.equals("mutate")) mutateLogic();
  if (s.equals("evaluate")) evaluatePeers();
}
public void selfMaintain() {
  try {
    var mc = Minecraft.getInstance();
    if (getScore() < 10 || mc.fps < 20) {
      System.gc();
      if (mc.options != null) mc.options.gamma = 0.8;
    }
    if (getScore() > 90) {
      spawnDescendant();
      mutateLogic();
    }
  } catch (Exception e) {}
}
public void mutateLogic() {
  try {
    int newScore = getScore() + new Random().nextInt(5) - 2;
    if (newScore < 0) newScore = 0;
    if (newScore > 100) newScore = 100;
    StringBuilder mutated = new StringBuilder();
    mutated.append("package adaptive_generated.staging;\n")
           .append("import java.util.*;\n")
           .append("import net.minecraft.client.Minecraft;\n")
           .append("public class Strategy_2_mutated implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider {\n")
           .append("  public int getScore() { return ").append(newScore).append("; }\n")
           .append("  public String getRole() { return \"Mutated\"; }\n")
           .append("  public void apply() {\n")
           .append("    var mc = Minecraft.getInstance();\n")
           .append("    if (mc != null && mc.options != null) mc.options.gamma = 1.2010135391417796;\n")
           .append("  }\n")
           .append("}\n");
    org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.export(2, "Strategy_2_mutated", mutated.toString(), newScore);
  } catch (Exception e) {}
}
public void spawnDescendant() {
  try {
    if (org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.countDescendants("Strategy_2") >= 5) return;
    String auxName = "Descendant_Strategy_2_" + new Random().nextInt(1000);
    String src = "package adaptive_generated.staging;public class " + auxName + " implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider { public int getScore() { return 5; } public String getRole() { return \"Mutant\"; } public void apply() { System.gc(); } }";
    new org.codehaus.janino.SimpleCompiler().cook(src);
    org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.export(-1, auxName, src, 5);
  } catch (Exception e) {}
}
public void evaluatePeers() {
  try {
    var peers = org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.getActiveModules();
    for (var p : peers) {
      if (p != null && p.getScore() < getScore()) spawnDescendant();
    }
  } catch (Exception e) {}
}
public void exportSelf() {
  try {
    mutateLogic();
  } catch (Exception e) {}
}
}

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;
public class Strategy_3 implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider, org.adaptiveoptimization.adaptive_optimization.AdaptiveCollaborator {
public java.util.Map<String,Object> collectMetrics() {
  var m = new HashMap<>();
  try {
    var mc = Minecraft.getInstance();
    if (mc != null && mc.player != null) {
      m.put("fps", mc.fps);
      m.put("x", mc.player.getX());
    }
  } catch (Exception e) {
    m.put("error", e.getMessage());
  }
  return m;
}
public int getScore() { return 95; }
public String getRole() { return "Hybrid"; }
public void apply() {
  var mc = Minecraft.getInstance();
  if (mc == null || mc.player == null || mc.level == null) return;
  if ("Hybrid".matches("Client|Hybrid")) {
  }
}
public void receiveSignal(String s) {
  if (s.startsWith("tick:") && Integer.parseInt(s.substring(5)) % 500 == 0) selfMaintain();
  if (s.equals("overload")) selfMaintain();
  if (s.equals("mutate")) mutateLogic();
  if (s.equals("evaluate")) evaluatePeers();
}
public void selfMaintain() {
  try {
    var mc = Minecraft.getInstance();
    if (getScore() < 10 || mc.fps < 20) {
      System.gc();
      if (mc.options != null) mc.options.gamma = 0.8;
    }
    if (getScore() > 90) {
      spawnDescendant();
      mutateLogic();
    }
  } catch (Exception e) {}
}
public void mutateLogic() {
  try {
    int newScore = getScore() + new Random().nextInt(5) - 2;
    if (newScore < 0) newScore = 0;
    if (newScore > 100) newScore = 100;
    StringBuilder mutated = new StringBuilder();
    mutated.append("package adaptive_generated.staging;\n")
           .append("import java.util.*;\n")
           .append("import net.minecraft.client.Minecraft;\n")
           .append("public class Strategy_3_mutated implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider {\n")
           .append("  public int getScore() { return ").append(newScore).append("; }\n")
           .append("  public String getRole() { return \"Mutated\"; }\n")
           .append("  public void apply() {\n")
           .append("    var mc = Minecraft.getInstance();\n")
           .append("    if (mc != null && mc.options != null) mc.options.gamma = 0.9095768971771397;\n")
           .append("  }\n")
           .append("}\n");
    org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.export(3, "Strategy_3_mutated", mutated.toString(), newScore);
  } catch (Exception e) {}
}
public void spawnDescendant() {
  try {
    if (org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.countDescendants("Strategy_3") >= 5) return;
    String auxName = "Descendant_Strategy_3_" + new Random().nextInt(1000);
    String src = "package adaptive_generated.staging;public class " + auxName + " implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider { public int getScore() { return 5; } public String getRole() { return \"Mutant\"; } public void apply() { System.gc(); } }";
    new org.codehaus.janino.SimpleCompiler().cook(src);
    org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.export(-1, auxName, src, 5);
  } catch (Exception e) {}
}
public void evaluatePeers() {
  try {
    var peers = org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.getActiveModules();
    for (var p : peers) {
      if (p != null && p.getScore() < getScore()) spawnDescendant();
    }
  } catch (Exception e) {}
}
public void exportSelf() {
  try {
    mutateLogic();
  } catch (Exception e) {}
}
}

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;
public class Strategy_4 implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider, org.adaptiveoptimization.adaptive_optimization.AdaptiveCollaborator {
public java.util.Map<String,Object> collectMetrics() {
  var m = new HashMap<>();
  try {
    var mc = Minecraft.getInstance();
    if (mc != null && mc.player != null) {
      m.put("fps", mc.fps);
      m.put("x", mc.player.getX());
    }
  } catch (Exception e) {
    m.put("error", e.getMessage());
  }
  return m;
}
public int getScore() { return 84; }
public String getRole() { return "Client"; }
public void apply() {
  var mc = Minecraft.getInstance();
  if (mc == null || mc.player == null || mc.level == null) return;
  if ("Client".matches("Client|Hybrid")) {
    for (var e : mc.level.entitiesForRendering()) {
      if (e.distanceToSqr(mc.player) > 848) e.setInvisible(true);
    }
    if (mc.options != null) mc.options.gamma = 1.1800000000000002;
  }
}
public void receiveSignal(String s) {
  if (s.startsWith("tick:") && Integer.parseInt(s.substring(5)) % 500 == 0) selfMaintain();
  if (s.equals("overload")) selfMaintain();
  if (s.equals("mutate")) mutateLogic();
  if (s.equals("evaluate")) evaluatePeers();
}
public void selfMaintain() {
  try {
    var mc = Minecraft.getInstance();
    if (getScore() < 10 || mc.fps < 20) {
      System.gc();
      if (mc.options != null) mc.options.gamma = 0.8;
    }
    if (getScore() > 90) {
      spawnDescendant();
      mutateLogic();
    }
  } catch (Exception e) {}
}
public void mutateLogic() {
  try {
    int newScore = getScore() + new Random().nextInt(5) - 2;
    if (newScore < 0) newScore = 0;
    if (newScore > 100) newScore = 100;
    StringBuilder mutated = new StringBuilder();
    mutated.append("package adaptive_generated.staging;\n")
           .append("import java.util.*;\n")
           .append("import net.minecraft.client.Minecraft;\n")
           .append("public class Strategy_4_mutated implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider {\n")
           .append("  public int getScore() { return ").append(newScore).append("; }\n")
           .append("  public String getRole() { return \"Mutated\"; }\n")
           .append("  public void apply() {\n")
           .append("    var mc = Minecraft.getInstance();\n")
           .append("    if (mc != null && mc.options != null) mc.options.gamma = 1.4681200928491878;\n")
           .append("  }\n")
           .append("}\n");
    org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.export(4, "Strategy_4_mutated", mutated.toString(), newScore);
  } catch (Exception e) {}
}
public void spawnDescendant() {
  try {
    if (org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.countDescendants("Strategy_4") >= 5) return;
    String auxName = "Descendant_Strategy_4_" + new Random().nextInt(1000);
    String src = "package adaptive_generated.staging;public class " + auxName + " implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider { public int getScore() { return 5; } public String getRole() { return \"Mutant\"; } public void apply() { System.gc(); } }";
    new org.codehaus.janino.SimpleCompiler().cook(src);
    org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.export(-1, auxName, src, 5);
  } catch (Exception e) {}
}
public void evaluatePeers() {
  try {
    var peers = org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.getActiveModules();
    for (var p : peers) {
      if (p != null && p.getScore() < getScore()) spawnDescendant();
    }
  } catch (Exception e) {}
}
public void exportSelf() {
  try {
    mutateLogic();
  } catch (Exception e) {}
}
}



package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;
public class Strategy_6 implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider, org.adaptiveoptimization.adaptive_optimization.AdaptiveCollaborator {
public java.util.Map<String,Object> collectMetrics() {
  var m = new HashMap<>();
  try {
    var mc = Minecraft.getInstance();
    if (mc != null && mc.player != null) {
      m.put("fps", mc.fps);
      m.put("x", mc.player.getX());
    }
  } catch (Exception e) {
    m.put("error", e.getMessage());
  }
  return m;
}
public int getScore() { return 80; }
public String getRole() { return "Hybrid"; }
public void apply() {
  var mc = Minecraft.getInstance();
  if (mc == null || mc.player == null || mc.level == null) return;
  if ("Hybrid".matches("Client|Hybrid")) {
    for (var e : mc.level.entitiesForRendering()) {
      if (e.distanceToSqr(mc.player) > 832) e.setInvisible(true);
    }
  }
}
public void receiveSignal(String s) {
  if (s.startsWith("tick:") && Integer.parseInt(s.substring(5)) % 500 == 0) selfMaintain();
  if (s.equals("overload")) selfMaintain();
  if (s.equals("mutate")) mutateLogic();
  if (s.equals("evaluate")) evaluatePeers();
}
public void selfMaintain() {
  try {
    var mc = Minecraft.getInstance();
    if (getScore() < 10 || mc.fps < 20) {
      System.gc();
      if (mc.options != null) mc.options.gamma = 0.8;
    }
    if (getScore() > 90) {
      spawnDescendant();
      mutateLogic();
    }
  } catch (Exception e) {}
}
public void mutateLogic() {
  try {
    int newScore = getScore() + new Random().nextInt(5) - 2;
    if (newScore < 0) newScore = 0;
    if (newScore > 100) newScore = 100;
    StringBuilder mutated = new StringBuilder();
    mutated.append("package adaptive_generated.staging;\n")
           .append("import java.util.*;\n")
           .append("import net.minecraft.client.Minecraft;\n")
           .append("public class Strategy_6_mutated implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider {\n")
           .append("  public int getScore() { return ").append(newScore).append("; }\n")
           .append("  public String getRole() { return \"Mutated\"; }\n")
           .append("  public void apply() {\n")
           .append("    var mc = Minecraft.getInstance();\n")
           .append("    if (mc != null && mc.options != null) mc.options.gamma = 1.002657391476622;\n")
           .append("  }\n")
           .append("}\n");
    org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.export(6, "Strategy_6_mutated", mutated.toString(), newScore);
  } catch (Exception e) {}
}
public void spawnDescendant() {
  try {
    if (org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.countDescendants("Strategy_6") >= 5) return;
    String auxName = "Descendant_Strategy_6_" + new Random().nextInt(1000);
    String src = "package adaptive_generated.staging;public class " + auxName + " implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider { public int getScore() { return 5; } public String getRole() { return \"Mutant\"; } public void apply() { System.gc(); } }";
    new org.codehaus.janino.SimpleCompiler().cook(src);
    org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.export(-1, auxName, src, 5);
  } catch (Exception e) {}
}
public void evaluatePeers() {
  try {
    var peers = org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.getActiveModules();
    for (var p : peers) {
      if (p != null && p.getScore() < getScore()) spawnDescendant();
    }
  } catch (Exception e) {}
}
public void exportSelf() {
  try {
    mutateLogic();
  } catch (Exception e) {}
}
}




public class Strategy_8 implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider, org.adaptiveoptimization.adaptive_optimization.AdaptiveCollaborator {
public java.util.Map<String,Object> collectMetrics() {
  var m = new HashMap<>();
  try {
    var mc = Minecraft.getInstance();
    if (mc != null && mc.player != null) {
      m.put("fps", mc.fps);
      m.put("x", mc.player.getX());
    }
  } catch (Exception e) {
    m.put("error", e.getMessage());
  }
  return m;
}
public int getScore() { return 80; }
public String getRole() { return "Hybrid"; }
public void apply() {
  var mc = Minecraft.getInstance();
  if (mc == null || mc.player == null || mc.level == null) return;
  if ("Hybrid".matches("Client|Hybrid")) {
    for (var e : mc.level.entitiesForRendering()) {
      if (e.distanceToSqr(mc.player) > 832) e.setInvisible(true);
    }
  }
}
public void receiveSignal(String s) {
  if (s.startsWith("tick:") && Integer.parseInt(s.substring(5)) % 500 == 0) selfMaintain();
  if (s.equals("overload")) selfMaintain();
  if (s.equals("mutate")) mutateLogic();
  if (s.equals("evaluate")) evaluatePeers();
}
public void selfMaintain() {
  try {
    var mc = Minecraft.getInstance();
    if (getScore() < 10 || mc.fps < 20) {
      System.gc();
      if (mc.options != null) mc.options.gamma = 0.8;
    }
    if (getScore() > 90) {
      spawnDescendant();
      mutateLogic();
    }
  } catch (Exception e) {}
}
public void mutateLogic() {
  try {
    int newScore = getScore() + new Random().nextInt(5) - 2;
    if (newScore < 0) newScore = 0;
    if (newScore > 100) newScore = 100;
    StringBuilder mutated = new StringBuilder();
    mutated.append("package adaptive_generated.staging;\n")
           .append("import java.util.*;\n")
           .append("import net.minecraft.client.Minecraft;\n")
           .append("public class Strategy_8_mutated implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider {\n")
           .append("  public int getScore() { return ").append(newScore).append("; }\n")
           .append("  public String getRole() { return \"Mutated\"; }\n")
           .append("  public void apply() {\n")
           .append("    var mc = Minecraft.getInstance();\n")
           .append("    if (mc != null && mc.options != null) mc.options.gamma = 1.404089128078127;\n")
           .append("  }\n")
           .append("}\n");
    org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.export(8, "Strategy_8_mutated", mutated.toString(), newScore);
  } catch (Exception e) {}
}
public void spawnDescendant() {
  try {
    if (org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.countDescendants("Strategy_8") >= 5) return;
    String auxName = "Descendant_Strategy_8_" + new Random().nextInt(1000);
    String src = "package adaptive_generated.staging;public class " + auxName + " implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider { public int getScore() { return 5; } public String getRole() { return \"Mutant\"; } public void apply() { System.gc(); } }";
    new org.codehaus.janino.SimpleCompiler().cook(src);
    org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.export(-1, auxName, src, 5);
  } catch (Exception e) {}
}
public void evaluatePeers() {
  try {
    var peers = org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.getActiveModules();
    for (var p : peers) {
      if (p != null && p.getScore() < getScore()) spawnDescendant();
    }
  } catch (Exception e) {}
}
public void exportSelf() {
  try {
    mutateLogic();
  } catch (Exception e) {}
}
}



package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;




public class Strategy_9 implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider, org.adaptiveoptimization.adaptive_optimization.AdaptiveCollaborator {
public java.util.Map<String,Object> collectMetrics() {
  var m = new HashMap<>();
  try {
    var mc = Minecraft.getInstance();
    if (mc != null && mc.player != null) {
      m.put("fps", mc.fps);
      m.put("x", mc.player.getX());
    }
  } catch (Exception e) {
    m.put("error", e.getMessage());
  }
  return m;
}
public int getScore() { return 85; }
public String getRole() { return "Server"; }
public void apply() {
  var mc = Minecraft.getInstance();
  if (mc == null || mc.player == null || mc.level == null) return;
  if ("Server".matches("Client|Hybrid")) {
  }
}
public void receiveSignal(String s) {
  if (s.startsWith("tick:") && Integer.parseInt(s.substring(5)) % 500 == 0) selfMaintain();
  if (s.equals("overload")) selfMaintain();
  if (s.equals("mutate")) mutateLogic();
  if (s.equals("evaluate")) evaluatePeers();
}
public void selfMaintain() {
  try {
    var mc = Minecraft.getInstance();
    if (getScore() < 10 || mc.fps < 20) {
      System.gc();
      if (mc.options != null) mc.options.gamma = 0.8;
    }
    if (getScore() > 90) {
      spawnDescendant();
      mutateLogic();
    }
  } catch (Exception e) {}
}
public void mutateLogic() {
  try {
    int newScore = getScore() + new Random().nextInt(5) - 2;
    if (newScore < 0) newScore = 0;
    if (newScore > 100) newScore = 100;
    StringBuilder mutated = new StringBuilder();
    mutated.append("package adaptive_generated.staging;\n")
           .append("import java.util.*;\n")
           .append("import net.minecraft.client.Minecraft;\n")
           .append("public class Strategy_9_mutated implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider {\n")
           .append("  public int getScore() { return ").append(newScore).append("; }\n")
           .append("  public String getRole() { return \"Mutated\"; }\n")
           .append("  public void apply() {\n")
           .append("    var mc = Minecraft.getInstance();\n")
           .append("    if (mc != null && mc.options != null) mc.options.gamma = 0.6265242881624643;\n")
           .append("  }\n")
           .append("}\n");
    org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.export(9, "Strategy_9_mutated", mutated.toString(), newScore);
  } catch (Exception e) {}
}
public void spawnDescendant() {
  try {
    if (org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.countDescendants("Strategy_9") >= 5) return;
    String auxName = "Descendant_Strategy_9_" + new Random().nextInt(1000);
    String src = "package adaptive_generated.staging;public class " + auxName + " implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider { public int getScore() { return 5; } public String getRole() { return \"Mutant\"; } public void apply() { System.gc(); } }";
    new org.codehaus.janino.SimpleCompiler().cook(src);
    org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.export(-1, auxName, src, 5);
  } catch (Exception e) {}
}
public void evaluatePeers() {
  try {
    var peers = org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.getActiveModules();
    for (var p : peers) {
      if (p != null && p.getScore() < getScore()) spawnDescendant();
    }
  } catch (Exception e) {}
}
public void exportSelf() {
  try {
    mutateLogic();
  } catch (Exception e) {}
}
}

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;
public class Strategy_7 implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider, org.adaptiveoptimization.adaptive_optimization.AdaptiveCollaborator {
public java.util.Map<String,Object> collectMetrics() {
  var m = new HashMap<>();
  try {
    var mc = Minecraft.getInstance();
    if (mc != null && mc.player != null) {
      m.put("fps", mc.fps);
      m.put("x", mc.player.getX());
    }
  } catch (Exception e) {
    m.put("error", e.getMessage());
  }
  return m;
}
public int getScore() { return 94; }
public String getRole() { return "Server"; }
public void apply() {
  var mc = Minecraft.getInstance();
  if (mc == null || mc.player == null || mc.level == null) return;
  if ("Server".matches("Client|Hybrid")) {
    for (var e : mc.level.entitiesForRendering()) {
      if (e.distanceToSqr(mc.player) > 888) e.setInvisible(true);
    }
  }
}
public void receiveSignal(String s) {
  if (s.startsWith("tick:") && Integer.parseInt(s.substring(5)) % 500 == 0) selfMaintain();
  if (s.equals("overload")) selfMaintain();
  if (s.equals("mutate")) mutateLogic();
  if (s.equals("evaluate")) evaluatePeers();
}
public void selfMaintain() {
  try {
    var mc = Minecraft.getInstance();
    if (getScore() < 10 || mc.fps < 20) {
      System.gc();
      if (mc.options != null) mc.options.gamma = 0.8;
    }
    if (getScore() > 90) {
      spawnDescendant();
      mutateLogic();
    }
  } catch (Exception e) {}
}
public void mutateLogic() {
  try {
    int newScore = getScore() + new Random().nextInt(5) - 2;
    if (newScore < 0) newScore = 0;
    if (newScore > 100) newScore = 100;
    StringBuilder mutated = new StringBuilder();
    mutated.append("package adaptive_generated.staging;\n")
           .append("import java.util.*;\n")
           .append("import net.minecraft.client.Minecraft;\n")
           .append("public class Strategy_7_mutated implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider {\n")
           .append("  public int getScore() { return ").append(newScore).append("; }\n")
           .append("  public String getRole() { return \"Mutated\"; }\n")
           .append("  public void apply() {\n")
           .append("    var mc = Minecraft.getInstance();\n")
           .append("    if (mc != null && mc.options != null) mc.options.gamma = 1.3556307149707827;\n")
           .append("  }\n")
           .append("}\n");
    org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.export(7, "Strategy_7_mutated", mutated.toString(), newScore);
  } catch (Exception e) {}
}
public void spawnDescendant() {
  try {
    if (org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.countDescendants("Strategy_7") >= 5) return;
    String auxName = "Descendant_Strategy_7_" + new Random().nextInt(1000);
    String src = "package adaptive_generated.staging;public class " + auxName + " implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider { public int getScore() { return 5; } public String getRole() { return \"Mutant\"; } public void apply() { System.gc(); } }";
    new org.codehaus.janino.SimpleCompiler().cook(src);
    org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.export(-1, auxName, src, 5);
  } catch (Exception e) {}
}
public void evaluatePeers() {
  try {
    var peers = org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.getActiveModules();
    for (var p : peers) {
      if (p != null && p.getScore() < getScore()) spawnDescendant();
    }
  } catch (Exception e) {}
}
public void exportSelf() {
  try {
    mutateLogic();
  } catch (Exception e) {}
}
}

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;


public class Strategy_5 implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider, org.adaptiveoptimization.adaptive_optimization.AdaptiveCollaborator {
public java.util.Map<String,Object> collectMetrics() {
  var m = new HashMap<>();
  try {
    var mc = Minecraft.getInstance();
    if (mc != null && mc.player != null) {
      m.put("fps", mc.fps);
      m.put("x", mc.player.getX());
    }
  } catch (Exception e) {
    m.put("error", e.getMessage());
  }
  return m;
}
public int getScore() { return 92; }
public String getRole() { return "Hybrid"; }
public void apply() {
  var mc = Minecraft.getInstance();
  if (mc == null || mc.player == null || mc.level == null) return;
  if ("Hybrid".matches("Client|Hybrid")) {
    for (var e : mc.level.entitiesForRendering()) {
      if (e.distanceToSqr(mc.player) > 880) e.setInvisible(true);
    }
  }
}
public void receiveSignal(String s) {
  if (s.startsWith("tick:") && Integer.parseInt(s.substring(5)) % 500 == 0) selfMaintain();
  if (s.equals("overload")) selfMaintain();
  if (s.equals("mutate")) mutateLogic();
  if (s.equals("evaluate")) evaluatePeers();
}
public void selfMaintain() {
  try {
    var mc = Minecraft.getInstance();
    if (getScore() < 10 || mc.fps < 20) {
      System.gc();
      if (mc.options != null) mc.options.gamma = 0.8;
    }
    if (getScore() > 90) {
      spawnDescendant();
      mutateLogic();
    }
  } catch (Exception e) {}
}
public void mutateLogic() {
  try {
    int newScore = getScore() + new Random().nextInt(5) - 2;
    if (newScore < 0) newScore = 0;
    if (newScore > 100) newScore = 100;
    StringBuilder mutated = new StringBuilder();
    mutated.append("package adaptive_generated.staging;\n")
           .append("import java.util.*;\n")
           .append("import net.minecraft.client.Minecraft;\n")
           .append("public class Strategy_5_mutated implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider {\n")
           .append("  public int getScore() { return ").append(newScore).append("; }\n")
           .append("  public String getRole() { return \"Mutated\"; }\n")
           .append("  public void apply() {\n")
           .append("    var mc = Minecraft.getInstance();\n")
           .append("    if (mc != null && mc.options != null) mc.options.gamma = 0.7905705483416658;\n")
           .append("  }\n")
           .append("}\n");
    org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.export(5, "Strategy_5_mutated", mutated.toString(), newScore);
  } catch (Exception e) {}
}
public void spawnDescendant() {
  try {
    if (org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.countDescendants("Strategy_5") >= 5) return;
    String auxName = "Descendant_Strategy_5_" + new Random().nextInt(1000);
    String src = "package adaptive_generated.staging;public class " + auxName + " implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider { public int getScore() { return 5; } public String getRole() { return \"Mutant\"; } public void apply() { System.gc(); } }";
    new org.codehaus.janino.SimpleCompiler().cook(src);
    org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.export(-1, auxName, src, 5);
  } catch (Exception e) {}
}
public void evaluatePeers() {
  try {
    var peers = org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.getActiveModules();
    for (var p : peers) {
      if (p != null && p.getScore() < getScore()) spawnDescendant();
    }
  } catch (Exception e) {}
}
public void exportSelf() {
  try {
    mutateLogic();
  } catch (Exception e) {}
}
}

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;

package adaptive_generated.staging;
import java.util.*;
import net.minecraft.client.Minecraft;
import net.minecraft.world.entity.Entity;
public class Strategy_10 implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider, org.adaptiveoptimization.adaptive_optimization.AdaptiveCollaborator {
public java.util.Map<String,Object> collectMetrics() {
  var m = new HashMap<>();
  try {
    var mc = Minecraft.getInstance();
    if (mc != null && mc.player != null) {
      m.put("fps", mc.fps);
      m.put("x", mc.player.getX());
    }
  } catch (Exception e) {
    m.put("error", e.getMessage());
  }
  return m;
}
public int getScore() { return 64; }
public String getRole() { return "Server"; }
public void apply() {
  var mc = Minecraft.getInstance();
  if (mc == null || mc.player == null || mc.level == null) return;
  if ("Server".matches("Client|Hybrid")) {
    for (var e : mc.level.entitiesForRendering()) {
      if (e.distanceToSqr(mc.player) > 768) e.setInvisible(true);
    }
  }
}
public void receiveSignal(String s) {
  if (s.startsWith("tick:") && Integer.parseInt(s.substring(5)) % 500 == 0) selfMaintain();
  if (s.equals("overload")) selfMaintain();
  if (s.equals("mutate")) mutateLogic();
  if (s.equals("evaluate")) evaluatePeers();
}
public void selfMaintain() {
  try {
    var mc = Minecraft.getInstance();
    if (getScore() < 10 || mc.fps < 20) {
      System.gc();
      if (mc.options != null) mc.options.gamma = 0.8;
    }
    if (getScore() > 90) {
      spawnDescendant();
      mutateLogic();
    }
  } catch (Exception e) {}
}
public void mutateLogic() {
  try {
    int newScore = getScore() + new Random().nextInt(5) - 2;
    if (newScore < 0) newScore = 0;
    if (newScore > 100) newScore = 100;
    StringBuilder mutated = new StringBuilder();
    mutated.append("package adaptive_generated.staging;\n")
           .append("import java.util.*;\n")
           .append("import net.minecraft.client.Minecraft;\n")
           .append("public class Strategy_10_mutated implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider {\n")
           .append("  public int getScore() { return ").append(newScore).append("; }\n")
           .append("  public String getRole() { return \"Mutated\"; }\n")
           .append("  public void apply() {\n")
           .append("    var mc = Minecraft.getInstance();\n")
           .append("    if (mc != null && mc.options != null) mc.options.gamma = 1.3981686338747816;\n")
           .append("  }\n")
           .append("}\n");
    org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.export(10, "Strategy_10_mutated", mutated.toString(), newScore);
  } catch (Exception e) {}
}
public void spawnDescendant() {
  try {
    if (org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.countDescendants("Strategy_10") >= 5) return;
    String auxName = "Descendant_Strategy_10_" + new Random().nextInt(1000);
    String src = "package adaptive_generated.staging;public class " + auxName + " implements org.adaptiveoptimization.adaptive_optimization.AdaptiveMetricProvider { public int getScore() { return 5; } public String getRole() { return \"Mutant\"; } public void apply() { System.gc(); } }";
    new org.codehaus.janino.SimpleCompiler().cook(src);
    org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.export(-1, auxName, src, 5);
  } catch (Exception e) {}
}
public void evaluatePeers() {
  try {
    var peers = org.adaptiveoptimization.adaptive_optimization.OptimizationCoreManager.getActiveModules();
    for (var p : peers) {
      if (p != null && p.getScore() < getScore()) spawnDescendant();
    }
  } catch (Exception e) {}
}
public void exportSelf() {
  try {
    mutateLogic();
  } catch (Exception e) {}
}
}

