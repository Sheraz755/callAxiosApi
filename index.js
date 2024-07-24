document.querySelector("#fetchButton").addEventListener("click", fetchData);

async function fetchData() {
	const callApiData = await axios.get(
		"https://jsonplaceholder.typicode.com/todos/1",
	);
	console.log(callApiData.data);
	displayData(callApiData.data);
}

const displayData = (data) => {
	const displayObjectData = document.querySelector("#result");
	displayObjectData.innerHTML = `
	<h2>Name:${data.title}</h2>
	<h3>status:${data.completed}</h3>
	`;
};

console.log("heelo world");
