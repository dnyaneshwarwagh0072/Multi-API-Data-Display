document.getElementById('fetchDataBtn').addEventListener('click', () => {
    promiseAPI1()
        .then((data1) => {
            displayData(data1, 0);
            return promiseAPI2();
        })
        .then((data2) => {
            displayData(data2, 1);
            return promiseAPI3();
        })
        .then((data3) => {
            displayData(data3, 2);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
});

function promiseAPI1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/posts')
                .then((response) => response.json())
                .then((data) => resolve(data.posts))
                .catch((error) => reject(error));
        }, 1000);
    });
}

function promiseAPI2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/products')
                .then((response) => response.json())
                .then((data) => resolve(data.products))
                .catch((error) => reject(error));
        }, 2000);
    });
}

function promiseAPI3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/todos')
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    resolve(data.todos)
                }
                )
                .catch((error) => reject(error));
        }, 3000);
    });
}

function displayData(data, column) {
    const table = document.getElementById('dataTable');
    data.forEach((item, index) => {
        let row;
        if (table.rows[index + 1]) {
            row = table.rows[index + 1];
        } else {
            row = table.insertRow();
        }
        const cell = row.insertCell(column);
        cell.innerText = JSON.stringify(item);
    });
}
