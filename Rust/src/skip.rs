//Improved naming of the variables
fn skip(mut main_vec: Vec<i32>, values_to_remove: Vec<i32>) -> Vec<i32> {
    let mut i = 0;

    while i < main_vec.len() {
        if values_to_remove.contains(&main_vec[i]) {
            main_vec.remove(i); // Remove element at index i
        } else {
            i += 1; // Only increment i if no element was removed
        }
    }

    main_vec // Return the modified vector
}
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_skip() {
        let cases = vec![
            (vec![vec![]], vec![]),
            (vec![vec![-1, 0, 1], vec![0]], vec![-1, 1]),
            (vec![vec![-1, 0, 1], vec![-1, 1]], vec![0]),
            (vec![vec![1, 2, 3, 4, 5], vec![2, 5]], vec![1, 3, 4]),
            (vec![vec![1, 2, 3, 4, 5], vec![7]], vec![1, 2, 3, 4, 5]),
            (vec![vec![1, 2, 3, 4, 5], vec![2]], vec![1, 3, 4, 5]),
            (vec![vec![1, 2, 3, 4, 5]], vec![1, 2, 3, 4, 5]),
            (vec![vec![1, 2, 3, 4, 5], vec![-1, 0]], vec![1, 2, 3, 4, 5]),
        ];
        for (input, expected) in cases {
            let result = skip(input[0].clone(), if input.iter().count() > 1 { input[1].clone() } else { vec![] }); //ternary operator i
            assert_eq!(result, expected, "Test failed: expected {:?}, got {:?}", expected, result);
        }
    }
}