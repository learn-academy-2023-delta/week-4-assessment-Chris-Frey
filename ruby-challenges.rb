# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'
def even_or_odd(num)
  if num.even?
    p "#{num} is even"
  else
    p "#{num} is odd"
  end
end

even_or_odd(reposts1)
even_or_odd(reposts2)
even_or_odd(reposts3)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowels(input)
  p (input.delete "aeiouAEIOU")
end

remove_vowels(beatles_album1)
remove_vowels(beatles_album2)
remove_vowels(beatles_album3)

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'
def palindrome(input)
  if input.downcase == input.downcase.reverse
    p "#{input} is a palindrome"
  else
    p "#{input} is not a palindrome"
  end
end

palindrome(palindrome_test_case1)
palindrome(palindrome_test_case2)
palindrome(palindrome_test_case3)