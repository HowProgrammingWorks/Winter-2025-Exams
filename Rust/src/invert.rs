//1) Changed variable naming for better understanding
//2) Rewrite using iterator(still not optimal beacuse of cloned value
//3) Making loop run from the end
//4) Same logic but into iterator for cleaner code
fn invert(input: Vec<i32>) -> Vec<i32> {
    let mut result = Vec::with_capacity(input.len());
    input.iter().rev().for_each(|&x| result.push(x));
    result
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_invert() {
        let cases = vec![
            (vec![100, 200, 300, 400], vec![400, 300, 200, 100]),
            (vec![100, 0, -100], vec![-100, 0, 100]),
            (vec![0, 1], vec![1, 0]),
            (vec![1], vec![1]),
            (vec![], vec![]),
        ];

        for (input, expected) in cases {
            assert_eq!(invert(input.clone()), expected);
        }
    }
}