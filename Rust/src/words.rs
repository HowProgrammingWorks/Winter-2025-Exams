//Simplified using iterator with count method
//renamed s to input for easier reading
fn count_words(input: &str) -> usize {
    input.split_whitespace().count()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_words() {
        let test_cases = vec![
            ("Hello Marcus Aureluis", 3),
            ("Hello", 1),
            ("", 0),
        ];

        for (input, expected) in test_cases {
            let result = count_words(input);
            assert_eq!(result, expected, "Test failed: expected {:?}, got {:?}", expected, result);
        }
    }
}