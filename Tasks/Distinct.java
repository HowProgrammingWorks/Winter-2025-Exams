import java.util.ArrayList;
import java.util.List;

public class Distinct {

    public static List<Integer> deleteDuplicates(List<Integer> input) {
        if (input == null || input.isEmpty()) {
            return new ArrayList<>();
        }

        List<Integer> cleanList = new ArrayList<>();

        for (int number: input){
            if (!cleanList.contains(number)){
                cleanList.add(number);
            }
        }

        return cleanList;
    }
}
