// Step 2: Change toLowerCase and startsWith to indexOf
public class CalendarUtils {
    public CalendarUtils() {
        Days = new ArrayList<String>(Arrays.asList("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"));
    }

    public int parseDay(String day) {
        int index = Days.indexOf(day);
        if (index != -1) {
            index += 1;
        }
        return index;
    }
}