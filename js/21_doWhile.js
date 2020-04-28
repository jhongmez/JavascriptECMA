let i = 0;

while(i < 10) {
    if (i === 5) {
        console.log('CINCOOO');
        i++;
        continue;
    }
    console.log(`Numero ${i}`);
    i++;
}