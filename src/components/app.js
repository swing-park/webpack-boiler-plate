// components entry file

class App {
	constructor({ $target }) {
		this.components = null;
		this.setState($target)
	}

	setState($target) {
		this.render($target)
	}

	render($target) {
		$target.innerHTML = "Hello world !"
		this.components = {};
	}
}

export default App