# atd-request.js

## Simple XHR wrapper with Promises

### Makes `GET`, `POST`, `UPDATE` and `DELETE` http requests and returns a `Promise`.

### Installation

`npm install --save atd-request`

### Usage

```
import Request from 'atd-request.js';

Request.get(url, headers).then(response => {
    //process response;
});

Request.post(url, data, headers).then(response => {
    //process response;
});

Request.update(url, data, headers).then(response => {
    //process response;
});

Request.delete(url, data, headers).then(response => {
    //process response;
});

```

- `url` is the url for the request.
- `data` is the data sent to the server with the request
- `headers` is an object with a key/value pair for each request header. The keys are the header name and the value is the header content. These headers are sent by default (but can be overridden): 

```
{
    'Content-type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-cache'
}
```

### Deprecated Browsers

This module requires `Promise`, `Object.keys`, `Object.assign`, and `Array.forEach` to function. Older browsers may require these to be polyfilled.