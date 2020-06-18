const betterDeveloper = 'vanessa';

function whoIsBetterCallback(callback, errorCallback) {
    return new Promise((resolve, reject) => {

        if (betterDeveloper != 'vanessa' && betterDeveloper != 'gabriel') {
            reject({
                name: 'this is wrong',
                message: `${betterDeveloper} ? really`
            })
        } else {
            resolve({
                name: betterDeveloper,
                message: 'cdfs are the best'
            })
        }
    })
};
//chamando a funcao para chamar a promisse use o them para resolver e cath para reject
whoIsBetterCallback()
    .then(result => {
        console.log(`${result.name} ? yeaa  ${result.message}`);
    }).catch(error => {
        console.log(`${error.name}  ${error.message}`);
    });