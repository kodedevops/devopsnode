import { AsyncLocalStorage } from 'node:async_hooks';

const storage = new AsyncLocalStorage();

function handleRequest(requestId) {

    storage.run({ requestId }, async () => {

        await someAsyncOperation();

        console.log(
            'Request ID:',
            storage.getStore().requestId
        );
    });
}

async function someAsyncOperation() {
    console.log('Performing some async operation...');
    // Simulate an asynchronous operation
    setTimeout(1000)
    console.log('Async operation completed.');
    return 101;
}

handleRequest(1);