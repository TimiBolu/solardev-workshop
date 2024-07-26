fn main() {
    // println!("Hello, world!");
    let odd_number = 3;
    // odd_number = 7;
    let mut odd_ish_number = 3;
    // odd_number = "Timi";
    
    let is_gone = false;
    let is_now_gone: bool;
    
    let flt: f32 = 0.5;
    let cc: char = 'q';
    
    let students_age : [u8; 10] = [21,22,23,24,25,26,27,28,29,20];
    let std_age : [f32; 5] = [21.2,22.3,23.4,24.5,25.6];
    // std_age[1] = 23.0;
    
    let mut mut_std_age : [f32; 5] = [21.2,22.3,23.4,24.5,25.6];
    mut_std_age[1] = 23.0;
    
    println!("{:?}", mut_std_age);
    
    let counter: Vec<i8> = vec![1, 2, 3, 5];
    println!("{:?}", counter);
    
    let mut new_vector: Vec<u8> = Vec::new();
    new_vector.push(5);
    new_vector.push(15);
    println!("{:?}", new_vector);
    new_vector.remove(0);
    println!("{:?}", new_vector);
    
    // if mut_std_age[0] > 10 {
    if new_vector[0] > 10 {
        new_vector.push(100);
    } else {
        new_vector.push(5);
    }
    
    println!("{:?}", new_vector);
    fizzBuzz();
}


fn subtract(a: u8, b: u8) -> u8 {
    a - b
}

fn fizzBuzz() {
    for num in 1..101 {
        if num % 5 == 0 && num % 3 == 0 {
            println!("FizzBuzz");
        }else if num % 5 == 0 && num % 3 != 0 {
            println!("Buzz");
        }else if num % 3 == 0 {
            println!("Fizz");
        }else {
            println!("{num}");
        }
    }
}

