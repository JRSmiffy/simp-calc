# software-engineering-formative
A very quick calculator applitcation, with no validation, built for the Formative Assignment
Application can be found [HERE](https://owenflanagan.github.io/software-engineering-formative/index)

# How to use
This is a basic calculator which will take two numbers and perform a selected calculation.
* You can enter two different numbers, one in the first field under "First Number" and one in the second field under "Second Number"
* These should be numbers not letters. So 12 not "twelve".
* Any input other than a combination of 1,2,3,4,5,6,7,8,9,0 will likely result in an error, including leaving a field empty
* You can select the calculation from the dropdown under "Equation". The options are Plus, Minus, Multiply, and Divide. 
* These options correspond to the appropriate calculation.
* Once the inputs have been made and the calculation selected, you can press "Submit".
* A popup should appear, notifying you of the result

An example input:
<img width="1230" alt="Screenshot 2023-03-24 at 12 22 28" src="https://user-images.githubusercontent.com/26112979/227520170-8ce7c790-8847-4032-a3e4-d8116d901f52.png">

and the result:<br>
<img width="461" alt="Screenshot 2023-03-24 at 12 22 34" src="https://user-images.githubusercontent.com/26112979/227520188-31c5a5a9-1cb6-4772-bea5-62ad689b9f96.png">

# Technical Details
The application consists of HTML, CSS, and JavaScript files. 
The HTMl file contains the content needed for the website, such as the Heading and the Form used for the calculator. 
The CSS file contains some basic styling for the document and the HTML elements.
The JavaScript file has one method calculate(), used to read the values from the HTML Form, perform the calculation and return the result.

# Development Process
For this assigment I followed an agile approach known as Kanban. Kanban is selected over Scrum for example as it is a short assignment. There is no need for multiple iterations or to create separate sprints. With Kanban I can split the tasks and work on them in order. 

The first step of this process was to create a task list. This involves devising all of the work that would be required to complete the assignment and separating it into separate deliverable tasks. I could then create a Kanban board and list all the tasks on the board in the form of issues. 

A Kanban board provides a workflow for an individual task. At it's simplest, the board will feature a To Do column (containing all of the tasks that needs to be worked on), an In Progress column (containing the tasks that are currently being worked on), and a Done column (containing the completed tasks). 

Following a Kanban process means an individual can only work on one single task at a time and must move the task through each stage of the workflow until the it is complete (and moved to Done) before starting on a new task.

Kanban Board during development:
<img width="1305" alt="Screenshot 2023-03-24 at 11 59 48" src="https://user-images.githubusercontent.com/26112979/227521091-06005f4a-91e3-4dae-b746-eb91544962c8.png">

Kanban Board at the end of the assignment:
<img width="1231" alt="Screenshot 2023-03-24 at 12 28 18" src="https://user-images.githubusercontent.com/26112979/227521246-f0454cb5-2f30-4495-b013-e62eefd1ca67.png">

With the Kanban board created and the tasks added, I then needed to create a project schedule. A project schedule details the order in which the tasks should be completed and the time required to complete them. This means I can start working on the assigment and complete it in a sensible working order, whilst keeping the time spent to completion at a reasonable length.

# Testing
### Happy Path Functional Testing 
Addition:
Test: <br>
<img width="561" alt="Screenshot 2023-03-24 at 13 20 10" src="https://user-images.githubusercontent.com/26112979/227532075-6620fe56-bddf-4959-947d-02c5bb3855b2.png"><br>
Result: **Success**<br>
<img width="460" alt="Screenshot 2023-03-24 at 13 20 49" src="https://user-images.githubusercontent.com/26112979/227532189-fddca886-aa2a-4700-a953-692e2883b923.png">

Subtraction:
Test: <br>
<img width="669" alt="Screenshot 2023-03-24 at 13 21 37" src="https://user-images.githubusercontent.com/26112979/227532349-f611989a-a9aa-41b4-8c2b-f2aa001dc31f.png"><br>
Result: **Success**<br>
<img width="461" alt="Screenshot 2023-03-24 at 13 21 55" src="https://user-images.githubusercontent.com/26112979/227532425-105f612b-1718-491a-98ef-23980233ee71.png">

Multiplication:
Test: <br>
<img width="671" alt="Screenshot 2023-03-24 at 13 22 17" src="https://user-images.githubusercontent.com/26112979/227532482-c55172d3-77b0-4787-aa00-d1490bb4eab7.png"><br>
Result: **Success**<br>
<img width="460" alt="Screenshot 2023-03-24 at 13 22 27" src="https://user-images.githubusercontent.com/26112979/227532515-db456731-746e-4bff-81c4-85d1b6538a11.png">

Division:
Test: <br>
<img width="579" alt="Screenshot 2023-03-24 at 13 23 05" src="https://user-images.githubusercontent.com/26112979/227532670-7c4c4401-f785-4b3f-8228-3d5b8ea35ed6.png"><br>
Result: **Success**<br>
<img width="462" alt="Screenshot 2023-03-24 at 13 22 50" src="https://user-images.githubusercontent.com/26112979/227532609-c1137b49-4d94-4718-963f-84673667338d.png">

Google Form for User Testing:
https://forms.gle/hxuByeWv8Sa9HrST8
