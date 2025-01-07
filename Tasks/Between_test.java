public class Between_test {

    public static void main(String[] args) {
        testGetValueBetween();
    }

    public static void testGetValueBetween() {
        assertEquals("username", Between.getValueBetween("Hello <username> and bye!", "<", ">"));
        assertEquals("username", Between.getValueBetween("<username>", "<", ">"));
        assertEquals("", Between.getValueBetween("Hello username and bye!", "<", ">"));

        System.out.println("All tests passed");
    }

    private static void assertEquals(String expected, String actual) {
        if (!expected.equals(actual)) {
            throw new AssertionError("Test failed: Expected \"" + expected + "\" but got \"" + actual + "\"");
        }
    }
}
