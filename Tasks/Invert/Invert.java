// Step 1: Change naming of identifiers, remove unused parts, magic numbers
public class Invert {
    static public List<Integer> invert(List<Integer> array) {
        List<Integer> reversedArray = new ArrayList<>();

        for (int i = array.size() - 1; i >= 0; i--) {
            reversedArray.add(array.get(i));
        }
        return reversedArray;
    }
}
