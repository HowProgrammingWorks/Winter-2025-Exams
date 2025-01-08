import java.util.List;

public class Day {
    private static final List<String> DAYS = List.of("sun", "mon", "tue", "wed", "thu", "fri", "sat");

    public static int parseDay(String input) {
        if (input == null || input.isEmpty()) {
            return -1;
        }

        for (String day : DAYS) {
            if (input.startsWith(day)) {
                return DAYS.indexOf(day) + 1;
            }
        }

        return -1;
    }
}
