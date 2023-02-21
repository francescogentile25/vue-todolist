const { createApp } = Vue

createApp({
	data() {
		return {
			tasks: [
                {
                    text: 'Fare un carosello',
                    done: true,
                },
                {
                    text: 'Fare un carosello',
                    done: false,
                },
                {
                    text:'Conquistare il mondo',
                    done: true,
                },
                {
                    text: 'Fare push',
                    done: true,
                },
			],
			inputValue: '',
		}
	},
	methods: {
		addTask() {
			this.tasks.push({text:this.inputValue, done:false})
			this.inputValue = ''
		},
		removeTask(startIndex) {
			this.tasks.splice(startIndex, 1)
		},
		toggle(task) {
			switch (task.done) {
			case true:
				task.done = false;
				break;
			case false:
				task.done = true;
				break;
			default:
				break;
			}
		},
	},
}).mount('#app')
