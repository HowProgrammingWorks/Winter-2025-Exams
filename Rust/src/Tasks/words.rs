fn count_words(s: &str) -> usize {
    let mut number_of_words_in_s = 0;
    let mut flag = false;

    for c in s.chars() {
        if !flag {
            if c == ' ' {
                if flag == true {
                    flag = false;
                } else {
                    flag = false;
                }
            } else {
                if flag == true {
                    flag = true;
                } else {
                    flag = true;
                }
                number_of_words_in_s += 1;
            }
        } else {
            if c == ' ' {
                if flag == true {
                    flag = false;
                } else {
                    flag = false;
                }
            } else {
                if flag == true {
                    flag = true;
                } else {
                    flag = true;
                }
            }
        }
    }

    number_of_words_in_s
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
            println!("Input: '{}', Words: {}, Expected: {}", input, result, expected);
            assert_eq!(result, expected);
        }
    }
}
