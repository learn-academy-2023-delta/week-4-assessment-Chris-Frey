# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented programming is a way of coding that allows us to compartmentalize code and think more abstractly about problems. It helps us silo code so that we can make changes to certain parts of the codebase without necessarily affecting the program as a whole.  In functional programing, one change can have a cascading affect on the rest of the program.

Researched answer: The term typically refers to 'class-based' objects. Objects can hold attributes that stay with the object when it is passed around the code. Programs are typically designed by making the objects interact with each other.  

2. What is the difference between a Float and an Integer in Ruby?

Your answer: An integer is a whole number, and a float is a number formatted with a decimal.

Researched answer: There is also `BigDecimal` in ruby, which helps the code reach a high degree of precision, as normal `float` numbers lose precision as the number of decimal places increase.

3. Ruby has an implicit return. What does that mean?

Your answer: It means we do not have to tell ruby to return anything with a key word.  Ruby automatically returns the last executed line in a method.  We *can* tell ruby to explicitly return, but that is usually reserved for instances where we want to short-circuit a method, or we want to make sure we're extra clear with our code.

Researched answer: I misspoke when I said it returns the last executed line in a method.  It actually returns the last 'evaluated' expression. Implicit returns are done automatically in Ruby, while explicit returns are created manually. 

4. What is a block in Ruby?

Your answer: A block is the code between a `do`..`end` statement, or between `{}`. It's where the logic of the code sits.

Researched answer: Blocks are anonymous functions that live inside methods and are invoked when an argument is passed to the block via a method call.

5. How do you extract a single value from a Ruby hash?

Your answer: by calling the has and the key name: `my_hash[:key7]` => returns `value 7`

Researched answer: My research tells me this is the correct way.

## Looking Ahead: Terms for Next Week

1. RSpec: no idea! though I've heard the term before. I think it's some sort of testing suite, but I guess I know what to research for next week

2. Test-driven development: Writing the tests for your code before you write the code that solves the problem.  Helps ensure your code works as intended as you progress through the project.

3. PostgreSQL: I think it's a form of SQL which is a language used for working with databases.

4. CRUD: Create, Read, update, Delete. The basic purposes of of an app. Create data, read it, update if necessary, delete when finished with data.

5. HTTP: hyper-text transfer protocol
