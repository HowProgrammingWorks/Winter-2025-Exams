//Step 2: Use swap
public class Invert {
    public static List<Integer> invert(List<Integer> array) {
        for (int i = 0; i < array.size() / 2; i++) {
            Collections.swap(array, i, array.size() - i - 1);
        }
        return array;
    }
}