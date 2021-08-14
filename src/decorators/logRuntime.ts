export function logRuntime() {
    return function(
        target: any,                       
        propertyKey: string,                
        descriptor: PropertyDescriptor      
    ) {
        const metodoOriginal = descriptor.value;

        descriptor.value = function(...args: Array<any>) {

            const t1 = performance.now();

            const response = metodoOriginal.apply(this, args);

            const t2 = performance.now();

            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1)/1000} segundos`)
            response;
        }; 

        return descriptor;
    }
};