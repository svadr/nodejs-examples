function reverseString(txt: string): string {
    return txt.split('').reverse().join('')
}

console.log(reverseString("hello"))