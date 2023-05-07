const sentence = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, totam.';

const count = Object.values([...sentence].reduce((prev, cur) => {
    if (!prev[cur]) prev[cur] = {letter: cur, count: 1};
    else prev[cur].count += 1;

    return prev;
}, {}))

for (let item of count) {
    let result = 'count of (' + item.letter + '): ' + item.count;
    console.log(result);
}