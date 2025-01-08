import java.util.HashMap;
import java.util.Map;

public class Drop_test {

    public static void main(String[] args) {
        testDropKeys();
    }

    public static void testDropKeys() {
        assertEquals(
                Map.of("a", "uno", "c", "tre"),
                Drop.dropKeys(new HashMap<>(Map.of("a", "uno", "b", "due", "c", "tre")), "b", "f")
        );

        assertEquals(
                Map.of("a", "uno", "b", "due", "c", "tre"),
                Drop.dropKeys(new HashMap<>(Map.of("a", "uno", "b", "due", "c", "tre")))
        );

        assertEquals(
                Map.of("a", "uno", "b", "due"),
                Drop.dropKeys(new HashMap<>(Map.of("a", "uno", "b", "due")), "x", "y")
        );

        assertEquals(
                Map.of(),
                Drop.dropKeys(new HashMap<>(Map.of("a", "uno", "b", "due")), "b", "a")
        );

        System.out.println("All tests passed");
    }

    private static void assertEquals(Map<String, String> expected, Map<String, String> actual) {
        if (!expected.equals(actual)) {
            throw new AssertionError("Test failed: Expected \"" + expected + "\" but got \"" + actual + "\"");
        }
    }
}
