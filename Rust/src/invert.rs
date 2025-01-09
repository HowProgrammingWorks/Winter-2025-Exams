//1) Changed variable naming for better understanding
//2) Rewrite using iterator(still not optimal beсause of cloned value
//3) Making loop run from the end
//4) Same logic but into iterator for cleaner code
//5) Remove iterator cuz .rev()

fn invert(input: Vec<i32>) -> Vec<i32> {
    let length = input.len();
    let mut result = Vec::with_capacity(length);
    for i in 0..length {
        result.push(input[length - i - 1]);
    }
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
            assert_eq!(invert(input.clone()), expected, "Test failed: expected {:?}, got {:?}", expected, invert(input.clone()));
        }
    }
}