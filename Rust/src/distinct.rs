use std::collections::HashSet;

//Returning result directly without creating
// object for storing it
fn distinct(data: &[i32]) -> Vec<i32> {
    let mut seen = HashSet::new();
    data.iter().filter(|&&x| seen.insert(x)).cloned().collect()
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
            let result = distinct(&input).try_into();
            assert_eq!(result, Ok(expected));
        }
    }
}
