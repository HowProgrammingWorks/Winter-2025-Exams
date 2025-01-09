//Adding iterator instead of for in loop
//Renaming s to input for better understanding
pub fn parse_day(input: &str) -> i32 {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    days.iter()
        .position(|&day| input.starts_with(&day.to_lowercase()))
        .map_or(-1, |result| (result + 1) as i32)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse_day() {
        assert_eq!(parse_day("friday"), 6);
        assert_eq!(parse_day("Friday"), -1);
        assert_eq!(parse_day("Fri"), -1);
        assert_eq!(parse_day("monday"), 2);
        assert_eq!(parse_day("abc"), -1);
    }
}
