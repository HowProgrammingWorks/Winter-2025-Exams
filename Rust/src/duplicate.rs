//initializing each element of a vec with a given value
fn duplicate(value: &str, n: i32) -> Vec<String> {
    if n <= 0 {
        vec![]
    } else {
        vec![value.to_string(); n as usize]
    }
}
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_duplicate() {
        let cases = vec![
            (("abc", 5), vec!["abc", "abc", "abc", "abc", "abc"]),
            (("abc", 1), vec!["abc"]),
            (("abc", -1), vec![]),
            (("abc", 0), vec![]),
            (("", 0), vec![]),
        ];

        for (input, expected) in cases {
            let (value, n) = input;
            let result = duplicate(value, n);
            assert_eq!(result, expected, "Test failed for input: {:?}, expected: {:?}, got: {:?}", input, expected, result);
        }
    }
}