fn duplicate(value: &str, n: i32) -> Vec<String> {
    if n <= 0 {
        Vec::new()
    } else {
        let mut res = Vec::with_capacity(n as usize);
        for _ in 0..n {
            res.push(value.to_string());
        }
        res
    }
}
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_duplicate() {
        // Test cases to check the function
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
        }
    }
}