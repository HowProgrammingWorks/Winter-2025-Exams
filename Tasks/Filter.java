import java.util.List;

// Step 3
//
// Add Java streams
// Add lambda expression

public class Filter {
    public static <T> List<T> filter(List<T> list, String type) {
        return list.stream()
                .filter(obj -> type.equalsIgnoreCase(obj.getClass().getSimpleName()))
                .toList();
    }
}