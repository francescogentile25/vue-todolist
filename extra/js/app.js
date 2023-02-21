const { createApp } = Vue

createApp({
	data() {
		return {
			tasks: [
                {
                    text: 'Fare la spesa',
                    done: true,
                },
                {
                    text: 'Mandare la consegna alla classe',
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
		// saluta(task){
		// 	console.log('ciao') 
		// 	// return this.done !=this.done
		// 	return !task.done ? 'text-decoration-line-through' : ''
			
		// }
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

// if (done === true){
// 	done= false
// }
// if (done === false){
// 	done =true
// }