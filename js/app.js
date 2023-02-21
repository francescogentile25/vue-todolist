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
			// console.log('add task:', this.inputValue)
            
			const newTask = this.tasks.push({text:this.inputValue, done:false})
			this.tasks.push(newTask)
			this.inputValue = ''
		},
		removeTask(startIndex) {
			console.log(
				'elimino il task con indice:',
				startIndex,
				this.tasks[startIndex]
			)
			this.tasks.splice(startIndex, 1)
		},
	},
}).mount('#app')

