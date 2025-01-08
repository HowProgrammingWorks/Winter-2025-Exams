public class Day_test {
    public static void main(String[] args) {
        testParseDay();
    }

    public static void testParseDay() {
        assertEquals(6, Day.parseDay("friday"));
        assertEquals(-1, Day.parseDay("Friday"));
        assertEquals(-1, Day.parseDay("Fri"));
        assertEquals(2, Day.parseDay("monday"));
        assertEquals(-1, Day.parseDay("abc"));

        System.out.println("All tests passed");
    }

    private static void assertEquals(int expected, int actual) {
        if (expected != actual) {
            throw new AssertionError("Test failed: Expected \"" + expected + "\" but got \"" + actual + "\"");        }
    }
}
