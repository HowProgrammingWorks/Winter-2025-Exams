//Simplified using iterator with counter var(not optimal)
fn count_words(s: &str) -> usize {
    let mut counter = 0;
    s.split_whitespace().for_each(|_| { counter += 1 });
    counter
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
            assert_eq!(result, expected);
        }
    }
}