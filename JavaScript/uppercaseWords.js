const uppercaseWords = (str) => str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase())
uppercaseWords('hello world'); // 'Hello World'