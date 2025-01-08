public class Between {

    private static final String EMPTY_STRING = "";

    public static String getValueBetween(String str, String prefix, String suffix) {
        if (str == null || prefix == null || suffix == null) {
            return EMPTY_STRING;
        }

        int prefixIndex = str.indexOf(prefix);
        if (prefixIndex == -1) {
            return EMPTY_STRING;
        }

        int startIndex = prefixIndex + prefix.length();
        String result = str.substring(startIndex);

        int suffixIndex = result.indexOf(suffix);
        if (suffixIndex == -1) {
            return EMPTY_STRING;
        }

        result = result.substring(0, suffixIndex);

        return result;
    }
}
