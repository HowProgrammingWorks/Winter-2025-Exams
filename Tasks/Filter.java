import java.util.ArrayList;
import java.util.List;

// Step 1
//
// Fix formatting
// Improve naming

public class Filter {
    public static <T> List<T> filter(List<T> list, String type) {
        List<Integer> remove = new ArrayList<>();
        for (T obj : list) {
            int index = list.indexOf(obj);
            if (!list.get(index).getClass().getSimpleName().equalsIgnoreCase(type)) {
                remove.add(0, index);
            }
        }
        for (int index : remove) {
            list.remove(index);
        }
        return list;
    }
}