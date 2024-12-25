pub fn parse_day(s: &str) -> i32 {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    for (i, &day) in days.iter().enumerate() {
        if s.to_lowercase().starts_with(&day.to_lowercase()) {
            return (i + 1) as i32;
        }
    }
    -1
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse_day() {
        assert_eq!(parse_day("mon"), 2);
        assert_eq!(parse_day("Sunday"), 1);
        assert_eq!(parse_day("Wed"), 4);
        assert_eq!(parse_day("fri"), 6);
        assert_eq!(parse_day("unknown"), -1);
    }
}