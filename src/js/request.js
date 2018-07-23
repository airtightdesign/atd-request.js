class Request {
    static post(url, data = null, headers = {}) {
        return Request.createRequest('POST', url, data, headers);
    }

    static put(url, data = null, headers = {}) {
        return Request.createRequest('PUT', url, data, headers);
    }

    static delete(url, data = null, headers = {}) {
        return Request.createRequest('DELETE', url, data, headers);
    }

    static get(url, headers = {}) {
        return Request.createRequest('GET', url, headers);
    }

    static createRequest(method = 'GET', url = '', data = null, optionalHeaders = {}) {
        return new Promise(function(resolve, reject) {
            let headers = {
                'Content-type': 'application/json; charset=utf-8',
                'Cache-Control': 'no-cache'
            };

            let req = new XMLHttpRequest();
            req.open(method, url, true);

            Object.keys(headers).forEach((key) => {
                req.setRequestHeader(key, headers[key]);
            });

            req.onreadystatechange = () => {
                try {
                    if(req.readyState === XMLHttpRequest.DONE) {
                        if(req.status === 200) {
                            resolve(req.response);
                        }
                        else {
                            reject(Error(req.statusText));
                        }
                    }
                }
                catch(e) {
                    console.log(`Caught Exception: ${e.description}`);
                }
            }

            if(data) {
                req.send(JSON.stringify(data));
            }
            else {
                req.send();
            }
        });
    }
}
export { Request as default}