import java.util.ArrayList;
import java.util.List;

// Step 2
//
// Remove senseless blocks of code
// Don't mutate incoming parameters
// Add empty line between semantic blocks

public class Filter {
    public static <T> List<T> filter(List<T> list, String type) {
        List<T> filteredList = new ArrayList<>(list);

        for (T obj : list) {
            if (obj.getClass().getSimpleName().equalsIgnoreCase(type)) {
                filteredList.add(obj);
            }
        }

        return filteredList;
    }
}