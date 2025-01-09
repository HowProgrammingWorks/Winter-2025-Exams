//Improved naming of the variables
//rewrite to iterator using retain method
fn skip(main_vec: Vec<i32>, values_to_remove: Vec<i32>) -> Vec<i32> {
    let mut main_vec_cloned = main_vec.clone();
    main_vec_cloned.retain(|x| !values_to_remove.contains(x));
    main_vec_cloned
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