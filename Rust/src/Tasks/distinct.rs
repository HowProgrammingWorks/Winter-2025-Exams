use std::collections::HashSet;

fn distinct(data: Vec<i32>) -> Vec<i32> {
    let mut seen = HashSet::new();
    let mut result = Vec::new();

    for &item in &data {
        if !seen.contains(&item) {
            seen.insert(item);
            result.push(item);
        }
    }

    result
}
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_distinct() {
        let cases = vec![
            (vec![1, 2, 1, 3, 1, 4], vec![1, 2, 3, 4]),
            (vec![1, 2, -1, 3, 0, 4], vec![1, 2, -1, 3, 0, 4]),
            (vec![1], vec![1]),
            (vec![1, 1, 1], vec![1]),
            (vec![0], vec![0]),
            (vec![0, 0], vec![0]),
            (vec![0, 0, 0], vec![0]),
            (vec![0, 0, 0, 0], vec![0]),
            (vec![], vec![]),
        ];

        for (input, expected) in cases {
            let result = distinct(input);
            assert_eq!(result, expected);
        }

        println!("All tests passed!");
    }
}