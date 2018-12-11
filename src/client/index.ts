class HelloClient {
    hello() {
        return "Hello, client!"
    }
}

let hc = new HelloClient();
console.log(hc.hello())