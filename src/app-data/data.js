const loadData = () => {
    const data = [
        {key:1, done: true, note: "Hi Hello", editState: false},
        {key:2, done: false, note: "No i cant do it now", editState: false},
        {key:3, done: false, note: "The World is so big that you will need a lot of money to complete one round around it. The World is so big that you will need a lot of money to complete one round around it.", editState: false},
        {key:4, done: false, note: "why dont i do it now", editState: false}
    ];

    localStorage.setItem("allTodos", JSON.stringify(data));
}

export default loadData;