//Changed variable naming for better understanding
fn invert(mut input: Vec<i32>) -> Vec<i32> {
    let mut vector_to_ret = Vec::with_capacity(input.len());

    for _ in 0..input.len() {
        if let Some(value) = input.pop() {
            vector_to_ret.push(value);
        }
    }
    vector_to_ret
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