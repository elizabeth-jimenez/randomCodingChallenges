function livingPeople(peoples) {

    let yearCounts = {};
    let mostPop = 0;

    peoples.forEach((p, a) => {
        for(i = p.birth; i <= p.death; i++) {
            if(a === 0) {
                mostPop = p.birth;
            }
            yearCounts[i] = yearCounts[i] ? ++yearCounts[i] : 1;
            if(yearCounts[i] > yearCounts[mostPop]) {
                mostPop = i;
            }
        }
    })

    return mostPop;
}

// list of people with birth and death year
// find the year with the highest population
// 1900 - 2000
// if alive for any portion of the year, they should be included

const people = [
    {
        'birth': 1900,
        'death': 1903
    },
    {
        'birth': 1903,
        'death': 1907
    },
    {
        'birth': 1904,
        'death': 1906
    },
    {
        'birth': 1930,
        'death': 1933
    },
    {
        'birth': 1933,
        'death': 1937
    },
    {
        'birth': 1934,
        'death': 1936
    },
    {
        'birth': 1934,
        'death': 1935
    }
];

console.log(livingPeople(people));