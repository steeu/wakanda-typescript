/**
 * return application health page
 * @param request
 * @param response
 */
let testHttpHandler = (request, response): string => {
    
    response.headers['Content-Type'] = 'application/json';
    
    let mytest: string = 'hello world';
    
    return mytest.toUpperCase();
};
