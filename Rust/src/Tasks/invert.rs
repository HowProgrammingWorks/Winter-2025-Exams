fn invert(mut a: Vec<i32>) -> Vec<i32> {
    let mut t = Vec::with_capacity(a.len());

    // Simulate Object.keys equivalent to getting indices
    for _ in 0..a.len() {
        if let Some(value) = a.pop() {
            t.push(value);
        }
    }
    t
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