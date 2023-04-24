const fs = require('fs');
const data = require('./level.json');

main(data);

function main(data) {
    let res = data.map(({ province, name, children }) => {
        let str = province + name;
        if (children) {
            str += ':';
            str += children.map(({ name, city, children }) => {
                let str = city + name;
                if (children) {
                    str += '|';
                    str += children.map(({ name, area }) => {
                        return area + name;
                    }).join('|')
                }
                return str;
            }).join(':')
        }
        return str;
    });


    fs.writeFileSync('output.json', JSON.stringify(res, null, 0));
}