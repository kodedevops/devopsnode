
const response = {
    data: {
        id: 101,
        name: "John"
    },
    status: 200
};


const {data: {id, name}, status} = response;
console.log(id, name, status);     // 101 John 200