import { createHook } from 'node:async_hooks';

const hook = createHook({
    init(asyncId, type, triggerAsyncId) {
        console.log(
            `asyncId=${asyncId}, type=${type}, triggeredBy=${triggerAsyncId}`
        );
    }
});

hook.enable();

setTimeout(() => console.log('Request A'), 100);
setTimeout(() => console.log('Request B'), 200);
setTimeout(() => console.log('Request C'), 300);