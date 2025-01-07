import java.util.Map;

public class Count_test {
    public static void main(String[] args) {
        testSumNumbers();
    }

    public static void testSumNumbers() {
        assertEquals(8, Count.sumNumbers(Map.of("a", 1, "b", "two", "c", 3, "d", 4)));
        assertEquals(2, Count.sumNumbers(Map.of("a", 1, "b", "two", "c", -3, "d", 4)));
        assertEquals(-1, Count.sumNumbers(Map.of("a", 0, "b", "two", "c", 0, "d", -1)));
        assertEquals(-8, Count.sumNumbers(Map.of("a", -1, "b", "two", "c", -3, "d", -4)));
        assertEquals(0, Count.sumNumbers(Map.of("a", 1, "b", "two", "c", -1, "d", 0)));
        assertEquals(7, Count.sumNumbers(Map.of("a", "1", "b", "two", "c", 3, "d", 4)));

        System.out.println("All tests passed");
    }

    private static void assertEquals(int expected, int actual) {
        if (expected != actual) {
            throw new AssertionError("Test failed: Expected \"" + expected + "\" but got \"" + actual + "\"");
        }
    }
}
