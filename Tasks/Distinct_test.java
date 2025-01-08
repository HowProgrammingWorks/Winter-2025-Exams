import java.util.List;

public class Distinct_test {
    public static void main(String[] args) {
        testGetDistinct();
    }

    public static void testGetDistinct() {
        assertEquals(List.of(1, 2, 3, 4), Distinct.deleteDuplicates(List.of(1, 2, 1, 3, 1, 4)));
        assertEquals(List.of(1, 2, -1, 3, 0, 4), Distinct.deleteDuplicates(List.of(1, 2, -1, 3, 0, 4)));
        assertEquals(List.of(1), Distinct.deleteDuplicates(List.of(1)));
        assertEquals(List.of(1), Distinct.deleteDuplicates(List.of(1, 1, 1)));
        assertEquals(List.of(0), Distinct.deleteDuplicates(List.of(0)));
        assertEquals(List.of(0), Distinct.deleteDuplicates(List.of(0, 0)));
        assertEquals(List.of(0), Distinct.deleteDuplicates(List.of(0, 0, 0)));
        assertEquals(List.of(0), Distinct.deleteDuplicates(List.of(0, 0, 0, 0)));
        assertEquals(List.of(), Distinct.deleteDuplicates(List.of()));
        assertEquals(List.of(), Distinct.deleteDuplicates(null));

        System.out.println("All tests passed");
    }

    private static void assertEquals(List<Integer> expected, List<Integer> actual) {
        if (!expected.equals(actual)) {
            throw new AssertionError("Test failed: Expected \"" + expected + "\" but got \"" + actual + "\"");
        }
    }
}
