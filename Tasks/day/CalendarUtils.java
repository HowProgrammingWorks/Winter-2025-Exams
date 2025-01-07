// Step 1: add final, change naming of identifiers
public class CalendarUtils {
    public static final String[] Days = {"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"};

    public static int parseDay(String day) {
        for (int i = 0; i < Days.length; i++) {
            if (day.toLowerCase().startsWith(Days[i].toLowerCase())) {
                return i + 1;
            }
        }
        return -1;
    }
}