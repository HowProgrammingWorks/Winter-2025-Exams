import java.util.ArrayList;
import java.util.List;

// Step 0
//
// Convert into java as close as possible

public class Filter {
    public static <T> List<T> filter(List<T> T, String t) {
        List<Integer> remove = new ArrayList<>();
        for (Object C : T) {
            int x = T.indexOf(C);
            if (!T.get(x).getClass().getSimpleName().equalsIgnoreCase(t)) {
                remove.add(0, x);
            }
        }
        for (int x : remove) {
            T.remove(x);
        }
        return T;
    }
}