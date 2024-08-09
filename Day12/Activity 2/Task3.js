// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow. 

function executeFlow() {
    try {
        console.log('Executing try block...');
        throw new Error('An error occurred');
    } 
    catch (error) {
        console.log('Error caught in catch block:', error.message);
    } 
    finally {
        console.log('Executing finally block...');
    }
}

executeFlow();
